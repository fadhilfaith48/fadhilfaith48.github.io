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
// HELPER KECIL
// =======================
function esc(s) {
    return String(s == null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function imgErr(el) {
    const media = el.closest('.karya-card__media') || el.closest('.detail-media');
    if (media) media.classList.add('is-empty');
    el.style.display = 'none';
}

// =======================
// FEEDBACK FITUR SIMULASI
// =======================
function simulasiInfo(link) {
    const nama = link ? (link.textContent || '').replace(/\s+/g, ' ').trim() || 'Fitur' : 'Fitur';
    let box = document.getElementById('simulasiToast');
    if (!box) {
        box = document.createElement('div');
        box.id = 'simulasiToast';
        box.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:24px;z-index:110;max-width:min(480px,92vw);width:100%;';
        document.body.appendChild(box);
    }
    box.innerHTML = `<div class="alert alert-warning toast-note" role="status">
        <span>“${esc(nama)}” masih berupa simulasi untuk demo.</span>
        <button type="button" class="toast-note__close" aria-label="Tutup">×</button>
    </div>`;
    const closeBtn = box.firstChild.querySelector('.toast-note__close');
    closeBtn.addEventListener('click', () => { if (box.firstChild) box.firstChild.remove(); });
    setTimeout(() => { if (box.firstChild) box.firstChild.remove(); }, 4500);
    return false;
}

// =======================
// RENDER KARTU KARYA (template editorial)
// =======================
function kartuMedia(karya) {
    const displayFile = karya.thumbnail || karya.file;
    const no = 'No. ' + String(karya.id || '').padStart(2, '0');
    if (karya.tipe === 'pdf') {
        return `<div class="karya-card__media karya-card__media--pdf">
            <span class="karya-card__no">${no}</span>
            <div class="pdf-plaque"><div class="plaque-doc"></div><span>Dokumen PDF</span></div>
        </div>`;
    }
    return `<div class="karya-card__media">
        <span class="karya-card__no">${no}</span>
        <img src="${esc(displayFile)}" alt="${esc(karya.judul)}" loading="lazy" onerror="imgErr(this)">
    </div>`;
}

function renderKarya(karyaArray, targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return;
    let htmlContent = '';
    karyaArray.forEach(karya => {
        htmlContent += `
        <article class="karya-card">
            <a class="karya-card__link" href="detail-karya.html?id=${karya.id}" aria-label="${esc(karya.judul)} — lihat detail">Lihat detail</a>
            ${kartuMedia(karya)}
            <div class="karya-card__body">
                <span class="tag">${esc(karya.kategori)}</span>
                <h3 class="karya-card__title">${esc(karya.judul)}</h3>
                <p class="karya-card__meta">
                    <span>${esc(karya.siswa)} · ${esc(karya.kelas)}</span>
                    <span class="like-num">♥ ${karya.likes || 0}</span>
                </p>
            </div>
        </article>`;
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
        container.innerHTML = '<div class="empty-state">Maaf, karya tidak ditemukan. Karya mungkin telah dihapus.</div>';
        return;
    }

    let mediaElement = '';
    if (karya.tipe === 'pdf') {
        mediaElement = `
            <div class="pdf-viewer">
                <iframe src="${esc(karya.file)}" title="Pratinjau ${esc(karya.judul)}"></iframe>
            </div>
            <a class="btn btn-outline btn-sm" href="${esc(karya.file)}" target="_blank" rel="noopener">Unduh / buka PDF penuh</a>`;
    } else {
        mediaElement = `
            <figure class="detail-media">
                <img src="${esc(karya.file)}" alt="${esc(karya.judul)}" onerror="imgErr(this)">
            </figure>`;
    }

    container.innerHTML = `
        <div class="detail-grid">
            <div class="detail-grid__media">
                ${mediaElement}
            </div>
            <aside class="info-panel">
                <span class="tag">${esc(karya.kategori)}</span>
                <span class="info-panel__no mono">Katalog No. ${karya.id}</span>
                <h2>${esc(karya.judul)}</h2>
                <p class="details-author">
                    <strong>${esc(karya.siswa)}</strong><br>
                    <span class="mono muted">${esc(karya.kelas)}</span>
                </p>
                <hr class="rule">
                <h4 class="h4-site">Deskripsi proyek</h4>
                <p class="muted">${esc(karya.deskripsi)}</p>
                <hr class="rule">
                <div class="info-actions">
                    <button type="button" class="btn" disabled aria-disabled="true">♥ ${karya.likes || 0} suka</button>
                    <a class="btn btn-outline" href="${esc(karya.file)}" target="_blank" rel="noopener">Lihat file penuh</a>
                </div>
                <span class="field__hint">Tombol suka akan diaktifkan pada rilis berikutnya.</span>
            </aside>
        </div>`;
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

    const siswaData = {
        nama: targetSiswaNama,
        kelas: "XI RPL 1",
        jurusan: "Sains & Teknologi",
        bio: "Saya memiliki minat besar dalam pemrograman, fisika terapan, dan robotika.",
        image: "assets/images/default-profile.png"
    };

    infoContainer.innerHTML = `
        <aside class="profile-card">
            <div class="profile-card__head">
                <button type="button" class="avatar-btn" data-open-zoom data-src="${siswaData.image}" aria-label="Perbesar foto profil">
                    <img src="${siswaData.image}" alt="Foto ${esc(siswaData.nama)}" class="avatar">
                </button>
                <div>
                    <h3 class="profile-card__name">${esc(siswaData.nama)}</h3>
                    <p class="profile-card__meta mono muted">${esc(siswaData.kelas)} · ${esc(siswaData.jurusan)}</p>
                </div>
            </div>
            <span class="tag tag--ok">● Siswa terverifikasi</span>
            <p class="profile-card__bio">${esc(siswaData.bio)}</p>
            <hr class="rule">
            <div class="action-row">
                <button type="button" onclick="return simulasiInfo(this)" class="btn btn-outline btn-sm">Hubungi siswa</button>
                <button type="button" onclick="return simulasiInfo(this)" class="btn btn-outline btn-sm">Favoritkan</button>
                <button type="button" onclick="return simulasiInfo(this)" class="btn btn-outline btn-sm">Bagikan profil</button>
                <button type="button" onclick="return simulasiInfo(this)" class="btn btn-outline btn-sm">Unduh CV</button>
                <button type="button" onclick="return simulasiInfo(this)" class="btn btn-outline btn-sm">Beri apresiasi</button>
            </div>
        </aside>`;

    const karyaSiswa = getSemuaKarya().filter(k => k.siswa === targetSiswaNama);
    if (karyaSiswa.length > 0) {
        let htmlContent = '';
        karyaSiswa.forEach(karya => {
            htmlContent += `
            <article class="karya-card">
                <a class="karya-card__link" href="detail-karya.html?id=${karya.id}" aria-label="${esc(karya.judul)} — lihat proyek">Lihat proyek</a>
                ${kartuMedia(karya)}
                <div class="karya-card__body">
                    <span class="tag">${esc(karya.kategori)}</span>
                    <h3 class="karya-card__title">${esc(karya.judul)}</h3>
                    <p class="karya-card__meta">
                        <span>${esc(karya.siswa)} · ${esc(karya.kelas)}</span>
                        <span class="like-num">♥ ${karya.likes || 0}</span>
                    </p>
                </div>
            </article>`;
        });
        karyaListContainer.innerHTML = htmlContent;
        document.getElementById('noKarya').style.display = 'none';
    } else {
        document.getElementById('noKarya').style.display = 'block';
    }
}

// =======================
// MODAL FOTO PROFIL (custom, tanpa bootstrap)
// =======================
function initProfileModal() {
    const modal = document.getElementById('profileImageModal');
    const img = document.getElementById('modalProfileImage');
    if (!modal || !img) return;

    const open = () => {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };
    const close = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    };

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-open-zoom]');
        if (trigger) {
            const src = trigger.getAttribute('data-src');
            if (src) img.src = src;
            open();
            return;
        }
        if (e.target.closest('.modal__close') || e.target.classList.contains('modal__backdrop')) {
            close();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
    });
}

