import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function NavBar({ children }) {
    const { user } = UserAuth();
    const [profilePic, setProfilePic] = useState("//beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png");

    useEffect(() => {
        if (user && user.profilePicURL) {
            setProfilePic(user.profilePicURL);
        }
    }, [user]);

    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Logo Text */}
                        <div className="flex-shrink-0 text-white font-bold text-xl">
                            <Link to="/home" className="text-blue-500 hover:text-blue-700">DineWise</Link>
                        </div>
                        <div className="flex-1 flex items-center justify-center space-x-1">
                            {/* Additional links can go here */}
                        </div>
                        <div className="flex-shrink-0 ml-auto">
                            <Link to="/user-dashboard">
                                <img
                                    src={profilePic}
                                    alt="Profile"
                                    className="h-10 w-10 rounded-full"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
}
