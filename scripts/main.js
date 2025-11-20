// ====================================================================
// DATA SIMULASI (Mock Data)
// Catatan: Pastikan Anda memiliki folder 'assets/uploads/' 
// dengan semua file gambar/pdf yang disebutkan di bawah.
// ====================================================================

const dataKarya = [
    { 
        id: 1, judul: "Model Tata Surya Interaktif", siswa: "Andi Wijaya", kelas: "XII IPA 1", kategori: "Fisika", tipe: "image", 
        file: "assets/uploads/download (1).jpg", 
        thumbnail: "assets/uploads/download (1).jpg",
        likes: 45, deskripsi: "Model 3D yang dibuat menggunakan Arduino dan motor servo. Proyek ini memenangkan kompetisi sains sekolah tahun ini." 
    },
    { 
        id: 2, judul: "Esai: Dampak AI pada Pendidikan", siswa: "Budi Santoso", kelas: "XI IPS 2", kategori: "B. Indonesia", tipe: "pdf", 
        file: "assets/uploads/Dampak-AI-dipendidikan.pdf", 
        thumbnail: "assets/uploads/Dampak-AI-dipendidikan.pdf", 
        likes: 62, deskripsi: "Analisis mendalam tentang masa depan guru dan siswa di era kecerdasan buatan, termasuk studi kasus di beberapa negara Asia." 
    },
    { 
        id: 3, judul: "Aplikasi Kalkulator Sederhana", siswa: "Andi Wijaya", kelas: "XII IPA 1", kategori: "Informatika", tipe: "image", 
        file: "assets/uploads/kalkulator.png", 
        thumbnail: "assets/uploads/kalkulator.png",
        likes: 30, deskripsi: "Dibuat menggunakan HTML, CSS, dan JavaScript murni. Memiliki fungsi penambahan, pengurangan, perkalian, dan pembagian." 
    },
    { 
        id: 4, judul: "Lukisan Abstrak 'Kehidupan Kota'", siswa: "Citra Dewi", kelas: "X Bahasa 3", kategori: "Seni Rupa", tipe: "image", 
        file: "assets/uploads/lukisan-kota.jpg", 
        thumbnail: "assets/uploads/lukisan-kota.jpg",
        likes: 105, deskripsi: "Menggunakan cat akrilik dengan teknik palet pisau untuk menampilkan dinamika dan hiruk pikuk kehidupan urban." 
    },
    { 
        id: 5, judul: "Makalah Sejarah Kerajaan Majapahit", siswa: "Budi Santoso", kelas: "XI IPS 2", kategori: "Sejarah", tipe: "pdf", 
        file: "assets/uploads/Sejarah Kerajaan Majapahit yang merupakan salah satu kerajaan terbesar dalam sejarah Nusantara.pdf", 
        thumbnail: "assets/uploads/Sejarah Kerajaan Majapahit yang merupakan salah satu kerajaan terbesar dalam sejarah Nusantara.pd", 
        likes: 21, deskripsi: "Penelitian komprehensif tentang struktur pemerintahan dan pengaruh Majapahit di Asia Tenggara." 
    },
    { 
        id: 6, judul: "Desain UI/UX Aplikasi E-Wallet", siswa: "Diana Pertiwi", kelas: "XII Multimedia", kategori: "Desain Grafis", tipe: "image", 
        file: "assets/uploads/ewallet.jpg", 
        thumbnail: "assets/uploads/ewallet.jpg",
        likes: 150, deskripsi: "Prototipe aplikasi pembayaran digital yang fokus pada kemudahan akses dan keamanan pengguna, dibuat dengan Figma." 
    },
    { 
        id: 7, judul: "Riset Efektivitas Pupuk Kompos", siswa: "Eko Pratama", kelas: "X IPA 2", kategori: "Biologi", tipe: "pdf", 
        file: "assets/uploads/Riset Efektivitas Pupuk Kompos terhadap pertumbuhan tanaman.pdf", 
        thumbnail: "assets/uploads/Riset Efektivitas Pupuk Kompos terhadap pertumbuhan tanaman.pdf", 
        likes: 88, deskripsi: "Studi perbandingan pertumbuhan tanaman sawi dengan tiga jenis pupuk organik berbeda selama 30 hari." 
    },
    { 
        id: 8, judul: "Puisi Kontemporer 'Senja di Ibu Kota'", siswa: "Fajar Maulana", kelas: "XI Bahasa 1", kategori: "Sastra", tipe: "pdf", 
        file: "assets/uploads/Puisi Kontemporer_ Senja di Ibukota.pdf", 
        thumbnail: "assets/uploads/Puisi Kontemporer_ Senja di Ibukota.pdf", 
        likes: 71, deskripsi: "Kumpulan puisi yang merefleksikan isu-isu sosial dan lingkungan perkotaan dalam bahasa yang puitis dan metaforis." 
    },
    { 
        id: 9, judul: "Robot Lengan Pengambil Barang", siswa: "Andi Wijaya", kelas: "XII IPA 1", kategori: "Robotika", tipe: "image", 
        file: "assets/uploads/robottangan.jpg", 
        thumbnail: "assets/uploads/robottangan.jpg",
        likes: 92, deskripsi: "Robot yang dirakit dari komponen bekas, diprogram untuk mendeteksi dan mengambil objek kecil secara otomatis." 
    },
    { 
        id: 10, judul: "Program Manajemen Stok Gudang", siswa: "Gita Lestari", kelas: "XII Akuntansi", kategori: "Akuntansi", tipe: "image", 
        file: "assets/uploads/stokbarang.jpg", 
        thumbnail: "assets/uploads/stokbarang.jpg",
        likes: 55, deskripsi: "Aplikasi berbasis Excel dengan makro VBA untuk mempermudah perhitungan dan pelaporan stok barang masuk dan keluar." 
    },
    { 
        id: 11, judul: "Laporan Praktikum Kimia: pH Larutan", siswa: "Hana Salsabila", kelas: "X IPA 1", kategori: "Kimia", tipe: "pdf", 
        file: "assets/uploads/Kerangka Laporan Praktikum pH Larutan.pdf", 
        thumbnail: "assets/uploads/Kerangka Laporan Praktikum pH Larutan.pdf", 
        likes: 40, deskripsi: "Eksperimen untuk menentukan pH berbagai larutan rumah tangga menggunakan indikator alami dan kertas lakmus." 
    },
    { 
        id: 12, judul: "Infografis Sejarah Perang Dunia II", siswa: "Iqbal Ramadhan", kelas: "XI IPS 1", kategori: "Sejarah", tipe: "image", 
        file: "assets/uploads/PD-II.jpg", 
        thumbnail: "assets/uploads/PD-II.jpg",
        likes: 112, deskripsi: "Visualisasi kronologis peristiwa-peristiwa kunci dalam Perang Dunia II dalam format infografis yang menarik." 
    },
    { 
        id: 13, judul: "Video Animasi Pengenalan Budaya Jawa", siswa: "Joko Susilo", kelas: "X Multimedia", kategori: "Multimedia", tipe: "image", 
        file: "assets/uploads/budaya-jawa.jpg", 
        thumbnail: "assets/uploads/budaya-jawa.jpg",
        likes: 135, deskripsi: "Video animasi 2D berdurasi 5 menit yang memperkenalkan elemen-elemen penting budaya Jawa seperti wayang dan gamelan." 
    },
    { 
        id: 14, judul: "Cerpen: Sebuah Pagi di Tepi Pantai", siswa: "Budi Santoso", kelas: "XI IPS 2", kategori: "Sastra", tipe: "pdf", 
        file: "assets/uploads/🌊 Di Sebuah Pagi di Pantai.pdf", 
        thumbnail: "assets/uploads/🌊 Di Sebuah Pagi di Pantai.pdf", 
        likes: 50, deskripsi: "Cerita pendek yang menggambarkan konflik batin seorang nelayan muda di tengah perubahan iklim global." 
    },
    { 
        id: 15, judul: "Proyek Masak: Resep Roti Tawar Vegan", siswa: "Kiki Amelia", kelas: "XII Tata Boga", kategori: "Tata Boga", tipe: "image", 
        file: "assets/uploads/roti-tawar.jpg", 
        thumbnail: "assets/uploads/roti-tawar.jpg",
        likes: 95, deskripsi: "Eksperimen resep roti tawar tanpa menggunakan bahan-bahan hewani, dengan fokus pada tekstur yang lembut." 
    },
    { 
        id: 16, judul: "Modul Pembelajaran Bahasa Inggris (Tenses)", siswa: "Lina Marisa", kelas: "X Bahasa 2", kategori: "B. Inggris", tipe: "pdf", 
        file: "assets/uploads/📚 Modul Pembelajaran Terintegrasi_.pdf", 
        thumbnail: "assets/uploads/📚 Modul Pembelajaran Terintegrasi_.pdf", 
        likes: 33, deskripsi: "Modul interaktif yang dirancang untuk membantu siswa memahami 16 tenses dalam bahasa Inggris dengan cepat dan mudah." 
    },
    { 
        id: 17, judul: "Perancangan Database Perpustakaan Sekolah", siswa: "Muhammad Rizky", kelas: "XI RPL", kategori: "Informatika", tipe: "image", 
        file: "assets/uploads/db-perpus.jpg", 
        thumbnail: "assets/uploads/db-perpus.jpg",
        likes: 77, deskripsi: "Desain Skema ERD (Entity Relationship Diagram) dan implementasi database menggunakan MySQL untuk sistem perpustakaan." 
    },
    { 
        id: 18, judul: "Sketsa Desain Fashion 'Etnik Modern'", siswa: "Nadia Utami", kelas: "XII Tata Busana", kategori: "Seni Rupa", tipe: "image", 
        file: "assets/uploads/Sketsa Desain Fashion 'Etnik Modern'.jpg", 
        thumbnail: "assets/uploads/Sketsa Desain Fashion 'Etnik Modern'.jpg",
        likes: 142, deskripsi: "Kumpulan sketsa mode yang menggabungkan unsur kain tradisional Indonesia dengan gaya busana kontemporer." 
    },
    { 
        id: 19, judul: "Analisis Pasar Saham Sektor Teknologi", siswa: "Oscar Wijaya", kelas: "XII IPS 3", kategori: "Ekonomi", tipe: "pdf", 
        file: "assets/uploads/📈 Analisis Pasar Saham Sektor Teknologi.pdf", 
        thumbnail: "assets/uploads/📈 Analisis Pasar Saham Sektor Teknologi.pdf", 
        likes: 68, deskripsi: "Laporan analisis fundamental dan teknikal beberapa saham teknologi terkemuka di Indonesia dalam satu tahun terakhir." 
    },
    { 
        id: 20, judul: "Alat Pengukur Kelembaban Tanah Otomatis", siswa: "Andi Wijaya", kelas: "XII IPA 1", kategori: "Fisika", tipe: "image", 
        file: "assets/uploads/Alat Pengukur Kelembaban Tanah Otomatis.jpg", 
        thumbnail: "assets/uploads/Alat Pengukur Kelembaban Tanah Otomatis.jpg",
        likes: 110, deskripsi: "Proyek IoT menggunakan ESP32 yang mengirimkan data kelembaban tanah secara *real-time* ke aplikasi mobile." 
    },
    { 
        id: 21, judul: "Jurnal Ilmiah: Studi Kasus Virus Dengue", siswa: "Putri Anggraini", kelas: "XI IPA 3", kategori: "Biologi", tipe: "pdf", 
        file: "assets/uploads/📝 Kerangka Jurnal Ilmiah_ Studi Kasus Virus Dengue.pdf", 
        thumbnail: "assets/uploads/📝 Kerangka Jurnal Ilmiah_ Studi Kasus Virus Dengue.pdf", 
        likes: 59, deskripsi: "Penelitian mendalam tentang siklus hidup virus Dengue dan upaya pencegahan penyebarannya di lingkungan sekolah." 
    },
    { 
        id: 22, judul: "Sistem Informasi Geografis (SIG) Persebaran UMKM", siswa: "Qaisar Zidan", kelas: "XII Geografi", kategori: "Geografi", tipe: "image", 
        file: "assets/uploads/Sistem Informasi Geografis (SIG) Persebaran UMKM.jpg", 
        thumbnail: "assets/uploads/Sistem Informasi Geografis (SIG) Persebaran UMKM.jpg",
        likes: 85, deskripsi: "Pembuatan peta digital interaktif menggunakan QGIS untuk memvisualisasikan lokasi dan jenis-jenis UMKM di kota Bandung." 
    },
    { 
        id: 23, judul: "Website Portofolio Pribadi (Full Stack)", siswa: "Rini Hidayat", kelas: "XI RPL", kategori: "Informatika", tipe: "image", 
        file: "assets/uploads/Website Portofolio Pribadi (Full Stack).jpg", 
        thumbnail: "assets/uploads/Website Portofolio Pribadi (Full Stack).jpg",
        likes: 160, deskripsi: "Website portofolio yang dibangun menggunakan MERN Stack (MongoDB, Express, React, Node.js) dengan otentikasi pengguna." 
    },
    { 
        id: 24, judul: "Fotografi Jalanan (Street Photography) Kota Tua", siswa: "Santi Dewi", kelas: "X Fotografi", kategori: "Multimedia", tipe: "image", 
        file: "assets/uploads/Fotografi Jalanan (Street Photography) Kota Tua.jpg", 
        thumbnail: "assets/uploads/Fotografi Jalanan (Street Photography) Kota Tua.jpg",
        likes: 125, deskripsi: "Kumpulan 10 foto yang menangkap momen dan arsitektur unik di kawasan Kota Tua Jakarta dengan teknik *black and white*." 
    },
    { 
        id: 25, judul: "Review Film 'Gundala': Analisis Naratif", siswa: "Taufik Hidayat", kelas: "XII Bahasa 1", kategori: "Film", tipe: "pdf", 
        file: "assets/uploads/🎬 Analisis Naratif Film Gundala_ Negeri Ini Butuh Patriot.pdf", 
        thumbnail: "assets/uploads/🎬 Analisis Naratif Film Gundala_ Negeri Ini Butuh Patriot.pdf", 
        likes: 49, deskripsi: "Kajian mendalam tentang struktur naratif, pembangunan karakter, dan kritik sosial yang terkandung dalam film superhero Indonesia, Gundala." 
    },
];
// ====================================================================
// DATA SIMULASI (Mock Data) BARU UNTUK SISWA
// Catatan: Pastikan Anda memiliki gambar profile siswa di 'assets/images/'
// ====================================================================

