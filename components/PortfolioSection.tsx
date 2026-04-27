'use client'

import Image from 'next/image'
import React, { useState } from 'react'

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
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Work</h2>
          <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
            Explore Our Projects
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project tells a unique story of transformation and elegance. Discover how we turn spaces into beautiful expressions of our clients' lifestyle.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Hover CTA */}
              <div className="px-5 pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full text-sm font-medium text-primary hover:text-accent transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
