import React, { useEffect, useState } from 'react';
import { useWeb3 } from '../utils/Web3Context';
import { getProfile, addProject } from '../utils/web3Utils';
import Layout from '../components/Layout';
import styles from '../styles/Portfolio.module.css';

export default function Portfolio() {
  const { contract, account } = useWeb3();
  const [profile, setProfile] = useState(null);
  const [newProject, setNewProject] = useState({
    title: '',
    company: '',
    year: '',
    description: '',
    technologies: '',
    image: ''
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

  async function handleAddProject(e) {
    e.preventDefault();
    const projectString = JSON.stringify({
      ...newProject,
      technologies: newProject.technologies.split(',').map(tech => tech.trim())
    });
    
    if (await addProject(contract, projectString)) {
      await loadProfile();
      setNewProject({
        title: '',
        company: '',
        year: '',
        description: '',
        technologies: '',
        image: ''
      });
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio Proyek</h1>
        
        {account && (
          <div className={styles.addProject}>
            <h2>Tambah Proyek Baru</h2>
            <form onSubmit={handleAddProject} className={styles.projectForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Judul Proyek"
                  value={newProject.title}
                  onChange={(e) => setNewProject({
                    ...newProject,
                    title: e.target.value
                  })}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Perusahaan"
                    value={newProject.company}
                    onChange={(e) => setNewProject({
                      ...newProject,
                      company: e.target.value
                    })}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Tahun"
                    value={newProject.year}
                    onChange={(e) => setNewProject({
                      ...newProject,
                      year: e.target.value
                    })}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  placeholder="Deskripsi Proyek"
                  value={newProject.description}
                  onChange={(e) => setNewProject({
                    ...newProject,
                    description: e.target.value
                  })}
                  required
                  rows="4"
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Teknologi (pisahkan dengan koma)"
                  value={newProject.technologies}
                  onChange={(e) => setNewProject({
                    ...newProject,
                    technologies: e.target.value
                  })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="url"
                  placeholder="URL Gambar Proyek"
                  value={newProject.image}
                  onChange={(e) => setNewProject({
                    ...newProject,
                    image: e.target.value
                  })}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <i className="fas fa-plus"></i>
                Tambah Proyek
              </button>
            </form>
          </div>
        )}

        <div className={styles.projectGrid}>
          {profile?.projects?.map((project, index) => {
            const projectData = JSON.parse(project);
            return (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={projectData.image} alt={projectData.title} />
                </div>
                
                <div className={styles.projectContent}>
                  <h3>{projectData.title}</h3>
                  <div className={styles.projectMeta}>
                    <span>{projectData.company}</span>
                    <span>{projectData.year}</span>
                  </div>
                  
                  <p>{projectData.description}</p>
                  
                  <div className={styles.technologies}>
                    {projectData.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
} 