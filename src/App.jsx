
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/sections/Hero'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main>
        <main>
          <Hero />

          <section id="about" className="min-h-40" />
          <section id="skills" className="min-h-40" />
          <section id="projects" className="min-h-40" />
          <section id="journey" className="min-h-40" />
          <section id="contact" className="min-h-40" />
        </main>
      </main>
    </div>
  )
}

export default App
