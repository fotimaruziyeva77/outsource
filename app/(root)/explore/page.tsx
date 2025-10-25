"use client"
import { motion } from 'framer-motion'
export default function ExploreOpportunities() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* HERO */}
    		<section className="relative h-[50vh] flex items-center justify-center text-center text-white bg-[url('/assets/1258.png')] bg-cover ">
				<div className='absolute inset-0 bg-slate-900/80' />
				<div className='relative z-10 px-6 max-w-3xl'>
				<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold mb-4'
					>Explore opportunities

					</motion.h1>
					<p className='text-slate-200 mb-6'>
						Navoi Region offers the perfect environment for business  relocation, offshore outsourcing, and regional expansion
					</p>
				</div>
			</section>
      {/* STEPS */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-3xl font-bold uppercase mb-6">How to become a member of IT Park?</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-full md:w-96 bg-[#a7db8d] rounded-lg p-6 shadow">
            <h3 className="text-xl text-white font-semibold">STEP 1</h3>
            <p className="text-white mt-3">Registration of a company in Uzbekistan</p>
            <div className="mt-5 bg-white text-gray-700 font-bold rounded-lg px-4 py-3 flex items-center gap-4">
              <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6v6l4 2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="2" />
              </svg>
              <p className="text-lg">1–3 WORKING DAYS</p>
            </div>
          </div>

          <div className="w-full md:w-96 bg-[#91cf6a] rounded-lg p-6 shadow">
            <h3 className="text-xl text-white font-semibold">STEP 2</h3>
            <p className="text-white mt-3">Completion of the application online</p>
            <div className="mt-5 bg-white text-gray-700 font-bold rounded-lg px-4 py-3 flex items-center gap-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6v6l4 2" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#059669" strokeWidth="2" />
              </svg>
              <p className="text-lg">INSTANT</p>
            </div>
          </div>

          <div className="w-full md:w-96 bg-[#7fbf4d] rounded-lg p-6 shadow">
            <h3 className="text-xl text-white font-semibold">STEP 3</h3>
            <p className="text-white mt-3">Review of the application by IT Park</p>
            <div className="mt-5 bg-white text-gray-700 font-bold rounded-lg px-4 py-3 flex items-center gap-4">
              <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6v6l4 2" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#16A34A" strokeWidth="2" />
              </svg>
              <p className="text-lg">15 WORKING DAYS</p>
            </div>
          </div>
        </div>
      </div>

      {/* SETUP / TAX */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-3xl md:text-4xl font-semibold uppercase mb-6">SET UP RISK FREE IT-ENABLED SERVICES BUSINESS</h2>

        <div className="bg-gray-50 rounded-xl p-8 shadow">
          <p className="mb-6">We provide attractive tax preferences to companies that have expressed a desire to become residents of our organization, namely:</p>

          <div className="flex flex-wrap gap-6 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="text-6xl font-extrabold text-green-600">0%</div>
              <div className="bg-white border rounded-lg p-4 min-w-[240px]">
                <p className="font-semibold">Corporate Tax<br />Social Tax<br />Property & Land Tax</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-green-600">12%</div>
                <div className="text-4xl font-bold text-green-600">7.5%</div>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 11l-6 6-6-6" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="bg-white border rounded-lg p-3 mt-2 text-center font-semibold">Personal<br />Income<br />Tax</div>
              </div>
            </div>

            <div className="max-w-md text-left">
              <p className="font-semibold">YOUR COMPANY IS EXEMPT FROM ALL TYPES OF TAXES, EXCEPT PERSONAL INCOME TAX, WHICH IS REDUCED FOR OUR RESIDENTS FROM 12% TO 7.5%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="text-center mt-10">
        <button className="bg-slate-900 text-white px-6 py-3 rounded-lg inline-flex items-center gap-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16v4a1 1 0 0 1-1 1c-9.389 0-17-7.611-17-17a1 1 0 0 1 1-1h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Contact us
        </button>
      </div>

      {/* VIRTUAL OFFICE */}
      <section className="max-w-6xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-3">Virtual Office Services</h3>
          <p className="text-gray-600">For companies looking to maintain a presence without immediate physical relocation, IT Park Navoi offers virtual office packages, including legal address registration, document handling, and local representation.</p>
        </div>
        <div className="flex-1">
          <img src="/assets/media/icons/73c954b196243c96eb350ab11e5e628edd5206ff.png" alt="Virtual Office" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* ZERO RISK CARDS */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <h3 className="text-3xl font-bold mb-6">ZERO RISK (0 RISK; 1 YEAR; 50 PEOPLE)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 bg-gradient-to-r from-blue-700 to-slate-800 text-white p-6 rounded-lg">
            <img src="/icons/office-white.png" alt="office" className="w-10 h-10" />
            <p><strong>Free Office</strong> for <span className="text-teal-300">1 Year</span></p>
          </div>

          <div className="flex items-center gap-6 bg-gradient-to-r from-blue-700 to-slate-800 text-white p-6 rounded-lg">
            <img src="/icons/laptop-white.png" alt="laptop" className="w-10 h-10" />
            <p><strong>Technical</strong> <span className="text-teal-300">Equipment</span></p>
          </div>

          <div className="flex items-center gap-6 bg-gradient-to-r from-blue-700 to-slate-800 text-white p-6 rounded-lg">
            <img src="/icons/money-white.png" alt="money" className="w-10 h-10" />
            <p>Reimbursement of <strong>Up to</strong> <span className="text-teal-300">15% of Salary</span></p>
          </div>

          <div className="flex items-center gap-6 bg-gradient-to-r from-blue-700 to-slate-800 text-white p-6 rounded-lg">
            <img src="/icons/hr-white.png" alt="hr" className="w-10 h-10" />
            <p>Partial Coverage of <span className="text-teal-300">HR Services</span></p>
          </div>

          <div className="flex items-center gap-6 bg-gradient-to-r from-blue-700 to-slate-800 text-white p-6 rounded-lg">
            <img src="/icons/training-white.png" alt="training" className="w-10 h-10" />
            <p>Up to <span className="text-teal-300">$5000</span> for <strong>Employee Training</strong></p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-700">Eligibility:<br />✔ Export-oriented business model<br />✔ Min. $500,000 export contract OR parent company with $50M annual turnover<br />✔ 50+ employees hired locally within the first year</p>
      </div>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 mt-12 mb-20">
        <h2 className="section-title text-3xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-28 flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 10h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg">Qualified Legal Advice</h4>
              <p className="text-sm text-gray-600 mt-2">Our experts will assist you in explaining all legal aspects of starting a business in Uzbekistan and answer all your questions.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-28 flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="7" width="18" height="14" rx="2" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg">Company Registration</h4>
              <p className="text-sm text-gray-600 mt-2">We will help you with the preparation of all necessary documents to register your company in accordance with the legislation of Uzbekistan.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-28 flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16" stroke="#fff" strokeWidth="2" />
                <path d="M4 12h16" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg">Preparation of Primary Documentation</h4>
              <p className="text-sm text-gray-600 mt-2">Our specialists will prepare all the necessary documents to start your activity, including the charter, constituent documents, etc.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-28 flex items-center justify-center bg-gradient-to-r from-blue-400 to-green-400">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7h18" stroke="#fff" strokeWidth="2" />
                <path d="M12 7v10" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg">Opening a Bank Account</h4>
              <p className="text-sm text-gray-600 mt-2">We will help you open a bank account in one of the best banks in Uzbekistan so that you can conduct financial transactions without any problems.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
