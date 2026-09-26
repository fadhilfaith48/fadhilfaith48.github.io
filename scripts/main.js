// =====================
// DATA KARYA (Mock Data)
// =====================
const dataKarya = [
    { id: 1, judul: "Model Tata Surya Interaktif", siswa: "Andi Wijaya", kelas: "XII IPA 1", kategori: "Fisika", tipe: "image", file: "assets/uploads/images.jpg", thumbnail: "assets/uploads/images.jpg", likes: 45, deskripsi: "Model 3D yang dibuat menggunakan Arduino dan motor servo. Proyek ini memenangkan kompetisi sains sekolah tahun ini." },
    { id: 2, judul: "Esai: Dampak AI pada Pendidikan", siswa: "Budi Santoso", kelas: "XI IPS 2", kategori: "B. Indonesia", tipe: "pdf", file: "assets/uploads/Dampak-AI-dipendidikan.pdf", thumbnail: "assets/uploads/Dampak-AI-dipendidikan.pdf", likes: 62, deskripsi: "Analisis mendalam tentang masa depan guru dan siswa di era kecerdasan buatan, termasuk studi kasus di beberapa negara Asia." },
    { id: 3, judul: "Aplikasi Kalkulator Sederhana", siswa: "Andi Wijaya", kelas: "XII IPA 1", kategori: "Informatika", tipe: "image", file: "assets/uploads/ewallet.jpg", thumbnail: "assets/uploads/ewallet.jpg", likes: 30, deskripsi: "Dibuat menggunakan HTML, CSS, dan JavaScript murni. Memiliki fungsi penambahan, pengurangan, perkalian, dan pembagian." },
    { id: 4, judul: "Lukisan Abstrak 'Kehidupan Kota'", siswa: "Citra Dewi", kelas: "X Bahasa 3", kategori: "Seni Rupa", tipe: "image", file: "assets/uploads/budaya-jawa.jpg", thumbnail: "assets/uploads/budaya-jawa.jpg", likes: 105, deskripsi: "Menggunakan cat akrilik dengan teknik palet pisau untuk menampilkan dinamika dan hiruk pikuk kehidupan urban." },
    { id: 5, judul: "Makalah Sejarah Kerajaan Majapahit", siswa: "Budi Santoso", kelas: "XI IPS 2", kategori: "Sejarah", tipe: "pdf", file: "assets/uploads/Sejarah Kerajaan Majapahit yang merupakan salah satu kerajaan terbesar dalam sejarah Nusantara.pdf", thumbnail: "assets/uploads/images.jpg", likes: 21, deskripsi: "Penelitian komprehensif tentang struktur pemerintahan dan pengaruh Majapahit di Asia Tenggara." },
    { id: 6, judul: "Robot Tangan Prostetik", siswa: "Fadhil Faith", kelas: "XI RPL 1", kategori: "Fisika", tipe: "image", file: "assets/uploads/robottangan.jpg", thumbnail: "assets/uploads/robottangan.jpg", likes: 76, deskripsi: "Prototipe tangan prostetik sederhana yang digerakkan menggunakan sensor flex dan servo. Proyek ini dibuat untuk tugas akhir praktik fisika terapan." },
    { id: 7, judul: "Aplikasi Kalkulator Pintar", siswa: "Fadhil Faith", kelas: "XI RPL 1", kategori: "Informatika", tipe: "image", file: "assets/uploads/kalkulator.png", thumbnail: "assets/uploads/kalkulator.png", likes: 58, deskripsi: "Aplikasi kalkulator berbasis web dengan fitur riwayat perhitungan dan mode konversi satuan, dibangun menggunakan HTML, CSS, dan JavaScript." },
    { id: 8, judul: "Lukisan Kehidupan Kota", siswa: "Fadhil Faith", kelas: "XI RPL 1", kategori: "Seni Rupa", tipe: "image", file: "assets/uploads/lukisan-kota.jpg", thumbnail: "assets/uploads/lukisan-kota.jpg", likes: 91, deskripsi: "Lukisan cat air yang menggambarkan dinamika dan warna kehidupan kota metropolitan pada sore hari." },
];

