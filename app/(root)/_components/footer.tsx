'use client'
import Link from 'next/link'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function Footer() {
	const center = { lat: 40.1005, lng: 65.3794 } // Navoi koordinatalari

	return (
		<footer className='bg-gray-900 text-white py-10'>
			{/* Upper section */}
			<div className='container mx-auto px-6 flex flex-wrap justify-between gap-10'>
				{/* Logo & Description */}
				<div className='flex-1 min-w-[280px]'>
					<h4 className='text-lg font-semibold mb-4'>
						NAVOI REGIONAL GOVERNMENT
					</h4>
					<p className='text-gray-400 text-sm leading-relaxed'>
						Promoting economic growth and international business opportunities
						in the Navoi region of Uzbekistan through innovative initiatives and
						strategic partnerships.
					</p>
				</div>

				{/* Quick Links */}
				<div className='flex-1 min-w-[200px]'>
					<h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
					<ul className='space-y-'>
						<li>
							<Link
								href='/why'
								className='text-gray-400 hover:text-lime-400 transition-all'
							>
								Why Navoi?
							</Link>
						</li>
						<li>
							<Link
								href='/explore'
								className='text-gray-400 hover:text-lime-400 transition-all'
							>
								Explore opportunities
							</Link>
						</li>
						<li>
							<Link
								href='/bpo'
								className='text-gray-400 hover:text-lime-400 transition-all'
							>
								BPO
							</Link>
						</li>
						<li>
							<Link
								href='/it-visa'
								className='text-gray-400 hover:text-lime-400 transition-all'
							>
								IT Visa
							</Link>
							<li>
								<Link
									href='/why'
									className='text-gray-400 hover:text-lime-400 transition-all'
								>
									News
								</Link>
							</li>
							<li>
								<Link
									href='/why'
									className='text-gray-400 hover:text-lime-400 transition-all'
								>
									Contact
								</Link>
							</li>
						</li>
					</ul>
				</div>

				{/* Google Map */}
				<div className='flex-1 min-w-[280px]'>
					<h4 className='text-lg font-semibold mb-4'>Our Location</h4>
					<div className='w-full h-[200px] rounded-lg overflow-hidden'>
						<LoadScript
							googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
						>
							<GoogleMap
								mapContainerStyle={{ width: '100%', height: '100%' }}
								center={center}
								zoom={13}
							>
								<Marker position={center} />
							</GoogleMap>
						</LoadScript>
					</div>
				</div>
			</div>
		</footer>
	)
}
