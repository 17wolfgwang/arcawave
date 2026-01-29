import React, { useState, useEffect, useRef } from 'react'

const Products = () => {
  const [cardWidth, setCardWidth] = useState(null)
  const imageRef = useRef(null)

  const products = [
    {
      title: 'Fluxrs',
      subtitle: '',
      description: 'Connecting artists and global collectors through data-driven, richer art experiences.',
      gradient: 'linear-gradient(135deg, #374cc1 0%, #50308e 100%)',
      image: '/assets/images/products/fluxrs.webp',
      link: 'https://fluxrs.xyz/'
    },
    {
      title: 'Synapsy',
      subtitle: '',
      description: 'A collaborative social platform that uses AI to blend individual talents into unique short-form stories.',
      gradient: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)'
    },
    {
      title: 'Volum',
      subtitle: '',
      description: 'Bridging the gap between 2D and 3D to expand artistic boundaries through AI-driven style preservation.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ]

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth <= 768
    
    if (!checkIsMobile()) {
      setCardWidth(null)
      return
    }

    const updateCardWidth = () => {
      if (!checkIsMobile()) {
        setCardWidth(null)
        return
      }

      // Fluxrs 이미지의 실제 렌더링된 너비 측정
      if (imageRef.current) {
        const imageWidth = imageRef.current.offsetWidth
        if (imageWidth > 0) {
          setCardWidth(imageWidth)
        }
      }
    }

    const handleImageLoad = () => {
      // 이미지 로드 후 약간의 지연을 두고 측정 (렌더링 완료 대기)
      setTimeout(updateCardWidth, 10)
    }

    // Fluxrs 이미지 처리
    if (imageRef.current) {
      if (imageRef.current.complete) {
        handleImageLoad()
      } else {
        imageRef.current.addEventListener('load', handleImageLoad)
      }
    }

    // 리사이즈 이벤트
    const handleResize = () => {
      updateCardWidth()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', handleImageLoad)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <h2 className="section-title">Our Products</h2>
      </div>
      
      <div className="gallery-grid" style={cardWidth ? { '--card-width': `${cardWidth}px` } : {}}>
        {products.map((product, index) => {
          const cardContent = (
            <>
              <div className="gallery-image">
                {product.image ? (
                  <img 
                    ref={index === 0 ? imageRef : null}
                    src={product.image} 
                    alt={product.title} 
                    className="gallery-product-image" 
                    loading="lazy" 
                  />
                ) : (
                  <div className="image-placeholder" style={{ background: product.gradient }}></div>
                )}
                {index > 0 && (
                  <div className="coming-soon-badge">Coming Soon</div>
                )}
              </div>
              <div className="gallery-info">
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>
                <p className="gallery-description">{product.description}</p>
              </div>
            </>
          )

          if (product.link) {
            return (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`gallery-item ${index > 0 ? 'disabled' : ''}`}
              >
                {cardContent}
              </a>
            )
          }

          return (
            <div key={index} className={`gallery-item ${index > 0 ? 'disabled' : ''}`}>
              {cardContent}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Products

