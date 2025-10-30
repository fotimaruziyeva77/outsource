'use client'

import { NewsItem } from '@/app/interfaces'
import { API_SERVICE } from '@/lib/api-request'
import axios from 'axios'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {
	const [news, setNews] = useState<NewsItem[]>([])
	const [, setRecentNews] = useState<NewsItem[]>([])
	const [loading, setLoading] = useState(true)
	const params = useParams()
	const router = useRouter()

	function slugify(text: string): string {
		return text
			.toLowerCase()
			.normalize('NFKD')
			.replace(/[‘’ʻ`]/g, "'")
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9'-]+/g, '-')
			.replace(/-+/g, '-')
			.replace(/^-+|-+$/g, '')
	}

	const slug = slugify(decodeURIComponent(params.slug as string))

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const [newsRes, recentRes] = await Promise.all([
					axios.get(`${API_SERVICE.blog}${slug}`),
					axios.get(`${API_SERVICE.blog}?limit=5`),
				])

				setNews([newsRes.data])
				setRecentNews(recentRes.data.results || recentRes.data)
			} catch (err) {
				console.error(err)
				setNews([])
				setRecentNews([])
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [slug])

	const formatDate = (dateString: string) => {
		return dateString.slice(0, 10).split('-').reverse().join('.')
	}


	if (loading) {
		return (
			<div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
			</div>
		)
	}

	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'>
			<div className='container mx-auto px-4 py-8'>
				{/* Orqaga qaytish tugmasi */}
				<div className='mb-6'>
					<button
						onClick={() => router.back()}
						className='flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base'
					>
						<ArrowLeft size={20} />
						<span>Back</span>
					</button>
				</div>

				{/* Kontent */}
				<div className='flex flex-col gap-8'>
					{/* Asosiy yangilik */}
					<div className='w-full lg:w-[90%] xl:w-[70%] mx-auto'>
						{news.length === 0 ? (
							<div className='text-center py-20 bg-white rounded-2xl shadow-sm'>
								<p className='text-gray-500 text-lg font-medium'>
									No data found or an error occurred while loading 😔
								</p>
								<Link
									href='/news'
									className='inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
								>
									See news
								</Link>
							</div>
						) : (
							news.map(item => (
								<article
									key={item.id}
									className='bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl'
								>
									{/* Rasm */}
									<div className='relative'>
										<Image
											src={item.content_image || '/fallback.jpg'}
											alt={item.title || 'News Image'}
											width={1200}
											height={600}
											className='w-full h-56 sm:h-72 md:h-80 lg:h-[450px] object-cover'
											priority
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>

										{/* Sana va vaqt */}
										<div className='absolute bottom-4 left-4 flex flex-wrap items-center gap-2 text-white'>
											<div className='flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm'>
												<Calendar size={14} />
												<span>{formatDate(item.created_at)}</span>
											</div>
											{item.minutes_to_read && (
												<div className='flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm'>
													<Clock size={14} />
													<span>{item.minutes_to_read} min</span>
												</div>
											)}
										</div>
									</div>

									{/* Matn qismi */}
									<div className='p-4 sm:p-6 md:p-8 space-y-6'>
										{/* Sarlavha va Share tugmasi */}
										<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between md:items-start md:justify-between gap-3 sm:gap-4'>
											{/* Sarlavha */}
											<h1 className='text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug sm:leading-tight'>
												{item.title}
											</h1>

									
										</div>

										{/* Tavsif (HTML formatda) */}
										<div className='overflow-hidden w-full'>
											<div
												className='prose max-w-none prose-base sm:prose-lg prose-gray prose-headings:text-gray-800 prose-a:text-blue-600 prose-img:rounded-xl prose-blockquote:border-l-blue-500 prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:px-4
												prose-img:max-w-full prose-img:h-auto prose-table:max-w-full prose-table:overflow-x-auto'
												dangerouslySetInnerHTML={{ __html: item.content }}
											/>
										</div>
									</div>
								</article>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
