import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('New York, USA')
  const [sortBy, setSortBy] = useState('Relevance')
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  // Filter and Sort Logic
  const applyFilter = () => {
    let filtered = doctors;
    
    // Apply speciality filter from URL
    if (speciality) {
      filtered = filtered.filter(doc => doc.speciality === speciality)
    }

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(doc => 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        doc.speciality.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sorting Logic (Mock implementation)
    if (sortBy === 'Highest Rated') {
      filtered = [...filtered].sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5))
    } else if (sortBy === 'Most Experienced') {
      filtered = [...filtered].sort((a, b) => parseInt(b.experience) - parseInt(a.experience))
    }

    setFilterDoc(filtered)
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality, searchQuery, sortBy])

  return (
    <div className='w-full bg-[#FBFCFD] min-h-screen pb-20'>
      
      {/* 1. Page Header */}
      <div className='bg-primary/5 pt-16 pb-24 text-center px-4'>
         <h1 className='text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>Find Your Doctor</h1>
         <p className='text-gray-600 max-w-2xl mx-auto'>Browse through our network of certified specialists and book your appointment in seconds. Your health is our priority.</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12'>
        
        {/* 2. Search Section */}
        <div className='bg-white p-4 md:p-6 rounded-[2rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col md:flex-row items-center gap-4 mb-12'>
           <div className='flex-1 flex items-center gap-3 w-full bg-gray-50 px-5 py-3.5 rounded-2xl border border-gray-100 focus-within:border-primary/50 focus-within:bg-white transition-all'>
              <svg className='w-5 h-5 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input 
                type="text" 
                placeholder="Search by Doctor Name, Specialty, or Condition" 
                className='bg-transparent w-full focus:outline-none text-gray-700'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
           <div className='w-full md:w-64 flex items-center gap-3 bg-gray-50 px-5 py-3.5 rounded-2xl border border-gray-100 focus-within:border-primary/50 focus-within:bg-white transition-all'>
              <svg className='w-5 h-5 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <input 
                type="text" 
                placeholder="Location" 
                className='bg-transparent w-full focus:outline-none text-gray-700'
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
           </div>
           <button className='w-full md:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'>
              Search
           </button>
        </div>

        <div className='flex flex-col lg:flex-row gap-10'>
          
          {/* 3. Filters Section (Sidebar) */}
          <div className='w-full lg:w-[300px] shrink-0'>
             <div className='sticky top-24 space-y-6'>
                
                {/* Mobile Filter Toggle */}
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className='lg:hidden w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm mb-4'
                >
                  <span className='font-bold text-gray-800 flex items-center gap-2'>
                    <svg className='w-5 h-5 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    Refine Search
                  </span>
                  <svg className={`w-5 h-5 transition-transform ${showFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                <div className={`${showFilter ? 'block' : 'hidden md:block'} space-y-6 animate-fadeIn delay-200`}>
                  
                  {/* Specialty Filter */}
                  <div className='bg-white p-6 rounded-3xl border border-gray-100 shadow-sm'>
                    <p className='font-bold text-gray-800 mb-4 flex items-center justify-between'>
                       Specialty
                       <span className='text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase'>Required</span>
                    </p>
                    <div className='space-y-2'>
                      {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(spec => (
                        <div 
                          key={spec}
                          onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
                          className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${speciality === spec ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-50 bg-gray-50/50'}`}
                        >
                          <span className='text-sm font-medium'>{spec}</span>
                          {speciality === spec && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability Filter (Mock UI) */}
                  <div className='bg-white p-6 rounded-3xl border border-gray-100 shadow-sm opacity-60'>
                    <p className='font-bold text-gray-800 mb-4'>Availability</p>
                    <div className='space-y-3'>
                       <label className='flex items-center gap-3 cursor-not-allowed'>
                          <input type="checkbox" className='w-5 h-5 rounded-md border-gray-300' disabled />
                          <span className='text-sm text-gray-600'>Available Today</span>
                       </label>
                       <label className='flex items-center gap-3 cursor-not-allowed'>
                          <input type="checkbox" className='w-5 h-5 rounded-md border-gray-300' disabled />
                          <span className='text-sm text-gray-600'>Telehealth / Video</span>
                       </label>
                    </div>
                  </div>

                  {/* Gender/Rating (Mock UI) */}
                  <div className='bg-white p-6 rounded-3xl border border-gray-100 shadow-sm opacity-60'>
                    <p className='font-bold text-gray-800 mb-4'>Patient Rating</p>
                    <div className='space-y-2'>
                       {[4, 3, 2].map(star => (
                         <div key={star} className='flex items-center gap-2 text-sm text-gray-500 italic'>
                           <div className='flex text-yellow-400'>{'★'.repeat(star)}{'☆'.repeat(5-star)}</div>
                           & up
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className='flex gap-3 pt-2'>
                     <button className='flex-1 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-sm'>Apply</button>
                     <button onClick={() => {navigate('/doctors'); setSearchQuery('')}} className='flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold text-sm'>Clear</button>
                  </div>

                </div>
             </div>
          </div>

          <div className='flex-1'>
            
            {/* 4. Sorting Section */}
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm'>
               <p className='text-gray-600 font-medium'>
                  Found <span className='text-primary font-bold'>{filterDoc.length}</span> certified doctors
               </p>
               <div className='flex items-center gap-3'>
                  <span className='text-sm text-gray-500 font-medium'>Sort by:</span>
                  <select 
                    className='bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20'
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                     <option>Relevance</option>
                     <option>Highest Rated</option>
                     <option>Most Experienced</option>
                     <option>Next Available</option>
                     <option>Alphabetical</option>
                  </select>
               </div>
            </div>

            {/* 5. Doctor Listing Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 stagger-container'>
              {
                filterDoc.map((item, index) => (
                  <div 
                    onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} 
                    className='bg-white rounded-[2rem] border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(44,123,229,0.15)] hover:border-primary/30 transition-all duration-500 group flex flex-col h-full animate-fadeIn' 
                    key={index}
                  >
                    {/* Doctor Image Container */}
                    <div className='relative w-full pt-[110%] bg-primary/5 overflow-hidden'>
                       <img className='absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-90' src={item.image} alt={item.name} />
                       
                       {/* Floating Badges */}
                       <div className='absolute top-5 left-5 flex flex-col gap-2'>
                          <span className='bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-primary shadow-sm flex items-center gap-1.5'>
                             <span className='w-1.5 h-1.5 bg-primary rounded-full animate-pulse'></span>
                             CERTIFIED
                          </span>
                       </div>
                       
                       <div className='absolute bottom-4 right-4'>
                          <div className='bg-secondary text-white px-3 py-1.5 rounded-xl text-[10px] font-bold shadow-lg flex items-center gap-1.5'>
                             <svg className='w-4 h-4' fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                             TELEHEALTH
                          </div>
                       </div>
                    </div>

                    {/* Content Section */}
                    <div className='p-8 flex flex-col flex-grow relative bg-white'>
                      <div className='flex items-center justify-between mb-3'>
                         <span className='text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-lg'>{item.speciality}</span>
                         <div className='flex items-center gap-1 text-sm font-bold text-gray-800'>
                            <span className='text-yellow-400 text-lg leading-none'>★</span>
                            4.8 <span className='text-gray-400 font-medium'>(120+)</span>
                         </div>
                      </div>
                      
                      <h3 className='text-xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors mb-1'>{item.name}</h3>
                      <p className='text-gray-500 text-sm font-medium mb-4'>{item.experience} Exp • {item.degree}</p>
                      
                      <div className='flex items-center gap-2 mb-6'>
                         <svg className='w-4 h-4 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                         <span className='text-xs text-gray-600 font-medium'>Apollo Clinic, {locationQuery.split(',')[0]}</span>
                      </div>

                      <div className='mt-auto pt-6 border-t border-gray-50 flex items-center justify-between group/btn'>
                         <div>
                            <p className='text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5'>Next Available</p>
                            <p className='text-sm font-bold text-secondary'>10:30 AM, Tomorrow</p>
                         </div>
                         <div className='w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300 shadow-sm'>
                            <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                         </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* 6. Pagination / Load More */}
            <div className='mt-20 flex justify-center'>
               <button className='px-12 py-4 bg-white border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
                  Load More Doctors
               </button>
            </div>

            {/* 7. Empty State */}
            {filterDoc.length === 0 && (
               <div className='flex flex-col items-center justify-center py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200'>
                   <div className='w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-8'>
                      <svg className='w-16 h-16 text-gray-300' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   </div>
                   <h3 className='text-2xl font-heading font-bold text-gray-800 mb-3'>No doctors found matching your criteria</h3>
                   <p className='text-gray-500 max-w-md mx-auto mb-10'>Please try adjusting your search terms or clearing your filters to see more results.</p>
                   <button 
                     onClick={() => {navigate('/doctors'); setSearchQuery('')}}
                     className='px-10 py-3.5 bg-primary text-white font-bold rounded-2xl hover:shadow-lg transition-all'
                   >
                     Clear All Filters
                   </button>
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors