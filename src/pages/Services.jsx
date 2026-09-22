import React from 'react';
import styles from './Services.module.css';

function Services() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>
          We offer a range of services to help you create the perfect space.
          From interior design consultations to custom furniture solutions,
          our team is here to assist you every step of the way.
        </p>
      </section>

      <section className={styles.Links}>
       <p>
          use our facebook <a href="https://www.facebook.com" alt="Facebook"  rel="noopener noreferrer">facebook</a> and instagram <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">instagram</a> pages for inspiration and updates.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>🛋️</div>
          <h2>Interior Design Consultations</h2>
          <p>Personalized guidance to bring your vision for a space to life, from concept to completion.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🪑</div>
          <h2>Custom Furniture Solutions</h2>
          <p>Handcrafted pieces designed to fit your space perfectly, built to your exact specifications.</p>
        </div>
      </section>
    </main>
  );
}

export default Services;