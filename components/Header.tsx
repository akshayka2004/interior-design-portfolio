'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1]
      if (pathname === '/') {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
        setIsMenuOpen(false)
      }
    }
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Works', href: '/works' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center cursor-pointer group"
          >
            <div className="relative h-12 w-36 md:h-14 md:w-44 group-hover:opacity-90 transition-opacity duration-300">
              <Image 
                src="/logo.png" 
                alt="Alliance Furnishing Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-all relative group",
                  pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all text-sm font-semibold flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 md:hidden transition-all duration-500 ease-in-out flex flex-col",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center flex-1 gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href)
                setIsMenuOpen(false)
              }}
              className={cn(
                "text-4xl font-serif font-bold transition-colors py-3 w-full text-center min-h-[48px] flex items-center justify-center",
                pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={(e) => {
              handleNavClick(e, '/contact')
              setIsMenuOpen(false)
            }}
            className="mt-12 px-10 py-5 bg-primary text-primary-foreground rounded-full text-xl font-bold shadow-xl shadow-primary/20 w-full max-w-[280px] text-center min-h-[56px] flex items-center justify-center"
          >
            Get Started Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

