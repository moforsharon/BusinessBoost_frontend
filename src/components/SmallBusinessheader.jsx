import React, { useState } from 'react';
import { FiMessageSquare, } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
// import  Cookies  from 'cookiejs';
import Cookies from 'js-cookie';

function SmallBusinessHeader() {
    // const businessOwnerId = Cookies.get('businessOwnerId');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        // Clear the authentication token or user data from cookies
        Cookies.remove("businessOwnerId");

        // Redirect the user to the login page
        window.location.href = '/';
    };
    return (
        <header className="flex items-center justify-between flex-wrap bg-white shadow-lg p-6">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 text-blue-500 mr-36 ml-6">
                <img src={require("./../images/logo.png")} alt="Logo" className="h-10" />
            </div>
            <div className="hidden lg:flex text-lg lg:flex-grow">
                <NavLink
                    exact="true"
                    to="/"
                    className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-medium mr-10 hover:underline"
                    activeClassName="active text-df678c underline"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/businesses"
                    className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-medium mr-10 hover:underline"
                    activeClassName="active text-df678c underline"
                >
                    Businesses
                </NavLink>
                <NavLink
                    to="/about"
                    className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-medium mr-4 hover:underline"
                    activeClassName="active text-df678c underline"
                >
                    About
                </NavLink>
            </div>
            {/* Right-side Elements */}
            <div className="flex items-center  space-x-10">
                {/* Create Business Button or "+" Icon */}
                <button className="hidden md:block py-2 px-5 border-2 border-df678c text-df678c font-medium rounded-md mr-10">
                    <a href="/create">
                        Add Business
                    </a>
                </button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:hidden h-6 w-6 text-df678c  cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a1 1 0 0 1-1-1v-6H3a1 1 0 1 1 0-2h6V3a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 0 1-1 1z"
                    />
                </svg>

                {/* Chat Icon with Notification Bubble */}
                <div className="relative">
                    <FiMessageSquare
                        className="h-8 w-8 text-3D155F cursor-pointer"
                    // onClick={handleChatClick}
                    />
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-df678c text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        9
                    </span>
                </div>

                {/* User Profile Icon */}
                <div className="relative">
                    <FaUserCircle
                        onClick={handleDropdownToggle}
                        className="h-8 w-8 text-3D155F cursor-pointer"
                    />


                    {/* Dropdown */}
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded shadow-lg">
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                Update Profile
                            </a>
                            <button
                                onClick={handleLogout}
                            >

                                <a

                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"

                                >
                                    Logout
                                </a>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default SmallBusinessHeader;