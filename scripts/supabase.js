// =====================================================
// KLIEN SUPABASE
// -----------------------------------------------------
// Kunci "publishable" (sb_publishable_...) memang untuk
// dipakai di sisi klien; keamanan dijaga oleh RLS.
// JANGAN pernah menaruh "secret"/service_role key di sini.
// =====================================================
const SUPABASE_URL = 'https://plioyxgdivgihilhmqhj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lcgWEE51dHA_JpS5PZ7ydg_1fYeoGfV';

let supabaseClient = null;
if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
    console.warn('[Supabase] Pustaka belum dimuat — periksa tag <script> CDN di halaman.');
}

// Dipakai halaman lain untuk memastikan klien siap.
function supabaseSiap() {
    return supabaseClient !== null;
}