// =======================
// HELPER LOCAL STORAGE
// =======================
function bacaLok(k, fallback) {
    try { const r = localStorage.getItem(k); return r ? JSON.parse(r) : fallback; } catch (e) { return fallback; }
}
function simpanLok(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

function pengunjungKey() {
    let k = localStorage.getItem('galeriAnon');
    if (!k) { k = 'g-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); localStorage.setItem('galeriAnon', k); }
    return k;
}

// =======================
// SESI LOGIN
// =======================
function getSesi() { try { return JSON.parse(localStorage.getItem('galeriSesi')) || null; } catch (e) { return null; } }
function setSesi(s) { localStorage.setItem('galeriSesi', JSON.stringify(s)); }
function hapusSesi() { localStorage.removeItem('galeriSesi'); }

function renderNavbarSesi() {
    const holder = document.getElementById('navSesi');
    if (!holder) return;
    const sesi = getSesi();
    if (!sesi) { holder.innerHTML = '<a class="btn btn-outline btn-sm" href="login.html">Masuk</a>'; return; }
    const inisial = (sesi.nama || '?').trim().charAt(0).toUpperCase();
    holder.innerHTML = `<div class="nav-cta-wrap">
        <a class="sesi-chip" href="profile.html" title="Buka profil Anda">
            <span class="sesi-chip__ava">${esc(inisial)}</span>
            <span class="sesi-chip__nama">${esc(sesi.nama.split(' ')[0])}</span>
        </a>
        <button type="button" class="btn btn-outline btn-sm" id="btnLogout">Keluar</button>
    </div>`;
    const out = holder.querySelector('#btnLogout');
    if (out) out.addEventListener('click', () => { hapusSesi(); renderNavbarSesi(); toastPesan('Sesi berakhir. Sampai jumpa!'); });
}

// =======================
// GABUNGAN DATA
// =======================
function getSemuaKarya() {
    let stored = [];
    try { const raw = localStorage.getItem('galeriKarya'); if (raw) stored = JSON.parse(raw); } catch (e) { stored = []; }
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
function toastPesan(teks, jenis) {
    let box = document.getElementById('appToast');
    if (!box) {
        box = document.createElement('div');
        box.id = 'appToast';
        box.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:24px;z-index:120;max-width:min(480px,92vw);width:100%;';
        document.body.appendChild(box);
    }
    box.innerHTML = `<div class="alert ${jenis === 'warn' ? 'alert-warning' : 'alert-success'} toast-note" role="status">
        <span>${esc(teks)}</span>
        <button type="button" class="toast-note__close" aria-label="Tutup">×</button>
    </div>`;
    box.firstChild.querySelector('.toast-note__close').addEventListener('click', () => { if (box.firstChild) box.firstChild.remove(); });
    clearTimeout(box._t);
    box._t = setTimeout(() => { if (box.firstChild) box.firstChild.remove(); }, 4000);
}
function salinTeks(texto) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texto);
    return new Promise((res, rej) => {
        const ta = document.createElement('textarea');
        ta.value = texto; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy') ? res() : rej(); } catch (e) { rej(e); }
        ta.remove();
    });
}

// simulasi (cadangan, sebagian besar kini berfungsi nyata)
function simulasiInfo(link) {
    toastPesan((link ? (link.textContent || '').replace(/\s+/g, ' ').trim() : 'Fitur') + ' masih berupa simulasi untuk demo.', 'warn');
    return false;
}

// =======================
// LIKES
// =======================
function likeData(id) {
    const map = bacaLok('galeriLikes', {});
    const set = bacaLok('galeriLikesSet', {});
    return { delta: map[id] || 0, liked: !!(set[id] && set[id][pengunjungKey()]) };
}
function effLikes(k) { return (k.likes || 0) + likeData(k.id).delta; }
function toggleLike(id) {
    const map = bacaLok('galeriLikes', {});
    const set = bacaLok('galeriLikesSet', {});
    const key = pengunjungKey();
    set[id] = set[id] || {}; map[id] = map[id] || 0;
    let liked;
    if (set[id][key]) { delete set[id][key]; map[id]--; liked = false; }
    else { set[id][key] = 1; map[id]++; liked = true; }
    if (map[id] <= 0) delete map[id];
    if (!Object.keys(set[id]).length) delete set[id];
    if (Object.keys(map).length) simpanLok('galeriLikes', map); else localStorage.removeItem('galeriLikes');
    if (Object.keys(set).length) simpanLok('galeriLikesSet', set); else localStorage.removeItem('galeriLikesSet');
    return { liked, delta: map[id] || 0 };
}

// =======================
// KOMENTAR
// =======================
const KOMENTAR_SEMAI = [
    { nama: 'Bambang S.', peran: 'Guru', teks: 'Proyek ini sangat inovatif! Penggunaan Arduino-nya sangat rapi.', waktu: 'semai' },
    { nama: 'Siti K.', peran: 'Siswa', teks: 'Salut! Inspiratif banget, aku mau coba bikin versi lain.', waktu: 'semai' }
];
function getKomentar(id) { return bacaLok('galeriKomentar', {})[id] || []; }
function simpanKomentar(id, arr) { const all = bacaLok('galeriKomentar', {}); all[id] = arr; simpanLok('galeriKomentar', all); }
function waktuLabel(ts) {
    if (ts === 'semai') return 'dari pameran';
    const m = Math.floor((Date.now() - ts) / 60000);
    if (m < 1) return 'baru saja';
    if (m < 60) return m + ' mnt lalu';
    const h = Math.floor(m / 60);
    if (h < 24) return h + ' jam lalu';
    const d = new Date(ts);
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
}
function renderKomentar(id) {
    const list = document.getElementById('commentList');
    if (!list) return;
    const stored = getKomentar(id);
    let h = '';
    stored.forEach((c, si) => {
        const boleh = c.kunci === pengunjungKey();
        h += `<div class="comment">
            <div class="comment__row">
                <p class="comment__meta"><strong>${esc(c.nama)}</strong> · ${esc(c.peran || 'Pengunjung')}</p>
                <span class="comment__time">${waktuLabel(c.waktu)}</span>
            </div>
            <p class="comment__body">${esc(c.teks)}</p>
            ${boleh ? `<button type="button" class="comment__del" data-del="${si}">Hapus</button>` : ''}
        </div>`;
    });
    if (!stored.length) h += KOMENTAR_SEMAI.map(c =>
        `<div class="comment">
            <div class="comment__row">
                <p class="comment__meta"><strong>${esc(c.nama)}</strong> · ${esc(c.peran)}</p>
                <span class="comment__time">${waktuLabel(c.waktu)}</span>
            </div>
            <p class="comment__body">${esc(c.teks)}</p>
        </div>`).join('');
    if (!h) h = '<p class="empty-state">Belum ada komentar. Jadilah yang pertama berkomentar.</p>';
    list.innerHTML = h;
    list.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
        const si = parseInt(b.getAttribute('data-del'), 10);
        const arr = getKomentar(id).filter((c, i) => !(i === si && c.kunci === pengunjungKey()));
        simpanKomentar(id, arr);
        renderKomentar(id);
        toastPesan('Komentar dihapus.');
    }));
}
function initKommentarForm() {
    const form = document.getElementById('commentForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const id = parseInt(getUrlParameter('id'), 10);
        if (isNaN(id)) return;
        const nama = (document.getElementById('commentNama').value || '').trim() || 'Tamu anonim';
        const teks = (document.getElementById('commentBaru').value || '').trim();
        if (!teks) { toastPesan('Komentar tidak boleh kosong.', 'warn'); return; }
        const sesi = getSesi();
        const arr = getKomentar(id);
        arr.push({ nama, peran: sesi ? 'Anggota' : 'Pengunjung', teks, waktu: Date.now(), kunci: pengunjungKey() });
        simpanKomentar(id, arr);
        renderKomentar(id);
        form.reset();
        toastPesan('Komentar terkirim. Terima kasih!');
    });
}

