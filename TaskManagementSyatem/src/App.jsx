import { useEffect, useState } from 'react'
import './index.css'
import Login from './components/auth/logIn'
import EmployeeDash from './components/dashboard/employeeDashboard'
import Header from './components/sections/header'
import AdminDash from './components/dashboard/adminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()

  },)

  return (
    <>
      <Login />
      <EmployeeDash/>
      <AdminDash/>
    </>
  )
}

export default App
