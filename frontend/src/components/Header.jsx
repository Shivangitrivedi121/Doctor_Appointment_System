import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col bg-background-light rounded-3xl mx-4 sm:mx-8 md:mx-10 overflow-hidden relative border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.04)] h-auto lg:h-[80vh] min-h-[600px]'>

      {/* Decorative Blob */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none'></div>

      <div className='flex flex-col lg:flex-row h-full z-10 w-full max-w-7xl mx-auto'>
        {/* ---------- Left Side ---------- */}
        <div className='w-full lg:w-1/2 flex flex-col justify-center gap-8 py-16 px-8 md:px-16 lg:py-0 animate-slideInLeft'>
          
          <div className='inline-flex items-center gap-2 bg-secondary/10 w-max px-4 py-1.5 rounded-full border border-secondary/20'>
             <span className='w-2 h-2 rounded-full bg-secondary animate-pulse'></span>
             <span className='text-xs font-semibold text-secondary tracking-wider uppercase'>Trusted Healthcare</span>
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl text-text-dark font-heading font-bold leading-[1.2]'>
            Your Health,<br />
            Our <span className='text-primary'>Priority.</span>
          </h1>
          
          <p className='text-gray-600 text-lg md:text-xl font-body leading-relaxed max-w-lg'>
            Simply browse through our extensive list of trusted doctors, and schedule your appointment hassle-free. Quality care is just a click away.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-4 mt-2'>
            <a href="#speciality" className='w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-medium shadow-[0_8px_30px_rgba(44,123,229,0.3)] hover:shadow-[0_12px_40px_rgba(44,123,229,0.4)] hover:-translate-y-1 transition-all duration-300'>
              Book Appointment
              <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <div className='hidden sm:flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100'>
              <img className='w-24' src={assets.group_profiles} alt="Trusted Patients" />
              <div className='text-xs'>
                  <p className='font-bold text-gray-800'>10k+</p>
                  <p className='text-gray-500 font-medium'>Happy Patients</p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------Right Side ---------- */}
        <div className='w-full lg:w-1/2 relative flex items-end justify-center pt-8 lg:pt-20 px-4 animate-fadeIn delay-300'>
           {/* Abstract shape behind doctor */}
          <div className='absolute bottom-0 w-[80%] h-[70%] bg-gradient-to-t from-primary/20 to-transparent rounded-t-[100px] z-0'></div>
          <img className='max-w-full h-auto max-h-full object-contain relative z-10 drop-shadow-2xl' src={assets.header_img} alt="Hero Doctor" />
        </div>
      </div>
    </div>
  )
}

export default Header