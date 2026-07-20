import { useState } from 'react'

export default function JoinMailingList() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // Hook this up to your email provider / API here.
    console.log('Subscribed:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="Join-Our-Mailing-List">
      <div>
        <h2>Join Our Mailing List</h2>
        <p>
          {submitted
            ? "Thanks for subscribing! We'll be in touch."
            : 'Sign up to receive inspiration, product updates, and special offers from our team.'}
        </p>
      </div>
      <form className="email-form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="example@gmail.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
