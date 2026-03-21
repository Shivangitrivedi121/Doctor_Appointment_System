import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-24 text-text-dark bg-background-light px-4 sm:px-6' id='speciality'>
      
      <div className='text-center max-w-2xl mx-auto'>
         <h2 className='text-3xl md:text-4xl font-heading font-bold mb-4'>Find by Speciality</h2>
         <p className='text-gray-600 font-body text-sm md:text-base leading-relaxed'>
            Browse through our extensive list of trusted doctors, and schedule your appointment hassle-free.
         </p>
      </div>

      <div className='flex flex-wrap justify-center gap-6 pt-10 w-full max-w-6xl mx-auto stagger-container'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center justify-center bg-white w-32 h-40 sm:w-40 sm:h-48 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex-shrink-0 hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(44,123,229,0.1)] hover:border-primary/20 transition-all duration-300 group animate-fadeIn' key={index} to={`/doctors/${item.speciality}`}>
            <div className='w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors'>
                <img className='w-10 sm:w-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm' src={item.image} alt={item.speciality} />
            </div>
            <p className='text-sm sm:text-base font-medium text-gray-700 group-hover:text-primary transition-colors text-center px-2'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu