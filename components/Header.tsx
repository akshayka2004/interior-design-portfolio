'use client'

import React from 'react'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-primary">Studio</h1>
              <p className="text-xs text-muted-foreground">Interior Design</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all text-sm font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
