import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery', last: true },
]

export default function Header() {
  return (
    <section className={styles.nav}>
      <div>
        <Link to="/">
          <h2 className={styles.logo}>Furniture</h2>
        </Link>
      </div>
      <div>
        <nav>
          <ul className={styles.navList}>
            {navItems.map(({ label, to, last }) => (
              <li key={label} className={last ? styles.lastItem : undefined}>
                <Link to={to} className={styles.navLink}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
