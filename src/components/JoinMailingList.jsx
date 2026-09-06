import { useState } from 'react'
import styles from './JoinMailingList.module.css'

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

// Simulates a network call to a mailing-list provider. Replace this with
// a real fetch() to your provider's API (Mailchimp, ConvertKit, your own
// backend, etc.) — keep the same resolve/reject shape so the component
// below doesn't need to change:
//
//   async function subscribe(email) {
//     const res = await fetch('/api/subscribe', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email }),
//     })
//     if (!res.ok) throw new Error('Subscription failed')
//   }
async function subscribe(email) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (email.endsWith('@bounce.test')) {
    throw new Error('That address bounced — check for typos.')
  }
}

export default function JoinMailingList() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setStatus('error')
      setErrorMessage('Enter a valid email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      await subscribe(email)
      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong — try again.')
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>Join Our Mailing List</h2>
        <p>Be the first to know about new arrivals and offers.</p>
      </div>

      {status === 'success' ? (
        <p>Thanks for signing up! 🎉</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.emailField}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              disabled={status === 'submitting'}
              required
            />
            {status === 'error' && <span className={styles.fieldError}>{errorMessage}</span>}
          </div>
          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'SUBSCRIBING…' : 'SUBSCRIBE'}
          </button>
        </form>
      )}
    </section>
  )
}
