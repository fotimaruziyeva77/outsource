import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-[120px] md:text-[460px] font-extrabold text-[#00C950] leading-none">
          404
        </h1>

        {/* Text */}
        <p className="mt-4 text-lg font-semibold text-gray-800">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          The page you are looking for does not exist.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-8 rounded-full bg-[#00C950] px-6 py-3 text-white font-medium transition hover:opacity-90"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
