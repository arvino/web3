import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implementasi pengiriman email akan ditambahkan nanti
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h1>Mari Terhubung</h1>
          <p>Silakan hubungi saya untuk kolaborasi atau diskusi lebih lanjut.</p>
          
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>arvinozulka@gmail.com</p>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <i className="fas fa-globe"></i>
              <div>
                <h3>Website</h3>
                <p>www.arvino.my.id</p>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Lokasi</h3>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://github.com/arvino" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arvino-zulka/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@ArvinoZulka" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subjek</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            <span>Kirim Pesan</span>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
} 