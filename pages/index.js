import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <img src="/profile.jpg" alt="Arvino Zulka" />
        <h1>Arvino Zulka</h1>
        <p>System Analyst / Senior Developer / IT Consultant</p>
        <p>15+ years of experience in Information Technology</p>
        <nav>
          <Link href="/about">About Me</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
} 