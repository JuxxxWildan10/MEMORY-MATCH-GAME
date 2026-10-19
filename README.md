# 🧠 Memory Match - PWA Game

Game asah otak kartu memori interaktif dengan mode level berjenjang, tantangan waktu (*Time Rush*), sistem skor kombo, dan efek suara synthesizer dinamis. Siap dimainkan langsung di browser serta dapat dipasang sebagai **Progressive Web App (PWA)** di Desktop dan Mobile (Android & iOS) dengan dukungan offline penuh.

---

## ✨ Fitur Utama

- 📱 **Progressive Web App (PWA)**: Dapat diinstal langsung di Android, iOS, Windows, macOS, dan Linux layaknya aplikasi native.
- 📶 **100% Offline-Ready**: Didukung Service Worker pintar untuk meng-cache seluruh aset permainan sehingga tetap bisa dimainkan tanpa koneksi internet.
- 🏆 **Mode Level**: 5 tingkat kesulitan dengan variasi jumlah kartu, tema gambar, batas langkah, dan target skor.
- 🔥 **Mode Challenge**: Mode khusus seperti *Time Rush*, *Memory Master*, *One Mistake Limit*, dan *Blind Flip*.
- 🎵 **Web Audio API**: Efek suara sintetis prosedural untuk flip kartu, kecocokan, combo, kemenangan, dan kekalahan tanpa file audio eksternal.
- 📊 **Papan Rekor Lokal**: Catatan skor tertinggi dan statistik tersimpan otomatis di browser menggunakan LocalStorage.
- 🎨 **Desain Modern & Responsif**: Animasi kartu 3D flip realistis, gradien dinamis, dan tampilan yang pas di semua ukuran layar smartphone maupun layar PC.

---

## 🚀 Struktur Berkas

```
.
├── index.html          # Halaman utama game
├── memory_match.html   # Berkas game mandiri
├── manifest.json       # Konfigurasi PWA Web App Manifest
├── sw.js               # Service Worker untuk caching offline & update
├── tailwind.cdn.js     # Pustaka Tailwind lokal untuk mode offline
├── vercel.json         # Konfigurasi deployment & header PWA untuk Vercel
├── favicon.ico         # Favicon browser
└── icons/              # Ikon PWA (16x16 hingga 512x512, maskable, & screenshot)
```

---

## 🛠️ Menjalankan Secara Lokal

Untuk menjalankan game secara lokal:

```bash
# Menggunakan Python
python -m http.server 8080

# Atau menggunakan Node.js
npx serve .
```

Buka `http://localhost:8080` di browser Anda.

---

## 🌐 Deploy ke Vercel

Proyek ini telah dikonfigurasi dengan file `vercel.json` untuk header PWA yang optimal.
1. Impor repository ini di [vercel.com](https://vercel.com).
2. Klik **Deploy**.
3. Akses URL HTTPS yang dihasilkan di perangkat mobile atau desktop Anda untuk langsung menginstalnya!
