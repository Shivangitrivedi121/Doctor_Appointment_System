import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <footer className='bg-white mt-40 pt-16 pb-8 border-t border-gray-100'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-12'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-16'>

          {/* ---------- Left Section ---------- */}
          <div>
            <img className='mb-6 w-44' src={assets.logo} alt="Prescripto Logo" />
            <p className='w-full md:w-5/6 text-gray-500 leading-relaxed text-sm'>
              A trusted platform that makes booking doctor appointments simple and stress-free. Easily connect with top specialists, check availability, and schedule visits—all in just a few clicks. Take control of your health with a smooth and secure appointment experience designed for your convenience.
            </p>
          </div>

          {/* ---------- Center Section ---------- */}
          <div>
            <p className='text-lg font-heading font-bold text-gray-800 mb-6'>Company</p>
            <ul className='flex flex-col gap-3 text-sm text-gray-600'>
              <li><Link to='/' className='hover:text-primary hover:translate-x-1 transition-all inline-block'>Home</Link></li>
              <li><Link to='/about' className='hover:text-primary hover:translate-x-1 transition-all inline-block'>About Us</Link></li>
              <li><Link to='/contact' className='hover:text-primary hover:translate-x-1 transition-all inline-block'>Contact Us</Link></li>
              <li><Link to='#' className='hover:text-primary hover:translate-x-1 transition-all inline-block'>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* ---------- Right Section ---------- */}
          <div>
            <p className='text-lg font-heading font-bold text-gray-800 mb-6'>Get in Touch</p>
            <ul className='flex flex-col gap-3 text-sm text-gray-600'>
              <li className='flex items-center gap-2 group cursor-pointer'>
                <svg className='w-4 h-4 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className='group-hover:text-primary transition-colors'>+1-452-321-7845</span>
              </li>
              <li className='flex items-center gap-2 group cursor-pointer'>
                <svg className='w-4 h-4 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className='group-hover:text-primary transition-colors'>support@prescripto.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ---------- Copyright Text ---------- */}
        <div className='pt-8 border-t border-gray-100/60'>
          <p className='text-sm text-center text-gray-500'>
            Copyright © {new Date().getFullYear()} Prescripto. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer