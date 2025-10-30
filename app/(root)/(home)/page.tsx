'use client'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Feedback, NewsItem, Success } from '@/app/interfaces'
import { API_SERVICE } from '@/lib/api-request'

export default function Home() {
	const [success, setSuccess] = useState<Success[]>([])
	const [feedback, setFeedback] = useState<Feedback[]>([])
	const [blogs, setBlogs] = useState<NewsItem[]>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(API_SERVICE.successnumber)
				setSuccess(res.data)
			} catch (err) {
				console.error('Xatolik yuz berdi:', err)
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(API_SERVICE.feedback)
				setFeedback(res.data)
			} catch (err) {
				console.error('Xatolik yuz berdi:', err)
			}
		}
		fetchData()
	}, [])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(API_SERVICE.blog)
				setBlogs(res.data.results)
			} catch (err) {
				console.error('Xatolik yuz berdi:', err)
			}
		}
		fetchData()
	}, [])
	// if (!blogs || blogs.length === 0) {
	// 	return <p>Loading...</p>
	// }

	const cards = [
		{
			img: '/assets/0ffdb1d86a08092045254fce7eca847c9c677ca4.jpg',
			title: 'Modern Office Spaces',
			desc: 'Ready-to-use facilities with high-speed internet',
		},
		{
			img: '/assets/0ffdb1d86a08092045254fce7eca847c9c677ca4.jpg',
			title: 'Modern Office Spaces',
			desc: 'Ready-to-use facilities with high-speed internet',
		},
		{
			img: '/assets/0ffdb1d86a08092045254fce7eca847c9c677ca4.jpg',
			title: 'Modern Office Spaces',
			desc: 'Ready-to-use facilities with high-speed internet',
		},
		{
			img: '/assets/24342ba5759996fbaa9e5b8be5cd9cb074317700.jpg',
			title: 'Tax Benefits',
			desc: '0% corporate tax, VAT, and social payments',
		},
		{
			img: '/assets/b271e3afb04f84a99d8588b94a3a2bbe37a6e382.jpg',
			title: 'Full Government Support',
			desc: 'Legal, visa, and administrative assistance',
		},
		{
			img: '/assets/cc9a8aa1ffde13fb2a78b7141e193422f14808e0.jpg',
			title: 'Skilled Workforce',
			desc: 'Access to young, multilingual tech talent',
		},
	]

	// const news: NewsItem[] = [
	// 	{
	// 		id: 1,
	// 		title: 'Ecology news title',
	// 		description: 'Lorem lorem lorem',
	// 		date: '08.10.2023 15:00',
	// 		image: 'https://picsum.photos/800/500?random=1',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Study news title',
	// 		description: 'Lorem lorem lorem',
	// 		date: '08.10.2023 15:00',
	// 		image: 'https://picsum.photos/400/250?random=2',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Ecology news title',
	// 		description: 'Lorem lorem lorem',
	// 		date: '08.10.2023 15:00',
	// 		image: 'https://picsum.photos/400/250?random=3',
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'Gold news title',
	// 		description: 'Lorem lorem lorem',
	// 		date: '08.10.2023 15:00',
	// 		image: 'https://picsum.photos/400/250?random=4',
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'History news title',
	// 		description: 'Lorem lorem lorem',
	// 		date: '08.10.2023 15:00',
	// 		image: 'https://picsum.photos/400/250?random=5',
	// 	},
	// ]

	// const stats = [
	// 	{ label: 'RESIDENT COMPANIES', value: '50+' },
	// 	{ label: 'EXPORT REVENUE', value: '4M+' },
	// 	{ label: 'EXPORT DESTINATIONS', value: '20+' },
	// 	{ label: 'SKILLED SPECIALISTS', value: '290+' },
	// ]

	return (
		<>
			{/* === HERO SECTION === */}
			<section className='relative h-[91vh] bg-cover bg-no-repeat flex items-center justify-center text-center font-poppins px-4 sm:px-6 lg:px-8'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: "url('/image.png')",
					}}
				/>
				<div className='absolute inset-0 bg-black/60'></div>

				<div className='relative z-10 w-full max-w-7xl mx-auto'>
					<motion.h1
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 px-4'
					>
						Smart Outsourcing Starts in Uzbekistan
					</motion.h1>

					<motion.h5
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2 }}
						className='text-xl sm:text-2xl md:text-3xl text-white mb-12 md:mb-20 px-4'
					>
						The Republic of Uzbekistan Navoi Region
					</motion.h5>

					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-20 md:mt-40 max-w-7xl mx-auto'>
						{/* BENEFITS */}
						<div className='bg-black/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 text-white'>
							<h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#C9AD9D]'>
								BENEFITS FOR IT COMPANIES:
							</h3>
							<ul className='space-y-2 sm:space-y-3 text-base sm:text-lg font-semibold uppercase'>
								{[
									'0% Corporate Taxes',
									'0% Social Tax',
									'0% Property & Land Tax',
									'No VAT on Imported Goods',
									'5% Tax on Dividends',
									'7.5% Personal Income Tax',
								].map((item, i) => (
									<li key={i} className='flex items-start gap-2'>
										<span className='text-[#C9AD9D] mt-1'>•</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Spacer for desktop, hidden on mobile */}
						<div className='hidden lg:block'></div>

						{/* ELIGIBLE COMPANIES */}
						<div className='bg-black/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 text-white'>
							<h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#C9AD9D]'>
								ELIGIBLE COMPANIES:
							</h3>
							<ul className='space-y-2 sm:space-y-3 font-semibold uppercase text-left text-base sm:text-lg'>
								{[
									'Software Development',
									'Business Process Outsourcing',
									'High-Tech Solutions',
									'Creative & Multimedia',
									'Startup & Venture Support',
									'Education & Training',
								].map((item, i) => (
									<li key={i} className='flex items-start gap-2'>
										<span className='text-[#C9AD9D] mt-1'>•</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* === ABOUT NAVOI REGION SECTION === */}
			<section className='py-8 sm:py-12 md:py-16 bg-white font-poppins px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
					<div className='flex justify-center order-2 lg:order-1'>
						<div className='w-full max-w-md lg:max-w-lg xl:max-w-xl'>
							<Image
								src='/assets/map.png'
								alt='Navoi Region Map'
								width={600}
								height={500}
								className='w-full h-auto '
								priority
							/>
						</div>
					</div>
					<div className='order-1 lg:order-2'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
							About Navoi Region
						</h2>
						<div className='space-y-4'>
							<Card className='bg-white shadow-sm p-4 sm:p-6 w-full'>
								<p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
									<strong>Navoi Region</strong> is strategically located in the
									central part of Uzbekistan, offering easy access to major
									cities like <strong>Samarkand</strong> and{' '}
									<strong>Bukhara</strong>.
								</p>
								<p className='text-gray-700 leading-relaxed mt-3 text-sm sm:text-base'>
									With a population of <strong>over 1 million</strong>, the
									region is known for its industrial potential and rich natural
									resources, including gold, gas, and rare minerals.
								</p>
							</Card>
							<Card className='bg-white shadow-sm p-4 sm:p-6 w-full'>
								<p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
									The region hosts <strong>5 universities</strong> that
									specialize in engineering, IT, and business, and foreign
									languages providing a steady pipeline of skilled talent.
								</p>
								<p className='text-gray-700 leading-relaxed mt-3 text-sm sm:text-base'>
									Uzbek and Russian are widely spoken, and English proficiency
									is growing rapidly among young professionals, making Navoi an
									attractive destination for international companies.
								</p>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* === IT PARK SECTION === */}
			<section className='relative overflow-hidden py-12 md:py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>
					<div className='mb-8 md:mb-12'>
						<div className='flex flex-col md:flex-row md:items-center gap-6 md:gap-10'>
							<div className='relative flex-shrink-0 flex justify-center md:justify-start'>
								<Image
									src={'/assets/it-park.png'}
									alt='IT Park Uzbekistan'
									width={250}
									height={150}
									className='object-contain max-w-[200px] sm:max-w-[250px]'
								/>
							</div>
							<div className='text-center md:text-left'>
								<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800'>
									Your Gateway to Central Asias IT Market
								</h1>
								<p className='text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-4xl'>
									IT Park is a government-backed organization offering
									everything your tech business needs — from tax exemptions and
									modern infrastructure to talent support and investor programs.
								</p>
							</div>
						</div>
					</div>

					{/* GRID */}
					<div className='grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{cards.map((benefit, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className='relative overflow-hidden rounded-xl shadow-md group h-[280px] sm:h-[320px]'
							>
								<Image
									src={benefit.img}
									alt={benefit.title}
									width={600}
									height={400}
									className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
								/>

								{/* CARD INFO */}
								<div className='absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-md'>
									<h3 className='font-semibold text-gray-900 text-base sm:text-lg'>
										{benefit.title}
									</h3>
									<p className='text-xs sm:text-sm text-gray-600 mt-1'>
										{benefit.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* === STATS SECTION === */}
			<section className='py-12 md:py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-7xl mx-auto'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 text-center'>
						Success in Numbers
					</h2>
					<div className='grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8'>
						{success.length > 0 &&
							Object.values(success[0])
								.slice(1)
								.map((item, i: number) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: i * 0.1 }}
										className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
									>
										<p className='text-gray-500 text-xs sm:text-sm font-semibold tracking-wide mb-2'>
											{item.label}
										</p>
										<h3 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800'>
											{item.value}+
										</h3>
									</motion.div>
								))}
					</div>
				</div>
			</section>
			<section className='relative w-full max-w-[1340px] mx-auto py-10'>
				<div>
					<h1 className='text-3xl md:text-4xl left-24 bottom-5'>Feedback</h1>
				</div>
				{/* === CHAP & O‘NG ICONLAR === */}
				<button className='swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-[#44b74a] hover:text-white transition'>
					<ChevronLeft className='w-5 h-5' />
				</button>
				<button className='swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-[#44b74a] hover:text-white transition'>
					<ChevronRight className='w-5 h-5' />
				</button>

				{/* === SWIPER === */}
				<Swiper
					modules={[Pagination, Navigation]}
					pagination={{ clickable: true }}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className='pb-10'
				>
					{feedback.map(item => (
						<SwiperSlide
							key={item.id}
							className='bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg'
						>
							<div className='flex justify-between mb-3'>
								<div className='text-[#ffb400] text-lg'>
									{'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}
								</div>
								<div className='text-3xl text-[#44b74a] leading-none'>❝</div>
							</div>

							<p className='text-sm text-gray-600 mb-5'>{item.description}</p>

							<div className='flex items-center gap-3'>
								<Image
									src={item.profile_photo}
									alt={'company'}
									width={45}
									height={45}
									className='rounded-full object-cover'
								/>
								<div className='text-sm'>
									<strong className='block text-gray-900 text-base'>
										{item.full_name}
									</strong>
									<span className='text-gray-500'>{item.address}</span>
								</div>
							</div>

							<div className='mt-3 text-right text-[#44b74a] text-sm font-medium'>
								{item.company_name}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<section className='w-full py-12'>
				<div className='container mx-auto px-4'>
					<div className='flex items-center justify-between mb-6'>
						<h2 className='text-3xl font-serif text-gray-800'>News</h2>
						<Link
							href={'/news'}
							className='text-sm flex items-center gap-1 text-gray-600 hover:text-gray-900'
						>
							See all <ArrowRight size={16} />
						</Link>
					</div>

					<div className='grid gap-4 md:grid-cols-3'>
						{/* Birinchi katta yangilik */}
						<Link
							href={`/news/${blogs[0]?.slug}`}
							className='md:col-span-1 md:row-span-2 relative rounded-xl overflow-hidden group block'
						>
							<Image
								src={blogs[0]?.main_image || '/image.png'}
								alt={blogs[0]?.title || ''}
								width={800}
								height={500}
								className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
							<div className='absolute bottom-4 left-4 text-white'>
								<p className='text-xs opacity-80'>
									{blogs[0]?.created_at &&
										new Date(blogs[0].created_at).toLocaleDateString('uz-UZ', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric',
										})}
								</p>
								<h3 className='text-lg font-semibold'>{blogs[0]?.title}</h3>
								<p className='text-sm opacity-80'>{blogs[0]?.description}</p>
							</div>

							<ArrowRight className='absolute bottom-5 right-5 text-white transition-transform duration-300 group-hover:translate-x-1' />
						</Link>

						{/* Qolgan 4 ta yangilik */}
						<div className='grid grid-cols-2 gap-4 md:col-span-2'>
							{blogs.slice(1, 5).map(item => (
								<Link
									key={item.id}
									href={`/news/${item.slug}`}
									className='relative rounded-xl overflow-hidden group block'
								>
									<Image
										src={item.main_image || '/image.png'}
										alt={item.title}
										width={400}
										height={250}
										className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>

									<div className='absolute bottom-3 left-3 text-white'>
										<p className='text-xs opacity-80'>
											{item.created_at &&
												new Date(item.created_at).toLocaleDateString('uz-UZ', {
													day: '2-digit',
													month: '2-digit',
													year: 'numeric',
												})}
										</p>
										<h3 className='text-sm font-semibold'>{item.title}</h3>
										<p className='text-xs opacity-80'>{item.description}</p>
									</div>

									<ArrowRight className='absolute bottom-4 right-4 text-white transition-transform duration-300 group-hover:translate-x-1' />
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
