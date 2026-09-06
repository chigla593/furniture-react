import { createContext, useContext } from 'react'
import { useImageManifest } from '../hooks/useImageManifest'

const ImageManifestContext = createContext(null)

export function ImageManifestProvider({ children }) {
  const { manifest, loading, error } = useImageManifest()
  return (
    <ImageManifestContext.Provider value={{ manifest, loading, error }}>
      {children}
    </ImageManifestContext.Provider>
  )
}

// Components call this instead of useImageManifest directly, so the
// actual fetch only ever happens once, here, no matter how many
// components need image data.
export function useImages() {
  const context = useContext(ImageManifestContext)
  if (!context) {
    throw new Error('useImages must be used within an ImageManifestProvider')
  }
  return context
}
