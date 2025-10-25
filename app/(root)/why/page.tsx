'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WhyNavoi() {
  const [activeTab, setActiveTab] = useState<'green' | 'fez' | 'eco' | 'loc'>('green')

  const tabs = [
    { key: 'green', label: 'Green Energy Potential' },
    { key: 'fez', label: 'Free Economic Zones (FEZ)' },
    { key: 'eco', label: 'Industrial Ecosystem' },
    { key: 'loc', label: 'Strategic Location' },
  ] as const

  const content = {
    green: {
      text: (
        <>
          <p>The region is a leader in Uzbekistan&apos;s green energy strategy, with:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Large-scale solar and wind power plants already in operation</li>
            <li>High potential for green data centers and eco-friendly IT infrastructure</li>
          </ul>
        </>
      ),
      img: '/assets/media/images/7.jpg',
    },
    fez: {
      text: (
        <>
          <p>Navoi FEZ offers preferential conditions for foreign investors, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Tax and customs incentives</li>
            <li>Simplified regulations</li>
            <li>Access to fully equipped industrial facilities</li>
          </ul>
        </>
      ),
      img: '/assets/media/images/7.jpg',
    },
    eco: {
      text: (
        <>
          <p>Navoi is an industrial powerhouse — hosting leading enterprises such as:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>NMMC (Navoi Mining and Metallurgical Company)</li>
            <li>NavoiAzot (chemical production)</li>
            <li>Navoiuran (uranium mining)</li>
          </ul>
          <p className="mt-2">
            These companies are actively seeking digital transformation, creating demand for local IT services,
            automation, and custom software solutions.
          </p>
        </>
      ),
      img: '/assets/media/images/7.jpg',
    },
    loc: {
      text: (
        <>
          <p>
            Located in the heart of Uzbekistan, Navoi Region offers direct access to major cities like Samarkand and
            Bukhara. The region is home to one of the country’s largest cargo airports and a state-of-the-art logistics
            hub, making it a natural gateway for trade and IT-enabled services across Central Asia.
          </p>
        </>
      ),
      img: '/assets/media/images/7.jpg',
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
<section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/assets/image.png')]   bg-cover bg-no-repeat">
				<div className='absolute inset-0 bg-slate-900/80' />
				<div className='relative z-10 px-6 max-w-3xl'>
				<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold mb-4'
					>Why Navoi ?

					</motion.h1>
				
				</div>
			</section>

      {/* Education & Talent */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Education & Talent Development</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Navoi Region is home to a fast-growing pool of skilled and multilingual talent — an essential asset for
          international BPO companies.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            '60% of the population is under the age of 35',
            '5 universities specializing in IT, foreign languages, and engineering',
            'Over 200K+ people speak English, 500K+ fluent in Russian',
            '12K+ university students, 3,000+ in IT, business, and tech',
            'Strong focus on English language education',
            'Regular hackathons, and coding competitions foster early innovation culture',
          ].map((text, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <Image src="/assets/media/images/7.jpg" alt="Info" width={400} height={250} className="w-full h-56 object-cover" />
              <p className="p-4 font-medium text-gray-700">{text}</p>
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
            Special Economic Zones, Industrial Ecosystem and Government Support
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full font-medium border transition ${
                  activeTab === tab.key ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center bg-white shadow-md rounded-2xl p-8">
            <div className="flex-1 text-gray-700 text-lg">{content[activeTab].text}</div>
            <div className="flex-1">
              <Image
                src={content[activeTab].img}
                alt={tabs.find((t) => t.key === activeTab)?.label || 'Tab image'}
                width={500}
                height={300}
                className="rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#062241] text-white py-12 px-6 mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <Image src="/assets/media/logo-navoi.png" alt="Logo" width={100} height={80} />
            <h4 className="font-bold mt-3">NAVOI REGIONAL GOVERNMENT</h4>
            <p className="text-sm text-gray-300 mt-2">
              Lorem ipsum dolor sit amet consectetur. Ut elementum vitae bibendum mi arcu consectetur viverra accumsan felis
              pharetra.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-gray-300">
              <li><Link href="/why">Why Navoi?</Link></li>
              <li><Link href="/explore">Explore opportunities</Link></li>
              <li><Link href="/bpo">BPO</Link></li>
              <li><Link href="/it-visa">IT Visa</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Sign-Up For Updates</h4>
            <p className="text-sm text-gray-300">
              Etiam quis nunc et nulla nulla velit donec. Ac varius sollicitudin eget morbi varius nibh nunc dui ultrices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