const dataSiswaList = [
    { 
        id: 1, 
        nama: "Andi Wijaya", 
        nis: "202312001", 
        kelas: "XII IPA 1", 
        profilImg: "assets/images/profile-andi.jpg", 
        quote: "Mengejar ilmu dan mengukir prestasi, karena karya adalah cerminan diri." 
    },
    { 
        id: 2, 
        nama: "Budi Santoso", 
        nis: "202311002", 
        kelas: "XI IPS 2", 
        profilImg: "assets/images/profile-budi.jpg", 
        quote: "Kreativitas adalah kecerdasan yang bersenang-senang. Mari berinovasi!" 
    },
    { 
        id: 3, 
        nama: "Citra Dewi", 
        nis: "202310003", 
        kelas: "X MIPA 3", 
        profilImg: "assets/images/profile-citra.jpg", 
        quote: "Belajar adalah petualangan. Mari kita nikmati setiap prosesnya." 
    },
    // ... Tambahkan siswa lain di sini
];

// ====================================================================
// FUNGSI UTILITY: Mengambil parameter dari URL (Jika belum ada di main.js Anda)
// ====================================================================
function getURLParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}


// ====================================================================
// FUNGSI UTAMA: Render Profil Siswa (profile.html)
// ====================================================================

function renderProfilSiswa() {
    // 1. Ambil ID siswa dari URL (misal: profile.html?siswa_id=1)
    const siswaId = getURLParameter('siswa_id');
    // Jika tidak ada parameter ID, default ke ID 1
    const defaultSiswaId = 1; 
    const siswa = dataSiswaList.find(s => s.id == (siswaId || defaultSiswaId)); 

    const profileHeaderContainer = document.getElementById('profile-header');
    const statsContainer = document.getElementById('siswa-stats');
    const karyaTitleSpan = document.getElementById('siswa-nama-karya-title');
    const noKaryaAlert = document.getElementById('noKarya');


    // 2. Cek apakah container ada (pastikan kita ada di profile.html)
    if (!profileHeaderContainer) return; 

    if (!siswa) {
        profileHeaderContainer.innerHTML = '<div class="alert alert-danger my-5">❌ Siswa tidak ditemukan. Pastikan ID Siswa di URL sudah benar.</div>';
        if (statsContainer) statsContainer.innerHTML = '';
        if (karyaTitleSpan) karyaTitleSpan.textContent = 'Tidak Ditemukan';
        return;
    }
    
    // 3. Filter karya hanya milik siswa ini
    const karyaSiswa = dataKarya.filter(k => k.siswa === siswa.nama);
    const totalKarya = karyaSiswa.length;
    // Menggunakan Math.floor untuk likes (simulasi hitungan like)
    const totalLikes = karyaSiswa.reduce((sum, k) => sum + k.likes, 0); 

    // 4. Render Header Profil (Jumbotron)
    const profileHeaderHtml = `
        <img 
            src="${siswa.profilImg || 'assets/images/default-profile.png'}" 
            alt="Foto Profil ${siswa.nama}" 
            class="profile-img rounded-circle mb-3 shadow-lg" 
            data-bs-toggle="modal" 
            data-bs-target="#profileImageModal"
        />
        <h1 class="display-5 fw-bold">${siswa.nama}</h1>
        <p class="lead">${siswa.kelas} (${siswa.nis})</p>
        <blockquote class="blockquote fst-italic mt-3">
            "${siswa.quote}"
        </blockquote>
    `;
    profileHeaderContainer.innerHTML = profileHeaderHtml;
    if (karyaTitleSpan) karyaTitleSpan.textContent = siswa.nama;

    // 5. Render Statistik
    const statsHtml = `
        <div class="col-6 col-md-3 mx-auto">
            <div class="card p-3 shadow-sm border-0 bg-white">
                <p class="display-6 fw-bold text-primary mb-0">${totalKarya}</p>
                <small class="text-muted">Total Karya</small>
            </div>
        </div>
        <div class="col-6 col-md-3 mx-auto">
            <div class="card p-3 shadow-sm border-0 bg-white">
                <p class="display-6 fw-bold text-success mb-0">${totalLikes}</p>
                <small class="text-muted">Total Likes</small>
            </div>
        </div>
    `;
    if (statsContainer) statsContainer.innerHTML = statsHtml;

    // 6. Render Karya Siswa
    const karyaListContainer = document.getElementById('karya-siswa-list');
    if (karyaListContainer) {
        // Menggunakan fungsi renderKarya yang sudah ada di main.js Anda
        renderKarya(karyaSiswa, 'karya-siswa-list');
        if (noKaryaAlert) {
            noKaryaAlert.style.display = totalKarya > 0 ? 'none' : 'block';
        }
    }
}


