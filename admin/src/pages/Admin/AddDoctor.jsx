import React, { useContext, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets_admin/assets'

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (!docImg) {
        return toast.error('Image Not Selected!')
      }

      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`)
      })

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full animate-fadeIn'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='p-3 bg-primary/10 rounded-2xl'>
          <img className='w-6 h-6' src={assets.add_icon} alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Add New Doctor</h1>
          <p className='text-gray-500 text-sm font-medium'>Expand your medical network by adding a new specialist.</p>
        </div>
      </div>

      <div className='bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-10 w-full max-w-5xl animate-slideUp'>
        
        {/* Upload Section */}
        <div className='flex flex-col items-center mb-10 pb-10 border-b border-gray-50'>
          <label htmlFor="doc-img" className='relative group cursor-pointer'>
            <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-dashed border-gray-200 group-hover:border-primary/40 transition-all flex items-center justify-center bg-gray-50'>
              <img className={`w-full h-full object-cover ${!docImg ? 'p-8 opacity-40' : ''}`} src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
            </div>
            <div className='absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id='doc-img' hidden />
          <p className='mt-4 text-gray-500 text-sm font-bold uppercase tracking-widest'>Upload Photo</p>
        </div>

        {/* Form Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 text-gray-700'>
          
          {/* Left Column */}
          <div className='space-y-6 stagger-container animate-fadeIn'>
            <div className='space-y-2'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Full Name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm' type="text" placeholder='Dr. Stephen Strange' required />
            </div>

            <div className='space-y-2'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Email Address</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm' type="email" placeholder='doctor@example.com' required />
            </div>

            <div className='space-y-2'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Set Password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm' type="password" placeholder='••••••••' required />
            </div>

            <div className='space-y-2'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium shadow-sm bg-white appearance-none cursor-pointer'>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={`${i + 1} Year`}>{i + 1} Year{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className='space-y-2'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Consultation Fees</p>
              <div className='relative'>
                <span className='absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold'>$</span>
                <input onChange={(e) => setFees(e.target.value)} value={fees} className='w-full border border-gray-200 rounded-2xl pl-10 pr-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm' type="number" placeholder='50' required />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-6 stagger-container animate-fadeIn'>
            <div className='space-y-2'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Speciality</p>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium shadow-sm bg-white appearance-none cursor-pointer'>
                {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div className='space-y-2'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Education / Degree</p>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm' type="text" placeholder='MBBS, MD' required />
            </div>

            <div className='space-y-4'>
              <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Practice Address</p>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm' type="text" placeholder='Building / Street' required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='w-full border border-gray-200 rounded-2xl px-5 py-3.5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm' type="text" placeholder='City / State' required />
            </div>
          </div>
        </div>

        {/* Full Width Section */}
        <div className='mt-10 pt-10 border-t border-gray-50 stagger-container animate-fadeIn'>
          <div className='space-y-2'>
            <p className='text-xs font-bold text-gray-400 uppercase tracking-widest ml-1'>Professional Biography</p>
            <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='w-full border border-gray-200 rounded-[2rem] px-6 py-5 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-sm font-medium placeholder:text-gray-300 shadow-sm resize-none' placeholder='Describe the doctor experience, awards, etc...' rows={6} required></textarea>
          </div>
        </div>

        {/* Action Button */}
        <div className='mt-12 flex justify-center'>
          <button type='submit' className='bg-primary text-white text-base font-bold px-20 py-4 rounded-3xl hover:bg-primary-dark hover:-translate-y-1 active:scale-95 transition-all shadow-xl shadow-primary/25'>
            Register Doctor
          </button>
        </div>

      </div>
    </form>
  )
}

export default AddDoctor