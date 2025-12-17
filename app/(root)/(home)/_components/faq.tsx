'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { ChevronRight, Phone } from 'lucide-react'
import { API_SERVICE } from '@/lib/api-request'
import { Faqs } from '@/app/interfaces'
import Link from 'next/link'

export default function ContactPage() {
  const [faqs, setFaqs] = useState<Faqs[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFaq, setActiveFaq] = useState<number | null>(null) // qaysi FAQ ochiq

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_SERVICE.faqs)
        setFaqs(res.data)
      } catch (err) {
        console.error('Xatolik yuz berdi:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT FAQ */}
        <div>
          <h1 className="text-4xl font-serif font-semibold mb-8">
            Frequently Asked Questions
          </h1>

          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : (
            <div className="space-y-3">
              {faqs.map(faq => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow transition cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex items-center justify-between px-5 py-4">
                    <span className="text-gray-700 text-sm">{faq.question}</span>
                    <ChevronRight
                      className={`text-gray-400 transition-transform ${activeFaq === faq.id ? 'rotate-90' : ''
                        }`}
                      size={18}
                    />
                  </div>
                  {activeFaq === faq.id && (
                    <div className="px-5 pb-4 text-gray-600 text-sm border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT CARD */}
        <div className="relative rounded-2xl overflow-hidden bg-[#1E2A3A] text-white shadow-lg h-[360px] text-center mt-6">

          {/* skyline */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/b.png')] bg-repeat-x bg-bottom opacity-40" />

          <div className="relative z-10 p-10">
            <h3 className="text-xl font-semibold mb-2">
              Didn’t find an answer?
            </h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Our team is just an email away and ready to answer your questions
            </p>

            <Link href={'/contact'}>
              <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-2.5 rounded-lg text-sm font-medium transition">
                <Phone size={16} />
                Contact us
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
