import React from 'react';
import styles from '../styles/Home.module.css';

export default function ProjectCard({ title, description }) {
  return (
    <div className={styles['project-card']}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
} 