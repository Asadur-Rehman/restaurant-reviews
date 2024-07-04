import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser'
import NavBar from '../components/NavBar'
import Reviews from '../pages/Reviews';

const NonUserRoutes = () => {
  return (
    <div>
    <NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/reviews/:rid/:name" element={<Reviews />} /> 
        <Route path="/*" element={<Home />} />
      </Routes>
    </NavBar>
    </div>
  )
}

export default NonUserRoutes
