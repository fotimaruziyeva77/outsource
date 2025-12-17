'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from "next/image"
import { useState } from "react"

interface FeatureItem {
  title: string
  image: string
  description: string
}

export default function WhatSetsApart() {
  const features: FeatureItem[] = [
    {
      title: "Safety First",
      image: "/dialog/1.png",
      description:
        "Our offices are equipped with round-the-clock surveillance by trained security personnel, ensuring a secure work environment for your company.",
    },
    {
      title: "Seamless Connectivity",
      image: "/dialog/2.png",
      description:
        "Enjoy uninterrupted high-speed internet connectivity essential for modern businesses to thrive in the digital landscape.",
    },
    {
      title: "Convenient Transportation",
      image: "/dialog/3.png",
      description:
        "Located in strategic areas, our offices offer easy access to public transportation, including buses and the metro.",
    },
    {
      title: "Versatile Spaces",
      image: "/dialog/4.png",
      description:
        "IT Park provides a variety of office solutions, ranging from private offices to co-working spaces.",
    },
  ]

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<FeatureItem | null>(null)

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          HERE’S WHAT SETS IT PARK APART:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item: FeatureItem, i: number) => (
            <div
              key={i}
              className="group relative cursor-pointer rounded-xl overflow-hidden shadow"
              onClick={() => {
                setActive(item)
                setOpen(true)
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4 text-center">
                <p className="text-white text-sm">{item.description}</p>
              </div>
              <div className="absolute bottom-0 w-full bg-white/90 text-center py-2 font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <Image
              src={active?.image ?? ""}
              alt={active?.title ?? ""}
              width={400}
              height={200}
              className="w-full object-cover"
            />
            <DialogTitle>{active?.title}</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600 leading-relaxed">{active?.description}</p>
        </DialogContent>
      </Dialog>
    </section>
  )
}
