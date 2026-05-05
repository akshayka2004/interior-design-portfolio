'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32 bg-secondary/10 overflow-hidden px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[350px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/portfolio-2.jpg"
                alt="Studio Interior Design Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl hidden sm:block">
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-serif font-bold text-primary">28+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1 md:mt-2">Years of <br /> Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em]">The Studio</h2>
              <h3 className="font-serif text-3xl md:text-6xl font-bold text-foreground leading-tight">
                Crafting Spaces That <span className="text-primary italic">Inspire</span>.
              </h3>
            </div>

            <p className="text-base md:text-xl text-muted-foreground leading-relaxed font-light">
              We believe that great design is a dialogue between space and soul. Our studio specializes in high-end residential and commercial interiors that balance aesthetic brilliance with functional harmony.
            </p>

            {/* Director's Note / Signature Tone */}
            <div className="pt-4 border-t border-border">
              <p className="italic text-foreground/70 font-light mb-2">
                "We don't just design rooms; we curate experiences that endure time."
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">— Principal Architect</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Link 
                href="/about"
                className="inline-flex items-center gap-3 px-10 py-4 md:py-5 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-2xl hover:shadow-primary/20 transition-all group w-full md:w-auto justify-center min-h-[48px]"
              >
                Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-4 px-4 py-2 bg-secondary rounded-full hidden md:flex">
                <span className="text-xs font-bold text-foreground">70+ Projects Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

