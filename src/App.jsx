import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works } from './components'

function App() {
  return (
    <BrowserRouter>
      <div id="top" className="relative z-0 min-h-screen overflow-hidden bg-primary text-navy">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Extracurricular />
          <Tech />
          <Works />
          <Contact />
        </main>
        <footer className="mx-auto max-w-7xl px-6 pb-8 pt-2 text-center text-xs tracking-wide text-secondary sm:px-10 lg:px-16">
          © {new Date().getFullYear()} Badr El Ghazaoui. Built with curiosity.
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
