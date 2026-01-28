import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitStatus, setSubmitStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('Sending...')

    try {
      // EmailJS 설정
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_z7a34u8'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xjuw9fm'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'r_2qIbPongkLxx3T2'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'coo@arcawave.xyz',
          reply_to: formData.email,
        },
        publicKey
      )

      setSubmitStatus('Message Sent!')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('Failed to send. Please try again.')

      setTimeout(() => {
        setSubmitStatus('')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
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
                <a href="https://www.instagram.com/fluxrs_ai/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                <a href="https://www.linkedin.com/company/arcawave/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
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
              disabled={isSubmitting}
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

