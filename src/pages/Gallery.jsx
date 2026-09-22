
import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';

function Gallery() {
  const [instagramShop, setInstagramShop] = useState([]);

  useEffect(() => {
    fetch('/data/images.json')
      .then((res) => res.json())
      .then((data) => setInstagramShop(data.GalleryPhotos))
      .catch((err) => console.error('Failed to load images.json:', err));
  }, []);

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <h2>View Our Instagram</h2>
        <p>Follow us <span className={styles.handle}>@yourhandle</span> for daily inspiration</p>
      </div>

      <div className={styles.grid}>
        {instagramShop.map((item, index) => (
          <div className={styles.item} key={index}>
            <img src={item.src} alt={item.alt} className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;