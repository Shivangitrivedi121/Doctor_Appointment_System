import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {

      }

    } catch (error) {

    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f8f9fd] p-4 relative overflow-hidden'>
      
      {/* Decorative Blobs */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0'></div>
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0'></div>

      <form onSubmit={onSubmitHandler} className='relative z-10 w-full max-w-[400px] animate-slideUp'>
        <div className='bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col gap-6'>
          
          <div className='flex flex-col items-center gap-2 mb-2'>
            <img className='w-40 mb-2' src={assets.admin_logo} alt="DocOnTime" />
            <div className='inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20'>
               <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
               <span className='text-[10px] font-bold text-primary tracking-widest uppercase'>{state} Panel</span>
            </div>
          </div>

          <div className='text-center mb-2'>
            <h1 className='text-3xl font-bold text-gray-900 mb-1'>Welcome Back</h1>
            <p className='text-gray-500 text-sm font-medium'>Please enter your credentials to continue</p>
          </div>

          <div className='space-y-4'>
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-bold text-gray-400 uppercase tracking-wider ml-1'>Email Address</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                className='w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-primary/50 outline-none transition-all text-gray-700 font-medium' 
                type="email" 
                placeholder="admin@docontime.com"
                required 
              />
            </div>

            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-bold text-gray-400 uppercase tracking-wider ml-1'>Password</label>
              <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
                className='w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-primary/50 outline-none transition-all text-gray-700 font-medium' 
                type="password" 
                placeholder="••••••••"
                required 
              />
            </div>
          </div>

          <button className='w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all text-base mt-2'>
            Login to Dashboard
          </button>

          <div className='text-center pt-2'>
            {
              state === 'Admin'
                ? <p className='text-sm text-gray-500'>Doctor Login? <span className='text-primary font-bold cursor-pointer hover:underline' onClick={() => setState('Doctor')}>Click Here</span></p>
                : <p className='text-sm text-gray-500'>Admin Login? <span className='text-primary font-bold cursor-pointer hover:underline' onClick={() => setState('Admin')}>Click Here</span></p>
            }
          </div>

        </div>
      </form>
    </div>
  )
}

export default Login