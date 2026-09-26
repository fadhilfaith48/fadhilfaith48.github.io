# Galeri Proyek Siswa

Situs pameran karya siswa berbasis web statis dengan gaya editorial "galeri seni" — dijalankan sepenuhnya di browser (localStorage), tanpa server, siap di-hosting di GitHub Pages.

## Fitur

- **Halaman**: Beranda, Galeri, Detail Karya, Profil, Favorit, Tambah Karya, Login, 404.
- **Karya**: data contoh siswa + unggahan pengguna (gambar/PDF dari perangkat, atau URL gambar).
- **Interaksi pengunjung**:
  - Suka (like) karya, tercatat per pengunjung.
  - Komentar & apresiasi (tulis, hapus komentar milik sendiri).
  - Bagikan profil, unduh CV (.txt), salin kontak.
  - Favoritkan siswa → muncul di halaman "Favorit".
- **Sistem akun (simulasi, tersimpan di localStorage)**:
  - Login, daftar akun, lupa password (demo).
  - Halaman "Tambah Karya" dikunci: wajib login; setelah masuk otomatis kembali ke halaman unggah.
  - Status sesi tampil di navbar (chip nama + tombol Keluar).
- **Galery browsing**: pencarian, filter kategori & kelas, tata letak masonry nomor katalog.

## Teknologi

- HTML, CSS murni (tanpa framework/Bootstrap), JavaScript vanilla.
- Persisten data di `localStorage` per perangkat/browser.
- Font: Fraunces, Archivo, IBM Plex Mono (via Google Fonts).

## Menjalankan / Deploy

Situs murni statis — cukup buka `index.html` langsung atau host di GitHub Pages:

1. Push repo ke GitHub (branch `main`).
2. Aktifkan **GitHub Pages** → branch `main`, folder `/ (root)`.
3. Selesai; situs tampil di `https://<username>.github.io`.

Karena data pengunjung (suka, komentar, favorit, unggahan, akun) disimpan di localStorage masing-masing browser, uji beberapa fitur memakai mode privat/jendela baru.

## Struktur File

```
index.html          Beranda (hero, statistik, karya unggulan)
galeri.html         Katalog semua karya + filter
detail-karya.html   Detail proyek, like, komentar
profile.html        Profil siswa Fadhil Faith + aksi (kontak, favorit, CV, apresiasi)
favorit.html        Karya dari siswa yang difavoritkan
upload.html         Form unggah karya (dikunci login)
login.html          Login / daftar / lupa password
404.html            Halaman tidak ditemukan
styles/custom.css   Seluruh desain (editorial, tanpa framework)
scripts/main.js     Logika: data, render, interaksi, sesi, localStorage
assets/uploads/     File contoh karya (gambar & PDF)
assets/images/      Logo & foto default
```

## Catatan

- Ini proyek demo pelajar; login, "reset password", dan terima kasih bersifat simulasi lokal.
- Data tersimpan di perangkat tempat menambah — tidak tersinkron antar perangkat.