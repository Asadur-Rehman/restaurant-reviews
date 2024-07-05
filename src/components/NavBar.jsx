import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ children }) {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Logo Text */}
                        <div className="flex-shrink-0 text-white font-bold text-xl">
                            <Link to="/" className="text-blue-500 hover:text-blue-700">DineWise</Link>
                        </div>
                        <div className="flex space-x-4">
                            <div className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
                                <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                            </div>
                            <div className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
                                <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
                            </div>
                            <div className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
                                <Link to="/create-user" className="text-blue-500 hover:text-blue-700">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
}
