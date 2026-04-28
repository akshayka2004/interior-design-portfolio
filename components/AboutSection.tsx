'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, Target, Trophy, Users } from 'lucide-react'

export default function AboutSection() {
  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Design Excellence',
      description: 'We pursue perfection in every detail, creating spaces that are both beautiful and functional.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your vision drives our work. We listen, understand, and deliver exactly what you imagine.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Timeless Quality',
      description: 'We choose materials and styles that stand the test of time, ensuring lasting elegance.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with architects, contractors, and our clients throughout the entire process.'
    }
  ]

  return (
    <section id="about" className="py-32 bg-secondary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/portfolio-2.jpg"
                alt="Studio Interior Design Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block">
              <div className="text-center">
                <p className="text-5xl font-serif font-bold text-primary">12+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-2">Years of <br /> Excellence</p>
              </div>
            </div>

            {/* Decorative background */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary/10 rounded-[2.5rem] -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Story</h2>
              <h3 className="font-serif text-5xl font-bold text-foreground leading-tight">
                Crafting Environments That <span className="text-primary italic">Inspire</span>.
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed font-light italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2012, Studio Interior Design has been transforming spaces and enriching lives through thoughtful, sophisticated design. Our passion is creating environments that inspire, comfort, and delight.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                'Tailored Design Solutions',
                'Sustainable Materials',
                'Expert Craftsmanship',
                'End-to-End Management'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300">
              Read Our Full Story
            </button>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2rem] border border-border/60 hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="font-serif text-2xl font-bold text-foreground mb-4">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
