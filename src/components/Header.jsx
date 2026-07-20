export

const navItems = [
  { label: 'Home', className: '' },
  { label: 'Services', className: '' },
  { label: 'Doctors', className: '' },
  { label: 'Products', className: '' },
  { label: 'Gallery', className: 'margin-right' },
]

export default function Header() {
  return (
    <section>
      <div>
        <a href="Header.jsx"><h2>Furniture</h2></a>
      </div>
      <div>
        <nav>
          <ul>
            {navItems.map(({ label, className }) => (
              <li key={label} className={className || undefined}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