// =======================
// RENDER KARTU
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
    container.innerHTML = karyaArray.map(k => `
        <article class="karya-card">
            <a class="karya-card__link" href="detail-karya.html?id=${k.id}" aria-label="${esc(k.judul)} — lihat detail">Lihat detail</a>
            ${kartuMedia(k)}
            <div class="karya-card__body">
                <span class="tag">${esc(k.kategori)}</span>
                <h3 class="karya-card__title">${esc(k.judul)}</h3>
                <p class="karya-card__meta">
                    <span>${esc(k.siswa)} · ${esc(k.kelas)}</span>
                    <span class="like-num">♥ ${effLikes(k)}</span>
                </p>
            </div>
        </article>`).join('');
}

// =======================
// FILTER GALERI
// =======================
function populateFilters() {
    const sel = document.getElementById('categoryFilter');
    if (!sel) return;
    [...new Set(getSemuaKarya().map(k => k.kategori))].sort().forEach(cat => {
        const o = document.createElement('option');
        o.value = cat; o.textContent = cat;
        sel.appendChild(o);
    });
}
function filterKarya() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const classFilter = document.getElementById('classFilter');
    const noResult = document.getElementById('noResult');
    const term = searchInput ? searchInput.value.toLowerCase() : '';
    const cat = categoryFilter ? categoryFilter.value : 'all';
    const cls = classFilter ? classFilter.value : 'all';
    const kelasOk = cls === 'all' ||
        String(k.kelas).trim() === cls ||
        String(k.kelas).trim().startsWith(cls + ' ');
    const hasil = getSemuaKarya().filter(k =>
        (k.judul.toLowerCase().includes(term) || k.siswa.toLowerCase().includes(term)) &&
        (cat === 'all' || k.kategori === cat) &&
        kelasOk);
    renderKarya(hasil, 'galeri-semua-karya');
    if (noResult) noResult.style.display = hasil.length === 0 ? 'block' : 'none';
}

