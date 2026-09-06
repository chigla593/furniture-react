import { useState } from 'react'
import { Link } from 'react-router-dom'
import page from '../styles/page.module.css'
import styles from './Checkout.module.css'

// There's no real cart/product-selection flow yet (the site has no
// per-product "add to cart" anywhere), so this checkout works off a
// single demo line item just so the page has something concrete to
// summarize and total. Swap `demoItem` for real cart state once that
// exists.
const demoItem = {
  name: 'Asgaard Sofa',
  price: 250000, // stored in cents to avoid float rounding issues
  qty: 1,
}

const emptyForm = {
  fullName: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  country: '',
}

function formatMoney(cents) {
  return (cents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

function validate(form) {
  const errors = {}
  if (!form.fullName.trim()) errors.fullName = 'Required'
  if (!form.email.trim()) errors.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.address.trim()) errors.address = 'Required'
  if (!form.city.trim()) errors.city = 'Required'
  if (!form.zip.trim()) errors.zip = 'Required'
  else if (!/^[a-zA-Z0-9\- ]{3,10}$/.test(form.zip)) errors.zip = 'Enter a valid postal code'
  if (!form.country.trim()) errors.country = 'Required'
  return errors
}

export default function Checkout() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [order, setOrder] = useState(null) // set once "placed"

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // No backend/payment processor is wired up here — this is a
    // client-only confirmation so the flow has an ending. Plugging in
    // real payment (Stripe, etc.) means: collect payment details via
    // that provider's SDK (never handle raw card numbers yourself),
    // POST the order to your backend, and only show the confirmation
    // once that call succeeds.
    const orderNumber = `FUR-${Date.now().toString().slice(-8)}`
    setOrder({ ...form, orderNumber, item: demoItem })
  }

  if (order) {
    return (
      <main className={page.page}>
        <h1>Order Confirmed</h1>
        <p>Thanks, {order.fullName.split(' ')[0]} — order <strong>{order.orderNumber}</strong> is on its way.</p>

        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span>{order.item.name} × {order.item.qty}</span>
            <span>{formatMoney(order.item.price * order.item.qty)}</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.summaryRowTotal}`}>
            <span>Total</span>
            <span>{formatMoney(order.item.price * order.item.qty)}</span>
          </div>
        </div>

        <p className={styles.shipTo}>
          Shipping to {order.address}, {order.city} {order.zip}, {order.country}
        </p>

        <Link to="/" className={styles.backLink}>Back to home</Link>
      </main>
    )
  }

  return (
    <main className={`${page.page} ${styles.formPage}`}>
      <h1>Checkout</h1>

      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span>{demoItem.name} × {demoItem.qty}</span>
          <span>{formatMoney(demoItem.price * demoItem.qty)}</span>
        </div>
        <div className={`${styles.summaryRow} ${styles.summaryRowTotal}`}>
          <span>Total</span>
          <span>{formatMoney(demoItem.price * demoItem.qty)}</span>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label>
          Full name
          <input name="fullName" value={form.fullName} onChange={handleChange} />
          {errors.fullName && <span className={styles.fieldError}>{errors.fullName}</span>}
        </label>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
        </label>

        <label>
          Address
          <input name="address" value={form.address} onChange={handleChange} />
          {errors.address && <span className={styles.fieldError}>{errors.address}</span>}
        </label>

        <div className={styles.formRow}>
          <label>
            City
            <input name="city" value={form.city} onChange={handleChange} />
            {errors.city && <span className={styles.fieldError}>{errors.city}</span>}
          </label>

          <label>
            Postal code
            <input name="zip" value={form.zip} onChange={handleChange} />
            {errors.zip && <span className={styles.fieldError}>{errors.zip}</span>}
          </label>
        </div>

        <label>
          Country
          <input name="country" value={form.country} onChange={handleChange} />
          {errors.country && <span className={styles.fieldError}>{errors.country}</span>}
        </label>

        <p className={styles.paymentNote}>
          Payment isn't wired up yet — placing an order here just confirms
          shipping details. Connect a real processor (Stripe, etc.) before
          taking real orders.
        </p>

        <button type="submit">PLACE ORDER</button>
      </form>
    </main>
  )
}
