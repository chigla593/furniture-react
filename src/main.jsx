import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ImageManifestProvider } from './context/ImageManifestContext.jsx'
import './styles/reset.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ImageManifestProvider>
        <App />
      </ImageManifestProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
