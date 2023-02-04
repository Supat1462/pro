import React from 'react'
import './App.css'

import Body from './components/Body Section Style/Body'
import Sidebar from './components/SideBar Section/Sidebar'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Body />
    </div>
  )
}

export default App