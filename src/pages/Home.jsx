import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default Home


