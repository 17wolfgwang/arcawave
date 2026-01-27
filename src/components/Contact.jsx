import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.')
      return
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:coo@arcawave.xyz?subject=${subject}&body=${body}`
    
    // Open default email client
    window.location.href = mailtoLink
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus('Email client opened')
      
      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    }, 100)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We'd love to hear from you. Reach out to start a conversation.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:coo@arcawave.xyz">coo@arcawave.xyz</a>
            </div>
            <div className="contact-item">
              <h3>Social</h3>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              style={submitStatus === 'Message Sent!' ? { background: '#34a853' } : {}}
            >
              {submitStatus || 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

