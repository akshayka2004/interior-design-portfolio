'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Living Spaces',
    image: '/portfolio-1.jpg',
    description: 'Contemporary minimalist design with warm, inviting elements'
  },
  {
    id: 2,
    title: 'Serene Bedroom',
    category: 'Bedrooms',
    image: '/portfolio-2.jpg',
    description: 'Peaceful sanctuary with elegant furnishings and soft lighting'
  },
  {
    id: 3,
    title: 'Gourmet Kitchen',
    category: 'Kitchens',
    image: '/portfolio-3.jpg',
    description: 'Sophisticated culinary space with marble finishes'
  },
  {
    id: 4,
    title: 'Luxury Bathroom',
    category: 'Bathrooms',
    image: '/portfolio-4.jpg',
    description: 'Spa-like retreat with premium materials and finishes'
  },
  {
    id: 5,
    title: 'Home Office',
    category: 'Workspaces',
    image: '/portfolio-5.jpg',
    description: 'Productive workspace combining comfort and functionality'
  },
  {
    id: 6,
    title: 'Open Concept Living',
    category: 'Living Spaces',
    image: '/portfolio-6.jpg',
    description: 'Flowing spaces with natural light and modern aesthetics'
  },
  {
    id: 7,
    title: 'Grand Entryway',
    category: 'Foyers',
    image: '/portfolio-7.jpg',
    description: 'Impressive first impression with elegant details'
  },
  {
    id: 8,
    title: 'Reading Nook',
    category: 'Specialty Spaces',
    image: '/portfolio-8.jpg',
    description: 'Cozy corner perfect for relaxation and contemplation'
  }
]

const categories = ['All', 'Living Spaces', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Workspaces', 'Foyers', 'Specialty Spaces']

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Work</h2>
            <h3 className="font-serif text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              A Gallery of <span className="text-primary italic">Refined</span> Spaces.
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm font-light leading-relaxed">
            Each project tells a unique story of transformation and elegance. Explore our curated selection of bespoke interiors.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-16 pb-4 border-b border-border/40">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all relative ${
                activeCategory === category
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 space-y-2 px-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                      {project.category}
                    </p>
                    <div className="w-2 h-2 rounded-full bg-primary/20" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-foreground text-background rounded-full font-bold hover:bg-primary transition-colors shadow-2xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
