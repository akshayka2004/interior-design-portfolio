'use client'

import React, { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get In Touch</h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
            Let&apos;s Create Something Beautiful
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to start your design journey? We&apos;d love to hear from you. Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">Phone</h4>
              <p className="text-muted-foreground mb-2">Give us a call during business hours</p>
              <a href="tel:+1234567890" className="text-primary hover:text-accent font-medium transition-colors">
                +1 (234) 567-8900
              </a>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">Email</h4>
              <p className="text-muted-foreground mb-2">Send us an email anytime</p>
              <a href="mailto:hello@studiodesign.com" className="text-primary hover:text-accent font-medium transition-colors">
                hello@studiodesign.com
              </a>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">Address</h4>
              <p className="text-muted-foreground leading-relaxed">
                123 Design Street<br />
                Studio District<br />
                City, State 12345
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">Hours</h4>
              <div className="text-muted-foreground space-y-1">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border">
              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary">
                  <p className="font-medium">Thank you for your message! We&apos;ll get back to you soon.</p>
                </div>
              )}

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Space</option>
                  <option value="renovation">Renovation Project</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all font-medium"
              >
                Send Message
              </button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                We&apos;ll respond to your inquiry within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
