-- =====================================================
-- GALERI PROYEK SEKOLAH — Policy Storage (LANGKAH D)
-- Prasyarat: bucket `karya` sudah dibuat (Public bucket).
-- Cara pakai: Supabase Dashboard -> SQL Editor -> New query
--            -> tempel seluruh isi file ini -> Run.
-- =====================================================

-- Semua orang boleh lihat file (bucket publik)
drop policy if exists "karya storage baca" on storage.objects;
create policy "karya storage baca" on storage.objects
  for select using (bucket_id = 'karya');

-- Upload: hanya user yang login
drop policy if exists "karya storage upload" on storage.objects;
create policy "karya storage upload" on storage.objects
  for insert to authenticated with check (bucket_id = 'karya');

-- Ubah: hanya pemilik file
drop policy if exists "karya storage ubah" on storage.objects;
create policy "karya storage ubah" on storage.objects
  for update to authenticated using (bucket_id = 'karya' and owner = auth.uid());

-- Hapus: hanya pemilik file
drop policy if exists "karya storage hapus" on storage.objects;
create policy "karya storage hapus" on storage.objects
  for delete to authenticated using (bucket_id = 'karya' and owner = auth.uid());
