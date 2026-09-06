import { useImages } from '../context/ImageManifestContext'
import styles from './InspirationCollection.module.css'
import common from '../styles/common.module.css'

export default function InspirationCollection() {
  const { manifest, loading } = useImages()
  const images = manifest?.inspirationCollection || []

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2>Inspiration Collection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.images}>
        {loading && <p className={common.imageFallback}>Loading images…</p>}
        {images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  )
}
