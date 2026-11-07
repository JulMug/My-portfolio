
import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Hero from './components/layout/sections/Hero'
import About from './components/layout/sections/About'
import Skills from './components/layout/sections/Skills'
import Projects from './components/layout/sections/Projects'
import Journey from './components/layout/sections/Journey'
import Contact from './components/layout/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  const [language, setLanguage] = useState('EN')

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar language={language} setLanguage={setLanguage} />

      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Journey language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  )
}

export default App
