import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.profile}>
          <img src="/profile.jpg" alt="Arvino Zulka" />
          <h1>Arvino Zulka</h1>
          <h2>System Analyst / Senior Developer / IT Consultant</h2>
          <p>15+ years of experience in Information Technology</p>
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

        <nav className={styles.mainNav}>
          <Link href="/about">About Me</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
} 