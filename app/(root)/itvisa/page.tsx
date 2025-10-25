"use client";
import Image from "next/image";
import { motion } from 'framer-motion'
export default function ITVisa() {
  return (
    <main className="font-sans text-gray-900">
      {/* === HERO SECTION === */}
    			<section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/63f02ff0cf19e90057f797ce40ffcc2cbc8bded8.png')] bg-cover bg-center">
				<div className='absolute inset-0 bg-slate-900/80' />
				<div className='relative z-10 px-6 max-w-3xl'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold mb-4'
					>IT Visa

					</motion.h1>
					<p className='text-slate-200 mb-6'>
						A resident company is eligible to apply for IT Visas that are provided to its founders,  <br />
            investors, and employees. It is valid for 3 years and allows to work in Uzbekistan without a work permit.
					</p>
				
				</div>
			</section>
    

      {/* === RISK SECTION === */}
      <section className="bg-gray-100 py-10 text-center">
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto mt-4">
          <div className="bg-white flex items-center gap-10 uppercase rounded-xl shadow-md p-3 w-[500px] text-left">
            <Image
              src="/assets/uzb.a50a704c.svg"
              alt="Equal Rights"
              width={80}
              height={40}
            />
            <p className="text-[16px] text-gray-800">
              Equal social rights with <br />
               citizens of Uzbekistan
            </p>
          </div>

          <div className="bg-white flex items-center gap-10 uppercase rounded-xl shadow-md p-4 w-[500px] text-left">
            <Image
              src="/assets/location.dd35f21d.svg"
              alt="Real Estate"
              width={50}
              height={50}
            />
            <p className="text-[16px]  text-gray-800">
              Purchase of real estate of  
              any value in the territory of  
              the
              Republic of Uzbekistan
            </p>
          </div>
        </div>
      </section>

      {/* === VISA SECTION === */}
      <section className="text-center py-16 max-w-7xl mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Who can obtain IT Visa
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 w-[340px] text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/code-icon-058523a3.svg"
                alt="IT Professionals"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-semibold mb-3">IT Professionals</h3>
            <p className="text-sm text-justify leading-relaxed">
              <strong>IT specialist</strong> - a specialist who has a
              qualification/specialization in the field of information
              technology, is employed in a legal entity of a resident of the
              Republic of Uzbekistan in an IT specialty and confirms his income
              from IT activities is not less than the equivalent of 30,000 US
              dollars for the last 12 months at the time of application.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 w-[340px] text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/user-icon-25b85d19.svg"
                alt="Founders"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Founders of IT Park resident companies
            </h3>
            <p className="text-sm text-justify leading-relaxed">
              <strong>The founder of an IT Park resident</strong> is an
              individual who is the founder/founder of a legal entity of a
              Technopark resident, duly registered and included in the Unified
              Register of Residents.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 w-[340px] text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/credit-card-icon-5f838736.svg"
                alt="Investors"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-semibold mb-3">Investors</h3>
            <p className="text-sm text-justify leading-relaxed">
              <strong>An Investor</strong> is an individual or a representative
              of a foreign investment company providing financing to a Legal
              Entity operating in the field of information technology through an
              Agreement in the amount of at least the equivalent of 10 thousand
              US dollars.
            </p>
          </div>
        </div>
      </section>

     
    </main>
  );
}
