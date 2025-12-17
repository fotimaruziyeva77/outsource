'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Education } from '@/app/interfaces'
import { API_SERVICE } from '@/lib/api-request'
import ItParkBanner from './_components/banner'

export default function WhyNavoi() {
	const [education, setEducation] = useState<Education[]>([])
	const [activeTab, setActiveTab] = useState<number | null>(null)
	const [categories, setCategories] = useState<{ id: number; title: string }[]>(
		[]
	)
	const [services, setServices] = useState<
		{
			id: number
			category_title: string
			image: string
			content: string
			category: number
		}[]
	>([])

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

	// 📦 Kategoriyalar
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

	// 🧩 Xizmatlar
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

	// 🔍 Aktiv kategoriya bo‘yicha filtr
	const filteredServices = services.filter(s => s.category === activeTab)

	return (
		<div className='min-h-screen flex flex-col font-poppins'>
			{/* HEADER */}
			<section className='relative flex items-center justify-center text-center text-white font-poppins px-4 sm:px-6 lg:px-8'>
				<div className='absolute inset-0'>
					<Image
						src='/assets/image.png'
						alt='Why Navoi background'
						fill
						priority
						className='object-cover object-center'
					/>
					<div className='absolute inset-0 bg-black/70' />
				</div>

				<div className='relative z-10 py-32 sm:py-40 lg:py-48'>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight'
					>
						Why Navoi?
					</motion.h1>
				</div>
			</section>
			{/* EDUCATION */}
			<section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto '>
			 <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-3xl font-serif font-semibold text-gray-900 leading-tight mb-4">
          Your Access Point to a Young, Skilled,
          <br className="hidden sm:block" />
          and Multilingual Workforce
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Navoi offers one of the youngest and most multilingual labor forces
          in Central Asia – an ideal environment for global BPO and digital
          service companies looking to scale quickly and cost-efficiently.
        </p>
      </div>

		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
      {education?.map(item => (
        <div
          key={item.id}
          className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col'
        >
          <div className='relative w-full h-56 sm:h-64 flex-shrink-0'>
            <Image
              src={item.image}
              alt={item.title || 'Education image'}
              fill
              className='object-cover'
             
            />
          </div>
          <div className='px-6 py-4 flex-grow'>
            <p className='font-medium text-gray-700 text-base sm:text-lg leading-relaxed line-clamp-3'>
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>

				<p className='mt-10 text-base sm:text-lg text-gray-700 max-w-7xl mx-auto px-4'>
			With its young population, strong technical education system, and multilingual workforce, Navoi provides an ideal environment for companies looking to establish or scale IT and BPO operations.
				</p>
			</section>

			{/* CATEGORIES & SERVICES */}
			<section className='bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>
					{/* Sarlavha */}
					<div className='text-center mb-10 sm:mb-16'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
							Special Categories & Services
						</h2>
						<p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
							Discover our tailored solutions designed to meet your unique needs
							and requirements
						</p>
					</div>

					{/* Tablar */}
					<div className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-14'>
						{categories.map(tab => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`px-4 sm:px-6 md:px-7 py-3 rounded-full text-sm sm:text-base font-semibold border-2 transition-all duration-300 ease-out transform hover:scale-105 ${
									activeTab === tab.id
										? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
										: 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300'
								}`}
							>
								{tab.title}
							</button>
						))}
					</div>

					{/* Kontent */}
					{filteredServices.length > 0 ? (
						<div className='flex flex-col gap-12 sm:gap-16'>
							{filteredServices.map((item, index) => (
								<div
									key={item.id}
									className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 bg-white rounded-3xl p-6 sm:p-10 shadow-lg transition-all duration-500 hover:shadow-xl ${
										index % 2 === 1 ? 'lg:flex-row-reverse' : ''
									}`}
								>
									{/* Matn qismi */}
									<div className='flex-1 w-full'>
										<div className='text-center lg:text-left'>
											<h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
												{item.category_title}
											</h3>
											<p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
												{item.content}
											</p>
										</div>
									</div>

									{/* Rasm qismi */}
									<div className='flex-1 w-full'>
										<div className='relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md'>
											<Image
												src={item.image}
												alt={item.category_title}
												fill
												className='object-cover hover:scale-110 transition-transform duration-700'
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className='text-center py-12'>
							<div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-8 w-8'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold text-gray-700 mb-2'>
								No services available
							</h3>
							<p className='text-gray-500 max-w-md mx-auto'>
								Were working on adding services for this category. Please check
								back soon!
							</p>
						</div>
					)}
				</div>
				<ItParkBanner/>
			</section>
		</div>
	)
}
