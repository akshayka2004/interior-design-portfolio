import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-sm">S</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-primary">Studio</h3>
            </div>
            <p className="text-sm text-muted-foreground">Creating beautiful spaces since 2012.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Residential Design</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Commercial Spaces</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Renovations</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Consultations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <p className="text-sm text-muted-foreground mb-3">
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                +1 (234) 567-8900
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@studiodesign.com" className="hover:text-primary transition-colors">
                hello@studiodesign.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Studio Interior Design. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
