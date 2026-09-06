import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import PlaceholderPage from './pages/PlaceholderPage'

export default function App() {
  return (
    <>
      {/* Header stays outside <Routes> so it shows on every page */}
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/services"
          element={<PlaceholderPage title="Services" description="Details about our services are coming soon." />}
        />
        <Route
          path="/doctors"
          element={<PlaceholderPage title="Doctors" description="This page is a placeholder for now." />}
        />
        <Route
          path="/products"
          element={<PlaceholderPage title="Products" description="Our full product catalog is coming soon." />}
        />
        <Route
          path="/gallery"
          element={<PlaceholderPage title="Gallery" description="A gallery of our work is coming soon." />}
        />
      </Routes>

      <Footer />
    </>
  )
}
