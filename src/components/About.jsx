import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  // Partners 로고 데이터
  const partnerLogos = [
    { id: 1, name: 'Berkeley', logo: '/assets/images/cards/partners/berkeley.svg' },
    { id: 2, name: 'KAIST', logo: '/assets/images/cards/partners/kaist.png' },
    { id: 3, name: 'SNU', logo: '/assets/images/cards/partners/snu.svg' }
  ]

  const featureCards = [
    {
      id: 1,
      title: '100K+ Visitors',
      subtitle: 'CENDIWEEK 2025 : The Cendiverse',
      description: 'Contributed to the planning and execution of the Urban Digital Festival, drawing a record-breaking crowd of over 100,000 people.',
      backgroundColor: '#E8DDD4',
      image: '/assets/images/cards/centom.jpeg',
      gridColumn: 'span 2',
      gridRow: 'span 2',
      link: 'https://youtu.be/S7XYK-6VH3E?si=qShUUBg-Nk1VHkW3',
      hasWhiteText: true
    },
    {
      id: 2,
      title: 'Public Collaboration',
      description: 'Developed a prototype for the National Heritage Information Service content improvement guidelines in collaboration with the Ministry of Culture.',
      backgroundColor: '#F5F0E8',
      image: '/assets/images/cards/Public%20Partnership.png',
      gridColumn: 'span 2',
      gridRow: 'span 1',
      link: '/features/public-partnership',
      hasWhiteText: true
    },
    {
      id: 3,
      title: '500+ Artworks',
      description: 'Artworks serve as data for IP expansion and copyright-free content generation.',
      backgroundColor: '#D4C9B8',
      image: '/assets/images/cards/arts.png',
      gridColumn: 'span 1',
      gridRow: 'span 1',
      link: '/features/artwork-data',
      isHalf: true,
      hasWhiteText: true
    },
    {
      id: 4,
      title: '50+ Artist',
      description: 'Empowering artists by building a sustainable creative ecosystem.',
      backgroundColor: '#8B8A6B',
      image: '/assets/images/cards/artist.jpg',
      gridColumn: 'span 1',
      gridRow: 'span 1',
      link: '/features/artists',
      isHalf: true,
      hasWhiteText: true
    },
    {
      id: 5,
      title: 'Partners',
      description: 'Our trusted partners and collaborators.',
      backgroundColor: 'transparent',
      image: null,
      gridColumn: 'span 4',
      gridRow: 'span 1',
      link: '/partners'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2 className="section-title">About Arcawave</h2>
      </div>
      
      <div className="about-features-grid">
        {featureCards.map((card) => {
          const cardContent = (
            <>
              {card.id === 5 && (
                <div className="partners-slider-container">
                  <div className="partners-slider">
                    {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                      <div key={`${logo.id}-${index}`} className="partner-logo-item">
                        <img 
                          src={logo.logo} 
                          alt={logo.name} 
                          className="partner-logo-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="feature-card-content">
                <h3 className={`feature-card-title ${card.hasWhiteText ? 'white-text' : ''} ${card.hasPurpleText ? 'purple-text' : ''}`}>
                  {card.subtitle ? (
                    <>
                      <AnimatedTitle title={card.title} />
                      <br />
                      <span className="feature-card-subtitle">{card.subtitle}</span>
                    </>
                  ) : (
                    <AnimatedTitle title={card.title} />
                  )}
                </h3>
              </div>
              {card.id !== 5 && (
                <div className="feature-card-overlay">
                  <div className="feature-card-overlay-content">
                    <p className="feature-card-overlay-description">{card.description}</p>
                  </div>
                </div>
              )}
            </>
          )

          if (card.id === 1) {
            // Cendiweek 카드만 링크 유지
            return (
              <a
                key={card.id}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`about-feature-card ${card.id === 5 ? 'partners-card' : ''}`}
                style={{
                  backgroundColor: card.image ? 'transparent' : card.backgroundColor,
                  backgroundImage: card.image ? `url("${card.image}")` : 'none',
                  backgroundSize: card.image ? 'cover' : 'auto',
                  backgroundPosition: card.image ? 'center' : 'initial',
                  gridColumn: card.gridColumn,
                  gridRow: card.gridRow
                }}
              >
                {cardContent}
              </a>
            )
          } else {
            // 나머지 카드는 div로 변경 (링크 없음)
            return (
              <div
                key={card.id}
                className={`about-feature-card ${card.id === 5 ? 'partners-card' : ''}`}
                style={{
                  backgroundColor: card.image ? 'transparent' : card.backgroundColor,
                  backgroundImage: card.image ? `url("${card.image}")` : 'none',
                  backgroundSize: card.image ? 'cover' : 'auto',
                  backgroundPosition: card.image ? 'center' : 'initial',
                  gridColumn: card.gridColumn,
                  gridRow: card.gridRow
                }}
              >
                {cardContent}
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

const AnimatedTitle = ({ title }) => {
  const [displayTitle, setDisplayTitle] = useState(title)
  const animationTimerRef = useRef(null)
  const elementRef = useRef(null)

  useEffect(() => {
    // 타이틀에서 숫자 추출 (100K+, 500+ 등 모두 처리)
    const match = title.match(/(\d+)(K?)(\+?)/)
    if (!match) {
      return // 숫자가 없으면 애니메이션 없음
    }

    const targetNumber = parseInt(match[1])
    const hasK = match[2] === 'K'
    const hasPlus = match[3] === '+'
    const suffix = (hasK ? 'K' : '') + (hasPlus ? '+' : '')
    const prefix = title.substring(0, title.indexOf(match[0]))
    const postfix = title.substring(title.indexOf(match[0]) + match[0].length)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 기존 애니메이션 타이머가 있으면 정리
            if (animationTimerRef.current) {
              clearInterval(animationTimerRef.current)
            }
            // 초기값으로 리셋
            setDisplayTitle(title)
            // 애니메이션 실행
            animateCounter(targetNumber, suffix, prefix, postfix)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current)
      }
    }
  }, [title])

  const animateCounter = (target, suffix, prefix, postfix) => {
    const duration = 2000
    const start = 0
    const increment = target / (duration / 16)
    let current = start

    animationTimerRef.current = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(animationTimerRef.current)
        animationTimerRef.current = null
      }
      const count = Math.floor(current)
      setDisplayTitle(`${prefix}${count}${suffix}${postfix}`)
    }, 16)
  }

  return <span ref={elementRef}>{displayTitle}</span>
}

export default About

