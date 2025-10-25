'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { CheckCircle, CircleCheck } from 'lucide-react'

const taxes = [
	{ value: '0%', label: 'Corporate taxes' },
	{ value: '0%', label: 'Social tax' },
	{ value: '0%', label: 'Property & land tax' },
	{ value: 'NO', label: 'VAT on imported services' },
	{ value: '5%', label: 'Tax on dividends' },
	{ value: '7.5%', label: 'Personal income tax' },
	{ value: '0%', label: '1 billion turnover tax' },
	{ value: '0%', label: 'Value added tax' },
]
const benefits = [
	'Partial coverage of HR services',
	'Up to $5 000 for employee training',
	'Up to 15% of salary',
	'Free Office for 1 Year',
	'Estimated cost efficiency $14.6M',
	'Free technical equipment',
]
const steps = [
	{
		id: 1,
		badge: '3 DAYS',
		text: 'Register a legal entity in Uzbekistan',
	},
	{
		id: 2,
		badge: 'INSTANT',
		text: 'Apply for the Member status at IT Park Uzbekistan',
	},
	{
		id: 3,
		badge: 'IN 14 DAYS',
		text: 'Use all the benefits and get full support',
	},
	{
		id: 4,
		badge: '',
		text: (
			<>
				Join the international team of Trucking companies from{' '}
				<span className='text-lime-400'>
					USA, Poland, Latvia, Moldova, Uzbekistan, India
				</span>{' '}
				etc.
			</>
		),
	},
]

export default function ItVisaPage() {
	return (
		<main className='bg-white text-slate-800'>
			{/* === HERO === */}
			<section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/assets/1258.png')] bg-cover ">
				<div className='absolute inset-0 bg-slate-900/80' />
				<div className='relative z-10 px-6 max-w-3xl'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold mb-4'
					>
						Outsource logistics services to Uzbekistan
					</motion.h1>
				</div>
			</section>

			<section className='bg-gray-50 py-16 px-6'>
				<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
					{/* Chap tomoni */}
					<div>
						<h2 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-900'>
							Why Uzbekistan?
						</h2>
						<p className='text-gray-600 leading-relaxed'>
							Uzbekistan is emerging as a top destination for logistics talent.
							Skilled, English-speaking professionals, cost-efficient support,
							and ideal time zone coverage make it the smart choice for scaling
							your U.S. logistics operations.
						</p>
					</div>

					{/* O‘ng tomoni */}
					<div className='bg-white shadow-md rounded-2xl p-8'>
						<div className='grid grid-cols-2 gap-6'>
							<div>
								<h3 className='text-green-600 text-2xl font-bold'>20,000+</h3>
								<p className='text-gray-500 text-sm mt-1'>
									Professionals already employed in U.S. logistics support
								</p>
							</div>

							<div>
								<h3 className='text-green-600 text-2xl font-bold'>300+</h3>
								<p className='text-gray-500 text-sm mt-1'>
									Companies specializing in U.S. trucking services and serving
									this industry
								</p>
							</div>

							<div>
								<h3 className='text-green-600 text-2xl font-bold'>100,000+</h3>
								<p className='text-gray-500 text-sm mt-1'>
									Professionals waiting to be hired by you
								</p>
							</div>

							<div>
								<h3 className='text-green-600 text-2xl font-bold'>24/7</h3>
								<p className='text-gray-500 text-sm mt-1'>
									Coverage Across Time Zones
								</p>
							</div>
						</div>

						<div className='mt-6 border-t pt-4'>
							<h4 className='text-green-600 font-semibold text-2xl  mb-3'>
								Convenient Time Zone
							</h4>
							<div className='flex flex-wrap gap-2'>
								<span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
									North America -9h
								</span>
								<span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
									Europe -3h
								</span>
								<span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
									Asia +4h
								</span>
								<span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
									MENA -1h
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* === SERVICES === */}
			<section className='py-20 bg-white text-center'>
				<h2 className='text-4xl  mb-6'>What services can be outsourced?</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6'>
					{[
						['customers.png', 'Dispatching Services'],
						['delivery.png', 'Safety and Compliance'],
						['management.png', 'Fleet Management Support'],
						['hp.png', 'HR & Recruiting'],
						['office.png', 'Accounting & Back-Office Support'],
						['custom.png', 'Customer Service'],
					].map(([img, title]) => (
						<Card
							key={title}
							className='overflow-hidden hover:shadow-lg transition'
						>
							<Image
								src={`/assets/${img}`}
								alt={title}
								width={400}
								height={200}
								className='w-full h-48 object-cover'
							/>
							<CardContent className='py-4 font-semibold text-slate-800'>
								{title}
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className='py-20 bg-slate-50'>
				<div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8'>
					<Card className='bg-black text-white p-8 rounded-lg shadow-lg'>
						<h3 className='text-4xl font-semibold mb-4'>
							Tax Preferences <br />
							For IT Park Members
						</h3>
						<div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-center'>
							{taxes.map((item, i) => (
								<div key={i} className='flex flex-col items-center'>
									<p className='text-lime-400 text-4xl font-bold mb-1'>
										{item.value}
									</p>
									<p className='text-gray-200 text-lg'>{item.label}</p>
								</div>
							))}
						</div>
					</Card>

					<Card className='bg-lime-600 text-white py-16 px-6  p-8 rounded-lg shadow-lg'>
						<div className='max-w-3xl mx-auto'>
							<h2 className='text-4xl font-extrabold mb-6'>
								ZERO RISK:expenses reimbursement
							</h2>

							<ul className='space-y-10 text-lg'>
								{benefits.map((item, index) => (
									<li key={index} className='flex items-start gap-3'>
										<CheckCircle className='text-white w-6 h-6 flex-shrink-0' />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</Card>
				</div>
			</section>

			{/* === STEPS === */}
			<section className='py-20 text-center bg-white'>
				<h2 className='text-3xl font-bold mb-3'>How to get started?</h2>
				<p className='text-slate-600 mb-10'>
					Follow these simple steps to establish your business in Uzbekistan
				</p>

				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto'>
					{steps.map(step => (
						<Card
							key={step.id}
							className='relative bg-[#2a3b14] text-white rounded-none shadow-md'
						>
							<CardContent className='p-6 flex flex-col justify-between h-full'>
								{step.badge && (
									<span className='inline-block border border-lime-400 text-lime-400 text-xs px-3 py-1 rounded-full mb-4'>
										{step.badge}
									</span>
								)}
								<p className='text-sm leading-relaxed'>{step.text}</p>
							</CardContent>
							<div className='absolute bottom-0 right-0 bg-lime-500 text-[#2a3b14] font-bold text-lg px-3 py-2'>
								{step.id}
							</div>
						</Card>
					))}
				</div>
			</section>
		</main>
	)
}
