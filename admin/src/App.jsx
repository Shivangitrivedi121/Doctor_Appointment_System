import React, { useContext, useState } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';


const App = () => {

  const { aToken } = useContext(AdminContext)
  const [showSidebar, setShowSidebar] = useState(false)

  return aToken ? (
    <div className='bg-[#f8f9fd] min-h-screen'>
      <ToastContainer />
      <Navbar setShowSidebar={setShowSidebar} />
      <div className='flex items-start'>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className='flex-1 w-full overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<Navigate to={'/admin-dashboard'} />} />
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/all-appointments' element={<AllAppointments />} />
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path='/doctor-list' element={<DoctorsList />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App