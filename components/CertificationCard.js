import React from 'react';
import styles from '../styles/Home.module.css';

export default function CertificationCard({ title, year }) {
  return (
    <div className={styles['certification-card']}>
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
} 