// =======================
// DETAIL
// =======================
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const r = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const m = r.exec(location.search);
    return m === null ? '' : decodeURIComponent(m[1].replace(/\+/g, ' '));
}
function renderDetailKarya() {
    const container = document.getElementById('karya-detail-container');
    if (!container) return;
    const karya = getSemuaKarya().find(k => k.id === parseInt(getUrlParameter('id'), 10));
    if (!karya) { container.innerHTML = '<div class="empty-state">Maaf, karya tidak ditemukan. Karya mungkin telah dihapus.</div>'; return; }

    let media = '';
    if (karya.tipe === 'pdf') {
        const dataUrl = /^data:/i.test(karya.file || '');
        media = dataUrl
            ? `<div class="pdf-viewer pdf-viewer--local"><p class="pdf-note">Berkas PDF tersimpan aman di perangkat ini dan dapat diunduh di bawah.</p></div>`
            : `<div class="pdf-viewer"><iframe src="${esc(karya.file)}" title="Pratinjau ${esc(karya.judul)}"></iframe></div>`;
        media += `
            <a class="btn btn-outline btn-sm" href="${esc(karya.file)}" target="_blank" rel="noopener">Unduh / buka PDF penuh</a>`;
    } else {
        media = `<figure class="detail-media"><img src="${esc(karya.file)}" alt="${esc(karya.judul)}" onerror="imgErr(this)"></figure>`;
    }
    const ld = likeData(karya.id);
    const n = (karya.likes || 0) + ld.delta;

    container.innerHTML = `
        <div class="detail-grid">
            <div class="detail-grid__media">${media}</div>
            <aside class="info-panel">
                <span class="tag">${esc(karya.kategori)}</span>
                <span class="info-panel__no mono">Katalog No. ${karya.id}</span>
                <h2>${esc(karya.judul)}</h2>
                <p class="details-author">
                    <strong>${esc(karya.siswa)}</strong><br>
                    <span class="mono muted">${esc(karya.kelas)}</span>
                </p>
                <hr class="rule">
                <h4>Deskripsi proyek</h4>
                <p class="muted">${esc(karya.deskripsi)}</p>
                <hr class="rule">
                <div class="info-actions">
                    <button type="button" class="btn btn-like${ld.liked ? ' is-liked' : ''}" data-like="${karya.id}">${ld.liked ? '♥' : '♡'} ${n} suka</button>
                    <a class="btn btn-outline" href="${esc(karya.file)}" target="_blank" rel="noopener">Lihat file penuh</a>
                </div>
            </aside>
        </div>`;
    document.title = karya.judul + " | Galeri Siswa";
}
function initDetailLike() {
    const container = document.getElementById('karya-detail-container');
    if (!container) return;
    container.addEventListener('click', e => {
        const btn = e.target.closest('[data-like]');
        if (!btn) return;
        const id = parseInt(btn.getAttribute('data-like'), 10);
        const karya = getSemuaKarya().find(k => k.id === id);
        if (!karya) return;
        const { liked, delta } = toggleLike(id);
        const n = (karya.likes || 0) + delta;
        btn.textContent = (liked ? '♥' : '♡') + ' ' + n + ' suka';
        btn.classList.toggle('is-liked', liked);
        toastPesan(liked ? 'Kamu menyukai karya ini.' : 'Suka dibatalkan.');
    });
}

