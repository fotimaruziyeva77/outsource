'use client'
import { motion } from 'framer-motion'
import {
	Briefcase,
	Building2,
	CreditCard,
	DollarSign,
	FileText,
	GraduationCap,
	Laptop,
	MoveDown,
	Phone,
	Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import WhatSetsApart from './components/dialog'
import Carousel from './components/carousel'


export default function ExploreOpportunities() {
	const services = [
		{
			id: 1,
			title: 'QUALIFIED LEGAL ADVICE:',
			description:
				'Our experts will assist you in explaining all legal aspects of starting a business in Uzbekistan and answer all your questions.',
			icon: <Briefcase className='w-8 h-8 text-green-600' />,
			image: '/assets/legal.jpg',
		},
		{
			id: 2,
			title: 'COMPANY REGISTRATION:',
			description:
				'We will help you with the preparation of all necessary documents to register your company in accordance with the legislation of Uzbekistan.',
			icon: <FileText className='w-8 h-8 text-green-600' />,
			image: '/assets/registration.jpg',
		},
		{
			id: 3,
			title: 'PREPARATION OF PRIMARY DOCUMENTATION:',
			description:
				'Our specialists will prepare all the necessary documents to start your activity, including the charter, constituent documents, etc.',
			icon: <Building2 className='w-8 h-8 text-green-600' />,
			image: '/assets/document.jpg',
		},
		{
			id: 4,
			title: 'OPENING A BANK ACCOUNT:',
			description:
				'We will help you open a bank account in one of the best banks in Uzbekistan so that you can conduct financial transactions without any problems.',
			icon: <CreditCard className='w-8 h-8 text-green-600' />,
			image: '/assets/bank.jpg',
		},
	]

	const benefits = [
		{
			icon: <Building2 className='w-8 h-8 text-green-500' />,
			title: (
				<>
					Free Office for{' '}
					<span className='text-green-400 font-semibold'>1 Year</span>
				</>
			),
		},
		{
			icon: <Laptop className='w-8 h-8 text-green-500' />,
			title: (
				<>
					Technical{' '}
					<span className='text-green-400 font-semibold'>Equipment</span>
				</>
			),
		},
		{
			icon: <DollarSign className='w-8 h-8 text-green-500' />,
			title: (
				<>
					Reimbursement of <br />
					Up to{' '}
					<span className='text-green-400 font-semibold'>15% of Salary</span>
				</>
			),
		},
		{
			icon: <Users className='w-8 h-8 text-green-500' />,
			title: (
				<>
					Partial Coverage of{' '}
					<span className='text-green-400 font-semibold'>HR Services</span>
				</>
			),
		},
		{
			icon: <GraduationCap className='w-8 h-8 text-green-500' />,
			title: (
				<>
					Up to <span className='text-green-400 font-semibold'>$5000</span> for
					Employee Training
				</>
			),
		},
	]

	return (
		<div className='min-h-screen text-gray-800'>
			{/* HERO */}
			<section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/assets/1258.png')] bg-cover ">
				<div className='absolute inset-0 bg-slate-900/80' />
				<div className='relative z-10 px-6 max-w-3xl'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold mb-4'
					>
						Explore opportunities
					</motion.h1>
					<p className='text-slate-200 mb-6'>
						Navoi Region offers the perfect environment for business relocation,
						offshore outsourcing, and regional expansion
					</p>
				</div>
			</section>
			{/* STEPS */}
			<div className='max-w-7xl mx-auto px-6 mt-10'>
				<h2 className='text-3xl font-bold uppercase mb-6'>
					How to become a member of IT Park?
				</h2>
				<div className='flex flex-wrap gap-20 justify-center'>
					{[
						{
							step: 'STEP 1',
							text: 'Registration of a company in Uzbekistan',
							color: '#a7db8d',
							time: '1–3 WORKING DAYS',
						},
						{
							step: 'STEP 2',
							text: 'Completion of the application online',
							color: '#91cf6a',
							time: 'INSTANT',
						},
						{
							step: 'STEP 3',
							text: 'Review of the application by IT Park',
							color: '#7fbf4d',
							time: '15 WORKING DAYS',
						},
					].map((item, i) => (
						<div
							key={i}
							className='w-full md:w-[350px] rounded-lg p-6 shadow flex flex-col justify-between'
							style={{ backgroundColor: item.color, minHeight: '250px' }}
						>
							<div>
								<h3 className='text-xl text-white font-semibold'>
									{item.step}
								</h3>
								<p className='text-white mt-3'>{item.text}</p>
							</div>
							<div className='mt-5 bg-white text-gray-700 font-bold rounded-lg px-4 py-3 flex items-center gap-4 h-[70px]'>
								<svg
									className='w-8 h-8 text-green-500'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M12 6v6l4 2'
										stroke='#10B981'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<circle
										cx='12'
										cy='12'
										r='9'
										stroke='#10B981'
										strokeWidth='2'
									/>
								</svg>
								<p className='text-lg'>{item.time}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* SETUP / TAX */}
			<section className='py-10 px-6 mt-8'>
				<div className='max-w-7xl mx-auto text-center'>
					<p className='text-gray-700 text-lg mb-8'>
						We provide attractive tax preferences to companies that have
						expressed a desire to become residents of our organization, namely:
					</p>

					<div className='flex flex-wrap justify-center items-center gap-6'>
						{/* Left side box */}
						<div className='flex items-center gap-3'>
							<span className='text-5xl font-extrabold text-green-600'>0%</span>
							<div className='border rounded-lg p-4 bg-white shadow-sm text-left'>
								<p className='font-semibold text-gray-800'>Corporate Tax</p>
								<p className='font-semibold text-gray-800'>Social Tax</p>
								<p className='font-semibold text-gray-800'>
									Property & Land Tax
								</p>
							</div>
						</div>

						{/* Middle arrow & percentage */}

						<div className='flex  items-center justify-around'>
							<div>
								<span className='text-green-600 font-bold text-9xl inline-block transform scale-y-300'>
									<MoveDown />
								</span>
							</div>
							<div className='text-center flex flex-col'>
								<p className='text-green-600 text-4xl font-extrabold'>12%</p>
								<p className='text-green-600 text-3xl font-extrabold'>7.5%</p>
							</div>
						</div>

						{/* Right side box */}
						<div className='flex items-center gap-3'>
							<div className='border rounded-lg p-4 bg-white shadow-sm text-left'>
								<p className='font-semibold text-gray-800'>
									Personal Income <br />
									Tax
								</p>
							</div>
							<p className='max-w-xs text-gray-700 text-left text-sm leading-relaxed'>
								YOUR COMPANY IS EXEMPT FROM ALL TYPES OF TAXES, EXCEPT PERSONAL
								INCOME TAX, WHICH IS REDUCED FOR OUR RESIDENTS FROM 12% TO 7.5%
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CONTACT */}
			<div className='text-center mt-10'>
				<Link href={'/contact'}>
					<button className='bg-slate-900 text-white px-6 py-3 rounded-lg inline-flex items-center gap-3'>
						<Phone />
						Contact us
					</button>
				</Link>
			</div>
			
			{/* VIRTUAL OFFICE */}
			<section className='max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center gap-8'>
				<div className='flex-1'>
					<h3 className='text-3xl font-semibold mb-3 uppercase'>
						Virtual Office Services
					</h3>
					<p className='text-gray-600'>
						For companies looking to maintain a presence without immediate
						physical relocation, IT Park Navoi offers virtual office packages,
						including legal address registration, document handling, and local
						representation.
					</p>
				</div>
				<div className='flex-1'>
					<Image
						src='/assets/virtual office.png'
						width={200}
						height={200}
						alt='Virtual Office'
						className='w-full h-auto rounded-lg'
					/>
				</div>
			</section>
				<div className='mt-20'>
				<Carousel/>
			</div>
			<section>
				<WhatSetsApart />
			</section>

			{/* ZERO RISK CARDS */}
			<div className='max-w-7xl mx-auto px-6 mt-12'>
				<h3 className='text-3xl font-bold mb-6'>
					ZERO RISK (0 RISK; 1 YEAR; 50 PEOPLE)
				</h3>
				<section className='bg-gradient-to-r from-[#0A2240] to-[#0F2A4F] py-14 px-6'>
					<div className='max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 text-white'>
						{benefits.map((item, idx) => (
							<div
								key={idx}
								className='flex items-center gap-4 bg-[#102B4E]/70 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 hover:bg-[#143764]/80 transition'
							>
								<div className='flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg shrink-0'>
									{item.icon}
								</div>
								<p className='text-base leading-snug'>{item.title}</p>
							</div>
						))}
					</div>
				</section>

				<p className='mt-6 text-sm text-gray-700'>
					Eligibility:
					<br />✔ Export-oriented business model
					<br />✔ Min. $500,000 export contract OR parent company with $50M
					annual turnover
					<br />✔ 50+ employees hired locally within the first year
				</p>
			</div>
		
			<section className='w-full bg-white'>
				<div className='max-w-7xl mx-auto px-6 py-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-3'>
						ONE-STOP-SHOP PROGRAM
					</h2>
					<p className='text-center text-gray-600 max-w-3xl mx-auto mb-10'>
						The process of registration of a legal entity in Uzbekistan can be
						completed by IT Park on your behalf through the One Stop Shop
						Program.
					</p>

					<div className='bg-[#012B55] rounded-2xl p-8'>
						<h3 className='text-white text-xl md:text-2xl font-semibold text-center mb-8'>
							More information about what our service includes:
						</h3>

						<div className='grid md:grid-cols-2 gap-8'>
							{services.map(service => (
								<div
									key={service.id}
									className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'
								>
									<div
										className='h-40 bg-cover bg-center'
										style={{ backgroundImage: `url(${service.image})` }}
									/>
									<div className='p-6'>
										<h4 className='font-bold text-gray-900 mb-3'>
											{service.title}
										</h4>
										<div className='flex items-start gap-3'>
											<div>{service.icon}</div>
											<p className='text-gray-700 text-sm leading-relaxed'>
												{service.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
