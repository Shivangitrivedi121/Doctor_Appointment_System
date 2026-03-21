import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets_admin/assets'

const DoctorsList = () => {

  const { aToken, doctors, getAllDoctors, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className='m-5 animate-fadeIn'>
      <div className='flex items-center gap-3 mb-8'>
        <div className='p-3 bg-primary/10 rounded-2xl'>
          <img className='w-6 h-6' src={assets.people_icon} alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>All Doctors</h1>
          <p className='text-gray-500 text-sm font-medium'>View and manage your network of healthcare professionals.</p>
        </div>
      </div>

      <div className='w-full flex flex-wrap gap-6 stagger-container animate-fadeIn max-h-[80vh] overflow-y-auto pr-4'>
        {
          doctors.map((item, index) => (
            <div className='bg-white rounded-[1.5rem] shadow-[0_8px_25px_-10px_rgba(0,0,0,0.05)] border border-gray-100 w-56 overflow-hidden cursor-pointer group hover:-translate-y-1.5 transition-all duration-500 hover:shadow-[0_15px_35px_-12px_rgba(0,0,0,0.08)]' key={index}>
              
              <div className='relative overflow-hidden aspect-[4/5] bg-indigo-50/50 group-hover:bg-primary/5 transition-colors duration-500'>
                <img className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' src={item.image} alt={item.name} />
                <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm border ${item.available ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-red-500/10 text-red-600 border-red-500/20'}`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </div>
              </div>

              <div className='p-5'>
                <p className='text-gray-900 text-base font-bold leading-tight mb-1 truncate'>{item.name}</p>
                <div className='flex items-center gap-1.5 mb-3'>
                  <div className='w-1 h-1 rounded-full bg-primary/40'></div>
                  <p className='text-gray-500 text-[10px] font-bold uppercase tracking-wider truncate'>{item.speciality}</p>
                </div>

                <div className='flex items-center justify-between pt-3 border-t border-gray-50'>
                  <div className='flex items-center gap-1.5 group/toggle'>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" onChange={() => changeAvailability(item._id)} checked={item.available} className="sr-only peer" />
                      <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-600 transition-colors">Availability</span>
                  </div>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList