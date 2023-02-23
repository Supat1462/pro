import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Body from './components/Body Section Style/Body'
import Sidebar from './components/SideBar Section/Sidebar'
import Employee from './components/Body Section Style/Employee Section/Employee'
import Dashboard from './components/Body Section Style/Dashboard/Dashboard'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Body />

      <Routes>
        <Route path='/Employee' element={<Employee />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App