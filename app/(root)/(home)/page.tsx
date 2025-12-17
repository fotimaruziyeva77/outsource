'use client'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowRight,} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NewsItem, Success } from '@/app/interfaces'
import { API_SERVICE } from '@/lib/api-request'
import Features from './_components/Gateway '
import FAQSection from './_components/faq'

export default function Home() {
	const [success, setSuccess] = useState<Success[]>([])
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

	
	const formatNumber = (num: number) => {
  if (num >= 1_000_000) return `${num / 1_000_000}M+`
  if (num >= 1_000) return `${num / 1_000}K+`
  return `${num}+`
}

	return (
		<div className='min-h-screen'>
		
			<section className='relative min-h-[90vh] bg-cover bg-no-repeat flex items-center justify-center text-center font-poppins px-3 sm:px-6 lg:px-8'>
				<div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: "url('/image.png')",
					}}
				/>
				
				<div className='absolute inset-0 bg-black/60'></div>

				{/* Content */}
				<div className='relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center'>
					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-3 sm:mb-5 px-2 sm:px-4 leading-snug'
					>
						Smart Outsourcing Starts in Uzbekistan
					</motion.h1>

					{/* Subtitle */}
					<motion.h5
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2 }}
						className='text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-medium mb-10 sm:mb-14 md:mb-20 px-2 sm:px-4'
					>
						The Republic of Uzbekistan Navoi Region
					</motion.h5>

					{/* Cards section */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-10 sm:mt-16 md:mt-24 w-full px-2 sm:px-4'>
						{/* BENEFITS */}
						<div className='bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 text-white'>
							<h3 className='text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-[#C9AD9D]'>
								BENEFITS FOR IT COMPANIES:
							</h3>
							<ul className='space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg font-semibold uppercase text-left'>
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

						{/* Middle spacer on large screens */}
						<div className='hidden lg:block'></div>

						{/* ELIGIBLE COMPANIES */}
						<div className='bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 text-white'>
							<h3 className='text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-[#C9AD9D]'>
								ELIGIBLE COMPANIES:
							</h3>
							<ul className='space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg font-semibold uppercase text-left'>
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
<Features/>
					{/* GRID */}
				
				</div>
			</section>

			{/* === STATS SECTION === */}
		<section className='py-10 md:py-4 px-4 sm:px-6 lg:px-8'>
  <div className='max-w-7xl mx-auto'>
    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 text-center'>
      Success in Numbers
    </h2>

    <div className='grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8'>
      {success.length > 0 &&
        Object.values(success[0])
          .slice(1)
 
          .map((item,i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
            >
              <p className='text-gray-500 text-xs sm:text-sm font-semibold tracking-wide mb-2'>
                {item.label}
              </p>

              <h3 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800'>
                {formatNumber(item.value)}
              </h3>
            </motion.div>
          ))}
    </div>
  </div>
</section>

	

			<section className='w-full py-12'>
				<div className='max-w-7xl mx-auto px-4'>
					{/* === Title & See All === */}
					<div className='flex items-center justify-between mb-6'>
						<h2 className='text-3xl font-serif text-gray-800'>News</h2>
						<Link
							href={'/news'}
							className='text-sm flex items-center gap-1 text-gray-600 hover:text-gray-900'
						>
							See all <ArrowRight size={16} />
						</Link>
					</div>

					{/* === News Grid === */}
					<div className='grid gap-4 sm:gap-6 md:grid-cols-3'>
						{/* === Birinchi katta yangilik === */}
						{blogs[0] && (
							<Link
								href={`/news/${blogs[0].slug}`}
								className='relative rounded-xl overflow-hidden group block md:col-span-1 md:row-span-2 max-w-full'
							>
								<Image
									src={blogs[0].main_image || '/image.png'}
									alt={blogs[0].title || ''}
									width={800}
									height={500}
									className='object-cover w-full h-64 sm:h-80 md:h-full transition-transform duration-300 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>

								<div className='absolute bottom-4 left-4 right-4 text-white space-y-1 sm:space-y-2'>
									{/* Title + Sana bir qatorda */}
									<div className='flex items-center justify-between gap-2'>
										<h3 className='text-base sm:text-lg font-semibold leading-tight line-clamp-1 break-words'>
											{blogs[0].title}
										</h3>
										<p className='text-xs opacity-70 shrink-0'>
											{blogs[0].created_at &&
												new Date(blogs[0].created_at).toLocaleDateString(
													'uz-UZ',
													{
														day: '2-digit',
														month: '2-digit',
														year: 'numeric',
													}
												)}
										</p>
									</div>

									{/* Description xavfsiz ko‘rsatish (HTML bo‘lsa ham) */}
									<div
										className='text-xs sm:text-sm opacity-80 line-clamp-2 overflow-hidden break-words prose prose-sm max-w-none prose-p:m-0 prose-img:hidden prose-a:text-white prose-a:underline'
										dangerouslySetInnerHTML={{
											__html: blogs[0].description || '',
										}}
									/>
								</div>

							
							</Link>
						)}

						{/* === Qolgan 4 ta yangilik === */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-2'>
							{blogs.slice(1, 5).map(item => (
								<Link
									key={item.id}
									href={`/news/${item.slug}`}
									className='relative rounded-xl overflow-hidden group block max-w-full'
								>
									<Image
										src={item.main_image || '/image.png'}
										alt={item.title}
										width={400}
										height={250}
										className='object-cover w-full h-48 sm:h-52 md:h-60 transition-transform duration-300 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>

									<div className='absolute bottom-3 left-3 right-3 text-white space-y-1'>
										<div className='flex items-center justify-between gap-2'>
											<h3 className='text-sm sm:text-base font-semibold leading-tight line-clamp-1 break-words'>
												{item.title}
											</h3>
											<p className='text-[11px] opacity-70 shrink-0'>
												{item.created_at &&
													new Date(item.created_at).toLocaleDateString(
														'uz-UZ',
														{
															day: '2-digit',
															month: '2-digit',
															year: 'numeric',
														}
													)}
											</p>
										</div>

										<div
											className='text-xs opacity-80 line-clamp-2 overflow-hidden break-words prose prose-sm max-w-none prose-p:m-0 prose-img:hidden prose-a:text-white prose-a:underline'
											dangerouslySetInnerHTML={{
												__html: item.description || '',
											}}
										/>
									</div>

								
								</Link>
							))}
						</div>
					</div>
					<FAQSection/>
				</div>
			</section>
		</div>
	)
}