// =======================
// REVEAL ON SCROLL
// =======================
function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-in'));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                en.target.classList.add('is-in');
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

// =======================
// LOGIN (login.html) - simulasi
// =======================
function initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const alertBox = document.getElementById('loginAlert');
        if (!alertBox) return;

        if (!email || !password) {
            alertBox.innerHTML = '<div class="alert alert-warning">Mohon isi surel dan kata sandi terlebih dahulu.</div>';
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alertBox.innerHTML = '<div class="alert alert-warning">Format surel tidak valid.</div>';
            return;
        }

        alertBox.innerHTML = '<div class="alert alert-success">Login berhasil (simulasi)! Mengarahkan ke beranda...</div>';
        this.reset();

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1200);
    });
}

// =======================
// UPLOAD KARYA (upload.html)
// =======================
function initUploadForm() {
    const form = document.getElementById('uploadKaryaForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const judul = document.getElementById('judul').value.trim();
        const deskripsi = document.getElementById('deskripsi').value.trim();
        const gambar = document.getElementById('gambar').value.trim();
        const siswa = document.getElementById('siswa').value.trim();
        const kelas = document.getElementById('kelas').value;
        const kategori = document.getElementById('kategori').value;
        const alertBox = document.getElementById('formAlert');

        if (!alertBox) return;

        if (!judul || !deskripsi || !gambar || !siswa || !kelas || !kategori) {
            alertBox.innerHTML = '<div class="alert alert-warning">Mohon lengkapi semua field: judul, deskripsi, URL gambar, nama siswa, kelas, dan kategori.</div>';
            return;
        }

        if (!/^https?:\/\/.+\.(png|jpg|jpeg|gif|webp)$/i.test(gambar)) {
            alertBox.innerHTML = '<div class="alert alert-warning">URL gambar harus diawali http(s):// dan diakhiri .jpg/.png/.gif/.webp</div>';
            return;
        }

        let galeriArr = [];
        try {
            const storageData = localStorage.getItem('galeriKarya');
            if (storageData) galeriArr = JSON.parse(storageData);
        } catch (err) {
            galeriArr = [];
        }

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

        alertBox.innerHTML = '<div class="alert alert-success">Karya berhasil diunggah! Otomatis diarahkan ke Galeri...</div>';
        this.reset();

        setTimeout(function () {
            window.location.href = "galeri.html";
        }, 1200);
    });
}

