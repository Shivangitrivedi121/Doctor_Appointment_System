import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div className='mt-10'>
      <div className='text-center text-3xl pt-10 text-gray-700 font-medium mb-12 animate-slideUp'>
        <p>ABOUT <span className='text-primary font-bold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row items-stretch gap-12 bg-white shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden'>
        <div className='w-full md:w-1/3 flex animate-slideInLeft'>
            <img className='w-full h-full object-cover' src={assets.about_image} alt="About Prescripto" />
        </div>

        <div className='flex flex-col justify-center gap-6 md:w-1/2 p-8 md:p-12 text-gray-600 leading-relaxed bg-gradient-to-br from-white to-gray-50 animate-fadeIn delay-200'>
          <p className='text-lg'><span className='font-semibold text-gray-800'>Welcome to Prescripto</span>, your trusted partner in managing healthcare efficiently and effectively. We understand that finding the right doctor and scheduling appointments can be overwhelming. That's why we've built a seamless platform designed to connect you with top-rated medical professionals in just a few clicks.</p>
          <p>Our mission is to revolutionize the healthcare experience by integrating cutting-edge technology with compassionate care. We are committed to prioritizing your well-being, ensuring that quality healthcare is always accessible, transparent, and tailored to your unique needs. From booking your first consultation to managing ongoing treatments, Prescripto is here to support your healthy journey.</p>
          <div className='mt-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
            <b className='text-gray-800 text-lg border-b-2 border-primary pb-1 inline-block mb-3'>Our Vision</b>
            <p className='text-sm text-gray-500'>We envision a world where healthcare barriers are eliminated, and everyone has immediate access to the medical attention they deserve. By bridging the gap between patients and healthcare providers, we strive to build a healthier tomorrow, today.</p>
          </div>
        </div>
      </div>

      <div className='text-center text-2xl my-16'>
        <p>WHY <span className='text-gray-800 font-bold'>CHOOSE US</span></p>
        <p className='text-gray-500 text-sm mt-2 font-medium'>The core values that drive us to provide the best healthcare experience.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 stagger-container'>
        <div className='bg-white shadow-lg shadow-black/5 rounded-2xl p-10 flex flex-col gap-5 hover:bg-primary hover:text-white hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-50 animate-fadeIn'>
          <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors'>
            <svg className='w-7 h-7 text-primary group-hover:text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <b className='text-xl text-gray-800 group-hover:text-white'>Efficiency</b>
          <p className='text-gray-600 group-hover:text-white/90 leading-relaxed text-sm'>
            Streamlined scheduling built to fit into your busy lifestyle. Minimize wait times and maximize care with our intelligent booking system.
          </p>
        </div>

        <div className='bg-white shadow-lg shadow-black/5 rounded-2xl p-10 flex flex-col gap-5 hover:bg-primary hover:text-white hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-50 animate-fadeIn'>
          <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors'>
            <svg className='w-7 h-7 text-primary group-hover:text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          </div>
          <b className='text-xl text-gray-800 group-hover:text-white'>Convenience</b>
          <p className='text-gray-600 group-hover:text-white/90 leading-relaxed text-sm'>
            Access a network of trusted healthcare professionals from anywhere, at any time. Booking an appointment has never been this accessible.
          </p>
        </div>

        <div className='bg-white shadow-lg shadow-black/5 rounded-2xl p-10 flex flex-col gap-5 hover:bg-primary hover:text-white hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-50 animate-fadeIn'>
          <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors'>
            <svg className='w-7 h-7 text-primary group-hover:text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
          </div>
          <b className='text-xl text-gray-800 group-hover:text-white'>Personalization</b>
          <p className='text-gray-600 group-hover:text-white/90 leading-relaxed text-sm'>
            Receive tailored recommendations and a healthcare experience crafted specifically around your unique medical needs and history.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About