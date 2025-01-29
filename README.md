# Arvino Zulka's Web3 Portfolio

Website portfolio profesional berbasis Web3 untuk Arvino Zulka, menampilkan pengalaman kerja, proyek, dan sertifikasi yang terverifikasi di blockchain.

## Fitur Utama

1. **Decentralized Identity**
   - Profil dan data tersimpan di blockchain
   - Verifikasi identitas menggunakan smart contract
   - Manajemen profil terdesentralisasi

2. **Portfolio Management**
   - Penambahan dan pengelolaan proyek on-chain
   - Showcase proyek dengan gambar dan teknologi
   - Verifikasi riwayat proyek melalui blockchain

3. **Certification Verification**
   - Sistem verifikasi sertifikasi berbasis smart contract
   - Manajemen sertifikasi terdesentralisasi
   - Verifikasi otentisitas oleh pihak berwenang

4. **Web3 Integration**
   - Koneksi dengan MetaMask wallet
   - Interaksi dengan smart contract Ethereum
   - Penyimpanan data terdesentralisasi menggunakan IPFS

## Teknologi

- **Frontend**: 
  - React.js 
  - Next.js
  - CSS Modules
  - Font Awesome Icons

- **Backend**: 
  - Node.js
  - Express
  - Web3.js/Ethers.js

- **Blockchain**: 
  - Solidity Smart Contracts
  - Ethereum Network
  - MetaMask Integration

- **Storage**: 
  - IPFS
  - Smart Contract State

## Smart Contracts

### Identity.sol
- Manajemen profil dasar
- Pengelolaan skill dan pengalaman
- Verifikasi sertifikasi
- Manajemen proyek portfolio
- Sistem verifikasi multi-signature

## Struktur Proyek

```
arvino-portfolio/
├── components/
│   ├── Header.js        # Komponen header dengan Web3 connect
│   ├── Layout.js        # Layout utama aplikasi
│   └── ...
├── contracts/
│   └── Identity.sol     # Smart contract untuk identitas
├── pages/
│   ├── index.js         # Landing page
│   ├── about.js         # Halaman profil
│   ├── portfolio.js     # Portfolio proyek
│   ├── certifications.js # Sertifikasi
│   └── contact.js       # Halaman kontak
├── styles/
│   ├── globals.css
│   └── *.module.css     # CSS Modules
├── utils/
│   ├── Web3Context.js   # Context untuk Web3
│   └── web3Utils.js     # Utility functions Web3
└── public/
    └── ...
```

## Cara Menjalankan

1. **Clone Repository**
   ```bash
   git clone https://github.com/arvino/web3.git
   cd arvino-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local dengan konfigurasi yang sesuai
   ```

4. **Deploy Smart Contract**
   ```bash
   npx hardhat run scripts/deploy.js --network <network_name>
   ```

5. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```

6. **Buka di Browser**
   ```
   http://localhost:3000
   ```

## Penggunaan Web3

1. Pastikan MetaMask terinstall di browser
2. Hubungkan wallet dengan mengklik tombol "Connect Wallet"
3. Konfirmasi transaksi untuk setiap interaksi dengan smart contract

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Kontak

Arvino Zulka
- Email: arvinozulka@gmail.com
- Website: https://www.arvino.my.id/
- GitHub: https://github.com/arvino
- LinkedIn: https://www.linkedin.com/in/arvino-zulka/
- YouTube: https://www.youtube.com/@ArvinoZulka

© 2025 Arvino Zulka. All rights reserved.