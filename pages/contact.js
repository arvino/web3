import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
} 