// =======================
// PROFIL + AKSI (berfungsi)
// =======================
function getFavorit() { return bacaLok('galeriFavorit', []); }
function isFavorit(nama) { return getFavorit().includes(nama); }
function toggleFavorit(nama) {
    const f = getFavorit();
    const i = f.indexOf(nama);
    if (i > -1) { f.splice(i, 1); return false; }
    f.push(nama);
    simpanLok('galeriFavorit', f);
    return true;
}
function sudahApresiasi(nama) { return !!(bacaLok('galeriApresiasiSet', {})[nama] || {})[pengunjungKey()]; }
function beriApresiasi(nama) {
    if (sudahApresiasi(nama)) return false;
    const map = bacaLok('galeriApresiasi', {}); map[nama] = map[nama] || 0; map[nama]++;
    const set = bacaLok('galeriApresiasiSet', {}); set[nama] = set[nama] || {}; set[nama][pengunjungKey()] = 1;
    simpanLok('galeriApresiasi', map); simpanLok('galeriApresiasiSet', set);
    return true;
}
function bukaKontak() {
    const modal = document.getElementById('kontakModal');
    const body = document.getElementById('kontakModalBody');
    if (!modal || !body) return;
    const email = 'fadhil.faith@sekolah.sch.id';
    const wa = '+62 812-3456-7890';
    body.innerHTML = `
        <h3 class="card-panel__title" style="font-size:1.3rem;margin-bottom:.4rem">Hubungi siswa</h3>
        <hr class="rule">
        <p class="comment__meta"><strong>Fadhil Faith</strong> · XI RPL 1</p>
        <div class="kontak-row"><span class="mono">Surel</span><strong>${email}</strong>
            <button class="btn btn-sm btn-outline" type="button" data-salin="${email}">Salin</button></div>
        <div class="kontak-row"><span class="mono">WhatsApp</span><strong>${wa}</strong>
            <button class="btn btn-sm btn-outline" type="button" data-salin="${wa}">Salin</button></div>
        <p class="field__hint">Demo: balasan akan dikirim ke alamat di atas.</p>`;
    openModalEl(modal);
    body.querySelectorAll('[data-salin]').forEach(b => b.addEventListener('click', () => {
        salinTeks(b.getAttribute('data-salin')).then(() => toastPesan('Berhasil disalin!')).catch(() => toastPesan('Gagal menyalin.', 'warn'));
    }));
}
function bagikanProfil() {
    const url = location.href;
    const text = 'Lihat profil Fadhil Faith di Galeri Proyek Sekolah!';
    if (navigator.share) { navigator.share({ title: 'Galeri Proyek', text, url }).catch(() => { }); }
    else salinTeks(url).then(() => toastPesan('Link profil disalin ke clipboard.')).catch(() => toastPesan('Gagal menyalin link.', 'warn'));
}
function unduhCV() {
    const siswa = { nama: 'Fadhil Faith', kelas: 'XI RPL 1', jurusan: 'Sains & Teknologi', email: 'fadhil.faith@sekolah.sch.id', bio: 'Saya memiliki minat besar dalam pemrograman, fisika terapan, dan robotika.' };
    const karya = getSemuaKarya().filter(k => k.siswa === siswa.nama).map(k => '- ' + k.judul + ' (' + k.kategori + ', ' + k.kelas + ')');
    const txt = [
        '===============================================',
        'CURRICULUM VITAE / PORTOFOLIO',
        'Galeri Proyek Siswa Sekolah',
        '===============================================',
        '',
        'Nama     : ' + siswa.nama,
        'Kelas    : ' + siswa.kelas,
        'Jurusan  : ' + siswa.jurusan,
        'Surel    : ' + siswa.email,
        '',
        'PROFIL',
        '------',
        siswa.bio,
        '',
        'KARYA TERPILIH',
        '--------------',
        karya.join('\n') || '- belum ada',
        '',
        'Diunduh  : ' + new Date().toLocaleString('id-ID'),
        'Sumber   : ' + location.href,
        ''
    ].join('\n');
    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CV-Fadhil-Faith.txt';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 300);
    toastPesan('CV berhasil diunduh.');
}
function renderProfilSiswa() {
    const target = 'Fadhil Faith';
    const info = document.getElementById('siswa-info');
    const list = document.getElementById('karya-siswa-list');
    if (!info || !list) return;
    const siswa = { nama: target, kelas: 'XI RPL 1', jurusan: 'Sains & Teknologi', bio: 'Saya memiliki minat besar dalam pemrograman, fisika terapan, dan robotika.', image: 'assets/images/default-profile.png' };
    const fav = isFavorit(target);
    const apres = sudahApresiasi(target);
    const apresCount = bacaLok('galeriApresiasi', {})[target] || 0;

    info.innerHTML = `
        <aside class="profile-card">
            <div class="profile-card__head">
                <button type="button" class="avatar-btn" data-open-zoom data-src="${siswa.image}" aria-label="Perbesar foto profil">
                    <img src="${siswa.image}" alt="Foto ${esc(siswa.nama)}" class="avatar">
                </button>
                <div>
                    <h3 class="profile-card__name">${esc(siswa.nama)}</h3>
                    <p class="profile-card__meta mono muted">${esc(siswa.kelas)} · ${esc(siswa.jurusan)}</p>
                </div>
            </div>
            <span class="tag tag--ok">● Siswa terverifikasi</span>
            <p class="profile-card__bio">${esc(siswa.bio)}</p>
            <hr class="rule">
            <div class="action-row">
                <button type="button" class="btn btn-outline btn-sm" data-aksi="kontak">Hubungi siswa</button>
                <button type="button" class="btn btn-outline btn-sm btn-like${fav ? ' is-liked' : ''}" data-aksi="favorit">${fav ? '★' : '☆'} Favoritkan</button>
                <button type="button" class="btn btn-outline btn-sm" data-aksi="bagikan">Bagikan profil</button>
                <button type="button" class="btn btn-outline btn-sm" data-aksi="cv">Unduh CV</button>
                <button type="button" class="btn btn-outline btn-sm" data-aksi="apresiasi"${apres ? ' disabled' : ''}>${apres ? '✓ Terkirim' : '♪ Beri apresiasi'}</button>
            </div>
            <p class="field__hint mono">Apresiasi diterima: <strong>${apresCount}</strong></p>
        </aside>`;

    const karya = getSemuaKarya().filter(k => k.siswa === target);
    list.innerHTML = karya.map(k => `
        <article class="karya-card">
            <a class="karya-card__link" href="detail-karya.html?id=${k.id}" aria-label="${esc(k.judul)} — lihat proyek">Lihat proyek</a>
            ${kartuMedia(k)}
            <div class="karya-card__body">
                <span class="tag">${esc(k.kategori)}</span>
                <h3 class="karya-card__title">${esc(k.judul)}</h3>
                <p class="karya-card__meta">
                    <span>${esc(k.siswa)} · ${esc(k.kelas)}</span>
                    <span class="like-num">♥ ${effLikes(k)}</span>
                </p>
            </div>
        </article>`).join('');
    document.getElementById('noKarya').style.display = karya.length ? 'none' : 'block';
}
function initProfileActions() {
    const info = document.getElementById('siswa-info');
    if (!info) return;
    info.addEventListener('click', e => {
        const btn = e.target.closest('[data-aksi]');
        if (!btn) return;
        const nama = 'Fadhil Faith';
        const aksi = btn.getAttribute('data-aksi');
        if (aksi === 'kontak') bukaKontak();
        else if (aksi === 'favorit') {
            const f = toggleFavorit(nama);
            btn.classList.toggle('is-liked', f);
            btn.textContent = f ? '★ Favoritkan' : '☆ Favoritkan';
            toastPesan(f ? 'Ditambahkan ke favorit.' : 'Dihapus dari favorit.');
        } else if (aksi === 'bagikan') bagikanProfil();
        else if (aksi === 'cv') unduhCV();
        else if (aksi === 'apresiasi') {
            if (beriApresiasi(nama)) { btn.textContent = '✓ Terkirim'; btn.setAttribute('disabled', ''); toastPesan('Apresiasi terkirim! Terima kasih.'); }
            else toastPesan('Kamu sudah memberi apresiasi sebelumnya.', 'warn');
        }
    });
}

