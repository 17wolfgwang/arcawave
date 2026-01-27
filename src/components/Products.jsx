import React from 'react'

const Products = () => {
  const products = [
    {
      title: 'Fluxrs',
      subtitle: '',
      description: 'Connecting artists and global collectors through data-driven, richer art experiences.',
      gradient: 'linear-gradient(135deg, #374cc1 0%, #50308e 100%)',
      image: '/assets/images/products/fluxrs.png'
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

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <h2 className="section-title">Our Products</h2>
      </div>
      
      <div className="gallery-grid">
        {products.map((product, index) => (
          <div key={index} className={`gallery-item ${index > 0 ? 'disabled' : ''}`}>
            <div className="gallery-image">
              {product.image ? (
                <img src={product.image} alt={product.title} className="gallery-product-image" loading="lazy" />
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products

