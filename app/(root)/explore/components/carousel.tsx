'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { API_SERVICE } from '@/lib/api-request'

interface SliderApi {
  id: number
  name: string
  images: string[]
}

export default function Carousel() {
  const [slides, setSlides] = useState<string[]>([])
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)

  /* API */
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const res = await fetch(`${API_SERVICE.slider}`)
        const data: SliderApi = await res.json()
        setSlides(data.images || [])
      } catch (error) {
        console.error('Slider API xatolik:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSlider()
  }, [])

  /* AUTO SLIDE */
  useEffect(() => {
    if (!slides.length) return

    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }, 2000) // 4 sekund

    return () => clearInterval(interval)
  }, [slides])

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  if (loading) {
    return <div className="text-center py-20">Loading...</div>
  }

  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden px-4 mb-8">
      <h1 className="text-2xl md:text-3xl font-semibold uppercase ">
        Discover Ideal Office Spaces at IT Park Navoi
      </h1>
      <p className="text-xl mt-2 mb-2 ">
        Are you in search of contemporary, high-class office spaces? Look no further!
      </p>

      <div className="relative w-full overflow-hidden rounded-2xl bg-gray-200">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((img, index) => (
            <div
              key={index}
              className="min-w-full relative h-[300px] md:h-[650px]"
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                placeholder="blur"
                blurDataURL="/blur.jpg" // public/blur.jpg qo‘y
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                current === index ? 'bg-white w-5' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
