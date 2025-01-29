# Arvino Zulka's Web3 Portfolio

Website ini adalah portofolio pribadi dan identitas digital dari Arvino Zulka, yang dibangun menggunakan teknologi Web3. Website ini menampilkan pengalaman kerja, proyek, sertifikasi, dan informasi kontak.

## Teknologi yang Digunakan

- **Frontend**: React.js + Next.js
- **Backend**: Node.js + Express
- **Blockchain**: Solidity (untuk smart contract identitas)
- **Database**: IPFS (untuk desentralisasi data)

## Struktur Proyek

```
arvino-portfolio/
├── pages/
│   ├── index.js
│   ├── about.js
│   ├── portfolio.js
│   ├── certifications.js
│   ├── contact.js
│   └── blog.js (opsional)
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── ProjectCard.js
│   └── CertificationCard.js
├── contracts/
│   └── Identity.sol
├── public/
│   ├── profile.jpg
│   └── favicon.ico
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── utils/
│   └── ipfs.js (untuk integrasi IPFS)
├── server/
│   ├── index.js (untuk konfigurasi server Node.js)
│   └── api/
│       └── contact.js (untuk endpoint API kontak)
├── .gitignore
├── package.json
└── README.md
```

## Fitur

1. **Landing Page**: Menampilkan foto profil, deskripsi singkat, dan tautan ke media sosial/Web3 wallet.
2. **About Me**: Menampilkan informasi pribadi dan ringkasan pengalaman kerja.
3. **Portfolio**: Menampilkan proyek-proyek yang telah dikerjakan dengan detail deskripsi, teknologi yang digunakan, dan kontribusi.
4. **Certifications**: Menampilkan daftar sertifikasi dan tautan verifikasinya.
5. **Contact Page**: Formulir kontak dan informasi untuk komunikasi lebih lanjut.
6. **Smart Contract Integration**: Untuk autentikasi identitas atau menampilkan pengalaman kerja berbasis blockchain.

## Cara Menjalankan Proyek

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/arvino/web3.git
   cd arvino-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**:
   ```bash
   npm run dev
   ```

4. **Buka di browser**:
   ```
   http://localhost:3000
   ```

## Mengatasi Peringatan dan Kerentanan

- Jalankan `npm audit fix` untuk memperbaiki kerentanan yang terdeteksi.
- Pertimbangkan untuk memperbarui paket yang didepresiasi seperti `ipfs-http-client` ke Helia.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan buat pull request dengan perubahan yang Anda usulkan.

© 2025 Arvino Zulka. All rights reserved.