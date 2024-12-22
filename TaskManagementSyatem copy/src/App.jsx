import { useContext, useEffect, useState } from 'react'
import './index.css'
import Login from './components/auth/logIn'
import EmployeeDash from './components/dashboard/employeeDashboard'
import Header from './components/sections/header'
import AdminDash from './components/dashboard/adminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import AuthContext from './context/authContext'

function App() {

  const[user, setUser] = useState('')

  const userType = (email, password) => {
    if (email == 'admin@example.com' && password == '123'){
      setUser('admin')
    }
    else if(email == 'employee3@example.com' && password == '123'){
      setUser('employee')
    }
    else{
      setUser('')
      alert('Enter valid user details')
    }
  }

  console.log(user)

  return (
    <>
      <pre className='text-center'>Use these creds:
        - For admin Login :
          » email: admin@example.com
          » password: 123
        - For employee Login :
          » email: employe  e3@example.com
          » password: 123
      </pre>
    {!user ? <Login userType={userType}/> : ''}
    {user == 'admin' ? <AdminDash/>: ""}
    {user == 'employee' ? <EmployeeDash/>: ""}
    </>
  )
}

export default App
