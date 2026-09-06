import { useImages } from '../context/ImageManifestContext'
import styles from './Footer.module.css'
import common from '../styles/common.module.css'

export default function Footer() {
  const { manifest, loading } = useImages()
  const instagramImages = manifest?.instagramShop || []

  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p className={styles.title}>Furniture</p>
        <p>
          Bringing comfort and style into every home. Quality furniture,
          honest prices, delivered with care.
        </p>
        <p className={styles.follow}>Follow Us</p>
      </div>
      <div className={styles.instagram}>
        <span>Instagram Shop</span>
        <div className={styles.images}>
          {loading && <p className={common.imageFallback}>Loading images…</p>}
          {instagramImages.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </footer>
  )
}
