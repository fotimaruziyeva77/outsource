'use client'

import { NewsItem } from '@/app/interfaces'
import { API_SERVICE } from '@/lib/api-request'
import axios from 'axios'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
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

				console.log(newsRes.data)
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

	const handleShare = () => {
		if (navigator.share) {
			navigator.share({
				title: news[0]?.title,
				text: news[0]?.description?.replace(/<[^>]*>/g, '').substring(0, 100),
				url: window.location.href,
			})
		} else {
			navigator.clipboard.writeText(window.location.href)
			alert('Havola nusxalandi!')
		}
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
						className='flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors'
					>
						<ArrowLeft size={20} />
						<span>Back</span>
					</button>
				</div>

				<div className='flex flex-col lg:flex-row gap-8'>
					{/* Asosiy kontent */}
					<div className='w-[1240px] mx-auto'>
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
									<div className='relative'>
										<Image
											src={item.content_image || '/fallback.jpg'}
											alt={item.title || 'News Image'}
											width={1200}
											height={600}
											className='w-full h-64 md:h-80 object-cover'
											priority
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>

										{/* Sana va vaqt */}
										<div className='absolute bottom-4 left-4 flex items-center gap-4 text-white'>
											<div className='flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full'>
												<Calendar size={16} />
												<span className='text-sm font-medium'>
													{formatDate(item.created_at)}
												</span>
											</div>
											{item.minutes_to_read && (
												<div className='flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full'>
													<Clock size={16} />
													<span className='text-sm font-medium'>
														{item.minutes_to_read} minutes
													</span>
												</div>
											)}
										</div>
									</div>

									<div className='p-6 md:p-8 space-y-6'>
										{/* Sarlavha va ulashish tugmasi */}
										<div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
											<h1 className='text-2xl md:text-3xl font-bold text-gray-900 leading-tight'>
												{item.title}
											</h1>
											<button
												onClick={handleShare}
												className='flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors self-start'
											>
												<Share2 size={18} />
												<span>Share</span>
											</button>
										</div>

										{/* Tavsif */}
										<div className='overflow-hidden w-full'>
											<div
												className='prose max-w-none prose-lg prose-gray prose-headings:text-gray-800 prose-a:text-blue-600 prose-img:rounded-xl prose-blockquote:border-l-blue-500 prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:px-4
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
