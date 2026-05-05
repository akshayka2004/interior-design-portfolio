'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  Building2, 
  Paintbrush, 
  Lightbulb, 
  Settings, 
  Palette,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    Icon: Home,
    title: 'Interior Design',
    description: 'Bespoke residential and commercial interiors tailored to your lifestyle and professional needs.'
  },
  {
    Icon: Building2,
    title: 'Acoustic Solutions',
    description: 'Expert acoustic treatments for studios, educational institutions, and professional environments.'
  },
  {
    Icon: Paintbrush,
    title: 'Space Planning',
    description: 'Optimizing your floor plan for maximum efficiency, flow, and aesthetic impact.'
  },
  {
    Icon: Lightbulb,
    title: 'Design Consultation',
    description: 'Professional guidance on color palettes, materials, and furniture selection.'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-32 bg-secondary/5 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4"
          >
            Studio Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-6xl font-bold text-foreground mb-4 md:mb-8"
          >
            Refined <span className="text-primary italic">Solutions</span>
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-background border border-border/50 hover:shadow-2xl transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 md:mb-8 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.Icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                {service.title}
              </h4>

              <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