// =======================
// MODAL (custom)
// =======================
function openModalEl(m) { m.classList.add('is-open'); m.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); }
function closeModalEl(m) { m.classList.remove('is-open'); m.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); }
function initModals() {
    const modals = document.querySelectorAll('.modal');
    if (!modals.length) return;
    document.addEventListener('click', e => {
        const t = e.target;
        const tg = t.closest('[data-open-zoom]');
        if (tg) {
            const m = document.getElementById('profileImageModal');
            const src = tg.getAttribute('data-src');
            if (m) { const img = m.querySelector('.modal__panel img'); if (img && src) img.src = src; openModalEl(m); }
            return;
        }
        if (t.closest('.modal__close')) { const m = t.closest('.modal'); if (m) closeModalEl(m); return; }
        if (t.classList.contains('modal__backdrop')) { const m = t.parentElement; if (m && m.classList.contains('modal')) closeModalEl(m); }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modals.forEach(m => { if (m.classList.contains('is-open')) closeModalEl(m); }); });
}

// =======================
// REVEAL
// =======================
function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-in')); return; }
    const io = new IntersectionObserver(es => {
        es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

// =======================
// HALAMAN FAVORIT
// =======================
function renderKaryaFavorit() {
    const container = document.getElementById('galeri-favorit');
    const empty = document.getElementById('favoritEmpty');
    const count = document.getElementById('favoritCount');
    if (!container) return;
    const fav = bacaLok('galeriFavorit', []);
    const karya = getSemuaKarya().filter(k => fav.includes(k.siswa));
    container.innerHTML = karya.map(k => `
        <article class="karya-card">
            <a class="karya-card__link" href="detail-karya.html?id=${k.id}" aria-label="${esc(k.judul)} — lihat detail">Lihat detail</a>
            ${kartuMedia(k)}
            <div class="karya-card__body">
                <span class="tag">${esc(k.kategori)}</span>
                <h3 class="karya-card__title">${esc(k.judul)}</h3>
                <p class="karya-card__meta">
                    <span>${esc(k.siswa)} · ${esc(k.kelas)}</span>
                    <span class="like-num">♥ ${effLikes(k)}</span>
                </p>
                <button type="button" class="btn btn-ghost btn-sm karya-card__fav" data-unfav="${esc(k.siswa)}">★ Hapus dari favorit</button>
            </div>
        </article>`).join('');
    if (count) count.textContent = karya.length + ' karya tersimpan';
    if (empty) empty.style.display = karya.length ? 'none' : 'block';
    container.querySelectorAll('[data-unfav]').forEach(b => b.addEventListener('click', () => {
        const nama = b.getAttribute('data-unfav');
        const f = bacaLok('galeriFavorit', []);
        const i = f.indexOf(nama);
        if (i > -1) { f.splice(i, 1); simpanLok('galeriFavorit', f); }
        renderKaryaFavorit();
        toastPesan('Dihapus dari favorit.');
    }));
}

// =======================
// GERBANG UPLOAD (wajib login)
// =======================
function initUploadGate() {
    const form = document.getElementById('uploadKaryaForm');
    if (!form) return;
    const gate = document.getElementById('uploadGate');
    const sesi = getSesi();
    if (!sesi) {
        if (gate) gate.hidden = false;
        form.hidden = true;
        if (gate) gate.querySelectorAll('a[href*="login.html"]').forEach(a => {
            a.addEventListener('click', () => localStorage.setItem('galeriRedirect', 'upload.html'));
        });
        return;
    }
    if (gate) gate.hidden = true;
    // Isi otomatis nama & kelas dari sesi
    const siswa = document.getElementById('siswa');
    const kelas = document.getElementById('kelas');
    if (sesi.nama && siswa) siswa.value = sesi.nama;
    if (sesi.kelas && kelas) {
        const ada = Array.from(kelas.options).some(o => o.value === sesi.kelas);
        if (ada) kelas.value = sesi.kelas;
    }
}

// =======================
// LOGIN / DAFTAR / LUPA
// =======================
function redirectSetelahLogin() {
    const param = new URLSearchParams(location.search).get('next');
    const simpan = localStorage.getItem('galeriRedirect');
    localStorage.removeItem('galeriRedirect');
    return param || simpan || 'index.html';
}
function initPanelSwitch() {
    document.addEventListener('click', e => {
        const sw = e.target.closest('[data-switch]');
        if (!sw) return;
        e.preventDefault();
        document.querySelectorAll('.login-panel').forEach(p => p.classList.remove('is-active'));
        const target = document.getElementById(sw.getAttribute('data-switch'));
        if (target) target.classList.add('is-active');
    });
    // Buka panel tertentu lewat ?panel=register
    const panel = new URLSearchParams(location.search).get('panel');
    if (panel === 'register') {
        document.querySelectorAll('.login-panel').forEach(p => p.classList.remove('is-active'));
        const reg = document.getElementById('registerForm');
        if (reg) reg.classList.add('is-active');
    }
}
function initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim().toLowerCase();
        const pass = document.getElementById('password').value.trim();
        const box = document.getElementById('loginAlert');
        if (!box) return;
        if (!email || !pass) { box.innerHTML = '<div class="alert alert-warning">Mohon isi surel dan kata sandi terlebih dahulu.</div>'; return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { box.innerHTML = '<div class="alert alert-warning">Format surel tidak valid.</div>'; return; }
        if (pass.length < 6) { box.innerHTML = '<div class="alert alert-warning">Kata sandi minimal 6 karakter.</div>'; return; }
        const akun = bacaLok('galeriAkun', []).find(a => a.email === email);
        if (akun && akun.password !== pass) { box.innerHTML = '<div class="alert alert-warning">Kata sandi tidak cocok dengan akun terdaftar.</div>'; return; }
        const nama = akun ? akun.nama : email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        setSesi({ nama, email, kelas: akun ? akun.kelas : '', masuk: Date.now() });
        box.innerHTML = '<div class="alert alert-success">Login berhasil! Mengarahkan ke beranda...</div>';
        form.reset();
        setTimeout(() => { location.href = redirectSetelahLogin(); }, 1000);
    });
}
function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const nama = document.getElementById('regNama').value.trim();
        const email = document.getElementById('regEmail').value.trim().toLowerCase();
        const pass = document.getElementById('regPassword').value.trim();
        const kelas = document.getElementById('regKelas').value;
        const box = document.getElementById('registerAlert');
        if (!box) return;
        if (!nama || !email || !pass) { box.innerHTML = '<div class="alert alert-warning">Lengkapi nama, surel, dan kata sandi.</div>'; return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { box.innerHTML = '<div class="alert alert-warning">Format surel tidak valid.</div>'; return; }
        if (pass.length < 6) { box.innerHTML = '<div class="alert alert-warning">Kata sandi minimal 6 karakter.</div>'; return; }
        const akun = bacaLok('galeriAkun', []);
        if (akun.some(a => a.email === email)) { box.innerHTML = '<div class="alert alert-warning">Surel sudah terdaftar. Silakan masuk.</div>'; return; }
        akun.push({ nama, email, password: pass, kelas });
        simpanLok('galeriAkun', akun);
        setSesi({ nama, email, kelas, masuk: Date.now() });
        box.innerHTML = '<div class="alert alert-success">Akun dibuat & login! Mengarahkan ke beranda...</div>';
        setTimeout(() => { location.href = redirectSetelahLogin(); }, 1000);
    });
}
function initForgotForm() {
    const btn = document.getElementById('lupaSubmit');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const email = (document.getElementById('lupaEmail').value || '').trim().toLowerCase();
        const box = document.getElementById('forgotAlert');
        if (!box) return;
        if (!email) { box.innerHTML = '<div class="alert alert-warning">Masukkan surel terlebih dahulu.</div>'; return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { box.innerHTML = '<div class="alert alert-warning">Format surel tidak valid.</div>'; return; }
        const akun = bacaLok('galeriAkun', []).find(a => a.email === email);
        if (!akun) { box.innerHTML = '<div class="alert alert-warning">Surel tidak terdaftar di demo ini.</div>'; return; }
        box.innerHTML = `<div class="alert alert-success">Tautan pemulihan terkirim (simulasi).<br>Kata sandi sementara: <strong>${esc(akun.password)}</strong>. Gunakan lalu masuk &amp; ganti.</div>`;
    });
}

