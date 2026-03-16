import React from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import TestimonialHighlight from './components/TestimonialHighlight'
import AppPreview from './components/AppPreview'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'
import FloatingDecorations from './components/FloatingDecorations'
import BetaStats from './components/BetaStats'
import PainSolution from './components/PainSolution'
import MidCTA from './components/MidCTA'

function App() {
  return (
    <LanguageProvider>
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingDecorations />
      <Navigation />

      <Hero />

      <PainSolution />

      <AppPreview />

      <MidCTA />

      <Features />
      <WaveDivider />

      <BetaStats />

      <TestimonialHighlight />
      <WaveDivider />

      <Testimonials />
      <WaveDivider flip />

      <About />
      <WaveDivider />

      <Products />
      <WaveDivider />

      <Pricing />
      <WaveDivider flip />

      <Contact />
      <Footer />
    </main>
    </LanguageProvider>
  )
}

export default App
