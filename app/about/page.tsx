'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Award, Users, Home as HomeIcon } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const stats = [
    { label: 'Years of Excellence', value: '15+', icon: Award },
    { label: 'Projects Completed', value: '250+', icon: HomeIcon },
    { label: 'Happy Clients', value: '180+', icon: Users },
  ]

  const services = [
    { title: 'Interior Architecture', description: 'Complete structural redesign and space planning for modern living.' },
    { title: 'Bespoke Furniture', description: 'Custom-crafted pieces that perfectly fit your space and style.' },
    { title: 'Art Curation', description: 'Finding the perfect pieces to complete your home\'s visual story.' },
    { title: 'Project Management', description: 'End-to-end oversight from concept to the final finishing touch.' },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden px-5">
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image src="/portfolio-6.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-9xl font-bold text-foreground leading-[1.1] mb-8 md:mb-12"
            >
              We Create <span className="text-primary italic">Soulful</span> Spaces.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Principle's Vision */}
      <section className="py-20 md:py-32 bg-background px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-20 h-[1px] bg-primary mx-auto opacity-30" />
            <blockquote className="font-serif text-2xl md:text-5xl font-bold text-foreground leading-tight italic">
              "We believe that a well-designed space is the ultimate form of self-care. It's about creating a silent dialogue between the architecture and those who inhabit it."
            </blockquote>
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Alexandra Vance</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Founder & Principal Designer</p>
            </div>
            <div className="w-20 h-[1px] bg-primary mx-auto opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-32 bg-secondary/20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em]">The Studio Story</h2>
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Crafting Elegance Since <span className="italic text-primary">2009</span>.
              </h3>
              <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                Founded on the principle that luxury should be felt as much as it is seen, our studio has spent over a decade redefining the boundaries of interior design in Manhattan and beyond.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Our approach is deeply personal. We believe that every room should tell a story—your story. By combining modern innovation with timeless craftsmanship, we create environments that inspire and endure.
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 md:gap-8 pt-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image src="/portfolio-2.jpg" alt="Studio founder" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-32 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Services</h2>
            <h3 className="font-serif text-3xl md:text-6xl font-bold text-foreground mb-6 md:mb-8">Elevated <span className="text-primary italic">Solutions</span></h3>
            <p className="text-base md:text-lg text-muted-foreground font-light">From initial concept to the final reveal, we provide comprehensive design services tailored to your specific needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-secondary/30 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary/10 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">{service.title}</h4>
                <p className="text-base text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-7xl font-bold text-primary-foreground mb-8 md:mb-12 leading-tight">
            Ready to Transform Your <span className="italic opacity-80">Sanctuary?</span>
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-full text-lg md:text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto justify-center min-h-[56px]"
          >
            Get In Touch <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
