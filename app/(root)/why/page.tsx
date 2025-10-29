'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Education } from '@/app/interfaces'
import { API_SERVICE } from '@/lib/api-request'

export default function WhyNavoi() {
  const [education, setEducation] = useState<Education[]>([])
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const [categories, setCategories] = useState<{ id: number; title: string }[]>([])
  const [services, setServices] = useState<
    { id: number; category_title: string; image: string; content: string; category: number }[]
  >([])

  // 🎓 Education ma'lumotlarini olish
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

  // 📦 Kategoriyalarni olish
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(API_SERVICE.category)
        setCategories(res.data)
        if (res.data.length > 0) setActiveTab(res.data[0].id)
      } catch (err) {
        console.error('Kategoriya olishda xatolik:', err)
      }
    }
    fetchCategories()
  }, [])

  // 🧩 Servislarni olish
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(API_SERVICE.service)
        setServices(res.data)
      } catch (err) {
        console.error('Xizmatlarni olishda xatolik:', err)
      }
    }
    fetchServices()
  }, [])

  // 🔍 Aktiv kategoriya bo‘yicha filtrlash
  const filteredServices = services.filter((s) => s.category === activeTab)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/assets/image.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Navoi?
          </motion.h1>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Education & Talent Development</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Navoi Region is home to a fast-growing pool of skilled and multilingual talent — an essential asset for
          international BPO companies.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((text) => (
            <div key={text.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <Image src={text.image} alt={text.title} width={400} height={250} className="w-full h-56 object-cover" />
              <p className="p-4 font-medium text-gray-700">{text.title}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg text-gray-700 max-w-3xl mx-auto">
          With this combination of youth, education, and language proficiency, Navoi is positioned as a reliable hub for
          global digital services and BPO.
        </p>
      </section>

      {/* Tabs Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Special Categories & Services
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full font-medium border transition ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          {filteredServices.length > 0 ? (
            <div className="space-y-4">
              {filteredServices.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-10  bg-white shadow-md rounded-2xl p-8"
                >
                  <div className="flex-1 text-gray-700 text-lg ">
                    {item.content}
                  </div>
                  <div className="flex-1 ">
                    <Image
                      src={item.image}
                      alt={item.category_title}
                      width={800}
                      height={300}
                      className=" object-cover w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No services available for this category.</p>
          )}
        </div>
      </section>
    </div>
  )
}