// =======================
// UPLOAD (file + URL)
// =======================
let fileBerkas = null;
let fileTipe = '';
function initUploadForm() {
    const form = document.getElementById('uploadKaryaForm');
    if (!form) return;
    const fileIn = document.getElementById('fileKarya');
    const prev = document.getElementById('uploadPreview');
    if (fileIn) fileIn.addEventListener('change', () => {
        const f = fileIn.files && fileIn.files[0];
        prev.innerHTML = '';
        fileBerkas = null; fileTipe = '';
        if (!f) return;
        if (f.size > 2.6 * 1024 * 1024) { prev.innerHTML = '<span class="alert alert-warning">File terlalu besar untuk demo ini (maks ±2,5 MB).</span>'; return; }
        const isPdf = /\.pdf$/i.test(f.name);
        const isImg = /\.(jpe?g|png|gif|webp)$/i.test(f.name);
        if (!isPdf && !isImg) { prev.innerHTML = '<span class="alert alert-warning">Jenis file tidak didukung. Gunakan gambar atau PDF.</span>'; return; }
        const reader = new FileReader();
        reader.onload = () => {
            fileBerkas = reader.result; fileTipe = isPdf ? 'pdf' : 'image';
            prev.innerHTML = isPdf
                ? `<span class="pdf-tag">● Dokumen PDF terpilih: ${esc(f.name)}</span>`
                : `<img src="${reader.result}" alt="Pratinjau unggahan">`;
        };
        reader.readAsDataURL(f);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const judul = document.getElementById('judul').value.trim();
        const deskripsi = document.getElementById('deskripsi').value.trim();
        const gambar = document.getElementById('gambar').value.trim();
        const siswa = document.getElementById('siswa').value.trim();
        const kelas = document.getElementById('kelas').value;
        const kategori = document.getElementById('kategori').value;
        const box = document.getElementById('formAlert');
        if (!box) return;

        if (!judul || !deskripsi || !siswa || !kelas || !kategori) {
            box.innerHTML = '<div class="alert alert-warning">Mohon lengkapi: judul, deskripsi, nama siswa, kelas, dan kategori.</div>';
            return;
        }
        let tipe = fileBerkas ? fileTipe : 'image';
        let sumber = fileBerkas || gambar;
        if (!fileBerkas) {
            if (!sumber) { box.innerHTML = '<div class="alert alert-warning">Unggah file ATAU isi URL gambar.</div>'; return; }
            if (!/^https?:\/\/.+\.(png|jpg|jpeg|gif|webp)$/i.test(sumber)) {
                box.innerHTML = '<div class="alert alert-warning">URL gambar harus diawali http(s):// dan berakhiran .jpg/.png/.gif/.webp</div>';
                return;
            }
        }

        let arr = bacaLok('galeriKarya', []);
        const newId = getSemuaKarya().reduce((m, k) => Math.max(m, k.id || 0), 0) + 1;
        arr.push({ id: newId, judul, deskripsi, siswa, kelas, kategori, tipe, file: sumber, thumbnail: sumber, likes: 0, waktu: Date.now() });
        simpanLok('galeriKarya', arr);

        box.innerHTML = '<div class="alert alert-success">Karya berhasil diunggah! Mengarahkan ke Galeri...</div>';
        form.reset();
        if (prev) prev.innerHTML = '';
        setTimeout(() => { location.href = 'galeri.html'; }, 1000);
    });
}

