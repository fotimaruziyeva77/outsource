'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import MobileNavbar from './mobile-navbar'


export default function Navbar() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const menuItems = [
		{ name: 'Why Navoi', href: '/why' },
		{ name: 'Explore opportunities', href: '/explore' },
		{ name: 'BPO', href: '/bpo' },
		{ name: 'IT-visa', href: '/itvisa' },
		{ name: 'News', href: '/news' },
	]

	return (
		<>
			<header className='bg-gradient-to-r from-[#0a1a3a] to-[#051024] text-white shadow-md'>
				<div className='mx-auto px-6 py-3 flex items-center justify-between'>
					{/* Logo and Mobile Menu Button */}
					<div className='flex items-center gap-4'>
						{/* Mobile Menu Button */}
						<button
							className='md:hidden p-2'
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</button>

						{/* Logo */}
						<Link href='/' className='flex items-center gap-3'>
							<Image
								src='/logo22.png'
								alt='Navoi Logo'
								width={300}
								height={250}
								className='h-12 md:h-16 w-auto'
							/>
						</Link>
					</div>

					{/* Desktop Menu */}
					<nav className='hidden md:flex items-center gap-6'>
						{menuItems.map(item => {
							const isActive = pathname === item.href
							return (
								<Link
									key={item.name}
									href={item.href}
									className={`text-lg font-medium transition relative ${
										isActive
											? 'text-blue-400 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-400'
											: 'text-white hover:text-blue-300'
									}`}
								>
									{item.name}
								</Link>
							)
						})}
					</nav>

					{/* Contact button */}
					<div className='hidden md:block'>
						<Link href={'/contact'}>
							<Button className='bg-[#1e2b4d] hover:bg-[#2f4070] text-white flex items-center gap-2'>
								<Phone className='w-4 h-4' />
								Contact us
							</Button>
						</Link>
					</div>

					{/* Mobile Contact Button */}
					<div className='md:hidden'>
						<Link href={'/contact'}>
							<Button 
								size="sm"
								className='bg-[#1e2b4d] hover:bg-[#2f4070] text-white flex items-center gap-2'
							>
								<Phone className='w-4 h-4' />
							</Button>
						</Link>
					</div>
				</div>
			</header>

			{/* Mobile Navigation */}
			<MobileNavbar
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
				menuItems={menuItems}
				pathname={pathname}
			/>
		</>
	)
}