import { useState } from 'react'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import { Hero } from './components/hero'
import { Catalog } from './components/catalog'
import { TitleDetails } from './components/titleDetails'
import { Collections } from './components/collections'
import { HowItWorks } from './components/howItWorks'
import { titles } from './data/titles'
import { collections } from './data/collections'

function App() {
  const [activeType, setActiveType] = useState('todos')

  return (
    <div id="inicio" className="page">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" tabIndex={-1} className="page-container">
        <Hero />
        <Catalog
          titles={titles}
          activeType={activeType}
          onTypeChange={setActiveType}
        />
        <TitleDetails />
        <Collections collections={collections} />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}

export default App
