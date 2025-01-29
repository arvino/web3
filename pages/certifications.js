import React, { useEffect, useState } from 'react';
import { useWeb3 } from '../utils/Web3Context';
import { getProfile, addCertification } from '../utils/web3Utils';
import Layout from '../components/Layout';
import styles from '../styles/Certifications.module.css';

const certifications = [
  {
    id: 1,
    title: "Google Project Management",
    issuer: "Google",
    platform: "Coursera",
    year: "2022",
    credential: "Professional Certificate",
    link: "https://coursera.org/verify/professional-cert/"
  },
  {
    id: 2,
    title: "Google IT Support",
    issuer: "Google",
    platform: "Coursera",
    year: "2022",
    credential: "Professional Certificate",
    link: "https://coursera.org/verify/professional-cert/"
  },
  {
    id: 3,
    title: "CISSP® Certified Information Systems Security Professional",
    issuer: "SimpliLearn",
    platform: "SkillUp",
    year: "2022",
    credential: "Professional Certificate",
    link: "#"
  },
  {
    id: 4,
    title: "TOGAF® 9 Combined Level 1 and 2",
    issuer: "SimpliLearn",
    platform: "SkillUp",
    year: "2022",
    credential: "Professional Certificate",
    link: "#"
  },
  {
    id: 5,
    title: "Big Data Solution",
    issuer: "Labs247",
    platform: "Training Course",
    year: "2019",
    credential: "Certification",
    link: "#"
  }
];

export default function Certifications() {
  const { contract, account } = useWeb3();
  const [profile, setProfile] = useState(null);
  const [newCertification, setNewCertification] = useState({
    title: '',
    issuer: '',
    platform: '',
    year: '',
    credential: '',
    link: ''
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
    }
  }

  async function handleAddCertification(e) {
    e.preventDefault();
    const certificationString = JSON.stringify(newCertification);
    if (await addCertification(contract, certificationString)) {
      await loadProfile();
      setNewCertification({
        title: '',
        issuer: '',
        platform: '',
        year: '',
        credential: '',
        link: ''
      });
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Sertifikasi Profesional</h1>

        {account && (
          <div className={styles.addCertification}>
            <h2>Tambah Sertifikasi Baru</h2>
            <form onSubmit={handleAddCertification} className={styles.certForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Judul Sertifikasi"
                  value={newCertification.title}
                  onChange={(e) => setNewCertification({
                    ...newCertification,
                    title: e.target.value
                  })}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Penerbit"
                    value={newCertification.issuer}
                    onChange={(e) => setNewCertification({
                      ...newCertification,
                      issuer: e.target.value
                    })}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Platform"
                    value={newCertification.platform}
                    onChange={(e) => setNewCertification({
                      ...newCertification,
                      platform: e.target.value
                    })}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Tahun"
                    value={newCertification.year}
                    onChange={(e) => setNewCertification({
                      ...newCertification,
                      year: e.target.value
                    })}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Jenis Kredensial"
                    value={newCertification.credential}
                    onChange={(e) => setNewCertification({
                      ...newCertification,
                      credential: e.target.value
                    })}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="url"
                  placeholder="Link Verifikasi"
                  value={newCertification.link}
                  onChange={(e) => setNewCertification({
                    ...newCertification,
                    link: e.target.value
                  })}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <i className="fas fa-plus"></i>
                Tambah Sertifikasi
              </button>
            </form>
          </div>
        )}

        <div className={styles.certGrid}>
          {profile?.certifications.map((cert, index) => {
            const certData = JSON.parse(cert);
            return (
              <div key={index} className={styles.certCard}>
                <div className={styles.certHeader}>
                  <i className="fas fa-certificate"></i>
                  <h3>{certData.title}</h3>
                </div>
                
                <div className={styles.certDetails}>
                  <div className={styles.certInfo}>
                    <span><i className="fas fa-building"></i> {certData.issuer}</span>
                    <span><i className="fas fa-graduation-cap"></i> {certData.platform}</span>
                    <span><i className="fas fa-calendar"></i> {certData.year}</span>
                  </div>
                  
                  <div className={styles.certType}>
                    <span>{certData.credential}</span>
                  </div>
                  
                  <a 
                    href={certData.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.verifyButton}
                  >
                    <i className="fas fa-external-link-alt"></i> Verifikasi
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
} 