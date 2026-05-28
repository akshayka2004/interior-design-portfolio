'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % images.length)
  }, [images.length])

  // Auto-play every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next])

  if (!images || images.length === 0) return null

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <div className="relative w-full">
      {/* Main carousel */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-secondary shadow-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${title} - Image ${current + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 shadow-lg z-10"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 shadow-lg z-10"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Image counter */}
        <div className="absolute bottom-4 right-5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold tracking-wider">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-5 flex-wrap">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1)
                setCurrent(idx)
              }}
              aria-label={`Go to image ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip (shows first 8) */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.slice(0, 12).map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1)
                setCurrent(idx)
              }}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                idx === current ? 'border-primary shadow-lg scale-105' : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" sizes="80px" />
            </button>
          ))}
          {images.length > 12 && (
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
              +{images.length - 12}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
