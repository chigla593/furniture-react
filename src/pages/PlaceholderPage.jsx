import styles from '../styles/page.module.css'

// A small shared shell for pages that don't have real content yet.
// Once you know what each page should actually contain, just build
// a dedicated component (with its own .module.css) and swap it in
// for <PlaceholderPage /> in App.jsx.
export default function PlaceholderPage({ title, description }) {
  return (
    <main className={styles.page}>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  )
}
