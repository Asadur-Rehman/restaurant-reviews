import React from 'react'
import { useState } from 'react'
import { signUp } from '../functions/auth'

const CreateUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const userData = {
        firstName,
        lastName,
        email
    }

    const handleCreateUser = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        } else if (!email) {
            alert('Email is required')
            return
        } else if (!password) {
            alert('Password is required')
            return
        } else {
            signUp(email, password, userData)
        }
    }


  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Register</h1>
        <div className="mb-6 w-full max-w-md">
            <input type="text" placeholder='First Name'
            className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
            onChange={(e) => {setFirstName(e.target.value)}}
            />
            <input type="text" placeholder='Last Name' 
            className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
            onChange={(e) => {setLastName(e.target.value)}}
            />
            <input type="email" placeholder='Email'
            className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <input type="password" placeholder='Password'
            className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
            onChange={(e) => {setPassword(e.target.value)}}
            />
            <input type="password" placeholder='Confirm Password'
            className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
            onChange={(e) => {setConfirmPassword(e.target.value)}}
            />
            <button
            className="w-full bg-blue-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCreateUser}
            >Register</button>
        </div>
    </div>
  )
}

export default CreateUser
