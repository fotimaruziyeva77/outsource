'use client'
import { Education } from '@/app/interfaces'
import { API_SERVICE } from '@/lib/api-request'
import axios from 'axios'
import Image from "next/image"
import { useEffect, useState } from 'react'

const items = [
  {
    id: 1,
    image: "/images/young-workforce.jpg",
    title: "60% under age 35",
    desc: "— a dynamic and rapidly growing workforce.",
  },
  {
    id: 2,
    image: "/images/university.jpg",
    title: "5 universities, 43K+ students",
    desc: "including 3,000+ in IT, business, and tech fields.",
  },
  {
    id: 3,
    image: "/images/languages.jpg",
    title: "200K+ English speakers and 500K+ Russian speakers",
    desc: "with strong government-backed English education programs.",
  },
  {
    id: 4,
    image: "/images/hackathon.jpg",
    title: "Hackathons, coding competitions",
    desc: "and startup programs that build real practical skills.",
  },
]

export default function StatsGrid() {
		const [education, setEducation] = useState<Education[]>([])
			// 🎓 Education ma'lumotlari
			useEffect(() => {
				const fetchData = async () => {
					try {
						const res = await axios.get(API_SERVICE.edu)
						setEducation(res.data)
					} catch (err) {
						console.error('Xatolik yuz berdi:', err)
					}
				}
				fetchData()
			}, [])
		
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 bg-white rounded-xl p-5 shadow-sm"
            >
              {/* Image */}
              <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
