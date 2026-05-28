'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-secondary/30 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-9xl font-bold text-foreground mb-6 md:mb-10"
          >
            Our <span className="text-primary italic">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-10"
          >
            A curated collection of our finest interior design projects, showcasing our commitment to elegance, light, and refined aesthetics.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 md:py-24 px-5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/works/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl bg-secondary shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-4 py-2 md:px-6 md:py-3 bg-white text-primary rounded-full font-bold shadow-xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 flex items-center gap-2 text-[10px] md:text-xs">
                        View Gallery <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Image count badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.gallery?.length ?? 0} photos
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-6 px-1 md:px-2">
                    <p className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1 md:mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-base md:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1 line-clamp-1 font-light">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
