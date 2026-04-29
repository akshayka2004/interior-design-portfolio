'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Wrench, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We begin with a deep dive into your vision, lifestyle, and how you intend to use your space.'
  },
  {
    icon: PenTool,
    title: 'Concept Design',
    description: 'Translating ideas into detailed layouts, mood boards, and material palettes for your approval.'
  },
  {
    icon: Wrench,
    title: 'Execution',
    description: 'Our expert team manages every detail of the construction and installation phase with precision.'
  },
  {
    icon: Sparkles,
    title: 'Delivery',
    description: 'The final reveal where we hand over your refined, bespoke sanctuary ready for living.'
  }
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 bg-background px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4"
          >
            The Process
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-6xl font-bold text-foreground mb-6"
          >
            From Vision to <span className="text-primary italic">Reality</span>
          </motion.h3>
          <p className="text-muted-foreground font-light text-base md:text-lg max-w-2xl mx-auto">
            A structured approach to design that ensures clarity, quality, and an exceptional final result.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number/Icon Container */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <step.icon className="w-7 h-7" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-[10px] font-bold text-muted-foreground shadow-sm">
                  0{index + 1}
                </div>
              </div>

              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                {step.description}
              </p>

              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-gradient-to-r from-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