// =======================
// INISIALISASI
// =======================
document.addEventListener('DOMContentLoaded', () => {
    // Beranda
    if (document.getElementById('karya-unggulan')) {
        const karyaUnggulan = getSemuaKarya().slice().sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3);
        renderKarya(karyaUnggulan, 'karya-unggulan');
    }

    // Statistik beranda (data nyata)
    const allKarya = getSemuaKarya();
    const setStat = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };
    setStat('statKarya', allKarya.length);
    setStat('statKategori', new Set(allKarya.map(k => k.kategori)).size);
    setStat('statLikes', allKarya.reduce((a, k) => a + (k.likes || 0), 0));

    // Galeri
    if (document.getElementById('galeri-semua-karya')) {
        populateFilters(); filterKarya();
        ['searchInput', 'categoryFilter', 'classFilter'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', filterKarya);
        });
        const input = document.getElementById('searchInput');
        if (input) input.addEventListener('keyup', filterKarya);
    }

    // Detail karya
    renderDetailKarya();

    // Profil siswa
    renderProfilSiswa();

    // Form upload & login
    initUploadForm();
    initLoginForm();

    // Modal foto profil + reveal on scroll
    initProfileModal();
    initReveals();

    // Navbar auto-highlight halaman aktif
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
    const path = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});