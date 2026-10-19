// Service Worker for Memory Match PWA
const CACHE_NAME = 'memory-match-pwa-v1.2.0';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './memory_match.html',
  './manifest.json',
  './tailwind.cdn.js',
  './favicon.ico',
  './icons/apple-touch-icon.png',
  './icons/favicon-16x16.png',
  './icons/favicon-32x32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/screenshot-desktop.png',
  './icons/screenshot-mobile.png',
  'https://cdn.tailwindcss.com'
];

// 1. INSTALL: Pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Precache local and cdn assets safely with individual catch to prevent 1 failure from breaking install
      for (const url of PRECACHE_ASSETS) {
        try {
          await cache.add(url);
        } catch (err) {
          console.warn(`[PWA SW] Precache failed for ${url}:`, err);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// 2. ACTIVATE: Clean up older caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log(`[PWA SW] Removing outdated cache: ${name}`);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH: Smart caching strategy
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Ignore chrome extensions or unsupported schemes
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // Navigation requests (HTML pages) -> Network First with Cache Fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(async () => {
          // Offline fallback
          const cachedResponse = await caches.match(request);
          if (cachedResponse) return cachedResponse;
          return (await caches.match('./index.html')) || (await caches.match('./memory_match.html'));
        })
    );
    return;
  }

  // Static Assets (Scripts, Images, Styles) -> Cache First with Network Fallback & update
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to update cache for next time (Stale-While-Revalidate)
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
            }
          })
          .catch(() => {
            /* Offline, ignored */
          });
        return cachedResponse;
      }

      // If not in cache, fetch from network and put in cache
      return fetch(request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return networkResponse;
        })
        .catch(async () => {
          // Fallback for image requests if offline
          if (request.destination === 'image') {
            const fallbackIcon = await caches.match('./icons/icon-192.png');
            if (fallbackIcon) return fallbackIcon;
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
    })
  );
});

// 4. MESSAGE: Allow skip waiting triggers
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
