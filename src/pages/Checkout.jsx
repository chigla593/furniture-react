import { useState } from 'react'
import { Link } from 'react-router-dom'
import page from '../styles/page.module.css'
import styles from './Checkout.module.css'

const demoItem = { name: 'Asgaard Sofa', price: 250000, qty: 1 }

const emptyForm = {
  fullName: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  country: '',
}


const fields = [
  { name: 'fullName', label: 'Full name' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'address', label: 'Address' },
  { name: 'city', label: 'City' },
  { name: 'zip', label: 'Postal code' },
  { name: 'country', label: 'Country' },
]

function formatMoney(cents) {
  return (cents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

function validate(form) {
  const errors = {}
  for (const { name, label } of fields) {
    if (!form[name].trim()) errors[name] = 'Required'
  }
if (form.zip.trim().length < 3 || form.zip.trim().length > 10) {
  errors.zip = 'Enter a valid postal code'
}
   return errors
  }



function Field({ name, label, type = 'text', form, errors, onChange }) {
  return (
    <label>
      {label}
      <input name={name} type={type} value={form[name]} onChange={onChange} />
      {errors[name] && <span className={styles.fieldError}>{errors[name]}</span>}
    </label>
  )
}

function OrderSummary({ item }) {
  return (
    <div className={styles.summary}>
      <div className={styles.summaryRow}>
        <span>{item.name} × {item.qty}</span>
        <span>{formatMoney(item.price * item.qty)}</span>
      </div>
      <div className={`${styles.summaryRow} ${styles.summaryRowTotal}`}>
        <span>Total</span>
        <span>{formatMoney(item.price * item.qty)}</span>
      </div>
    </div>
  )
}

function generateOrderNumber() {
  return `FUR-${Date.now().toString().slice(-8)}`
}

export default function Checkout() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [order, setOrder] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setOrder({ ...form, orderNumber: generateOrderNumber(), item: demoItem })
  }

  if (order) {
    return (
      <main className={page.page}>
        <h1>Order Confirmed</h1>
        <p>Thanks, {order.fullName.split(' ')[0]} — order <strong>{order.orderNumber}</strong> is on its way.</p>
        <OrderSummary item={order.item} />
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
      <OrderSummary item={demoItem} />

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {fields.slice(0, 3).map((f) => (
          <Field key={f.name} {...f} form={form} errors={errors} onChange={handleChange} />
        ))}

        <div className={styles.formRow}>
          {fields.slice(3, 5).map((f) => (
            <Field key={f.name} {...f} form={form} errors={errors} onChange={handleChange} />
          ))}
        </div>

        <Field {...fields[5]} form={form} errors={errors} onChange={handleChange} />

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
