# 🧠 Memory Match - PWA Game (Ultimate Edition)

Game asah otak kartu memori interaktif dengan mode level berjenjang, mode tantangan, mode kustom bebas (sandbox), power-ups, sistem pencapaian, kustomisasi skin kartu, musik latar sintetis prosedural, dan efek suara dinamis. Siap dimainkan langsung di browser serta dapat dipasang sebagai **Progressive Web App (PWA)** di Desktop dan Mobile (Android & iOS) dengan dukungan offline 100%.

---

## ✨ Fitur-Fitur Menarik

### 🎮 Gameplay & Mode Permainan
- 🏆 **Mode Level**: 5 tingkat kesulitan bertahap dari pemula hingga Grandmaster.
- 🔥 **Mode Challenge**: Tantangan unik bertekanan tinggi (*Time Rush 15s*, *Flash Peek 3s*, *Batas Langkah*, dan *Penalti Waktu*).
- 🎲 **Mode Bebas (Custom Sandbox)**: Bebas memilih ukuran kotak (2x3 hingga 4x5), 5 pilihan tema gambar, dan batas waktu santai/terbatas.
- ⚡ **Booster & Power-Up System**:
  - 👁️ **Intip (Peek)**: Membuka semua kartu selama 1.2 detik untuk menghafal posisi.
  - 🪄 **Hint**: Menemukan dan memberikan tanda pada 1 pasang kartu yang cocok.
  - ⏱️ **Bekukan Waktu (Freeze)**: Menghentikan hitungan mundur waktu selama 5 detik dengan efek beku.

### 🎨 Visual & Personalisasi
- 🌙 **Dark Mode & Light Mode**: Dukungan mode gelap (*OLED-friendly dark glassmorphism*) dan mode terang segar dengan transisi mulus.
- 🎨 **Skin Kartu**: Pilihan gaya sampul kartu:
  - 🔵 *Sapphire Neon* (Default)
  - 🟣 *Cyberpunk Neon*
  - 🟢 *Emerald Jade*
  - 🟠 *Sunset Crimson*
  - ⚫ *Obsidian Gold*
- 🖼️ **5 Kategori Tema Emoji**: Kuliner (🍕), Luar Angkasa (🚀), Hewan Lucu (🐾), Video Game (🎮), dan Alam & Bunga (🌸).
- 🎊 **Canvas Confetti Particle**: Letupan kembang api partikel konfeti saat menang dan kombo x3 ke atas.

### 🎵 Audio & Haptic Sensor
- 🎶 **Procedural Lofi Ambient BGM**: Musik latar relaksasi yang disintesis secara prosedural langsung via Web Audio API tanpa perlu mendownload file mp3 eksternal.
- 🔊 **Efek Suara Sintetis Dinamis**: Suara flip, match (dengan nada kombo bertingkat), mismatch, penalti, menang, kalah, dan freeze.
- 📳 **Haptic Feedback**: Getaran responsif saat kartu disentuh, cocok, salah, atau menang (pada perangkat smartphone yang mendukung).

### 🏆 Retensi & Sosial
- 🎖️ **Sistem Pencapaian (Achievements & Trofi)**: 7 medali unik untuk dibuka (*Langkah Pertama*, *Combo Master*, *Kilat Memori*, *Pikiran Tajam*, *Grandmaster*, *Penakluk Tantangan*, *Taktisi Cerdas*).
- ⭐ **Rating Bintang (1 - 3 Stars)**: Penilaian performa akhir ronde berdasarkan akurasi dan sisa waktu.
- 📤 **Fitur Bagikan Skor (Web Share API)**: Salin atau bagikan skor dan bintang ke WhatsApp/media sosial hanya dengan satu klik.
- 📊 **Papan Rekor Lokal**: Skor tertinggi setiap mode tersimpan aman di LocalStorage.

### 📱 Kemampuan PWA (Progressive Web App)
- 📲 **Dapat Diinstal (Installable)**: Mendukung instalasi native di Android, iOS, Windows, macOS, dan Linux.
- 📶 **100% Offline-Ready**: Dilengkapi Service Worker cerdas untuk meng-cache seluruh aplikasi.
- 🍎 **Panduan Khusus iOS Safari**: Modal interaktif langkah demi langkah untuk pengguna iPhone/iPad.

---

## 🚀 Struktur Berkas

```
.
├── index.html          # Halaman utama game (PWA ready)
├── memory_match.html   # File game utama
├── manifest.json       # Konfigurasi PWA Web App Manifest
├── sw.js               # Service Worker untuk caching offline & update otomatis
├── tailwind.cdn.js     # Pustaka Tailwind lokal untuk mode offline
├── vercel.json         # Konfigurasi deployment & header PWA optimal untuk Vercel
├── favicon.ico         # Favicon browser
└── icons/              # Ikon resolusi tinggi & screenshots (PWA compliant)
```

---

## 🛠️ Menjalankan Secara Lokal

```bash
# Menggunakan Python
python -m http.server 8080

# Atau menggunakan Node.js
npx serve .
```

Buka `http://localhost:8080` di browser Anda.

---

## 🌐 Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan impor repository ini.
2. Klik **Deploy** (langsung selesai dalam hitungan detik tanpa build step).
3. Buka tautan HTTPS yang dihasilkan di smartphone atau desktop untuk menginstal game ini!
