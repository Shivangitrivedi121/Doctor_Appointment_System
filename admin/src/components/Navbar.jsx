import React, { useContext } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setShowSidebar }) => {

  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50'>
      <div className='flex items-center gap-2 sm:gap-4'>
        <div onClick={() => setShowSidebar(prev => !prev)} className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <img className='w-32 sm:w-40 cursor-pointer hover:opacity-80 transition-opacity' src={assets.admin_logo} alt="DocOnTime" onClick={() => navigate('/')} />
        <div className='hidden xs:block bg-primary/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-primary/20'>
          <p className='text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-wider'>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
      </div>

      <button onClick={logout} className='bg-white border border-primary text-primary hover:bg-primary hover:text-white text-[10px] sm:text-xs font-bold px-4 sm:px-8 py-2 sm:py-2.5 rounded-full transition-all active:scale-95 shadow-sm whitespace-nowrap'>
        Logout
      </button>
    </div>
  )
}

export default Navbar