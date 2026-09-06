import { useEffect, useState } from 'react'

// Fetches /data/images.json once, on first render, and shares the
// result with any component that calls this hook. Because it's a
// real network request (not a build-time import), you can update
// images.json or swap files in /public/images without touching any
// component code or rebuilding the JS bundle.
export function useImageManifest() {
  const [manifest, setManifest] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetch('/data/images.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load image manifest: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) {
          setManifest(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err)
          setLoading(false)
        }
      })

    // cleanup: if the component unmounts before the fetch resolves,
    // don't try to set state on it (avoids a React warning)
    return () => {
      cancelled = true
    }
  }, [])

  return { manifest, loading, error }
}
