import { About } from './components/About'
import { Cta } from './components/Cta'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Tech } from './components/Tech'
import { Work } from './components/Work'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Tech />
        <Pricing />
        <Process />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App