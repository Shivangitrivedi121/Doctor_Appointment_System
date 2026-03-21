import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { token, setToken, userData } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white shadow-sm py-5 border-b border-b-gray-100'}`}>
        <div className='w-full px-6 sm:px-10 flex items-center justify-between text-sm'>
          
          {/* Logo */}
          <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer group shrink-0'>
              <img className='w-44 group-hover:opacity-90 transition-opacity duration-300' src={assets.logo} alt="Prescripto Logo" />
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex flex-1 justify-center items-center gap-10 font-medium'>
            <NavLink to='/'>
              <li className={`relative py-1 text-sm tracking-wide transition-colors group cursor-pointer ${isActive('/') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>
                HOME
                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </li>
            </NavLink>

            <NavLink to='/doctors'>
              <li className={`relative py-1 text-sm tracking-wide transition-colors group cursor-pointer ${isActive('/doctors') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>
                ALL DOCTORS
                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 ${isActive('/doctors') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </li>
            </NavLink>

            <NavLink to='/about'>
              <li className={`relative py-1 text-sm tracking-wide transition-colors group cursor-pointer ${isActive('/about') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>
                ABOUT
                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </li>
            </NavLink>

            <NavLink to='/contact'>
              <li className={`relative py-1 text-sm tracking-wide transition-colors group cursor-pointer ${isActive('/contact') ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>
                CONTACT
                <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </li>
            </NavLink>
          </ul>

          {/* User Actions & Mobile Toggle */}
          <div className='flex items-center gap-4 shrink-0'>
            {
              token && userData
                ? <div className='flex items-center gap-3 cursor-pointer group relative'>
                  <div className='relative'>
                    <img className='w-10 h-10 rounded-full object-cover border-2 border-primary/20 p-0.5 group-hover:border-primary transition-colors' src={userData.image} alt="User Profile" />
                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white'></div>
                  </div>
                  <img className='w-3 opacity-60 group-hover:opacity-100 transition-opacity' src={assets.dropdown_icon} alt="Dropdown" />
                  
                  {/* Dropdown Menu */}
                  <div className='absolute top-full right-0 pt-4 text-base font-medium text-gray-700 z-50 hidden group-hover:block'>
                    <div className='min-w-[200px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden transform origin-top-right transition-all'>
                      <div className='p-4 border-b border-gray-50 flex items-center gap-3'>
                          <img className='w-10 h-10 rounded-full object-cover' src={userData.image} alt="" />
                          <div>
                              <p className='text-sm font-bold text-gray-800'>{userData.name || 'User'}</p>
                              <p className='text-xs text-gray-500 truncate'>{userData.email || 'user@example.com'}</p>
                          </div>
                      </div>
                      <div className='p-2 flex flex-col gap-1'>
                          <button onClick={() => navigate('/my-profile')} className='w-full text-left px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary rounded-lg transition-colors flex items-center gap-2'>
                               My Profile
                          </button>
                          <button onClick={() => navigate('/my-appointments')} className='w-full text-left px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary rounded-lg transition-colors flex items-center gap-2'>
                               My Appointments
                          </button>
                      </div>
                      <div className='p-2 border-t border-gray-50'>
                          <button onClick={logout} className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2'>
                               Logout
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
                : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-2.5 rounded-full font-medium hidden md:block hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'>Create Account</button>
            }

            {/* Mobile Menu Toggle Button */}
            <button onClick={() => setShowMenu(true)} className='md:hidden p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'>
              <img className='w-6 opacity-70' src={assets.menu_icon} alt="Menu" />
            </button>

            {/* ---------- Mobile Menu Overlay ---------- */}
            <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setShowMenu(false)}></div>
            
            {/* Mobile Menu Panel */}
            <div className={`fixed right-0 top-0 bottom-0 w-[300px] bg-white z-[70] shadow-2xl transition-transform duration-300 md:hidden flex flex-col ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className='flex items-center justify-between px-6 py-6 border-b border-gray-100 shrink-0'>
                <img className='w-36' src={assets.logo} alt="Logo" />
                <button onClick={() => setShowMenu(false)} className='p-2 rounded-full hover:bg-gray-100 transition-colors'>
                  <img className='w-5 opacity-60' src={assets.cross_icon} alt="Close" />
                </button>
              </div>

              <ul className='flex flex-col px-4 py-6 text-base font-medium text-gray-700 overflow-y-auto flex-grow gap-2'>
                <NavLink onClick={() => setShowMenu(false)} to='/'>
                  <li className={`px-4 py-4 rounded-xl transition-colors ${isActive('/') ? 'bg-primary border-l-4 border-l-primary text-white font-semibold' : 'hover:bg-gray-50'}`}>Home</li>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                  <li className={`px-4 py-4 rounded-xl transition-colors ${isActive('/doctors') ? 'bg-primary border-l-4 border-l-primary text-white font-semibold' : 'hover:bg-gray-50'}`}>All Doctors</li>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/about'>
                  <li className={`px-4 py-4 rounded-xl transition-colors ${isActive('/about') ? 'bg-primary border-l-4 border-l-primary text-white font-semibold' : 'hover:bg-gray-50'}`}>About</li>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                  <li className={`px-4 py-4 rounded-xl transition-colors ${isActive('/contact') ? 'bg-primary border-l-4 border-l-primary text-white font-semibold' : 'hover:bg-gray-50'}`}>Contact</li>
                </NavLink>
              </ul>
              
              {!token && (
                <div className="p-6 shrink-0 border-t border-gray-100">
                   <button onClick={() => { setShowMenu(false); navigate('/login'); }} className='w-full bg-primary text-white py-4 rounded-xl font-medium shadow-md shadow-primary/30 active:scale-95 transition-all text-center'>
                      Create Account
                   </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
      {/* Spacer to prevent content from hiding behind the fixed navbar */}
      <div className="h-[80px] sm:h-[90px] w-full"></div>
    </>
  )
}

export default Navbar