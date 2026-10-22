# KAIZAS FIX BUG — Open Jasa

## Struktur
- `index.html`: kandungan website
- `src/style.css`: reka bentuk responsif
- `src/script.js`: menu mudah alih, pautan saluran dan borang tempahan WhatsApp
- `public/favicon.svg`: ikon laman
- `package.json`: skrip Vite
- `vercel.json`: tetapan URL
- `.gitignore`: fail yang tidak perlu dimuat naik

## Deploy melalui GitHub + Vercel
1. Ekstrak ZIP ini.
2. Upload **semua kandungan di dalam folder** ke root repository GitHub, bukan ZIP sahaja.
3. Import repository itu di https://vercel.com/new.
4. Framework Preset: `Vite`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Deploy.

## Wajib sebelum terbit
- Edit `src/script.js` dan gantikan kedua-dua nilai `https://whatsapp.com/channel/` dalam `CHANNEL_URLS` dengan pautan sebenar Saluran 1 dan 2.
- Kad testimoni ialah placeholder. Gantikan dengan ulasan sebenar dan dapatkan izin pelanggan.
- Harga RM5 ialah harga permulaan; berikan harga akhir dan skop kepada pelanggan sebelum kerja bermula.

## Jalankan di komputer
```bash
npm install
npm run dev
```
