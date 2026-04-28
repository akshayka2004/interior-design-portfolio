'use client'

import React from 'react'
import { Instagram, Linkedin, Pin as Pinterest, Facebook, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-background leading-none">Studio</h3>
                <p className="text-[10px] text-background/40 uppercase tracking-[0.2em] mt-1">Interior Design</p>
              </div>
            </div>
            <p className="text-background/60 leading-relaxed font-light">
              Crafting timeless, elegant interior designs that reflect your personal style and enhance the beauty of your home since 2012.
            </p>
            <div className="flex gap-4 pt-4">
              {[Instagram, Pinterest, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 text-white">Navigation</h4>
            <ul className="space-y-4">
              {['Portfolio', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-background/60 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 text-white">Expertise</h4>
            <ul className="space-y-4">
              {[
                'Residential Design',
                'Commercial Spaces',
                'Renovations',
                'Consultations'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-background/60 hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-8 text-white">Newsletter</h4>
            <p className="text-background/60 mb-6 font-light">Join our list for design inspiration and updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-primary-foreground px-6 rounded-full font-bold text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-background/40 font-light">
            © {currentYear} Studio Design Co. All rights reserved. Built with passion.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-background/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-background/40 hover:text-white transition-colors">Terms of Use</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