// =======================
// INISIALISASI
// =======================
document.addEventListener('DOMContentLoaded', () => {
    renderNavbarSesi();

    if (document.getElementById('karya-unggulan')) {
        const karyaUnggulan = getSemuaKarya().slice().sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3);
        renderKarya(karyaUnggulan, 'karya-unggulan');
    }
    const all = getSemuaKarya();
    const setStat = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setStat('statKarya', all.length);
    setStat('statKategori', new Set(all.map(k => k.kategori)).size);
    setStat('statLikes', all.reduce((a, k) => a + effLikes(k), 0));

    if (document.getElementById('galeri-semua-karya')) {
        populateFilters(); filterKarya();
        ['searchInput', 'categoryFilter', 'classFilter'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', filterKarya);
        });
        const input = document.getElementById('searchInput');
        if (input) input.addEventListener('keyup', filterKarya);
    }

    renderDetailKarya();
    renderProfilSiswa();
    renderKaryaFavorit();
    renderKomentar(parseInt(getUrlParameter('id'), 10));

    initUploadGate();
    initUploadForm();
    initLoginForm();
    initRegisterForm();
    initForgotForm();
    initPanelSwitch();
    initKommentarForm();
    initDetailLike();
    initProfileActions();
    initModals();
    initReveals();

    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
    const path = window.location.pathname.split('/').pop();
    navLinks.forEach(link => { if (link.getAttribute('href') === path) link.classList.add('active'); });
});