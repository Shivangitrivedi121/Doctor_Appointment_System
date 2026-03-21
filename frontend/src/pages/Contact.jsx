import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, form logic would go here
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      
      {/* 1. Page Title & Introduction */}
      <div className='flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto mb-20 bg-white p-8 md:p-12 rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100'>
         <div className='flex-1 text-center md:text-left'>
           <h1 className='text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6'>
             CONTACT <span className='text-primary'>US</span>
           </h1>
           <p className='text-gray-600 font-body text-base md:text-lg leading-relaxed'>
             Have questions or need to schedule an appointment? Get in touch with us using the form below or through our alternative contact methods. We are always here to help you.
           </p>
         </div>
         <div className='flex-1'>
            <img className='w-full max-w-sm mx-auto rounded-3xl shadow-lg border-4 border-white' src={assets.contact_image} alt="Contact Support" />
         </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
        
        {/* 2. Contact Form Section */}
        <div className='bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100'>
          <h2 className='text-2xl font-heading font-bold text-gray-800 mb-6'>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name <span className='text-red-500'>*</span></label>
              <input required type="text" placeholder="John Doe" className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email Address <span className='text-red-500'>*</span></label>
              <input required type="email" placeholder="john@example.com" className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Subject <span className='text-red-500'>*</span></label>
              <input required type="text" placeholder="How can we help?" className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Message <span className='text-red-500'>*</span></label>
              <textarea required rows="5" placeholder="Your message here..." className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none bg-gray-50'></textarea>
            </div>
            
            <button type="submit" className='w-full bg-primary text-white font-medium py-3.5 rounded-xl mt-2 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'>
              Send Message
            </button>

            {isSubmitted && (
              <div className='mt-4 p-4 bg-secondary/10 border border-secondary/30 text-secondary rounded-xl text-sm text-center font-medium'>
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>

        {/* 3. Alternative Contact Information */}
        <div className='flex flex-col gap-8'>
           
           <div className='bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10'>
             <p className='font-heading font-bold text-2xl text-gray-800 mb-8'>Our OFFICE</p>
             
             <div className='flex flex-col gap-8'>
                <div className='flex items-start gap-4 group'>
                   <div className='w-12 h-12 min-w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                      <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                   </div>
                   <div>
                     <p className='font-bold text-gray-800 mb-1'>Physical Address</p>
                     <p className='text-gray-600 leading-relaxed'>54709 Willms Station <br/> Suite 350, Washington, USA</p>
                   </div>
                </div>

                <div className='flex items-start gap-4 group'>
                   <div className='w-12 h-12 min-w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                      <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                   </div>
                   <div>
                     <p className='font-bold text-gray-800 mb-1'>Phone Number</p>
                     <p className='text-gray-600'>Tel: (415) 455 0134</p>
                   </div>
                </div>

                <div className='flex items-start gap-4 group'>
                   <div className='w-12 h-12 min-w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                      <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   </div>
                   <div>
                     <p className='font-bold text-gray-800 mb-1'>Email Address</p>
                     <p className='text-gray-600'>Email: shiva126@gmail.com</p>
                   </div>
                </div>

                <div className='flex items-start gap-4 group'>
                   <div className='w-12 h-12 min-w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                      <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   </div>
                   <div>
                     <p className='font-bold text-gray-800 mb-1'>Working Hours</p>
                     <p className='text-gray-600'>Mon - Fri: 9:00 AM - 6:00 PM</p>
                   </div>
                </div>
             </div>
           </div>

           {/* Careers Section (Keeping Original Text) */}
           <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'>
              <p className='font-heading font-bold text-xl text-gray-800 mb-2'>Careers at DocOnTime</p>
              <p className='text-gray-500 mb-6'>Learn more about our teams and job openings.</p>
              <button className='border-2 border-primary text-primary font-medium px-8 py-3 rounded-xl hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto'>
                 Explore Jobs
              </button>
           </div>
           
           {/* 6. FAQ Redirect Section */}
           <div className='bg-secondary/10 p-6 rounded-3xl flex items-center gap-4 border border-secondary/20'>
              <div className='p-3 bg-white rounded-full text-secondary shadow-sm'>
                <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className='font-semibold text-gray-800'>Looking for quick answers?</p>
                <p className='text-sm text-gray-600'>Check our <a href="#" className='text-primary font-bold hover:underline'>FAQ page</a> before contacting.</p>
              </div>
           </div>

        </div>
      </div>

      {/* 4. Location Map Section */}
      <div className='w-full bg-white rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 mb-16'>
         <div className='p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100'>
            <div>
               <h3 className='text-2xl font-heading font-bold text-gray-800'>Location Map</h3>
               <p className='text-gray-600 mt-1'>Find our primary clinic and offices easily.</p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className='flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5'>
               <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               Get Directions
            </a>
         </div>
         <div className='w-full h-[450px] bg-gray-200 relative'>
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1628001716508!5m2!1sen!2sau" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy"
               title="Office Location Map"
            ></iframe>
         </div>
      </div>

      {/* 5. Social Media Section */}
      <div className='flex flex-col items-center justify-center text-center pb-10'>
         <p className='text-2xl font-heading font-bold text-gray-800 mb-8'>Connect With Us On Social Media</p>
         <div className='flex items-center gap-6'>
            <a href="#" className='w-14 h-14 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5'>
               <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className='w-14 h-14 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5'>
               <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className='w-14 h-14 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5'>
               <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className='w-14 h-14 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5'>
               <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
         </div>
      </div>

    </div>
  )
}

export default Contact