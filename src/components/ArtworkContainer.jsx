import React, { useState, useRef, useEffect } from 'react'
import { useArtwork3D } from '../hooks/useArtwork3D'

const ArtworkSlide = ({ slide, isActive }) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  useArtwork3D(canvasRef, containerRef, slide.type)

  const handleViewMore = (e) => {
    e.preventDefault()
    const element = document.getElementById('works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      ref={containerRef}
      className={`artwork-container ${isActive ? 'active' : ''}`}
    >
      <canvas
        ref={canvasRef}
        id={`artwork-canvas-${slide.id}`}
        className="artwork-canvas"
      ></canvas>
      <div className="artwork-overlay">
        <div className="artwork-info">
          <span className="artwork-title">Featured Work</span>
          <span className="artwork-artist">2D to 3D Transformation</span>
        </div>
      </div>
      <a href="#works" className="artwork-view-more" onClick={handleViewMore}>
        <span>더보기</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}

const ArtworkContainer = ({ currentSlide: externalSlide = null }) => {
  const [currentSlide, setCurrentSlide] = useState(externalSlide !== null ? externalSlide : 0)
  const slides = [
    { id: 'scalable', type: 'scalable' },
    { id: 'copyright-free', type: 'copyright-free' },
    { id: 'real-world-utility', type: 'real-world-utility' }
  ]

  // 외부에서 전달된 currentSlide가 변경되면 업데이트
  useEffect(() => {
    if (externalSlide !== null) {
      setCurrentSlide(externalSlide)
    }
  }, [externalSlide])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="artwork-carousel-wrapper">
      <div className="artwork-carousel">
        <div className="artwork-carousel-container">
          {slides.map((slide, index) => (
            <ArtworkSlide
              key={slide.id}
              slide={slide}
              isActive={index === currentSlide}
            />
          ))}
        </div>
      </div>
      
      <button 
        className="carousel-arrow carousel-arrow-left" 
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className="carousel-arrow carousel-arrow-right" 
        onClick={handleNext}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default ArtworkContainer

