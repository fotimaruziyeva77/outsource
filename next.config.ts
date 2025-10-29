import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.pravatar.cc',
			},
      	{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			 {
        protocol: 'http',
        hostname: 'outsource.sifatdev.uz',
        port: '', 
        pathname: '/media/**',
      },
		],
	},
}

export default nextConfig
