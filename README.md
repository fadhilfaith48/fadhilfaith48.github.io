# Galeri Proyek Siswa

Situs pameran karya siswa berbasis web statis dengan gaya editorial "galeri seni" — berjalan langsung di browser, tanpa build step dan tanpa server aplikasi. Data pengunjung disimpan di `localStorage`, sementara autentikasi memakai Supabase Auth (dengan fallback lokal). Siap di-hosting gratis di GitHub Pages.

Demo: **https://fadhilfaith48.github.io** · Repo: **github.com/fadhilfaith48/fadhilfaith48.github.io**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Arsitektur](#arsitektur)
- [Menjalankan Secara Lokal](#menjalankan-secara-lokal)
- [Setup Supabase](#setup-supabase)
- [Struktur Folder](#struktur-folder)
- [Halaman & Peran](#halaman--peran)
- [State & Local Storage](#state--local-storage)
- [Data Contoh](#data-contoh)
- [Keamanan & Privasi](#keamanan--privasi)
- [Pengujian Manual](#pengujian-manual)
- [Deployment](#deployment)
- [Batasan & Catatan](#batasan--catatan)
- [Lisensi](#lisensi)

## Tentang Proyek

Galeri Proyek Siswa adalah situs pameran karya pelajar — dari robotika, fisika terapan, informatika, hingga seni rupa — yang dikemas seperti katalog galeri seni: tipografi editorial, nomor katalog, dan tata letak masonry.

Pendekatan utamanya:

- **Murni statis** — delapan halaman HTML, satu file CSS, dan satu file JavaScript. Tidak ada framework, bundler, atau proses build.
- **Tanpa server aplikasi** — semua logika render dan interaksi berjalan di browser.
- **Data pengunjung di perangkat** — unggahan, komentar, suka, favorit, dan apresiasi disimpan di `localStorage`.
- **Autentikasi Supabase** — login, daftar, sesi, dan logout memakai Supabase Auth melalui CDN, dengan fallback otomatis ke `localStorage` bila Supabase tidak tersedia.
- **Siap GitHub Pages** — cukup push ke branch `main` dan aktifkan Pages dari root repo.

Skema tabel dan policy Storage Supabase sudah disiapkan di folder `supabase/`, tetapi **saat ini baru fitur Auth yang terhubung**. Data karya, komentar, suka, favorit, dan apresiasi masih tersimpan lokal di browser.

## Fitur Utama

### Halaman & navigasi

- **Beranda** — hero, statistik langsung (jumlah karya, kategori, total apresiasi), marquee kategori, dan 3 karya unggulan berdasarkan jumlah suka.
- **Galeri** — katalog semua karya dengan tata letak masonry dan nomor katalog.
- **Detail karya** — media gambar/PDF, deskripsi, like, komentar, unduh file, dan hapus karya milik sendiri.
- **Profil siswa** — portofolio per siswa, foto profil (zoom), kontak, bagikan, unduh CV, favorit, dan apresiasi.
- **Favorit** — daftar siswa favorit beserta karya mereka, dengan pencarian.
- **Tambah Karya** — form unggah yang dikunci untuk anggota.
- **Login** — masuk, daftar akun, dan lupa password (demo) dalam satu halaman.
- **404** — halaman tidak ditemukan yang tetap sesuai gaya situs.
- Navbar responsif dengan menu burger, penanda halaman aktif, chip sesi, dan tombol keluar.

### Galeri & pencarian

- Pencarian berdasarkan judul dan nama siswa.
- Filter kategori (Fisika, Informatika, Seni Rupa, Sejarah, B. Indonesia, Lainnya) dan kelas (X, XI, XII).
- Empty state ketika tidak ada hasil.
- Dukungan file gambar (JPG, PNG, GIF, WebP) dan PDF.

### Interaksi pengunjung

- **Suka** — dihitung per pengunjung memakai ID anonim, sehingga like tidak bisa di-spam dari perangkat yang sama.
- **Komentar** — tulis komentar sebagai tamu atau anggota, hapus komentar milik sendiri, dan waktu relatif ("baru saja", "3 jam lalu").
- **Favorit siswa** — simpan siswa favorit; tampil di halaman Favorit lengkap dengan karya mereka.
- **Apresiasi** — satu kali per pengunjung per siswa, dengan penghitung total.
- **Bagikan profil** — Web Share API bila tersedia, atau salin tautan ke clipboard.
- **Kontak siswa** — modal berisi surel dan WhatsApp dengan tombol salin.
- **Unduh CV** — membuat berkas `.txt` berisi profil dan karya terpilih siswa.

### Karya & akun

- Karya contoh bawaan (8 karya) digabung dengan karya unggahan pengguna.
- Unggah berkas dari perangkat (maks ±2,5 MB, disimpan sebagai data URL) **atau** tempel URL gambar.
- Nama dan kelas terisi otomatis dari sesi saat mengunggah.
- Halaman unggah dijaga: pengunjung yang belum masuk diarahkan ke login lalu kembali ke form.
- Hapus karya hanya tersedia untuk pemilik karya yang diunggah dari perangkat tersebut.
- Login/daftar via Supabase Auth; bila gagal atau CDN diblokir, sistem memakai akun lokal sebagai fallback.
- Lupa password bersifat simulasi dan hanya berlaku untuk akun fallback lokal.

### UX & aksesibilitas

- Desain responsif dari layar kecil hingga desktop; menu dan filter menyesuaikan.
- Gaya editorial dengan font Fraunces, Archivo, dan IBM Plex Mono.
- Animasi reveal saat scroll dan menghormati `prefers-reduced-motion`.
- Tombol dengan label ARIA, modal yang bisa ditutup lewat tombol Escape/backdrop, skip link, dan toast umpan balik.

## Tech Stack

| Lapisan | Teknologi | Keterangan |
|---|---|---|
| Markup | HTML5 | Delapan halaman statis, meta description per halaman |
| Styling | CSS3 murni | Custom properties, grid/flex, masonry via CSS columns, media queries — tanpa framework |
| Logika | JavaScript ES6+ | Vanilla JS, tanpa framework atau bundler |
| Autentikasi | Supabase Auth | `@supabase/supabase-js@2` via jsDelivr CDN + fallback `localStorage` |
| Database | Supabase Postgres + RLS | Skema & policy tersedia di `supabase/schema.sql` (belum dipakai aplikasi) |
| Penyimpanan berkas | Supabase Storage | Bucket `karya` + policy di `supabase/storage.sql` (belum dipakai aplikasi) |
| Font | Google Fonts | Fraunces, Archivo, IBM Plex Mono |
| Hosting | GitHub Pages | Branch `main`, folder root |
| Lisensi | MIT | Lihat [LICENSE](LICENSE) |

## Arsitektur

```
┌──────────────────────────────────────────────┐
│                Browser (Client)              │
│                                              │
│  HTML + CSS + scripts/main.js                │
│    ├─ localStorage  (karya, suka, komentar,  │
│    │                 favorit, sesi fallback) │
│    └─ supabase-js (CDN)  ────────────────┐   │
└───────────────┬──────────────────────────┼───┘
                │ file statis              │ HTTPS
                ▼                          ▼
┌──────────────────────────────┐  ┌──────────────────┐
│  GitHub Pages (main / root)  │  │  Supabase Auth   │
│  index.html, galeri.html, …  │  │  (login/daftar)  │
└──────────────────────────────┘  └──────────────────┘
```

Prinsip utama:

- **Tanpa build** — berkas yang di-push adalah berkas yang dijalankan browser.
- **Tanpa backend sendiri** — tidak ada Node.js, API route, atau database aplikasi yang perlu dijaga tetap hidup.
- **Auth terpusat di Supabase** — kredensial pengguna tidak disimpan di repo; keamanan baris data dijaga RLS saat tabel mulai dipakai.
- **Local-first** — semua data interaksi tetap berfungsi meskipun Supabase/CDN tidak dapat diakses.

## Menjalankan Secara Lokal

Tidak ada dependensi yang perlu di-install. Cukup jalankan server statis dari folder proyek:

```bash
# Opsi 1 — Python (biasanya sudah tersedia)
python -m http.server 8000

# Opsi 2 — Node.js
npx serve .
```

Lalu buka `http://localhost:8000`.

> **Penting:** jangan membuka `index.html` lewat `file://`. Fitur Supabase Auth, clipboard, dan sebagian perilaku browser membutuhkan origin HTTP/HTTPS. Di VS Code Anda juga bisa memakai ekstensi **Live Server**.

## Setup Supabase

Konfigurasi Supabase sudah terisi di `scripts/supabase.js`. Untuk memakai proyek Supabase milik sendiri:

1. Buat proyek baru di [supabase.com](https://supabase.com).
2. Buka **SQL Editor**, tempel seluruh isi `supabase/schema.sql`, lalu **Run**. Skrip ini membuat tabel `profiles`, `karya`, `komentar`, `suka`, `favorit`, `apresiasi`, trigger profil otomatis, serta policy RLS — dan aman dijalankan berulang.
3. Buka **Storage**, buat bucket baru bernama `karya` dengan akses **Public**.
4. Kembali ke **SQL Editor**, jalankan `supabase/storage.sql` untuk policy baca/unggah/ubah/hapus.
5. Buka **Authentication → URL Configuration**, isi **Site URL** dengan `https://fadhilfaith48.github.io` dan tambahkan `http://localhost:8000` ke **Redirect URLs**.
6. Perbarui `SUPABASE_URL` dan `SUPABASE_KEY` di `scripts/supabase.js` dengan **Project URL** dan **publishable/anon key** dari dashboard.

Catatan:

- Key `sb_publishable_...` (atau `anon`) memang dirancang untuk sisi klien; keamanan dijaga oleh RLS. **Jangan pernah** menaruh `service_role`/secret key di repo.
- Untuk demo, nonaktifkan **Confirm email** di pengaturan Auth agar pengguna bisa langsung masuk setelah mendaftar.
- Bila CDN Supabase gagal dimuat, halaman tetap berjalan dan login beralih ke mode lokal (`localStorage`).

## Struktur Folder

```
.
├── index.html              # Beranda: hero, statistik, karya unggulan
├── galeri.html             # Katalog semua karya + pencarian & filter
├── detail-karya.html       # Detail karya, like, komentar, hapus
├── profile.html            # Profil siswa + portofolio & aksi
├── favorit.html            # Daftar siswa favorit beserta karya
├── upload.html             # Form unggah karya (wajib login)
├── login.html              # Masuk / daftar / lupa password
├── 404.html                # Halaman tidak ditemukan
├── styles/
│   └── custom.css          # Seluruh desain editorial (tanpa framework)
├── scripts/
│   ├── main.js             # Data, render, interaksi, sesi, localStorage
│   └── supabase.js         # Inisialisasi klien Supabase
├── assets/
│   ├── images/             # Logo sekolah & foto profil default
│   └── uploads/            # 26 berkas contoh karya (gambar & PDF)
├── supabase/
│   ├── schema.sql          # Tabel + trigger + policy RLS
│   └── storage.sql         # Policy bucket Storage `karya`
├── README.md
└── LICENSE
```

## Halaman & Peran

| Halaman | URL | Fungsi utama |
|---|---|---|
| Beranda | `index.html` | Statistik live, karya unggulan, marquee kategori |
| Galeri | `galeri.html` | Semua karya, pencarian judul/siswa, filter kategori & kelas |
| Detail karya | `detail-karya.html?id=<id>` | Media, deskripsi, like, komentar, unduh, hapus milik sendiri |
| Profil | `profile.html?siswa=<nama>` | Portofolio siswa, favorit, apresiasi, kontak, CV |
| Favorit | `favorit.html` | Siswa favorit + karya mereka + pencarian |
| Tambah Karya | `upload.html` | Form unggah; dialihkan ke login bila belum masuk |
| Login | `login.html?next=...&panel=register` | Login, daftar, lupa password, redirect tujuan |
| 404 | `404.html` | Halaman error statis |

## State & Local Storage

Semua data pengunjung tersimpan di browser. Tidak ada sinkronisasi antar perangkat.

| Key | Isi |
|---|---|
| `galeriSesi` | Sesi login aktif (fallback lokal) |
| `galeriAkun` | Daftar akun fallback (`nama`, `email`, `password`, `kelas`) |
| `galeriKarya` | Karya hasil unggahan pengguna |
| `galeriKomentar` | Komentar per ID karya |
| `galeriLikes` | Selisih jumlah suka per karya |
| `galeriLikesSet` | Penanda karya yang sudah disukai per pengunjung |
| `galeriFavorit` | Daftar nama siswa favorit |
| `galeriApresiasi` | Jumlah apresiasi per siswa |
| `galeriApresiasiSet` | Penanda apresiasi per pengunjung |
| `galeriAnon` | ID anonim pengunjung perangkat |
| `galeriRedirect` | Halaman tujuan setelah login |

Konsekuensi: menghapus data situs di browser akan menghilangkan unggahan, komentar, suka, favorit, dan sesi lokal pada perangkat tersebut.

## Data Contoh

Repo menyertakan 8 karya contoh dari 4 siswa, ditambah 26 berkas di `assets/uploads/`:

| Siswa | Kelas | Jumlah karya |
|---|---|---|
| Andi Wijaya | XII IPA 1 | 2 |
| Budi Santoso | XI IPS 2 | 2 |
| Citra Dewi | X Bahasa 3 | 1 |
| Fadhil Faith | XI RPL 1 | 3 |

Kategori yang tersedia: **Fisika**, **Informatika**, **Seni Rupa**, **Sejarah**, **B. Indonesia**, dan **Lainnya**. Data contoh digabung dengan karya unggahan pengguna saat halaman dirender.

## Keamanan & Privasi

- Hanya **publishable key** Supabase yang ada di repo; secret key tidak boleh ditambahkan.
- RLS di `schema.sql` membatasi tulis/ubah/hapus sesuai pemilik data ketika tabel mulai digunakan.
- Bucket `karya` bersifat publik untuk baca, sedangkan unggah/ubah/hapus dibatasi untuk pengguna terautentikasi dan pemilik berkas.
- Semua input yang dirender di HTML di-escape untuk mencegah injeksi markup.
- **Catatan demo:** akun fallback menyimpan kata sandi dalam bentuk teks biasa di `localStorage`. Ini hanya untuk keperluan demonstrasi sekolah, bukan untuk produksi.

## Pengujian Manual

Belum ada test otomatis. Jalankan server lokal, lalu periksa alur berikut:

| Skenario | Yang diharapkan |
|---|---|
| Buka Beranda | Statistik dan 3 karya unggulan terisi |
| Cari & filter di Galeri | Hasil menyesuaikan kata kunci, kategori, dan kelas |
| Buka detail karya | Media tampil, like bertambah/berkurang, komentar bisa dikirim |
| Hapus komentar sendiri | Hanya komentar milik pengunjung tersebut yang bisa dihapus |
| Favoritkan siswa | Siswa muncul di halaman Favorit beserta karyanya |
| Login lalu buka Tambah Karya | Form terbuka dan nama/kelas terisi otomatis |
| Unggah gambar/PDF | Karya muncul di Galeri dan detailnya dapat dibuka |
| Unggah melebihi ±2,5 MB | Muncul peringatan ukuran berkas |
| Unduh CV & bagikan profil | Berkas `.txt` terunduh / tautan tersalin |
| Buka di lebar 375px | Navigasi, filter, dan kartu tetap rapi tanpa scroll horizontal |

## Deployment

Situs di-deploy sebagai **GitHub Pages user site** dari branch `main`:

1. Push perubahan ke branch `main` pada repo `fadhilfaith48.github.io`.
2. Buka **Settings → Pages**.
3. Pilih **Source: Deploy from a branch**, branch `main`, folder **/ (root)**.
4. Simpan; situs tersedia di **https://fadhilfaith48.github.io**.
5. Pastikan **Site URL** Supabase sudah memakai domain tersebut dan `http://localhost:8000` ada di Redirect URLs.

Karena tidak ada proses build, setiap perubahan langsung diterbitkan setelah GitHub Pages selesai memproses push (biasanya kurang dari satu menit).

## Batasan & Catatan

- Data pengunjung (unggahan, suka, komentar, favorit, apresiasi, akun fallback) **per perangkat/browser** dan tidak tersinkron antar device.
- Integrasi Supabase baru mencakup **Auth**. Tabel dan policy sudah disiapkan, tetapi aplikasi belum membaca/menulis ke tabel tersebut.
- Unggahan berkas disimpan sebagai **data URL** di `localStorage`, bukan di Supabase Storage — ukurannya dibatasi ±2,5 MB dan memenuhi kuota browser.
- "Lupa password", kirim kontak, dan sebagian aksi lain bersifat **simulasi** untuk demo sekolah.
- Tidak ada sistem build, lint, atau test otomatis; verifikasi dilakukan manual di browser.
- Ini proyek demo pelajar, bukan sistem produksi.

## Lisensi

Dirilis di bawah [MIT License](LICENSE) © 2026 Fadhil Faith.
