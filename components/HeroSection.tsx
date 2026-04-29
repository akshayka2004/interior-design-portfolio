'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-background px-5">
      {/* Background with optimized Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury Interior Design"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Award Winning Studio 2024</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-7xl lg:text-9xl font-bold text-foreground leading-[1.2] md:leading-[0.95] tracking-tight max-w-[90%] mx-auto">
              Designing <span className="text-primary italic">Timeless</span> Interior Experiences.
            </h1>

            <p className="text-base sm:text-2xl text-muted-foreground font-light max-w-[85%] md:max-w-2xl mx-auto leading-relaxed">
              We transform ordinary spaces into extraordinary sanctuaries through bespoke interior architecture and refined modern aesthetics.
            </p>

            {/* Signature Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex items-center justify-center gap-4 text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.5em] pt-4"
            >
              <span className="opacity-40">Space</span>
              <span className="w-1 h-1 rounded-full bg-primary/30" />
              <span className="opacity-40">Light</span>
              <span className="w-1 h-1 rounded-full bg-primary/30" />
              <span className="opacity-40">Intention</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-6 md:pt-8 w-full max-w-sm sm:max-w-none mx-auto">
              {/* Primary CTA */}
              <Link
                href="/works"
                className="group relative px-10 py-4 md:py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/30 w-full sm:w-auto min-h-[48px] flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  View Our Works <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="group flex items-center gap-3 px-10 py-4 md:py-5 bg-white/80 backdrop-blur-md border border-border text-foreground rounded-full font-bold text-lg hover:bg-white transition-all w-full sm:w-auto justify-center shadow-sm min-h-[48px]"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
