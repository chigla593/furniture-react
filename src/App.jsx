import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HeaderInfo from './components/HeaderInfo.jsx'
import InspirationCollection from './components/InspirationCollection.jsx'
import BeautifyYourSpace from './components/BeautifyYourSpace.jsx'
import BrowseTheRange from './components/BrowseTheRange.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import JoinMailingList from './components/JoinMailingList.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <header>
        <Header />
        <Hero />
        <HeaderInfo />
      </header>
      <main>
        <InspirationCollection />
        <BeautifyYourSpace />
        <BrowseTheRange />
        <HowItWorks />
        <JoinMailingList />
      </main>
      <Footer />
    </>
  )
}
