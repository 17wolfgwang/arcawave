import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'
import FloatingDecorations from './components/FloatingDecorations'

function App() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingDecorations />
      <Navigation />
      
      <Hero />
      <WaveDivider flip />
      
      <Features />
      <WaveDivider />
      
      <Testimonials />
      <WaveDivider flip />
      
      <About />
      <WaveDivider />
      
      <Products />
      <WaveDivider flip />
      
      <Pricing />
      <WaveDivider />
      
      <Contact />
      <Footer />
    </main>
  )
}

export default App
