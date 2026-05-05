'use client'

import React from 'react'
import { Instagram, Linkedin, Pin as Pinterest, Facebook, ArrowUp, Send } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Works', href: '/works' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-5 pt-20 pb-12">
        <div className="flex flex-col items-center text-center gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="max-w-md space-y-8 flex flex-col items-center">
            <Link href="/" className="flex flex-col items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl shadow-lg">
                <Image 
                  src="/logo.png" 
                  alt="Alliance Furnishing Logo" 
                  fill 
                  className="object-contain bg-white"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif font-bold text-3xl text-background leading-none">ALLIANCE</h3>
                <p className="text-[10px] text-primary uppercase tracking-[0.3em] mt-1 font-bold">FURNISHING</p>
              </div>
            </Link>
            <p className="text-background/60 leading-relaxed font-light text-base md:text-lg">
              Dedicated to creating sophisticated sanctuaries through intentional design, light, and architectural harmony since 1998.
            </p>
            <div className="flex gap-6 pt-4 justify-center">
              {[Instagram, Pinterest, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group min-h-[48px] min-w-[48px]"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-2xl">
            {/* Navigation */}
            <div className="flex flex-col items-center">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-primary">Studio</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-background/60 hover:text-white transition-colors text-base font-light flex items-center justify-center gap-2 group min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="flex flex-col items-center">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-primary">Expertise</h4>
              <ul className="space-y-4">
                {[
                  'Interior Design',
                  'Acoustic Solutions',
                  'Space Planning',
                  'Design Consultation'
                ].map((item) => (
                  <li key={item}>
                    <Link href="/about" className="text-background/60 hover:text-white transition-colors text-base font-light flex items-center justify-center gap-2 group min-h-[44px]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md flex flex-col items-center">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-primary">Stay Refined</h4>
            <p className="text-background/60 mb-8 font-light text-base text-center">Join our list for exclusive design inspiration.</p>
            <form className="relative group w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors pr-16 text-base"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-primary-foreground w-12 rounded-xl flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg min-h-[44px]">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8 text-center">
          <p className="text-sm text-background/30 font-light">
            © {currentYear} Alliance Furnishing.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#" className="text-xs text-background/30 hover:text-white transition-colors min-h-[44px] flex items-center">Privacy</a>
            <a href="#" className="text-xs text-background/30 hover:text-white transition-colors min-h-[44px] flex items-center">Terms</a>
            <a href="#" className="text-xs text-background/30 hover:text-white transition-colors min-h-[44px] flex items-center">Cookies</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group min-h-[48px]"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}

