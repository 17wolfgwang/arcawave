import React from 'react'
import { useParallax } from '../hooks/useParallax'

const Hero = () => {
  useParallax()

  return (
    <section id="works" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">The All-in-one Asset Engine</span>
          <span className="title-line">for Creators.</span>
        </h1>
        <p className="hero-subtitle">
          Expand freely. Use safely. Bridge spaces.
        </p>
        
        <div className="hero-video-container">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/assets/videos/intro_.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero

