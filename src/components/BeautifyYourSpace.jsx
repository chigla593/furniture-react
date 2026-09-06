import { useImages } from '../context/ImageManifestContext'
import styles from './BeautifyYourSpace.module.css'

export default function BeautifyYourSpace() {
  const { manifest } = useImages()
  const section = manifest?.beautifyYourSpace

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2>Beautify Your Space</h2>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className={styles.right}>
        {section?.photo && <img src={section.photo.src} alt={section.photo.alt} />}
        {section?.decoration && (
          <img className={styles.deco} src={section.decoration.src} alt={section.decoration.alt} />
        )}
      </div>
    </section>
  )
}
