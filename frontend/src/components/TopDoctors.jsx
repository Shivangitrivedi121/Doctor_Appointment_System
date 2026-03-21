import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-6 py-20 text-text-dark bg-white md:px-10'>
      
      <div className='text-center max-w-2xl mx-auto mb-6'>
         <h2 className='text-3xl md:text-4xl font-heading font-bold mb-4'>Top Doctors to Book</h2>
         <p className='text-gray-600 font-body text-sm md:text-base leading-relaxed'>
            Browse our extensive list of highly-rated, verified medical professionals.
         </p>
      </div>

      <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5 px-4 sm:px-0 stagger-container'>
        {doctors.slice(0,10).map((item, index) => (
          <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0,0) }} className='bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(44,123,229,0.12)] hover:border-primary/30 transition-all duration-300 group flex flex-col h-full animate-fadeIn' key={index}>
            <div className='w-full pt-[100%] relative bg-background-light overflow-hidden'>
               <img className='absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-90 group-hover:opacity-100' src={item.image} alt={item.name} />
            </div>
            <div className='p-6 flex flex-col flex-grow bg-white z-10'>
              <div className='flex items-center gap-2 text-xs mb-3'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary'></span>
                </span>
                <p className='text-secondary font-semibold uppercase tracking-wider'>Available</p>
              </div>
              <h3 className='text-gray-900 text-lg font-heading font-bold group-hover:text-primary transition-colors line-clamp-1'>{item.name}</h3>
              <p className='text-gray-500 text-sm font-medium mt-1'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button onClick={() => { navigate('/doctors'); scrollTo(0,0) }} className='bg-primary/5 text-primary border border-primary/20 px-12 py-3.5 rounded-full mt-10 hover:bg-primary hover:text-white shadow-sm hover:shadow-[0_8px_25px_rgba(44,123,229,0.3)] hover:-translate-y-1 transition-all duration-300 font-medium tracking-wide'>
          View All Doctors
      </button>
    </div>
  )
}

export default TopDoctors