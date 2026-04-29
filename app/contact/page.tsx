'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 -z-10 opacity-5">
          <Image src="/portfolio-1.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-8"
          >
            Let&apos;s <span className="text-primary italic">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            Ready to start your design journey? We&apos;d love to hear from you and discuss how we can transform your space.
          </motion.p>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  )
}
