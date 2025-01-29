import React, { useEffect, useState } from 'react';
import { useWeb3 } from '../utils/Web3Context';
import { getProfile, updateProfile, addSkill } from '../utils/web3Utils';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  const { contract, account } = useWeb3();
  const [profile, setProfile] = useState(null);
  const [newSkill, setNewSkill] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    role: '',
    experience: ''
  });

  useEffect(() => {
    if (contract) {
      loadProfile();
    }
  }, [contract]);

  async function loadProfile() {
    const profileData = await getProfile(contract);
    if (profileData) {
      setProfile(profileData);
      setEditForm({
        name: profileData.name,
        role: profileData.role,
        experience: profileData.experience
      });
    }
  }

  async function handleUpdateProfile(e) {
    e.preventDefault();
    if (await updateProfile(contract, editForm.name, editForm.role, editForm.experience)) {
      await loadProfile();
      setIsEditing(false);
    }
  }

  async function handleAddSkill(e) {
    e.preventDefault();
    if (await addSkill(contract, newSkill)) {
      await loadProfile();
      setNewSkill('');
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.about}>
          <h1>Tentang Saya</h1>
          
          {account && (
            <div className={styles.web3Actions}>
              {isEditing ? (
                <form onSubmit={handleUpdateProfile} className={styles.editForm}>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                    placeholder="Nama"
                  />
                  <input
                    type="text"
                    value={editForm.role}
                    onChange={(e) => setEditForm({...editForm, role: e.target.value})}
                    placeholder="Role"
                  />
                  <input
                    type="number"
                    value={editForm.experience}
                    onChange={(e) => setEditForm({...editForm, experience: e.target.value})}
                    placeholder="Pengalaman (tahun)"
                  />
                  <div className={styles.formActions}>
                    <button type="submit">Simpan</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Batal</button>
                  </div>
                </form>
              ) : (
                <button onClick={() => setIsEditing(true)} className={styles.editButton}>
                  <i className="fas fa-edit"></i> Edit Profil
                </button>
              )}

              <form onSubmit={handleAddSkill} className={styles.skillForm}>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Tambah Keahlian Baru"
                />
                <button type="submit">
                  <i className="fas fa-plus"></i> Tambah
                </button>
              </form>
            </div>
          )}

          <div className={styles.content}>
            <p className={styles.intro}>
              Saya memiliki pengalaman lebih dari 15 tahun di bidang Teknologi Informasi dalam berbagai domain perusahaan. 
              Berhasil menyelesaikan proyek multi-tahun dari 2019 hingga 2022 dengan nilai proyek lebih dari IDR 8 miliar 
              untuk Implementasi Big Data, mulai dari inisiasi proyek hingga penutupan, evaluasi dan Audit.
            </p>
            
            <div className={styles.expertise}>
              <h2>Keahlian</h2>
              <ul>
                <li>Big Data Hadoop Ecosystem</li>
                <li>Cloud Computing Hybrid</li>
                <li>IoT</li>
                <li>Artificial Intelligence</li>
                <li>Cybersecurity</li>
                <li>Blockchain Environment</li>
              </ul>
            </div>

            <div className={styles.experience}>
              <h2>Pengalaman Kerja</h2>
              
              <div className={styles.job}>
                <div className={styles.jobHeader}>
                  <h3>Project Manager & Senior Developer</h3>
                  <p>PT. Teltics Media</p>
                  <span>2023 - Sekarang</span>
                </div>
                <ul>
                  <li>Deliver Project Jarvis Enhancement EOD Report & Migration MongoDB Atlas</li>
                  <li>Deliver Project Biota App Spraying & Drone Scrapping Flight Log</li>
                  <li>Development Produk Aplikasi Teltics POS</li>
                  <li>Pre-Sales dan Partnership dengan Alibaba Cloud, Google Cloud, MongoDB</li>
                </ul>
              </div>

              <div className={styles.job}>
                <div className={styles.jobHeader}>
                  <h3>Project Manager</h3>
                  <p>PT. IMAG Informasi Solusi</p>
                  <span>2019 - 2023</span>
                </div>
                <ul>
                  <li>Implementasi Big Data pada lembaga pemerintahan</li>
                  <li>Mengelola infrastruktur Big Data Ecosystem</li>
                  <li>Development Mobile Apps Indonesia One Search</li>
                </ul>
              </div>

              {/* Tambahkan pengalaman kerja lainnya */}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 