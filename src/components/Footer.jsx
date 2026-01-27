import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Arcawave Inc.</h3>
          <p>Where art meets technology</p>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <a href="https://www.instagram.com/fluxrs_ai/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/arcawave/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <a href="mailto:coo@arcawave.xyz">coo@arcawave.xyz</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Arcawave. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

