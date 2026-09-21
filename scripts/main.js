// =====================
// DATA KARYA (Mock Data)
// =====================
const dataKarya = [
    { 
        id: 1, judul: "Model Tata Surya Interaktif", siswa: "Andi Wijaya", kelas: "XII IPA 1", kategori: "Fisika", tipe: "image", 
        file: "assets/uploads/images.jpg", 
        thumbnail: "assets/uploads/images.jpg",
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
        file: "https://via.placeholder.com/400x200?text=Karya+Informatika", 
        thumbnail: "https://via.placeholder.com/400x200?text=Karya+Informatika",
        likes: 30, deskripsi: "Dibuat menggunakan HTML, CSS, dan JavaScript murni. Memiliki fungsi penambahan, pengurangan, perkalian, dan pembagian." 
    },
    { 
        id: 4, judul: "Lukisan Abstrak 'Kehidupan Kota'", siswa: "Citra Dewi", kelas: "X Bahasa 3", kategori: "Seni Rupa", tipe: "image", 
        file: "https://via.placeholder.com/400x200?text=Karya+Seni", 
        thumbnail: "https://via.placeholder.com/400x200?text=Karya+Seni",
        likes: 105, deskripsi: "Menggunakan cat akrilik dengan teknik palet pisau untuk menampilkan dinamika dan hiruk pikuk kehidupan urban." 
    },
    { 
        id: 5, judul: "Makalah Sejarah Kerajaan Majapahit", siswa: "Budi Santoso", kelas: "XI IPS 2", kategori: "Sejarah", tipe: "pdf", 
        file: "assets/uploads/Sejarah Kerajaan Majapahit yang merupakan salah satu kerajaan terbesar dalam sejarah Nusantara.pdf",
        thumbnail: "https://via.placeholder.com/400x200/33FF57/FFFFFF?text=Dokumen+PDF+2",
        likes: 21, deskripsi: "Penelitian komprehensif tentang struktur pemerintahan dan pengaruh Majapahit di Asia Tenggara." 
    },
    { 
        id: 6, judul: "Robot Tangan Prostetik", siswa: "Fadhil Faith", kelas: "XI RPL 1", kategori: "Fisika", tipe: "image", 
        file: "assets/uploads/robottangan.jpg", 
        thumbnail: "assets/uploads/robottangan.jpg",
        likes: 76, deskripsi: "Prototipe tangan prostetik sederhana yang digerakkan menggunakan sensor flex dan servo. Proyek ini dibuat untuk tugas akhir praktik fisika terapan." 
    },
    { 
        id: 7, judul: "Aplikasi Kalkulator Pintar", siswa: "Fadhil Faith", kelas: "XI RPL 1", kategori: "Informatika", tipe: "image", 
        file: "assets/uploads/kalkulator.png", 
        thumbnail: "assets/uploads/kalkulator.png",
        likes: 58, deskripsi: "Aplikasi kalkulator berbasis web dengan fitur riwayat perhitungan dan mode konversi satuan, dibangun menggunakan HTML, CSS, dan JavaScript." 
    },
    { 
        id: 8, judul: "Lukisan Kehidupan Kota", siswa: "Fadhil Faith", kelas: "XI RPL 1", kategori: "Seni Rupa", tipe: "image", 
        file: "assets/uploads/lukisan-kota.jpg", 
        thumbnail: "assets/uploads/lukisan-kota.jpg",
        likes: 91, deskripsi: "Lukisan cat air yang menggambarkan dinamika dan warna kehidupan kota metropolitan pada sore hari." 
    },
];

// =======================
// GABUNGAN DATA: dataKarya + localStorage
// =======================
function getSemuaKarya() {
    let stored = [];
    try {
        const raw = localStorage.getItem('galeriKarya');
        if (raw) stored = JSON.parse(raw);
    } catch (e) {
        stored = [];
    }
    return dataKarya.concat(stored);
}

