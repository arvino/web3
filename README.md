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
   - Penyimpanan data terdesentralisasi

## Teknologi

- **Frontend**: 
  - Next.js 15.1.6
  - React 19.0.0
  - CSS Modules
  - Font Awesome Icons

- **Blockchain**: 
  - Solidity 0.8.19
  - Hardhat
  - Ethers.js 6.13.5
  - MetaMask

## Prerequisites

- Node.js 18.x atau lebih baru
- MetaMask browser extension
- Git

## Setup Proyek

1. **Clone Repository**
   ```bash
   git clone https://github.com/arvino/web3-portfolio.git
   cd web3-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` dan tambahkan:
   ```
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
   ```

4. **Compile Smart Contract**
   ```bash
   npm run compile
   ```

## Development

1. **Start Local Blockchain**
   ```bash
   npx hardhat node
   ```

2. **Deploy Smart Contract (di terminal baru)**
   ```bash
   npm run deploy:local
   ```
   Salin alamat contract yang di-deploy ke `.env.local`

3. **Start Development Server (di terminal baru)**
   ```bash
   npm run dev
   ```

4. **Buka Browser**
   ```
   http://localhost:3000
   ```

## Struktur Proyek

```
web3-portfolio/
├── components/          # React components
│   ├── Header.js       # Header dengan Web3 connect
│   └── Layout.js       # Layout utama
├── contracts/
│   ├── src/
│   │   └── Identity.sol # Smart contract
│   └── artifacts/      # Contract artifacts (generated)
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── about.js        # About page
│   ├── portfolio.js    # Portfolio page
│   ├── certifications.js
│   └── contact.js
├── scripts/
│   └── deploy.js       # Contract deployment script
├── styles/             # CSS Modules
│   ├── globals.css
│   └── *.module.css
└── utils/
    ├── Web3Context.js  # Web3 context provider
    └── web3Utils.js    # Web3 utility functions
```

## Smart Contract (Identity.sol)

Smart contract ini mengelola:
- Profil dasar (nama, role, pengalaman)
- Keahlian dan sertifikasi
- Proyek portfolio
- Sistem verifikasi

### Fungsi Utama:
- `updateProfile()`: Update informasi profil
- `addSkill()`: Tambah keahlian baru
- `addCertification()`: Tambah sertifikasi (terverifikasi)
- `addProject()`: Tambah proyek portfolio

## Penggunaan Web3

1. **Koneksi Wallet**
   - Install MetaMask
   - Klik "Connect Wallet" di header
   - Konfirmasi koneksi di MetaMask

2. **Interaksi dengan Smart Contract**
   - Update profil: Memerlukan signature
   - Tambah skill: Memerlukan signature
   - Verifikasi sertifikasi: Memerlukan verifier
   - Tambah proyek: Memerlukan signature

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build untuk production
- `npm run start`: Start production server
- `npm run compile`: Compile smart contract
- `npm run deploy:local`: Deploy ke local blockchain

## Kontribusi

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

## License

MIT License. Lihat `LICENSE` untuk informasi lebih lanjut.

© 2024 Arvino Zulka. All rights reserved.