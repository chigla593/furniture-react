import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import PlaceholderPage from './pages/PlaceholderPage'
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery'

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/services"
          element={<Services />} />
        
        <Route
          path="/doctors"
          element={<PlaceholderPage title="Doctors" description="Why would you expect to find information about our doctors here?" />}
        />

        <Route
          path="/gallery"
          element={<Gallery />} 
        />
      </Routes>

      <Footer />
    </>
  )
}
