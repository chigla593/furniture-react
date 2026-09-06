import Hero from '../components/Hero'
import HeaderInfo from '../components/HeaderInfo'
import InspirationCollection from '../components/InspirationCollection'
import BeautifyYourSpace from '../components/BeautifyYourSpace'
import BrowseTheRange from '../components/BrowseTheRange'
import HowItWorks from '../components/HowItWorks'
import JoinMailingList from '../components/JoinMailingList'

export default function Home() {
  return (
    <>
      <Hero />
      <HeaderInfo />
      <main>
        <InspirationCollection />
        <BeautifyYourSpace />
        <BrowseTheRange />
        <HowItWorks />
        <JoinMailingList />
      </main>
    </>
  )
}
