import { useState } from 'react'
import styles from './JoinMailingList.module.css'

export default function JoinMailingList() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setShowPopup(true)
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>Join Our Mailing List</h2>
        <p>Be the first to know about new arrivals and offers.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.emailField}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">
          <p>Submit</p>
        </button>
      </form>

      {showPopup && (
        <div className={styles.overlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h3>You're subscribed! 🎉</h3>
            <p>{email}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}