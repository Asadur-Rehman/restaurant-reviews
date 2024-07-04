import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UserNavBar from '../components/UserNavBar'
import UserDashboard from '../pages/UserDashboard'
import Home from '../pages/Home'
import Reviews from '../pages/Reviews'

const UserRoutes = () => {
  return (
    <div>
        <UserNavBar>
            <Routes>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/reviews/:rid/:name" element={<Reviews />} /> 
                <Route path="/*" element={<UserDashboard />} />
            </Routes>
        </UserNavBar>
    </div>
  )
}

export default UserRoutes
