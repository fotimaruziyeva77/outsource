import { Phone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ItParkBanner() {
  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 md:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
              Looking to start or grow <br className="hidden sm:block" />
              your business in Uzbekistan?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
              Every successful business must take a long-term view, to achieve
              their most ambitious goals and fulfill their potential. We
              support you from consideration and expansion.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700 transition"
            >
               <Phone /> Contact us
            </Link>
          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center md:justify-end">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.b3c1dba8 (1) 1 (1).png" // public ichiga qo‘yiladi
                alt="IT Park Uzbekistan"
                width={490}
                height={490}
                className="object-contain"
              />
              <div>
             
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
