import { Link } from 'react-router-dom'
import { useImages } from '../context/ImageManifestContext'
import styles from './Hero.module.css'
import common from '../styles/common.module.css'

export default function Hero() {
  const { manifest, loading } = useImages()
  const bg = manifest?.heroBackground

  return (
    <div
      className={styles.hero}
      style={bg ? { backgroundImage: `url(${bg.src})` } : undefined}
    >
      {!loading && !bg && (
        <p className={common.imageFallback}>Hero image unavailable</p>
      )}
      <div>
        <span>New Arrival</span>
        <h2>Discover Our New Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link to="/checkout">
          <button>BUY NOW</button>
        </Link>
      </div>
    </div>
  )
}
