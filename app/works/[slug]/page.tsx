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
import ProjectCarousel from '@/components/ProjectCarousel'

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params)
  const project = projects.find(p => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  const gallery = project.gallery ?? []

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section — uses first gallery image */}
      <section className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-end px-5 pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] md:text-sm font-bold text-white/80 uppercase tracking-[0.4em] mb-3">
                {project.category}
              </p>
              <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back + Description */}
      <section className="py-12 md:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/works"
            className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all text-sm"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Works
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
            {/* Description */}
            <div className="lg:w-2/3 space-y-6">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">About This Project</h2>
              <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed">
                {project.details || project.description}
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Every detail in this project was meticulously planned to ensure a perfect balance between aesthetic appeal and practical utility. We worked closely with our clients to understand their lifestyle and translate it into a physical space that feels both personal and professional.
              </p>
            </div>

            {/* Info box */}
            <div className="lg:w-1/3">
              <div className="bg-secondary/50 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 space-y-6 md:space-y-8 sticky top-32">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-1 md:mb-2">Category</h4>
                    <p className="text-lg md:text-xl font-serif font-bold text-foreground">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-1 md:mb-2">Photos</h4>
                    <p className="text-lg md:text-xl font-serif font-bold text-foreground">{gallery.length} Images</p>
                  </div>
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

      {/* Carousel Gallery Section */}
      <section className="py-12 md:py-20 bg-secondary/20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-10 md:mb-14 text-center"
          >
            Visual <span className="text-primary italic">Gallery</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ProjectCarousel images={gallery} title={project.title} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