// Catatan: Pastikan di bagian INISIALISASI main.js Anda sudah memanggil fungsi ini:
// document.addEventListener('DOMContentLoaded', () => {
//    // ... kode lain
//    if (document.getElementById('profile-header')) { // Cek elemen unik profile.html
//        renderProfilSiswa();
//    }
//    // ...
// });

// ====================================================================
// FUNGSI UTILITY
// ====================================================================

/**
 * Mendapatkan ikon Bootstrap berdasarkan tipe file.
 * @param {string} tipe - Tipe file ('image', 'pdf', 'video', dll).
 * @returns {string} - Nama kelas ikon Bootstrap.
 */
function getIcon(tipe) {
    switch (tipe.toLowerCase()) {
        case 'image':
            return 'bi-image';
        case 'pdf':
            return 'bi-file-earmark-pdf';
        case 'video':
            return 'bi-camera-video';
        case 'audio':
            return 'bi-mic';
        default:
            return 'bi-file-earmark';
    }
}

// ====================================================================
// FUNGSI RENDER
// ====================================================================

/**
 * Merender daftar karya ke dalam container di HTML.
 * @param {Array<Object>} karyaArray - Array objek karya yang akan ditampilkan.
 * @param {string} containerId - ID dari elemen container (misalnya 'karya-unggulan' atau 'galeri-semua-karya').
 */
