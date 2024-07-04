import React, {useState} from 'react'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        signIn(email, password)
    }


  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Login</h1>

        <div className="mb-6 w-full max-w-md">
            <input type="email" placeholder='Email' 
            className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
            onChange={(e) => {setEmail(e.target.value)}}
            />
            <input type="password" placeholder='Password' 
            className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
            onChange={(e) => {setPassword(e.target.value)}}
            />
            <button className="w-full bg-blue-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                onClick={handleLogin}>Login</button>
        </div>
        
    </div>
  )
}

