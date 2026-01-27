import { useEffect } from 'react'

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroContent = document.querySelector('.hero-content')
      const heroVideoContainer = document.querySelector('.hero-video-container')
      const heroFeaturesSection = document.querySelector('.hero-features-section')
      const artworkCanvas = document.getElementById('artwork-canvas')

      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
        // Remove fadeaway effect - keep content visible
        // heroContent.style.opacity = Math.max(0, 1 - scrolled / 600)
      }

      // Keep video container visible
      if (heroVideoContainer) {
        heroVideoContainer.style.opacity = '1'
      }

      // Don't apply parallax to features section to prevent overlap with About section
      // if (heroFeaturesSection) {
      //   heroFeaturesSection.style.transform = `translateY(${Math.min(scrolled * 0.1, 100)}px)`
      // }

      // Don't apply parallax to artwork canvas inside features section
      // if (artworkCanvas) {
      //   const parallaxOffset = scrolled * 0.15
      //   artworkCanvas.style.transform = `translateY(${parallaxOffset}px)`
      // }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