function renderKarya(karyaArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Keluar jika container tidak ada

    container.innerHTML = ''; // Kosongkan container

    if (karyaArray.length === 0) {
        // Tampilkan pesan 'tidak ditemukan' di halaman galeri
        const noResult = document.getElementById('noResult');
        if (noResult) noResult.style.display = 'block';
        return; 
    } else {
        const noResult = document.getElementById('noResult');
        if (noResult) noResult.style.display = 'none';
    }

    karyaArray.forEach(karya => {
        // Menentukan konten gambar/preview
        const displayFile = karya.thumbnail || karya.file;
        let imgHtml;
        
        if (karya.tipe === 'pdf') {
            // Logika baru untuk menampilkan placeholder PDF (sesuai permintaan)
            imgHtml = `
                <div class="d-flex align-items-center justify-content-center" style="background:#f2f4f7; height:160px; border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem;">
                    <i class="bi bi-file-earmark-pdf text-danger" style="font-size:3.5em;"></i>
                </div>
            `;
        } else {
            // Untuk gambar, gunakan tag <img> dengan thumbnail
            imgHtml = `<img src="${displayFile}" class="card-img-top" alt="Thumbnail ${karya.judul}" loading="lazy">`;
        }


        const cardHtml = `
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4 animate__animated animate__fadeInUp">
                <div class="card h-100 shadow-sm border-0">
                    ${imgHtml}
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${karya.kategori}</span>
                        <h5 class="card-title fw-bold">${karya.judul}</h5>
                        <p class="card-text text-muted small mb-1">
                            <i class="bi bi-person-fill"></i> <a href="profile.html?siswa=${karya.siswa}" class="text-decoration-none text-muted">${karya.siswa}</a> (${karya.kelas})
                        </p>
                        <p class="card-text small text-truncate">${karya.deskripsi}</p>
                    </div>
                    <div class="card-footer bg-white d-flex justify-content-between align-items-center border-0 pt-0">
                        <span class="text-danger small">
                            <i class="bi bi-heart-fill"></i> ${karya.likes} Suka
                        </span>
                        <a href="detail-karya.html?id=${karya.id}" class="btn btn-sm btn-outline-primary">
                            Lihat <i class="bi bi-arrow-right-short"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}


/**
 * Mengisi dropdown filter kategori di galeri.html
 */
function populateFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;

    // Ambil semua kategori unik
    const categories = [...new Set(dataKarya.map(karya => karya.kategori))].sort();

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

/**
 * Menerapkan filter dan pencarian pada data karya.
 */
function filterKarya() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const classFilter = document.getElementById('classFilter');
    
    if (!document.getElementById('galeri-semua-karya')) return;

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedClass = classFilter ? classFilter.value : 'all';

    const filteredKarya = dataKarya.filter(karya => {
        const matchesSearch = 
            karya.judul.toLowerCase().includes(searchTerm) || 
            karya.siswa.toLowerCase().includes(searchTerm);
        
        const matchesCategory = 
            selectedCategory === 'all' || 
            karya.kategori === selectedCategory;

        const matchesClass = 
            selectedClass === 'all' || 
            karya.kelas.split(' ')[0] === selectedClass; // Hanya ambil X, XI, atau XII (misal: XII IPA 1 -> XII)

        return matchesSearch && matchesCategory && matchesClass;
    });

    renderKarya(filteredKarya, 'galeri-semua-karya');
}

/**
 * Merender detail satu karya di halaman detail-karya.html
 */
function renderDetailKarya() {
    const detailContainer = document.getElementById('karya-detail-container');
    if (!detailContainer) return;

    // Ambil ID dari URL Query Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const karyaId = parseInt(urlParams.get('id'));
    const karya = dataKarya.find(k => k.id === karyaId);

    if (!karya) {
        detailContainer.innerHTML = `<div class="alert alert-danger text-center">❌ Karya dengan ID ${karyaId} tidak ditemukan.</div>`;
        return;
    }

    // Tentukan jenis file preview
    let filePreviewHtml = '';
    let fileDownloadText = '';
    const iconClass = getIcon(karya.tipe);

    if (karya.tipe === 'image') {
        filePreviewHtml = `<img src="${karya.file}" class="img-fluid rounded shadow-lg mb-4" alt="${karya.judul}" style="max-height: 600px; object-fit: contain;">`;
        fileDownloadText = `Unduh Gambar <i class="${iconClass} ms-1"></i>`;
    } else if (karya.tipe === 'pdf') {
        // Tampilkan link untuk PDF
        filePreviewHtml = `
            <div class="p-5 border rounded bg-light text-center mb-4">
                <i class="${iconClass}" style="font-size: 80px; color: var(--bs-primary);"></i>
                <p class="mt-3 mb-0 fw-bold">${karya.judul}</p>
                <p class="text-muted">Dokumen PDF. Klik tombol di bawah untuk melihat/mengunduh.</p>
            </div>
        `;
        fileDownloadText = `Unduh Dokumen <i class="${iconClass} ms-1"></i>`;
    } else {
        // Placeholder untuk tipe lain
        filePreviewHtml = `
            <div class="p-5 border rounded bg-light text-center mb-4">
                <i class="${iconClass}" style="font-size: 80px; color: var(--bs-primary);"></i>
                <p class="mt-3 mb-0 fw-bold">${karya.judul}</p>
                <p class="text-muted">Pratinjau untuk tipe file ${karya.tipe} tidak tersedia.</p>
            </div>
        `;
        fileDownloadText = `Unduh File <i class="${iconClass} ms-1"></i>`;
    }

    detailContainer.innerHTML = `
        <div class="row">
            <div class="col-lg-8">
                ${filePreviewHtml}
                <a href="${karya.file}" class="btn btn-warning fw-bold mt-2" download="${karya.judul.replace(/ /g, '_')}-${karya.siswa}">${fileDownloadText}</a>
            </div>
            <div class="col-lg-4">
                <div class="card shadow-sm sticky-top" style="top: 120px;">
                    <div class="card-body">
                        <h1 class="card-title fw-bolder text-primary">${karya.judul}</h1>
                        <hr>
                        <p class="mb-2"><strong>Siswa:</strong> <a href="profile.html?siswa=${karya.siswa}" class="text-decoration-none">${karya.siswa}</a></p>
                        <p class="mb-2"><strong>Kelas:</strong> ${karya.kelas}</p>
                        <p class="mb-2"><strong>Kategori:</strong> <span class="badge bg-secondary">${karya.kategori}</span></p>
                        <p class="mb-4"><strong>Disukai:</strong> <i class="bi bi-heart-fill text-danger"></i> ${karya.likes} Kali</p>

                        <h5 class="fw-bold">Deskripsi Proyek:</h5>
                        <p>${karya.deskripsi}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Update judul halaman
    document.title = `Detail Proyek - ${karya.judul}`;
}

/**
 * Merender halaman profil siswa beserta daftar karyanya.
 */
function renderProfilSiswa() {
    const profileContainer = document.getElementById('profile-content');
    const karyaSiswaContainer = document.getElementById('karya-siswa-list');
    if (!profileContainer || !karyaSiswaContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const targetSiswa = urlParams.get('siswa') || 'Andi Wijaya'; // Default ke Andi Wijaya

    // Data simulasi profil (untuk bio dan gambar profil)
    const profileData = {
        "Andi Wijaya": { img: "assets/uploads/profile_andi.jpg", totalKarya: 3, bio: "Siswa berprestasi di bidang sains dan teknologi. Aktif di klub Robotika dan juara 1 kompetisi sains sekolah." },
        "Budi Santoso": { img: "assets/uploads/profile_budi.jpg", totalKarya: 3, bio: "Pecinta sastra dan sejarah. Karyanya sering mendapat apresiasi karena kedalaman analisis dan gaya bahasa yang memikat." },
        "Citra Dewi": { img: "assets/uploads/profile_citra.jpg", totalKarya: 1, bio: "Seniman muda dengan bakat luar biasa dalam seni lukis abstrak. Karyanya telah dipamerkan di galeri kota." },
        "Diana Pertiwi": { img: "assets/uploads/profile_diana.jpg", totalKarya: 1, bio: "Mahir dalam desain digital dan UI/UX. Berencana melanjutkan studi ke jurusan desain komunikasi visual." },
        "Eko Pratama": { img: "assets/uploads/profile_eko.jpg", totalKarya: 1, bio: "Peneliti muda yang bersemangat di bidang Biologi dan lingkungan. Proyeknya fokus pada solusi pertanian berkelanjutan." },
        "Fajar Maulana": { img: "assets/uploads/profile_fajar.jpg", totalKarya: 1, bio: "Penyair kontemporer yang karyanya sarat kritik sosial dan refleksi kehidupan urban." },
        "Gita Lestari": { img: "assets/uploads/profile_gita.jpg", totalKarya: 1, bio: "Terampil dalam aplikasi akuntansi dan manajemen data. Sangat detail dan teliti dalam membuat laporan keuangan." },
        "Hana Salsabila": { img: "assets/uploads/profile_hana.jpg", totalKarya: 1, bio: "Siswa yang antusias dalam eksperimen ilmiah, khususnya Kimia. Aktif dalam klub sains sekolah." },
        "Iqbal Ramadhan": { img: "assets/uploads/profile_iqbal.jpg", totalKarya: 1, bio: "Jago dalam visualisasi data sejarah. Infografisnya dikenal sangat informatif dan menarik." },
        "Joko Susilo": { img: "assets/uploads/profile_joko.jpg", totalKarya: 1, bio: "Kreator konten digital dan animasi 2D. Berfokus pada pengenalan budaya Indonesia." },
        "Kiki Amelia": { img: "assets/uploads/profile_kiki.jpg", totalKarya: 1, bio: "Calon Chef yang tertarik pada kuliner sehat, khususnya vegan dan vegetarian." },
        "Lina Marisa": { img: "assets/uploads/profile_lina.jpg", totalKarya: 1, bio: "Pengajar sebaya untuk mata pelajaran Bahasa Inggris. Mahir dalam menyusun modul pembelajaran interaktif." },
        "Muhammad Rizky": { img: "assets/uploads/profile_rizky.jpg", totalKarya: 1, bio: "Pengembang database dan web. Memiliki pemahaman kuat tentang MySQL dan desain ERD." },
        "Nadia Utami": { img: "assets/uploads/profile_nadia.jpg", totalKarya: 1, bio: "Desainer mode dengan spesialisasi busana etnik modern. Sering memenangkan lomba desain kostum." },
        "Oscar Wijaya": { img: "assets/uploads/profile_oscar.jpg", totalKarya: 1, bio: "Analis pasar saham amatir yang memiliki ketajaman dalam memprediksi tren sektor teknologi." },
        "Putri Anggraini": { img: "assets/uploads/profile_putri.jpg", totalKarya: 1, bio: "Peneliti Biologi yang fokus pada kesehatan dan pencegahan penyakit." },
        "Qaisar Zidan": { img: "assets/uploads/profile_qaisar.jpg", totalKarya: 1, bio: "Penggemar Geografi dan sistem informasi. Mahir dalam penggunaan perangkat lunak SIG." },
        "Rini Hidayat": { img: "assets/uploads/profile_rini.jpg", totalKarya: 1, bio: "Full-stack developer muda yang menguasai MERN stack. Cita-citanya membuat startup teknologi." },
        "Santi Dewi": { img: "assets/uploads/profile_santi.jpg", totalKarya: 1, bio: "Fotografer jalanan dengan minat khusus pada arsitektur dan momen candid." },
        "Taufik Hidayat": { img: "assets/uploads/profile_taufik.jpg", totalKarya: 1, bio: "Kritikus film yang mendalami analisis naratif dan kajian sinema." }
    };

    const siswaKarya = dataKarya.filter(karya => karya.siswa === targetSiswa);
    const profil = profileData[targetSiswa] || { img: "assets/uploads/profile_default.jpg", totalKarya: siswaKarya.length, bio: "Siswa ini aktif dalam berbagai proyek sekolah. (Bio Default)" }; // Fallback

    const totalLikes = siswaKarya.reduce((sum, karya) => sum + karya.likes, 0);

    // --- Render Informasi Profil ---
    profileContainer.innerHTML = `
        <div class="card shadow-lg mb-4 text-center">
            <div class="card-body">
                <img src="${profil.img}" class="profile-img rounded-circle mb-3 border border-4 border-warning shadow-sm" alt="Foto Profil" data-bs-toggle="modal" data-bs-target="#profileImageModal" style="width: 150px; height: 150px; object-fit: cover; cursor: pointer;">
                <h2 class="card-title fw-bold text-primary">${targetSiswa}</h2>
                <p class="text-muted">${siswaKarya[0] ? siswaKarya[0].kelas : 'Tidak diketahui'}</p>
                
                <div class="row text-center mt-4">
                    <div class="col">
                        <h4 class="fw-bold text-primary">${siswaKarya.length}</h4>
                        <p class="mb-0 text-muted small">Total Karya</p>
                    </div>
                    <div class="col">
                        <h4 class="fw-bold text-danger">${totalLikes}</h4>
                        <p class="mb-0 text-muted small">Total Disukai <i class="bi bi-heart-fill"></i></p>
                    </div>
                </div>

                <hr class="my-4">
                <h5 class="fw-bold">Bio:</h5>
                <p class="card-text">${profil.bio}</p>
                
            </div>
        </div>
    `;

    // --- Render Daftar Karya Siswa ---
    renderKarya(siswaKarya, 'karya-siswa-list');
    
    // Update judul halaman
    document.title = `Profil Siswa - ${targetSiswa}`;
}


// ====================================================================
// FUNGSI ANIMASI TYPEWRITER (Hanya untuk index.html)
// ====================================================================

function initTypewriterEffect() {
    const typingTextElement = document.getElementById('typing-text');
    if (!typingTextElement) return;

    const phrases = ["Galeri Proyek Siswa", "Inovasi dan Kreativitas", "Semangat Belajar"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150; // Kecepatan mengetik

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 75; // Kecepatan menghapus
        } else {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150; // Kecepatan mengetik
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000; // Jeda sebelum mulai menghapus
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Jeda sebelum mulai mengetik frasa baru
        }

        setTimeout(type, typingSpeed);
    }

    type();
}


// ====================================================================
// INISIALISASI (Panggil fungsi sesuai halaman)
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Beranda (index.html)
    const karyaUnggulanContainer = document.getElementById('karya-unggulan');
    if (karyaUnggulanContainer) {
        // Ambil 3 karya dengan likes terbanyak (simulasi unggulan)
        const karyaUnggulan = dataKarya.sort((a, b) => b.likes - a.likes).slice(0, 3);
        renderKarya(karyaUnggulan, 'karya-unggulan');
        initTypewriterEffect(); 
    }

    // 2. Galeri (galeri.html)
    if (document.getElementById('galeri-semua-karya')) {
        populateFilters();
        // Memanggil filterKarya saat halaman dimuat
        filterKarya(); 
        
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const classFilter = document.getElementById('classFilter');

        if(searchInput) searchInput.addEventListener('keyup', filterKarya);
        if(categoryFilter) categoryFilter.addEventListener('change', filterKarya);
        if(classFilter) classFilter.addEventListener('change', filterKarya);
    }
    
    // 3. Detail Karya (detail-karya.html)
    renderDetailKarya(); 
    
    // 4. Profil Siswa (profile.html)
    renderProfilSiswa();
});