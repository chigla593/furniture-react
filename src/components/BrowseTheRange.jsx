import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useImages } from '../context/ImageManifestContext'
import styles from './BrowseTheRange.module.css'
import common from '../styles/common.module.css'

export default function BrowseTheRange() {
  const { manifest, loading } = useImages()
  const ranges = manifest?.browseTheRange || []
  const [index, setIndex] = useState(0)

  function goPrev() {
    setIndex((i) => (i - 1 + ranges.length) % ranges.length)
  }

  function goNext() {
    setIndex((i) => (i + 1) % ranges.length)
  }

  if (loading) {
    return (
      <section className={styles.range}>
        <h2>Browse The Range</h2>
        <p className={common.imageFallback}>Loading images…</p>
      </section>
    )
  }

  const current = ranges[index]
  if (!current) return null

  return (
    <section className={styles.range}>
      <h2>Browse The Range</h2>

      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={goPrev} aria-label="Previous">
          ‹
        </button>

        <Link to="/products" className={styles.slide}>
          <img src={current.src} alt={current.alt} />
          <p>{current.name}</p>
        </Link>

        <button className={styles.arrow} onClick={goNext} aria-label="Next">
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {ranges.map((range, i) => (
          <button
            key={range.name}
            className={i === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${range.name}`}
          />
        ))}
      </div>
    </section>
  )
}