// =======================
// RENDER KARYA CARD
// =======================
function renderKarya(karyaArray, targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return; 
    let htmlContent = '';
    karyaArray.forEach(karya => {
        const displayFile = karya.thumbnail || karya.file;
        // Untuk PDF, tampilkan icon preview khusus
        let imgHtml = karya.tipe === 'pdf'
            ? `<div class="d-flex align-items-center justify-content-center" style="background:#fbeed7;height:200px;">
                    <i class="bi bi-file-earmark-pdf text-danger" style="font-size:4em"></i>
                </div>`
            : `<img src="${displayFile}" class="card-img-top" alt="${karya.judul}">`;
        htmlContent += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card card-karya h-100 shadow-sm border-0">
                    ${imgHtml}
                    <div class="card-body">
                        <span class="badge bg-secondary mb-2">${karya.kategori}</span>
                        <h5 class="card-title">${karya.judul}</h5>
                        <p class="card-text"><small class="text-muted">${karya.siswa} - ${karya.kelas}</small></p>
                        <a href="detail-karya.html?id=${karya.id}" class="btn btn-primary btn-sm">Lihat Detail</a>
                        <span class="float-end text-danger"><i class="bi bi-heart-fill"></i> ${karya.likes}</span>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

// =======================
// FILTER GALERI
// =======================
function populateFilters() {
    const categorySelect = document.getElementById('categoryFilter');
    if (!categorySelect) return; 
    const uniqueCategories = [...new Set(getSemuaKarya().map(karya => karya.kategori))];
    uniqueCategories.sort().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function filterKarya() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const classFilter = document.getElementById('classFilter');
    const noResultText = document.getElementById('noResult');

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedClass = classFilter ? classFilter.value : 'all';

    const filteredKarya = getSemuaKarya().filter(karya => {
        const matchesSearch = karya.judul.toLowerCase().includes(searchTerm) || 
                              karya.siswa.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || karya.kategori === selectedCategory;
        const matchesClass = selectedClass === 'all' || karya.kelas.includes(selectedClass);
        return matchesSearch && matchesCategory && matchesClass;
    });

    renderKarya(filteredKarya, 'galeri-semua-karya');
    if (noResultText) {
        noResultText.style.display = filteredKarya.length === 0 ? 'block' : 'none';
    }
}

// =======================
// DETAIL KARYA PAGE
// =======================
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
function renderDetailKarya() {
    const container = document.getElementById('karya-detail-container');
    if (!container) return; 
    const karyaId = parseInt(getUrlParameter('id')); 
    const karya = getSemuaKarya().find(k => k.id === karyaId);
    if (!karya) {
        container.innerHTML = '<div class="alert alert-warning text-center">Maaf, Karya tidak ditemukan!</div>';
        return;
    }
    let mediaElement = '';
    if (karya.tipe === 'pdf') {
        mediaElement = `
            <div class="pdf-viewer shadow-sm mb-4" style="height: 500px;">
                <iframe src="${karya.file}" width="100%" height="100%" frameborder="0">
                    <p>Browser Anda tidak mendukung iframe, silakan <a href="${karya.file}" target="_blank">unduh PDF</a>.</p>
                </iframe>
            </div>`;
    } else {
        mediaElement = `<img src="${karya.file}" class="img-fluid rounded shadow-sm mb-4" alt="${karya.judul}">`;
    }
    const detailHTML = `
        <div class="row">
            <div class="col-md-8">${mediaElement}</div>
            <div class="col-md-4">
                <span class="badge bg-info mb-2">${karya.kategori}</span>
                <h2>${karya.judul}</h2>
                <p class="text-muted">Diunggah oleh: <strong>${karya.siswa}</strong> (${karya.kelas})</p>
                <hr>
                <h4>Deskripsi Proyek</h4>
                <p>${karya.deskripsi}</p>
                <hr>
                <p>
                    <button class="btn btn-danger me-2" disabled>
                        <i class="bi bi-heart-fill"></i> Suka (${karya.likes})
                    </button>
                    <a href="${karya.file}" class="btn btn-outline-secondary" target="_blank">
                        <i class="bi bi-file-earmark-fill"></i> Unduh/Lihat File Penuh
                    </a>
                </p>
            </div>
        </div>
    `;
    container.innerHTML = detailHTML;
    document.title = karya.judul + " | Galeri Siswa";
}

// =======================
// PROFILE SISWA PAGE
// =======================
function renderProfilSiswa() {
    const targetSiswaNama = "Fadhil Faith"; 
    const infoContainer = document.getElementById('siswa-info');
    const karyaListContainer = document.getElementById('karya-siswa-list');
    if (!infoContainer || !karyaListContainer) return; 
    // Data contoh info siswa
    const siswaData = {
        nama: targetSiswaNama,
        kelas: "XI RPL 1",
        jurusan: "Sains & Teknologi",
        bio: "Saya memiliki minat besar dalam pemrograman, fisika terapan, dan robotika.",
        image: "assets/images/default-profile.png"
    };
    infoContainer.innerHTML = `
        <div class="card p-4 text-center sticky-top" style="top: 20px;">
            <img src="${siswaData.image}" class="rounded-circle mx-auto d-block mb-3 profile-img" alt="Foto Profil"
                 style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#profileImageModal">
            <h3 class="fw-bold">${siswaData.nama}</h3>
            <p class="text-muted">${siswaData.kelas} - ${siswaData.jurusan}</p>
            <span class="badge bg-success mb-3">Siswa Terverifikasi</span>
            <p class="text-start fw-light fst-italic px-1 mt-1">${siswaData.bio}</p>
            <hr>
            <div class="d-grid gap-2 mt-2">
                <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-envelope-fill me-1"></i>Hubungi Siswa</a>
                <a href="#" class="btn btn-warning btn-sm"><i class="bi bi-star-fill me-1"></i>Favoritkan</a>
                <a href="#" class="btn btn-success btn-sm"><i class="bi bi-share-fill me-1"></i>Bagikan Profil</a>
                <a href="#" class="btn btn-info btn-sm text-white"><i class="bi bi-download me-1"></i>Download CV</a>
                <a href="#" class="btn btn-secondary btn-sm"><i class="bi bi-cup-straw me-1"></i>Beri Apresiasi</a>
            </div>
        </div>
    `;
    const karyaSiswa = getSemuaKarya().filter(k => k.siswa === targetSiswaNama);
    if (karyaSiswa.length > 0) {
        let htmlContent = '';
        karyaSiswa.forEach(karya => {
            const displayFile = karya.thumbnail || karya.file;
            let imgHtml = karya.tipe === 'pdf'
                ? `<div class="d-flex align-items-center justify-content-center" style="background:#fbeed7;height:150px;">
                       <i class="bi bi-file-earmark-pdf text-danger" style="font-size:2.5em"></i>
                   </div>`
                : `<img src="${displayFile}" class="card-img-top" alt="${karya.judul}" style="height: 150px; object-fit: cover;">`;
            htmlContent += `
                <div class="col-md-6 mb-4">
                    <div class="card card-karya h-100 shadow-sm border-light">
                        ${imgHtml}
                        <div class="card-body">
                            <span class="badge bg-secondary">${karya.kategori}</span>
                            <h5 class="card-title mt-2">${karya.judul}</h5>
                            <a href="detail-karya.html?id=${karya.id}" class="btn btn-outline-primary btn-sm">Lihat Proyek</a>
                            <span class="float-end text-danger"><i class="bi bi-heart-fill"></i> ${karya.likes}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        karyaListContainer.innerHTML = htmlContent;
        document.getElementById('noKarya').style.display = 'none';
    } else {
        document.getElementById('noKarya').style.display = 'block';
    }
}

// =======================
// INISIALISASI
// =======================
document.addEventListener('DOMContentLoaded', () => {
    // Beranda
    if (document.getElementById('karya-unggulan')) {
        const karyaUnggulan = getSemuaKarya().slice(0, 3);
        renderKarya(karyaUnggulan, 'karya-unggulan');
    }
    // Galeri
    if (document.getElementById('galeri-semua-karya')) {
        populateFilters(); filterKarya();
        // Event listener filter (backup and safety: juga sudah otomatis pakai attribute di input/select)
        ['searchInput','categoryFilter','classFilter'].forEach(id=>{
            const el=document.getElementById(id); if(el) el.addEventListener('change',filterKarya);
        });
        const input=document.getElementById('searchInput');
        if(input) input.addEventListener('keyup',filterKarya);
    }
    // Detail karya
    renderDetailKarya(); 
    // Profile siswa
    renderProfilSiswa();
    // Form upload
    initUploadForm();

    // ====== Navbar menu auto highlight aktif ======
    // Simple auto active link for Bootstrap nav (optional enhancement)
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
    const path = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});
// =======================
// UPLOAD KARYA (upload.html)
// =======================
function initUploadForm() {
    const form = document.getElementById('uploadKaryaForm');
    if (!form) return;

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const judul = document.getElementById('judul').value.trim();
        const deskripsi = document.getElementById('deskripsi').value.trim();
        const gambar = document.getElementById('gambar').value.trim();
        const siswa = document.getElementById('siswa').value.trim();
        const kelas = document.getElementById('kelas').value;
        const kategori = document.getElementById('kategori').value;
        const alertBox = document.getElementById('formAlert');

        if (!alertBox) return;

        // Validasi wajib
        if (!judul || !deskripsi || !gambar || !siswa || !kelas || !kategori) {
            alertBox.innerHTML = '<div class="alert alert-warning">Mohon lengkapi semua field: judul, deskripsi, URL gambar, nama siswa, kelas, dan kategori.</div>';
            return;
        }

        // Validasi link gambar
        if (!/^https?:\/\/.+\.(png|jpg|jpeg|gif|webp)$/i.test(gambar)) {
            alertBox.innerHTML = '<div class="alert alert-warning">URL gambar harus diawali http(s):// dan diakhiri .jpg/.png/.gif/.webp</div>';
            return;
        }

        // Data galeri dari storage
        let galeriArr = [];
        try {
            const storageData = localStorage.getItem('galeriKarya');
            if (storageData) galeriArr = JSON.parse(storageData);
        } catch (err) {
            galeriArr = [];
        }

        // Tambah id unik otomatis (dari seluruh karya yang ada)
        const newId = getSemuaKarya().reduce((max, k) => Math.max(max, k.id || 0), 0) + 1;
        const data = {
            id: newId,
            judul,
            deskripsi,
            siswa,
            kelas,
            kategori,
            tipe: "image",
            file: gambar,
            thumbnail: gambar,
            likes: 0,
            waktu: Date.now()
        };
        galeriArr.push(data);
        localStorage.setItem('galeriKarya', JSON.stringify(galeriArr));

        // Feedback sukses
        alertBox.innerHTML = '<div class="alert alert-success">Karya berhasil diupload! <br> Otomatis diarahkan ke Galeri...</div>';
        this.reset();

        setTimeout(function(){
            window.location.href = "galeri.html";
        }, 1200);
    });
}

