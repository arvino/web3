import React from 'react';
import styles from '../styles/Blog.module.css';

const blogPosts = [
  {
    id: 1,
    title: "Implementasi Big Data di Era Digital",
    excerpt: "Bagaimana Big Data mengubah cara perusahaan mengambil keputusan di era digital...",
    date: "2024-01-15",
    category: "Big Data",
    readTime: "5 min read",
    image: "/blog/big-data.jpg"
  },
  {
    id: 2,
    title: "Blockchain dan Masa Depan Web3",
    excerpt: "Eksplorasi teknologi blockchain dan dampaknya terhadap perkembangan Web3...",
    date: "2024-01-10",
    category: "Blockchain",
    readTime: "7 min read",
    image: "/blog/blockchain.jpg"
  },
  {
    id: 3,
    title: "Cloud Computing: On-Premise vs Cloud",
    excerpt: "Perbandingan mendalam antara infrastruktur on-premise dan cloud computing...",
    date: "2024-01-05",
    category: "Cloud",
    readTime: "6 min read",
    image: "/blog/cloud.jpg"
  }
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Blog & Artikel</h1>
        <p>Berbagi pengetahuan seputar teknologi, Web3, dan pengembangan software</p>
      </div>

      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.blogImage}>
              <img src={post.image} alt={post.title} />
              <span className={styles.category}>{post.category}</span>
            </div>
            
            <div className={styles.blogContent}>
              <div className={styles.blogMeta}>
                <span><i className="far fa-calendar"></i> {post.date}</span>
                <span><i className="far fa-clock"></i> {post.readTime}</span>
              </div>
              
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              
              <button className={styles.readMore}>
                Baca Selengkapnya
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 