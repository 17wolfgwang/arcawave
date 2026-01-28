import React, { useState, useEffect, useRef } from 'react'

const Features = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimerRef = useRef(null)

  const features = [
    {
      title: 'IP Expansion',
      description: '90% cost reduction via 10+ new categories.',
      type: 'scalable',
      image: '/assets/images/keywords/expansion.png'
    },
        {
          title: 'Copyright-free',
          description: '100% legal safety against $1.7B in industry risks.',
          type: 'copyright-free',
          image: '/assets/images/keywords/ip.webp'
        },
    {
      title: 'Real-world Impact',
      description: '94% higher conversion through digital-physical curation.',
      type: 'real-world-utility',
      image: '/assets/images/keywords/impact.jpg'
    }
  ]

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev === features.length - 1 ? 0 : prev + 1))
      }, 5000) // 5초마다 자동 전환
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [isAutoPlaying, features.length])

  const handleTabClick = (index) => {
    setActiveTab(index)
    // 탭 클릭 시 타이머 리셋하여 자동 재생 계속 유지
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }
    // 자동 재생 계속 유지
    setIsAutoPlaying(true)
  }

  return (
    <section className="hero-features-section">
      <div className="features-container">
        <div className="hero-features">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`hero-feature ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="feature-content">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-content-item ${index === activeTab ? 'active' : ''}`}
            >
              {feature.video ? (
                <div className="feature-content-video">
                  <video
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                </div>
              ) : feature.image ? (
                <div className="feature-content-image">
                  <img src={feature.image} alt={feature.title} loading="lazy" />
                </div>
              ) : (
                <div className="feature-content-placeholder">
                  <p className="feature-content-text">
                    {feature.title} 관련 설명 자료가 여기에 표시됩니다.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

