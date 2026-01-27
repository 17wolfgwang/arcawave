import React from 'react'

const Navigation = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img src="/assets/logos/Arcawave_Logo_Color.svg" alt="Arcawave Logo" className="logo" />
        </a>
        <div className="nav-links">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
          <a href="#gallery" onClick={(e) => handleSmoothScroll(e, 'gallery')}>Products</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

