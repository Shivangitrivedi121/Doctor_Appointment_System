import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyAppointments = () => {

  const navigate = useNavigate()
  const { userData, backendUrl, token, getDoctorsData } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])
  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
      if (data.success) {
        setAppointments(data.appointments.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div className='w-full min-h-screen bg-[#F8FAFC]'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 min-h-screen'>
        
        {/* Dashboard Sidebar */}
        <div className='w-full lg:w-72 bg-white border-r border-gray-100 flex flex-col shrink-0 animate-slideInLeft'>
           {userData && (
             <div className='p-8 pt-12 text-center border-b border-gray-50'>
                <div className='relative inline-block group mb-4'>
                   <img className='w-24 h-24 rounded-full object-cover border-4 border-primary/20 hover:border-primary transition-all shadow-md' src={userData.image} alt="" />
                </div>
                <h2 className='text-lg font-bold text-gray-800 line-clamp-1'>{userData.name}</h2>
                <p className='text-xs text-gray-500 font-medium'>Patient ID: #PR-{userData._id?.slice(-6).toUpperCase()}</p>
             </div>
           )}

           <nav className='flex-grow p-4 space-y-2 py-8 font-medium text-gray-600'>
              <button onClick={() => navigate('/my-profile')} className='w-full flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-gray-50 transition-all'>
                 <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                 Personal Information
              </button>
              <button onClick={() => navigate('/my-appointments')} className='w-full flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-all'>
                 <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 My Appointments
              </button>
           </nav>
        </div>

        {/* Main Content Area */}
        <div className='flex-grow p-4 md:p-12 overflow-y-auto px-6 sm:px-10'>
           
           <div className='mb-10'>
              <h1 className='text-3xl font-heading font-bold text-gray-900'>My Appointments</h1>
              <p className='text-gray-500 mt-1 font-medium'>Track and manage your upcoming medical consultations.</p>
           </div>

           <div className='space-y-6 stagger-container'>
             {appointments.map((item, index) => (
                <div className='bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col md:flex-row md:items-center gap-8 group hover:border-primary/20 transition-all duration-300 animate-fadeIn' key={index}>
                   
                   {/* Doctor Identity */}
                   <div className='flex items-center gap-5 shrink-0'>
                      <div className='w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-primary/5'>
                         <img className='w-full h-full object-cover object-top mix-blend-multiply opacity-90' src={item.docData.image} alt={item.docData.name} />
                      </div>
                      <div>
                         <h3 className='text-lg font-bold text-gray-900 group-hover:text-primary transition-colors'>{item.docData.name}</h3>
                         <p className='text-primary font-medium text-sm'>{item.docData.speciality}</p>
                         <div className='mt-2 flex items-center gap-2'>
                            <span className={`w-2 h-2 rounded-full ${item.cancelled ? 'bg-red-400' : 'bg-secondary animate-pulse'}`}></span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${item.cancelled ? 'text-red-400' : 'text-secondary'}`}>
                               {item.cancelled ? 'Cancelled' : 'Confimed'}
                            </span>
                         </div>
                      </div>
                   </div>

                   {/* Appointment Details */}
                   <div className='flex-1 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 space-y-4'>
                      <div className='flex items-start gap-3'>
                         <svg className='w-5 h-5 text-gray-400 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                         <div>
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-1'>Location</p>
                            <p className='text-sm text-gray-600 font-medium'>{item.docData.address.line1}, {item.docData.address.line2}</p>
                         </div>
                      </div>
                      <div className='flex items-start gap-3'>
                         <svg className='w-5 h-5 text-gray-400 mt-0.5' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         <div>
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-1'>Date & Time</p>
                            <p className='text-sm text-gray-800 font-bold'>{slotDateFormat(item.slotDate)} | <span className='text-primary'>{item.slotTime}</span></p>
                         </div>
                      </div>
                   </div>

                   {/* Actions */}
                   <div className='flex flex-row md:flex-col gap-3 shrink-0'>
                      {!item.cancelled && (
                        <button className='flex-1 md:w-48 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg shadow-secondary/20 hover:bg-green-600 hover:-translate-y-0.5 transition-all text-sm'>
                           Pay Online
                        </button>
                      )}
                      {!item.cancelled && (
                        <button onClick={() => cancelAppointment(item._id)} className='flex-1 md:w-48 py-3 bg-white border border-red-100 text-red-500 rounded-xl font-bold hover:bg-red-50 transition-all text-sm'>
                           Cancel Appointment
                        </button>
                      )}
                      {item.cancelled && (
                        <div className='w-full md:w-48 py-3 bg-red-50 text-red-500 rounded-xl font-bold text-center text-sm border border-red-100'>
                           Appointment Cancelled
                        </div>
                      )}
                   </div>
                </div>
             ))}

             {appointments.length === 0 && (
                <div className='flex flex-col items-center justify-center py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200'>
                   <div className='w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6'>
                      <svg className='w-12 h-12 text-gray-300' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                   </div>
                   <h3 className='text-xl font-bold text-gray-800 mb-2'>No appointments yet</h3>
                   <p className='text-gray-500 max-w-xs mx-auto mb-8'>You haven't booked any medical consultations yet. Find a specialist now.</p>
                   <button onClick={() => navigate('/doctors')} className='px-10 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-lg transition-all'>
                      Find a Doctor
                   </button>
                </div>
             )}
           </div>
        </div>
      </div>
    </div>
  )
}

export default MyAppointments