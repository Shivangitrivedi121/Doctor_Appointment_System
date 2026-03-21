import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex bg-primary rounded-3xl px-6 sm:px-10 md:px-14 lg:px-16 my-24 mx-4 sm:mx-8 md:mx-10 shadow-[0_20px_50px_rgba(44,123,229,0.2)] overflow-hidden relative'>
      
      {/* Decorative Elements */}
      <div className='absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[80px] -translate-y-1/2 mix-blend-overlay z-0'></div>
      <div className='absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 z-0'></div>

      {/* ---------- Left Side ---------- */}
      <div className='flex-1 py-12 sm:py-16 md:py-20 lg:py-24 z-10 flex flex-col justify-center animate-slideUp'>
        
        <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md w-max px-4 py-1.5 rounded-full border border-white/20 mb-6'>
             <span className='w-2 h-2 rounded-full bg-secondary'></span>
             <span className='text-xs font-semibold text-white tracking-wider uppercase'>Join Our Network</span>
        </div>

        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-white'>
          <p>Book Appointment</p>
          <p className='mt-2 lg:mt-4 leading-tight'>With 100+ Trusted Doctors</p>
        </div>
        
        <p className='text-white/80 font-body mt-4 max-w-md text-sm sm:text-base leading-relaxed'>
           Create an account to gain full access to our specialists, manage your appointments, and track your health journey.
        </p>

        <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='bg-white text-primary font-medium px-8 py-3.5 rounded-xl mt-8 w-max shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 group'>
            Create account
            <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>

      {/* ---------- Right Side ---------- */}
      <div className='hidden md:block md:w-1/2 lg:w-[400px] relative z-10 pt-10 animate-fadeIn delay-200'>
        <img className='w-full absolute bottom-0 right-0 max-w-md drop-shadow-2xl' src={assets.appointment_img} alt="Doctor" />
      </div>
    </div>
  )
}

export default Banner