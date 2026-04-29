'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'

export default function WorksPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-secondary/30 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-9xl font-bold text-foreground mb-8 md:mb-12"
          >
            Studio <span className="text-primary italic">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
          >
            A curated collection of our finest interior design projects, showcasing our commitment to elegance, light, and refined aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 md:py-24 px-5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/works/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl bg-secondary shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-4 py-2 md:px-6 md:py-3 bg-white text-primary rounded-full font-bold shadow-xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 flex items-center gap-2 text-[10px] md:text-xs">
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-6 px-1 md:px-2">
                    <p className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1 md:mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-base md:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
