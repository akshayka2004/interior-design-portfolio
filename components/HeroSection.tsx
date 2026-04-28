'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#faf7f2]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Award Winning Studio
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-6xl sm:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Design that <br />
                  <span className="text-primary italic">Inspires</span> Life.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
                  We craft bespoke interior experiences that balance aesthetic brilliance with functional harmony. Elevate your living with Studio.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-opacity-90 transition-all font-bold text-lg shadow-2xl shadow-primary/30 flex items-center gap-3 group"
                >
                  Explore Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 flex items-center gap-3 text-foreground font-bold hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Play className="w-4 h-4 fill-current ml-1" />
                  </div>
                  Watch Story
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-12 grid grid-cols-3 gap-8 border-t border-border/60">
                <div>
                  <p className="text-4xl font-serif font-bold text-primary">12+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">Years of Craft</p>
                </div>
                <div>
                  <p className="text-4xl font-serif font-bold text-primary">150+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">Projects Done</p>
                </div>
                <div>
                  <p className="text-4xl font-serif font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/portfolio-1.jpg"
                alt="Luxury Interior Design"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80 mb-2">Featured Project</p>
                <h3 className="text-2xl font-serif font-bold">The Minimalist Haven</h3>
                <p className="text-sm opacity-90 mt-1 font-light">A study in light, texture, and silence.</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
