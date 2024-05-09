import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import Foods from './screens/Foods'
import User from './screens/User'

import LoginScreen from './screens/LoginScreen'
function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/foods' element={<Foods />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Sidebar >
    </BrowserRouter>
  )
}

export default App