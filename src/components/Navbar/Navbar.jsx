import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);
    const businessOwnerId = Cookies.get('businessOwnerId');
    const investorId = Cookies.get('investorId');
    const handleBusinessLink = () => {
        if (businessOwnerId === "" || investorId === "") {
            window.location.href = '/login';
        } else {
            window.location.href = '/businesses';
        }
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white shadow-lg p-6">
            <div className="flex items-center flex-shrink-0 text-blue-500 mr-36 ml-6">
                <img src={require("../../images/logo.png")} alt="Logo" className="h-10" />
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggle}
                    className="flex items-center px-3 py-2 border rounded text-df678c border-df678c "
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm14 4H3v-2h14v2z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <div
                className={`${isOpen ? "block" : "hidden"
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-lg lg:flex-grow">
                    <NavLink
                        exact="true"
                        to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-medium mr-10 hover:underline"
                        activeClassName="active text-df678c underline"
                    >
                        Home
                    </NavLink>
                    <button
                        onClick={handleBusinessLink}
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-medium mr-10 hover:underline"
                        activeClassName="active text-df678c underline"
                    >
                        Businesses
                    </button>
                    <NavLink
                        to="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 font-medium mr-4 hover:underline"
                        activeClassName="active text-df678c underline"
                    >
                        About
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/login"
                        className="block text-lg mt-4 lg:inline-block lg:mt-0 text-df678c font-medium mr-10"
                        activeClassName="border-b-2 border-pink-500"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                    >

                        <button className="py-2 px-10 border-2 border-df678c text-df678c font-medium rounded-md mr-10">
                            Sign Up
                        </button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;