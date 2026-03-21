import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyProfile = () => {

  const navigate = useNavigate()
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      image && formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return userData && (
    <div className='w-full min-h-screen bg-[#F8FAFC]'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 min-h-screen'>
        
        {/* Dashboard Sidebar */}
        <div className='w-full lg:w-72 bg-white border-r border-gray-100 flex flex-col shrink-0'>
           <div className='p-8 pt-12 text-center border-b border-gray-50'>
              <div className='relative inline-block group mb-4'>
                 <img className='w-24 h-24 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-all shadow-md' src={userData.image} alt="" />
                 {isEdit && (
                   <label htmlFor="image" className='absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform'>
                      <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
                   </label>
                 )}
              </div>
              <h2 className='text-lg font-bold text-gray-800 line-clamp-1'>{userData.name}</h2>
              <p className='text-xs text-gray-500 font-medium'>Patient ID: #PR-{userData._id?.slice(-6).toUpperCase()}</p>
           </div>

           <nav className='flex-grow p-4 space-y-2 py-8 font-medium text-gray-600'>
              <button onClick={() => navigate('/my-profile')} className='w-full flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-all'>
                 <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                 Personal Information
              </button>
              <button onClick={() => navigate('/my-appointments')} className='w-full flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-gray-50 transition-all'>
                 <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 My Appointments
              </button>
           </nav>

           <div className='p-6 mt-auto'>
              <div className='bg-blue-50 p-4 rounded-2xl'>
                 <p className='text-xs font-bold text-primary uppercase mb-1'>Need help?</p>
                 <p className='text-xs text-blue-700 leading-relaxed'>Contact our support team for any dashboard issues.</p>
              </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className='flex-grow p-4 md:p-12 overflow-y-auto px-6 sm:px-10'>
           
           {/* Profile Header */}
           <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10'>
              <div>
                 <h1 className='text-3xl font-heading font-bold text-gray-900'>My Profile</h1>
                 <p className='text-gray-500 mt-1 font-medium'>Manage your personal information and security settings.</p>
              </div>
              <div>
                 {isEdit ? (
                   <div className='flex gap-3'>
                      <button onClick={updateUserProfileData} className='px-8 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all'>Save Changes</button>
                      <button onClick={() => setIsEdit(false)} className='px-8 py-3 bg-white border border-gray-200 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all'>Cancel</button>
                   </div>
                 ) : (
                   <button onClick={() => setIsEdit(true)} className='px-10 py-3 bg-white border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white hover:shadow-lg transition-all'>
                      Edit Profile
                   </button>
                 )}
              </div>
           </div>

           <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
              
              {/* Personal Details Card */}
              <div className='bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col'>
                 <div className='flex items-center gap-3 mb-8 pb-4 border-b border-gray-50'>
                    <div className='w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary'>
                       <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <h3 className='text-xl font-bold text-gray-800'>Personal Information</h3>
                 </div>

                 <div className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2'>
                       <span className='text-sm font-bold text-gray-400 uppercase tracking-wider'>Full Name</span>
                       {isEdit 
                         ? <input className='bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 focus:border-primary/50 outline-none transition-all' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
                         : <span className='text-lg font-bold text-gray-700'>{userData.name}</span>
                       }
                    </div>

                    <div className='grid grid-cols-[140px_1fr] items-center gap-2'>
                       <span className='text-sm font-bold text-gray-400 uppercase tracking-wider'>Gender</span>
                       {isEdit 
                         ? <select className='bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 outline-none' value={userData.gender} onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                         </select>
                         : <span className='text-gray-700 font-medium'>{userData.gender}</span>
                       }
                    </div>

                    <div className='grid grid-cols-[140px_1fr] items-center gap-2'>
                       <span className='text-sm font-bold text-gray-400 uppercase tracking-wider'>Birthday</span>
                       {isEdit 
                         ? <input className='bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 outline-none' type='date' value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
                         : <span className='text-gray-700 font-medium'>{userData.dob}</span>
                       }
                    </div>
                 </div>
              </div>

              {/* Contact Details Card */}
              <div className='bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50'>
                 <div className='flex items-center gap-3 mb-8 pb-4 border-b border-gray-50'>
                    <div className='w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary'>
                       <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 className='text-xl font-bold text-gray-800'>Contact Information</h3>
                 </div>

                 <div className='space-y-6'>
                    <div className='grid grid-cols-[140px_1fr] items-center gap-2'>
                       <span className='text-sm font-bold text-gray-400 uppercase tracking-wider'>Email</span>
                       <span className='text-primary font-bold'>{userData.email}</span>
                    </div>

                    <div className='grid grid-cols-[140px_1fr] items-center gap-2'>
                       <span className='text-sm font-bold text-gray-400 uppercase tracking-wider'>Phone</span>
                       {isEdit 
                         ? <input className='bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 outline-none' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                         : <span className='text-gray-700 font-medium'>{userData.phone}</span>
                       }
                    </div>

                    <div className='grid grid-cols-[140px_1fr] items-start gap-2'>
                       <span className='text-sm font-bold text-gray-400 uppercase tracking-wider mt-1'>Address</span>
                       {isEdit 
                         ? <div className='space-y-2'>
                            <input className='w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 outline-none' value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} type="text" />
                            <input className='w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 outline-none' value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} type="text" />
                         </div>
                         : <p className='text-gray-600 leading-relaxed font-medium'>
                            {userData.address.line1}<br />
                            {userData.address.line2}
                         </p>
                       }
                    </div>
                 </div>
              </div>

              {/* Security & Settings Card (Placeholder UI) */}
              <div className='bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 opacity-60 pointer-events-none xl:col-span-2'>
                 <div className='flex items-center gap-3 mb-8 pb-4 border-b border-gray-50'>
                    <div className='w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400'>
                       <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h3 className='text-xl font-bold text-gray-800'>Security & Dashboard Settings</h3>
                 </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100'>
                       <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm'>
                             <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                          </div>
                          <span className='font-bold text-gray-700'>Change Password</span>
                       </div>
                       <svg className='w-5 h-5 text-gray-300' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div className='flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100'>
                       <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm'>
                             <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                          </div>
                          <span className='font-bold text-gray-700'>Notifications</span>
                       </div>
                       <svg className='w-5 h-5 text-gray-300' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile