'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { NewsItem } from '@/app/interfaces'
import axios from 'axios'
import { API_SERVICE } from '@/lib/api-request'
import Link from 'next/link'

export default function NewsPage() {
	const [search, setSearch] = useState('')
	const [blogs, setBlogs] = useState<NewsItem[]>([])
	const [loading, setLoading] = useState(false)

	const fetchData = async (query = '') => {
		try {
			setLoading(true)
			const res = await axios.get(`${API_SERVICE.blog}?search=${query}`)
			setBlogs(res.data.results)
		} catch (err) {
			console.error('Xatolik yuz berdi:', err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	// 🔍 Qidiruvni har safar yozilganda emas, biroz kechiktirib yuborish uchun
	useEffect(() => {
		const delayDebounce = setTimeout(() => {
			fetchData(search)
		}, 500) // 0.5 sekunddan keyin API so‘rov yuboradi

		return () => clearTimeout(delayDebounce)
	}, [search])

	return (
		<div className='min-h-screen bg-gray-50 '>
			<section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/assets/news2.jpg')]">
				<div className='absolute inset-0 bg-slate-900/80' />
				<div className='relative z-10 px-6 max-w-3xl'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold mb-4'
					>
						News
					</motion.h1>
				</div>
			</section>

			{/* 🔍 Search input */}
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-8 py-10'>
				<div className='relative w-full md:w-1/2'>
					<input
						type='text'
						placeholder='Search news and updates'
						value={search}
						onChange={e => setSearch(e.target.value)}
						className='w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			{/* 📰 News grid */}
			{loading ? (
				<p className='text-center text-gray-500'>Loading...</p>
			) : (
				<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
					{blogs.length === 0 ? (
						<p className='text-center col-span-3 text-gray-500'>
							No results found
						</p>
					) : (
						blogs.map((item, i) => (
							<div
								key={i}
								className='bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all'
							>
								<Link href={`/news/${item.slug}`}>
									<div className='relative w-full h-48'>
										<Image
											src={item.main_image}
											alt={item.title}
											fill
											className='object-cover'
										/>
									</div>
								</Link>
								<div className='p-5'>
									<div className='flex  justify-between gap-5'>
										<Link href={`/news/${item.slug}`}>
											<h3
												className='font-semibold text-lg mb-2 hover:text-green-600 cursor-pointer 
             whitespace-nowrap overflow-hidden text-ellipsis block'
											>
												{item.title}
											</h3>
										</Link>

										<p className='text-xs opacity-80'>
											{item.created_at &&
												new Date(item.created_at).toLocaleDateString('uz-UZ', {
													day: '2-digit',
													month: '2-digit',
													year: 'numeric',
												})}
										</p>
									</div>
									<p className='text-gray-600 text-sm mb-4'>
										{item.description}
									</p>
								</div>
							</div>
						))
					)}
				</div>
			)}
		</div>
	)
}
