import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works } from './components'

const Extracurricular = lazy(() => import('./components/Extracurricular'))

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Suspense fallback={<div className="min-h-[620px] sm:min-h-[660px]" aria-hidden="true" />}>
          <Extracurricular />
        </Suspense>
        <Tech />
        <Works />
        <div className="div relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
