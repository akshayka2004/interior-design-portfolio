'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

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

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 (234) 567-8900', href: 'tel:+1234567890' },
    { icon: Mail, label: 'Email', value: 'hello@studiodesign.com', href: 'mailto:hello@studiodesign.com' },
    { icon: MapPin, label: 'Studio', value: '123 Design Street, New York, NY 12345', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM', href: '#' },
  ]

  return (
    <section id="contact" className="py-16 md:py-32 bg-secondary/20 overflow-hidden px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Book a Consultation</h2>
            <h3 className="font-serif text-3xl sm:text-6xl font-bold text-foreground leading-tight">
              Ready to Discuss Your <span className="text-primary italic">Space?</span>
            </h3>
          </div>
          <p className="text-base text-muted-foreground max-w-sm font-light leading-relaxed">
            Every masterpiece begins with a conversation. We invite you to share your vision and explore the possibilities with our expert design team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start gap-5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-background border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <info.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-base md:text-lg font-serif font-bold text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-background p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-border/50 shadow-2xl shadow-primary/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 md:p-6 bg-primary/10 border border-primary/20 rounded-xl md:rounded-2xl text-primary font-bold text-center text-sm md:text-base"
                >
                  Message Sent Successfully! We&apos;ll be in touch soon.
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-secondary/30 border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-base min-h-[48px]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-secondary/30 border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-base min-h-[48px]"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary/30 border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-base min-h-[48px]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">Interest</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-secondary/30 border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none cursor-pointer text-base min-h-[48px]"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-secondary/30 border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-base min-h-[120px]"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 md:py-5 bg-primary text-primary-foreground rounded-xl md:rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 group min-h-[56px]"
              >
                Start Your Project <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

