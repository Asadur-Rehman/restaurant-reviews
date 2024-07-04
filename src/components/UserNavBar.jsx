import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({children}) {
    return (
        <>
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-center">
                        <div class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white mx-40 hover:bg-gray-700">
                            <Link to="/home" className="text-blue-500 hover:text-blue-700">Home</Link>
                        </div>
                        <div class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white mx-40 hover:bg-gray-700">
                            <Link to="/" className="text-blue-500 hover:text-blue-700">Dashboard</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
}