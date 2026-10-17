-- =====================================================
-- GALERI PROYEK SEKOLAH — Skema Supabase (LANGKAH B)
-- Cara pakai: Supabase Dashboard -> SQL Editor -> New query
--            -> tempel seluruh isi file ini -> Run.
-- Aman dijalankan berulang (idempotent).
-- =====================================================

-- -----------------------------------------------------
-- 1) PROFIL (terhubung ke akun auth.users)
-- -----------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nama text not null default '',
  email text,
  kelas text default '',
  bio text default '',
  avatar_url text default 'assets/images/default-profile.png',
  created_at timestamptz default now()
);

-- Otomatis buat profil saat user mendaftar
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, nama, email, kelas)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nama', split_part(new.email, '@', 1)),
    new.email,
    coalesce(new.raw_user_meta_data->>'kelas', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- -----------------------------------------------------
-- 2) KARYA
-- -----------------------------------------------------
create table if not exists public.karya (
  id bigint generated always as identity primary key,
  judul text not null,
  deskripsi text default '',
  kategori text default '',
  kelas text default '',
  siswa text default '',
  tipe text default 'image',
  file_url text default '',
  thumbnail_url text default '',
  likes integer default 0,
  pemilik uuid references auth.users(id) on delete set null,
  created_at timestamptz default now()
);

-- -----------------------------------------------------
-- 3) KOMENTAR
-- -----------------------------------------------------
create table if not exists public.komentar (
  id bigint generated always as identity primary key,
  karya_id bigint references public.karya(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  nama text default 'Tamu',
  teks text not null,
  created_at timestamptz default now()
);

-- -----------------------------------------------------
-- 4) SUKA (like)
-- -----------------------------------------------------
create table if not exists public.suka (
  karya_id bigint references public.karya(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (karya_id, user_id)
);

-- -----------------------------------------------------
-- 5) FAVORIT (per nama siswa)
-- -----------------------------------------------------
create table if not exists public.favorit (
  user_id uuid references auth.users(id) on delete cascade,
  siswa text not null,
  created_at timestamptz default now(),
  primary key (user_id, siswa)
);

-- -----------------------------------------------------
-- 6) APRESIASI (per nama siswa)
-- -----------------------------------------------------
create table if not exists public.apresiasi (
  user_id uuid references auth.users(id) on delete cascade,
  siswa text not null,
  created_at timestamptz default now(),
  primary key (user_id, siswa)
);

-- =====================================================
-- KEAMANAN (Row Level Security)
-- =====================================================
alter table public.profiles   enable row level security;
alter table public.karya      enable row level security;
alter table public.komentar   enable row level security;
alter table public.suka       enable row level security;
alter table public.favorit    enable row level security;
alter table public.apresiasi  enable row level security;

-- PROFILES: semua boleh lihat; hanya pemilik boleh ubah
drop policy if exists "profiles baca semua" on public.profiles;
create policy "profiles baca semua" on public.profiles
  for select using (true);

drop policy if exists "profiles buat sendiri" on public.profiles;
create policy "profiles buat sendiri" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles ubah sendiri" on public.profiles;
create policy "profiles ubah sendiri" on public.profiles
  for update using (auth.uid() = id);

-- KARYA: semua boleh lihat; login boleh tambah; hanya pemilik boleh ubah/hapus
drop policy if exists "karya baca semua" on public.karya;
create policy "karya baca semua" on public.karya
  for select using (true);

drop policy if exists "karya tambah login" on public.karya;
create policy "karya tambah login" on public.karya
  for insert to authenticated with check (auth.uid() = pemilik);

drop policy if exists "karya ubah pemilik" on public.karya;
create policy "karya ubah pemilik" on public.karya
  for update using (auth.uid() = pemilik);

drop policy if exists "karya hapus pemilik" on public.karya;
create policy "karya hapus pemilik" on public.karya
  for delete using (auth.uid() = pemilik);

-- KOMENTAR: semua boleh lihat; login boleh tulis; hanya penulis boleh hapus
drop policy if exists "komentar baca semua" on public.komentar;
create policy "komentar baca semua" on public.komentar
  for select using (true);

drop policy if exists "komentar tulis login" on public.komentar;
create policy "komentar tulis login" on public.komentar
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "komentar hapus penulis" on public.komentar;
create policy "komentar hapus penulis" on public.komentar
  for delete using (auth.uid() = user_id);

-- SUKA
drop policy if exists "suka baca semua" on public.suka;
create policy "suka baca semua" on public.suka
  for select using (true);

drop policy if exists "suka tambah sendiri" on public.suka;
create policy "suka tambah sendiri" on public.suka
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "suka hapus sendiri" on public.suka;
create policy "suka hapus sendiri" on public.suka
  for delete using (auth.uid() = user_id);

-- FAVORIT
drop policy if exists "favorit baca sendiri" on public.favorit;
create policy "favorit baca sendiri" on public.favorit
  for select using (auth.uid() = user_id);

drop policy if exists "favorit tambah sendiri" on public.favorit;
create policy "favorit tambah sendiri" on public.favorit
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "favorit hapus sendiri" on public.favorit;
create policy "favorit hapus sendiri" on public.favorit
  for delete using (auth.uid() = user_id);

-- APRESIASI
drop policy if exists "apresiasi baca semua" on public.apresiasi;
create policy "apresiasi baca semua" on public.apresiasi
  for select using (true);

drop policy if exists "apresiasi tambah sendiri" on public.apresiasi;
create policy "apresiasi tambah sendiri" on public.apresiasi
  for insert to authenticated with check (auth.uid() = user_id);
