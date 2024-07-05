import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { logout } from '../functions/auth';
import { updateData } from '../functions/crud';

export default function UserDashboard() {
    const { user } = UserAuth();
    const [newFirstName, setNewFirstName] = React.useState('');
    const [newLastName, setNewLastName] = React.useState('');

    const handleUpdateName = () => {
        const updatedData = {};
        if (newFirstName) updatedData.firstName = newFirstName;
        if (newLastName) updatedData.lastName = newLastName;
        updateData("users", user.uid, updatedData);
        setNewFirstName('');
        setNewLastName('');
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Welcome, {user?.firstName}</h1>
            
            {/* User Details */}
            <div className="mb-6 w-full max-w-md text-center">
                {user?.profilePicURL && (
                    <img
                        src={user.profilePicURL}
                        alt="Profile"
                        className="h-24 w-24 rounded-full mx-auto mb-4"
                    />
                )}
                <p className="text-gray-700 text-lg">Name: {user?.firstName} {user?.lastName}</p>
                <p className="text-gray-700 text-lg">Email: {user?.email}</p>
            </div>

            {/* Update First Name */}
            <div className="mb-6 w-full max-w-md">
                <input 
                    type="text" 
                    value={newFirstName} 
                    placeholder="New First Name" 
                    className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
                    onChange={(e) => setNewFirstName(e.target.value)}
                />
                <input 
                    type="text" 
                    value={newLastName} 
                    placeholder="New Last Name" 
                    className="w-full border-2 border-gray-300 bg-gray-100 text-gray-900 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" 
                    onChange={(e) => setNewLastName(e.target.value)}
                />
                <button 
                    className="w-full bg-blue-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={handleUpdateName}
                >
                    Update Name
                </button>
            </div>

            {/* Logout Button */}
            <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4" 
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}
