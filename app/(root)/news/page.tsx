'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Search,  } from 'lucide-react'

const news = [
  {
    date: '24 October 2025',
    title: 'Outcomes of the visit to Japan: New opportunities for IT outsourcing and startups of Uzbekistan',
    desc: 'From October 13 to 18, a delegation of IT Park Uzbekistan conducted an official visit to Japan...',
    tag: 'Event',
    image: '/images/japan-visit.jpg',
  },
  {
    date: '20 October 2025',
    title: 'The role of IT Park in supporting foreign entrepreneurs in Uzbekistan',
    desc: 'Tanwey Kruger, a media expert in Financial IT and tech entrepreneur...',
    tag: 'Education',
    image: '/images/itpark-role.jpg',
  },
  {
    date: '17 October 2025',
    title: 'Uzbekistan showcased its growing IT potential at GITEX GLOBAL 2025',
    desc: 'The delegation of IT Park Uzbekistan, led by CEO Abdulwahid Kuchkarov, took part in GITEX GLOBAL...',
    tag: 'Event',
    image: '/images/gitex.jpg',
  },
  {
    date: '16 October 2025',
    title: 'IT Park and the Korea ICT Entrepreneurs Association discussed prospects for enhanced cooperation',
    desc: 'Representatives of IT Park Uzbekistan, led by Elyor Masudov...',
    tag: 'Meeting',
    image: '/images/korea-meeting.jpg',
  },
  {
    date: '16 October 2025',
    title: 'IT Park Uzbekistan and KDB Bank Uzbekistan discussed participation of member companies...',
    desc: 'Representatives of IT Park Uzbekistan, led by Makhliyo Mukimova...',
    tag: 'Meeting',
    image: '/images/kdb.jpg',
  },
  {
    date: '16 October 2025',
    title: 'IT Park and Fujifilm System Services strengthen partnership',
    desc: 'Representatives of IT Park Uzbekistan, led by Elyor Masudov...',
    tag: 'Meeting',
    image: '/images/fujifilm.jpg',
  },
]

export default function NewsPage() {
  const [search, setSearch] = useState('')
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 ">
				<section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/assets/news2.jpg')]  ">
				<div className='absolute inset-0 bg-slate-900/80' />
				<div className='relative z-10 px-6 max-w-3xl'>
				<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold mb-4'
					>News

					</motion.h1>
				
				</div>
			</section>
      {/* Search and filters */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-8 py-10">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search news and updates"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <div className="flex gap-4">
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:outline-none">
            <option>Latest</option>
            <option>Oldest</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:outline-none">
            <option>All</option>
            <option>Event</option>
            <option>Meeting</option>
            <option>Education</option>
          </select>
        </div>
      </div>

      {/* News grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {filteredNews.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <h3 className="font-semibold text-lg mb-2 hover:text-green-600 cursor-pointer">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <span className="inline-block border border-green-500 text-green-600 text-xs px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
