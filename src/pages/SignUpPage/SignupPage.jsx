import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import axios from "axios";
import Cookies from "cookiejs";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleFnameChange = (e) => setFname(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
    const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        console.log(fname, selectedValue)
        e.preventDefault();

        try {
            let endpoint = "";
            if (selectedValue === "Investor") {
                endpoint = "/investor/register_investor";
            } else if (selectedValue === "Business Owner") {
                endpoint = "/business_owner/register_business_owner";
            }

            let res = await axios.post(endpoint, {
                name: fname,
                email: email,
                location: location,
                password: password,
                phoneNumber: phoneNumber,
                profileUrl: "something here"
            });

            // Handle response from the backend
            console.log(userData);
            setUserData(res.data);

            if (userData.data.type === "investor") {
                // Set the cookie to investor id
                document.cookie = `investorId=${userData.data._id}; path=/`;

                // Redirect to /businesses
                window.location.href = "/businesses";
            } else if (userData.data.type === "businessOwner") {
                // Set the cookie to business owner id
                document.cookie = `businessOwnerId=${userData.data._id}; path=/`;

                // Redirect to /smallbusiness
                window.location.href = "/smallbusiness";
            }
        } catch (error) {
            console.error(error);
        }
    };
    //         if (selectedValue === "Business Owner") {
    //             try {
    //                 let response = await axios.post("/business_owner/register_business_owner", {
    //                     name: fname,
    //                     email: email,
    //                     location: location,
    //                     password: password,
    //                     phoneNumber: phoneNumber
    //                 })
    //                 setUserData(response.data)
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         }
    //         if (selectedValue === "Investor") {
    //             try {
    //                 let response = await axios.post("/investor/register_investor", {
    //                     name: fname,
    //                     email: email,
    //                     location: location,
    //                     password: password,
    //                     phoneNumber: phoneNumber
    //                 })
    //                 setUserData(response.data)
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         }

    // };

    // useEffect(() => {
    //     console.log(userData);
    //     // if (userData.data.type === "businessOwner") {
    //     //     const businessOwnerId = userData.data._id;
    //     //     Cookies.set("businessOwnerId", userData.data._id);
    //     //     // window.location.href = '/smallbusiness';
    //     //     navigate('/smallbusiness', { state: { businessOwnerId } });
    //     // } else if (userData.data.type === "investor") {
    //     //     Cookies.set("investorId", userData.data._id);
    //     //     window.location.href = '/businesses';
    //     // }

    // }, [userData]);
    return (
        <div>
            <Header></Header>
            <div className=" bg-gray-100  justify-center py-12 sm:px-6 lg:px-8">
                <div className=" flex flex-row bg-white py-8 px-4 shadow sm:rounded-md sm:px-10">
                    <div className="hidden  md:block w-2/3 border-r-2 border-gray-200 ">
                        <img
                            className="mx-auto h-3/4 w-auto mb-8"
                            src={require("../../images/Login-img.png")}
                            alt="Logo"
                        />
                        <p className="font-extrabold lg:text-3xl md:text-xl text-3D155F justify-center"><span className="text-df678c">Boosting </span>your <span className="text-df678c"> business</span> to another level</p>
                    </div>
                    <div className="w-full md:px-6 justify-center">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">

                            <h2 className="mt-6 text-center text-3xl font-bold text-3D155F">
                                Sign Up
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-500 max-w">
                                Already have an account? <span> </span>
                                <a href="/login" className="font-medium text-df678c">
                                    Login
                                </a>
                            </p>
                        </div>

                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <form className="space-y-6" onSubmit={handleSignUp}>
                                <div>
                                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="fname"
                                            name="fname"
                                            type="text"
                                            autoComplete=""
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={fname}
                                            onChange={handleFnameChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="number"
                                            autoComplete=""
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumber}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                        Location
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="location"
                                            name="location"
                                            type="text"

                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={location}
                                            onChange={handleLocation}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">User Type</label>
                                    <div className="mt-1">

                                        <select id="dropdown" required value={selectedValue} onChange={handleSelectChange} className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="Investor">Investor</option>
                                            <option value="Business Owner">Business Owner</option>
                                        </select>
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

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
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

                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="px-12 py-3    text-white font-bold bg-df678c rounded-md mb-2 md:mr-2 md:mb-0">
                                        Sign Up
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default SignUp