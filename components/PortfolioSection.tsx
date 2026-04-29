'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function PortfolioSection() {
  const previewProjects = projects.slice(0, 6)

  return (
    <section id="portfolio" className="py-16 md:py-32 bg-background overflow-hidden px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Featured Projects</h2>
            <h3 className="font-serif text-3xl sm:text-6xl font-bold text-foreground leading-tight">
              A Gallery of <span className="text-primary italic">Refined</span> Spaces.
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base text-muted-foreground max-w-sm font-light leading-relaxed">
              Each project tells a unique story of transformation and elegance. Explore our curated selection of bespoke interiors.
            </p>
            <Link 
              href="/works"
              className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-sm"
            >
              View All Works <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index === 0 ? 'col-span-2 lg:col-span-2 mb-8 md:mb-16' : 'col-span-1'}`}
            >
              <Link href={`/works/${project.slug}`} className="group block relative">
                {/* Image Container */}
                <div className={`relative ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'} overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-secondary shadow-lg`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={index === 0 ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <span className="px-6 py-3 md:px-10 md:py-4 bg-white text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-all duration-500">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`mt-4 ${index === 0 ? 'md:mt-10' : 'md:mt-8'} space-y-1 md:space-y-3 px-1 md:px-2 ${index === 0 ? 'text-center max-w-4xl mx-auto' : ''}`}>
                  <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em]">
                    {project.category}
                  </p>
                  <h4 className={`font-serif ${index === 0 ? 'text-2xl sm:text-5xl lg:text-7xl' : 'text-lg md:text-3xl'} font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1`}>
                    {project.title}
                  </h4>
                  {index === 0 && (
                    <p className="text-muted-foreground font-light text-base md:text-xl max-w-2xl mx-auto mt-4 line-clamp-2 hidden md:block">
                      {project.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <Link 
            href="/works"
            className="inline-flex items-center gap-3 px-12 py-5 bg-foreground text-background rounded-full font-bold hover:bg-primary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 min-h-[56px]"
          >
            Explore All Works <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

