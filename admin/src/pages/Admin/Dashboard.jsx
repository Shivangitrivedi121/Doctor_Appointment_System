import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets_admin/assets'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, cancelAppoitment, dashData, getDashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-6 mt-8 animate-fadeIn'>
      <div className='flex flex-col mb-8'>
        <h1 className='text-2xl font-bold text-gray-900'>Dashboard Overview</h1>
        <p className='text-gray-500 text-sm'>Real-time summary of your medical practice.</p>
      </div>

      <div className='flex flex-wrap gap-6 stagger-container animate-fadeIn'>

        <div className='flex items-center gap-4 bg-white p-6 min-w-64 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 cursor-pointer hover:-translate-y-1 transition-all group'>
          <div className='p-3 bg-blue-50 rounded-2xl group-hover:bg-primary/10 transition-colors'>
            <img className='w-12 h-12' src={assets.doctor_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-900'>{dashData.doctors}</p>
            <p className='text-gray-400 text-xs font-bold uppercase tracking-wider'>Doctors</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-6 min-w-64 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 cursor-pointer hover:-translate-y-1 transition-all group'>
          <div className='p-3 bg-purple-50 rounded-2xl group-hover:bg-purple-100 transition-colors'>
            <img className='w-12 h-12' src={assets.appointments_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-900'>{dashData.appointments}</p>
            <p className='text-gray-400 text-xs font-bold uppercase tracking-wider'>Appointments</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-6 min-w-64 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 cursor-pointer hover:-translate-y-1 transition-all group'>
          <div className='p-3 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors'>
            <img className='w-12 h-12' src={assets.patients_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-900'>{dashData.patients}</p>
            <p className='text-gray-400 text-xs font-bold uppercase tracking-wider'>Patients</p>
          </div>
        </div>

      </div>

      <div className='bg-white mt-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden animate-slideUp delay-200'>

        <div className='flex items-center gap-2.5 px-8 py-6 border-b border-gray-50'>
          <div className='p-2 bg-primary/5 rounded-lg'>
            <img className='w-5 h-5' src={assets.list_icon} alt="" />
          </div>
          <p className='font-bold text-gray-900'>Latest Bookings</p>
        </div>

        <div className='stagger-container animate-fadeIn'>
          {
            dashData.lastestAppointments.map((item, index) => (
              <div className='flex items-center px-8 py-5 gap-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0' key={index}>
                <div className='relative'>
                  <img className='rounded-2xl w-14 h-14 object-cover shadow-sm' src={item.docData.image} alt="" />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${item.cancelled ? 'bg-red-400' : 'bg-green-400'}`}></div>
                </div>

                <div className='flex-1'>
                  <p className='text-gray-900 font-bold leading-none mb-1 text-base'>{item.docData.name}</p>
                  <p className='text-gray-500 text-xs font-medium'>{slotDateFormat(item.slotDate)}</p>
                </div>

                {
                  item.cancelled
                    ? <div className='px-4 py-1.5 bg-red-50 text-red-500 text-xs font-bold rounded-full'>Cancelled</div>
                    : <button onClick={() => cancelAppoitment(item._id)} className='p-2.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all active:scale-95' title="Cancel Appointment">
                        <img className='w-5 h-5' src={assets.cancel_icon} alt="" />
                      </button>
                }

              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Dashboard