import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets_admin/assets'

const Sidebar = ({ showSidebar, setShowSidebar }) => {

  const { aToken } = useContext(AdminContext)

  return (
    <>
      {/* Mobile Backdrop */}
      {showSidebar && (
        <div onClick={() => setShowSidebar(false)} className='fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fadeIn'></div>
      )}

      <div className={`fixed lg:sticky top-[73px] lg:top-0 h-[calc(100vh-73px)] lg:h-screen bg-white border-r z-40 transition-all duration-300 ${showSidebar ? 'left-0 w-64 md:w-72' : '-left-full lg:left-0 lg:w-64 md:lg:w-72'}`}>
        {
          aToken &&
          <ul className='text-[#515151] mt-5 stagger-container animate-fadeIn'>
            <NavLink onClick={() => setShowSidebar(false)} className={({ isActive }) => `flex items-center gap-3 py-4 px-6 md:px-10 cursor-pointer transition-all border-r-4 ${isActive ? 'bg-primary/5 border-primary text-primary' : 'border-transparent hover:bg-gray-50'}`} to={'/admin-dashboard'}>
              <img className='w-5' src={assets.home_icon} alt="" />
              <p className='text-sm font-bold'>Dashboard</p>
            </NavLink>

            <NavLink onClick={() => setShowSidebar(false)} className={({isActive}) => `flex items-center gap-3 py-4 px-6 md:px-10 cursor-pointer transition-all border-r-4 ${isActive ? 'bg-primary/5 border-primary text-primary' : 'border-transparent hover:bg-gray-50'}`} to={'/all-appointments'}>
              <img className='w-5' src={assets.appointment_icon} alt="" />
              <p className='text-sm font-bold'>Appointments</p>
            </NavLink>

            <NavLink onClick={() => setShowSidebar(false)} className={({isActive}) => `flex items-center gap-3 py-4 px-6 md:px-10 cursor-pointer transition-all border-r-4 ${isActive ? 'bg-primary/5 border-primary text-primary' : 'border-transparent hover:bg-gray-50'}`} to={'/add-doctor'}>
              <img className='w-5' src={assets.add_icon} alt="" />
              <p className='text-sm font-bold'>Add Doctor</p>
            </NavLink>

            <NavLink onClick={() => setShowSidebar(false)} className={({isActive}) => `flex items-center gap-3 py-4 px-6 md:px-10 cursor-pointer transition-all border-r-4 ${isActive ? 'bg-primary/5 border-primary text-primary' : 'border-transparent hover:bg-gray-50'}`} to={'/doctor-list'}>
              <img className='w-5' src={assets.people_icon} alt="" />
              <p className='text-sm font-bold'>Doctors List</p>
            </NavLink>
          </ul>
        }
      </div>
    </>
  )
}

export default Sidebar