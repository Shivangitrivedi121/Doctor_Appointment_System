import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets_admin/assets'

const AllAppointments = () => {

  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5 animate-fadeIn'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='p-3 bg-primary/10 rounded-2xl'>
          <img className='w-6 h-6' src={assets.appointment_icon} alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>All Appointments</h1>
          <p className='text-gray-500 text-sm font-medium'>Manage and monitor all patient bookings in one place.</p>
        </div>
      </div>

      <div className='bg-white rounded-[2rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden'>
        
        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[0.5fr_2.5fr_0.8fr_2.5fr_2.5fr_1fr_1fr] grid-flow-col py-5 px-8 bg-gray-50/50 border-b border-gray-100 text-[#4B5563] font-bold text-xs uppercase tracking-wider'>
          <p>#</p>
          <p>Patient</p>
          <p className='text-center'>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p className='text-right'>Actions</p>
        </div>

        {/* Table Body */}
        <div className='stagger-container animate-fadeIn max-h-[75vh] min-h-[50vh] overflow-y-auto'>
          {appointments.map((item, index) => (
            <div className='flex flex-wrap justify-between max-sm:grid sm:grid-cols-[0.5fr_2.5fr_0.8fr_2.5fr_2.5fr_1fr_1fr] items-center text-gray-600 py-5 px-8 border-b border-gray-50 hover:bg-gray-50 transition-colors group' key={index}>
              
              <p className='max-sm:hidden text-gray-400 font-medium'>{index + 1}</p>

              <div className='flex items-center gap-3'>
                <img className='w-10 h-10 rounded-full border-2 border-primary/5 shadow-sm' src={item.userData.image} alt="" /> 
                <p className='text-gray-900 font-bold text-sm'>{item.userData.name}</p>
              </div>

              <p className='max-sm:hidden text-center font-medium'>{calculateAge(item.userData.dob)}</p>
              
              <div>
                <p className='text-gray-900 font-bold text-sm'>{slotDateFormat(item.slotDate)}</p>
                <p className='text-gray-500 text-[11px] font-bold uppercase tracking-tight'>{item.slotTime}</p>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-1.5 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors'>
                  <img className='w-8 h-8 rounded-lg object-cover' src={item.docData.image} alt="" /> 
                </div>
                <p className='text-gray-800 font-bold text-sm'>{item.docData.name}</p>
              </div>

              <p className='font-bold text-gray-900'>{currency}{item.amount}</p>

              <div className='text-right'>
                {
                  item.cancelled
                    ? <div className='inline-flex px-4 py-1.5 bg-red-50 text-red-500 text-[10px] font-bold rounded-full uppercase tracking-wider'>Cancelled</div>
                    : <button onClick={() => cancelAppointment(item._id)} className='p-2.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all active:scale-95 group/btn' title="Cancel Appointment">
                        <img className='w-5 h-5 opacity-60 group-hover/btn:opacity-100 transition-opacity' src={assets.cancel_icon} alt="" />
                      </button>
                }
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AllAppointments