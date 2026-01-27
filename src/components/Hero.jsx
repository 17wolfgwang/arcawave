import React, { useState, useRef, useEffect } from 'react'
import { useParallax } from '../hooks/useParallax'

const Hero = () => {
  useParallax()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setIsVideoLoaded(true)
      }
      video.addEventListener('canplay', handleCanPlay)
      return () => {
        video.removeEventListener('canplay', handleCanPlay)
      }
    }
  }, [])

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
          {!isVideoLoaded && (
            <div className="hero-video-placeholder">
              <div className="video-loading-spinner"></div>
            </div>
          )}
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          >
            <source src="/assets/videos/intro_.webm" type="video/webm" />
            <source src="/assets/videos/intro_.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero

