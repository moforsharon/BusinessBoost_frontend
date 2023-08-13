import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom'


const AdminSidebar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navItems = [
        { name: 'Dashboard', path: '/admin/home' },
        { name: 'Businesses', path: '/admin/businesses' },
        { name: 'Investors', path: '/admin/investors' },
        { name: 'Business Owners', path: '/admin/business-owners' },
        { name: 'Pending Requests', path: '/admin/pending-requests' },
        { name: 'Account', path: '/admin/account' },
        { name: 'Logout', path: '/admin/logout' },
    ];

    return (
        <nav className={`bg-0C0313 shadow-lg ${isMobile ? 'fixed top-0 left-0 w-full md:w-56' : 'md:sticky top-0 md:left-0 md:h-screen md:w-56'}`}>
            {isMobile ? (
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex justify-start">
                        <img src={require("../../images/logo.png")} alt="Logo" className="h-12" />
                    </div>
                    <button
                        className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-2 rounded-md"
                        onClick={toggleNav}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isNavOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            ) : (
                <div className="flex justify-between mt-5 ml-5">
                    <img src={require("../../images/logo.png")} alt="Logo" className="h-12" />
                </div>
            )}
            {isMobile && isNavOpen && (
                <div className="px-4 py-6">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            activeClassName=""
                            className="block text-white py-4 border-t border-gray-200 hover:bg-df678c-500"
                            onClick={toggleNav}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
            {!isMobile && (
                <div className="px-4 py-6">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            activeClassName="text-indigo-500"
                            className="block text-white py-4 border-t border-gray-100"
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default AdminSidebar