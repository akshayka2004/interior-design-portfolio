'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params)
  const project = projects.find(p => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] md:text-sm font-bold text-white/80 uppercase tracking-[0.4em] mb-4">
                {project.category}
              </p>
              <h1 className="font-serif text-3xl md:text-7xl font-bold text-white mb-8">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
            {/* Left: Description */}
            <div className="lg:w-2/3">
              <Link 
                href="/works"
                className="inline-flex items-center gap-2 text-primary font-bold mb-8 md:mb-12 hover:gap-4 transition-all text-sm"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Works
              </Link>
              
              <div className="space-y-6 md:space-y-8">
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">The Challenge</h2>
                <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                  {project.details || project.description}
                </p>
                <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  Every detail in this project was meticulously planned to ensure a perfect balance between aesthetic appeal and practical utility. We worked closely with the clients to understand their lifestyle and translate it into a physical space that feels both personal and professional.
                </p>
              </div>
            </div>

            {/* Right: Info Box */}
            <div className="lg:w-1/3">
              <div className="bg-secondary/50 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 space-y-6 md:space-y-8 sticky top-32">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-1 md:mb-2">Category</h4>
                    <p className="text-lg md:text-xl font-serif font-bold text-foreground">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-1 md:mb-2">Year</h4>
                    <p className="text-lg md:text-xl font-serif font-bold text-foreground">2024</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-1 md:mb-2">Location</h4>
                  <p className="text-lg md:text-xl font-serif font-bold text-foreground">Manhattan, New York</p>
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-1 md:mb-2">Scope</h4>
                  <p className="text-lg md:text-xl font-serif font-bold text-foreground">Full Renovation & Curation</p>
                </div>
                <div className="pt-6 border-t border-border">
                  <Link 
                    href="/contact"
                    className="w-full py-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold gap-2 hover:bg-opacity-90 transition-all min-h-[48px]"
                  >
                    Discuss Your Space <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-secondary/20 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-12 md:mb-16 text-center">Visual <span className="text-primary italic">Narrative</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {project.gallery?.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl ${idx === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
