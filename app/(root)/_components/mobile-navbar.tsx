'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, X } from 'lucide-react'
import Image from 'next/image'

interface MobileNavbarProps {
	isOpen: boolean
	onClose: () => void
	menuItems: { name: string; href: string }[]
	pathname: string
}

export default function MobileNavbar({ 
	isOpen, 
	onClose, 
	menuItems, 
	pathname 
}: MobileNavbarProps) {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50 md:hidden'>
			{/* Backdrop */}
			<div 
				className='absolute inset-0 bg-black bg-opacity-50'
				onClick={onClose}
			/>
			
			{/* Sidebar */}
			<div className='relative bg-gradient-to-b from-[#0a1a3a] to-[#051024] text-white w-80 h-full overflow-y-auto'>
				{/* Header */}
				<div className='flex items-center justify-between p-4 border-b border-gray-700'>
					<Link href='/' className='flex items-center gap-3'>
							<Image
								src='/logo22.png'
								alt='Navoi Logo'
								width={300}
								height={250}
								className='h-12 md:h-16 w-auto'
							/>
						</Link>
					<button
						onClick={onClose}
						className='p-2 hover:bg-gray-700 rounded-lg transition'
					>
						<X className='w-6 h-6' />
					</button>
				</div>

				{/* Navigation Items */}
				<nav className='p-4 space-y-4'>
					{menuItems.map(item => {
						const isActive = pathname === item.href
						return (
							<Link
								key={item.name}
								href={item.href}
								onClick={onClose}
								className={`block py-3 px-4 text-lg font-medium transition rounded-lg ${
									isActive
										? 'bg-blue-600 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white'
								}`}
							>
								{item.name}
							</Link>
						)
					})}
				</nav>

				{/* Contact Button */}
				<div className='absolute bottom-6 left-4 right-4'>
					<Link href={'/contact'} className='block w-full'>
						<Button 
							className='w-full bg-[#1e2b4d] hover:bg-[#2f4070] text-white flex items-center justify-center gap-2 py-3'
							onClick={onClose}
						>
							<Phone className='w-5 h-5' />
							Contact us
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}