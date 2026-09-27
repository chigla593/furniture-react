import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useImages } from '../context/ImageManifestContext'
import styles from './BrowseTheRange.module.css'
import common from '../styles/common.module.css'

export default function BrowseTheRange() {
  const { manifest, loading } = useImages()
  const ranges = manifest?.browseTheRange || []
  const [index, setIndex] = useState(0)

  if (loading) {
    return (
      <section className={styles.range}>
        <h2>Browse The Range</h2>
        <p className={common.imageFallback}>Loading images…</p>
      </section>
    )
  }

  if (ranges.length === 0) return null

  const current = ranges[index]
  const lastIndex = ranges.length - 1

  return (
    <section className={styles.range}>
      <h2>Browse The Range</h2>

      <div className={styles.carousel}>
        <button onClick={() => setIndex(index === 0 ? lastIndex : index - 1)}>‹</button>

        <Link to="/products" className={styles.slide}>
          <img src={current.src} alt={current.alt} />
          <p>{current.name}</p>
        </Link>

        <button onClick={() => setIndex(index === lastIndex ? 0 : index + 1)}>›</button>
      </div>

      <div className={styles.dots}>
        {ranges.map((range, i) => (
          <button
            key={range.name}
            className={i === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}