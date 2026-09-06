import { useImages } from '../context/ImageManifestContext'
import styles from './HeaderInfo.module.css'
import common from '../styles/common.module.css'

const items = [
  { key: 'freeDelivery', title: 'Free Delivery', text: 'For all orders over $50', gap: false },
  { key: 'support', title: 'Support 24/7', text: 'Contact us anytime', gap: true },
  { key: 'authenticity', title: '100% Authentic', text: 'Guaranteed quality', gap: true },
]

export default function HeaderInfo() {
  const { manifest, loading } = useImages()
  const guarantees = manifest?.guarantees

  return (
    <div className={styles.headerinfo}>
      {items.map(({ key, title, text, gap }) => {
        const icon = guarantees?.[key]
        return (
          <div className={gap ? styles.gap : undefined} key={key}>
            {icon ? (
              <img src={icon.src} alt={icon.alt} />
            ) : (
              !loading && <span className={common.imageFallback}>?</span>
            )}
            <p>
              {title}
              <span>{text}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}
