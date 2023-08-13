import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import Cookies from "js-cookie";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernamaeChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const [userData, setUserData] = useState(null);
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let res = await axios.post("/admin/login", {
                username: username,
                password: password
            });
            setUserData(res.data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log(userData);

        if (userData && userData.message === "No user found") {
            setInvalidEmail(true);
            setInvalidPassword(false);
        }

        if (userData && userData.message === "Invalid Password") {
            setInvalidPassword(true);
            setInvalidEmail(false);
        }

        if (userData && userData.message === "Login Successfull") {

            const adminId = userData.data._id;
            Cookies.set('adminId', adminId);
            navigate('/admin/home', { state: { adminId } });

        }
    }, [userData]);
    return (
        <div>

            <div className=" bg-3D155F h-screen justify-center py-20 sm:px-6 lg:px-60">

                <div className=" bg-white py-8 px-4 shadow sm:rounded-md sm:px-10">

                    <div className="w-full md:px-6 justify-center">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="flex justify-around">
                                <img src={require("../../images/logo.png")} alt="Logo" className="h-12" />
                            </div>
                        </div>
                        {invalidEmail && <p className="mt-2 text-center text-sm text-red-500 max-w">The username you entered is not registered</p>}
                        {invalidPassword && <p className="mt-2 text-center text-sm text-red-500 max-w">Password is invalid</p>}
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            autoComplete="text"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={username}
                                            onChange={handleUsernamaeChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="px-12 py-3    text-white font-bold bg-df678c rounded-md mb-2 md:mr-2 md:mb-0">
                                        Login
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminLogin