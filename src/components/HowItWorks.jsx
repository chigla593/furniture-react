import { useImages } from '../context/ImageManifestContext'
import styles from './HowItWorks.module.css'
import common from '../styles/common.module.css'

// The manifest carries the step number, title, and image; the longer
// descriptive text stays here since it's copy, not asset data.
const descriptions = {
  'Purchase Securely': 'Check out safely with encrypted payment options.',
  'Ships From Warehouse': 'Your order is packed and shipped straight to you.',
  'Style Your Room': 'Unpack, arrange, and enjoy your new space.',
}

export default function HowItWorks() {
  const { manifest, loading } = useImages()
  const steps = manifest?.howItWorks || []

  return (
    <section className={styles.section}>
      <h2>How It Works</h2>
      <div className={styles.images}>
        {loading && <p className={common.imageFallback}>Loading images…</p>}
        {steps.map(({ step, title, src, alt }) => (
          <div key={title}>
            <div className={styles.stepImageWrap}>
              <img src={src} alt={alt} />
              <span className={styles.stepBadge}>{step}.</span>
            </div>
            <h3>{title}</h3>
            <p>{descriptions[title]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
