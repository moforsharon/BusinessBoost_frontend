import React, { useState, useEffect } from "react";
import SmallBusinessHeader from "../../components/SmallBusinessheader";
import Footer from "../../components/Footer/Footer";
import { FaPlus } from 'react-icons/fa';
import { BsHeart, BsHeartFill, BsCircleFill } from 'react-icons/bs';
import { useLocation, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from "axios";
function SmallBusinessHome() {
    const [businesses, setBusinesses] = useState([])


    // const location = useLocation();
    // const businessOwnerId = location.state?.businessOwnerId;
    const businessOwnerId = Cookies.get('businessOwnerId');

    useEffect(() => {
        console.log(businesses)
        if (businessOwnerId) {
            getBusinesses(businessOwnerId);

        }
    }, [businessOwnerId]);

    const getBusinesses = async (businessOwnerId) => {
        try {
            const res = await axios.get(`/business_owner/businesses/${businessOwnerId}`);
            const fetchedBusinesses = res.data;
            setBusinesses(fetchedBusinesses)
            console.log(res.data)

            // Do something with the retrieved businesses
        } catch (error) {
            console.error(error);
        }
    };

    // Rest of the component code



    if (businesses.length === 0) {
        return (
            <div className="">
                <SmallBusinessHeader />
                <div className="flex flex-col items-center justify-center h-screen">
                    <p className="text-gray-500 text-xl mb-4">
                        You haven't created any businesses yet.
                    </p>
                        <a href="/create">
                    <button className="flex flex-col items-center bg-3D155F text-white font-bold py-2 px-4 rounded">
                        <FaPlus className="mr-2" />

                            Create Business
                    </button>
                        </a>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <SmallBusinessHeader />
            <div className="bg-gray-50  justify-center py-6 sm:px-6 lg:px-8 min-h-1/2">
                <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold text-center text-3D155F mb-10">My Businesses</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {businesses.map((business) => (
                            <div key={business._id} className="bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{business.businessTitle
                                }</h2>
                                <p className="text-gray-600 mb-4">{business.category}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <BsHeartFill
                                            className="mr-2 text-df678c"
                                        />
                                        <p className="text-gray-600">{business.likes}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg text-gray-800 font-semibold mb-2">
                                            {business.amountNeeded
                                            }
                                        </p>

                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between align-center">
                                    <button className="inline-flex items-center justify-center px-4 py-2 bg-3D155F hover:bg-opacity-75 text-white rounded">
                                        {/* <a href="/businessid">

                                            View
                                        </a> */}
                                        <Link to={`/business/${business._id}`}>View</Link>
                                    </button>
                                    {business.ongoingInvestment === true && < BsCircleFill className="text-green-700" />}
                                    {business.ongoingInvestment === false && < BsCircleFill className="text-red-700" />}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="bg-gray-100 min-h-screen">
                <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">My Businesses</h1>

                    <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-df678c">
                                <tr>
                                    <th className="px-8 py-4 text-center text-sm font-medium text-white uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-8 py-4 text-center text-sm font-medium text-white uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-8 py-4 text-center text-sm font-medium text-white uppercase tracking-wider">
                                        Likes
                                    </th>
                                    <th className="px-8 py-4 text-center text-sm font-medium text-white uppercase tracking-wider">
                                        Investment
                                    </th>
                                    <th className="px-8 py-4 text-center text-sm font-medium text-white uppercase tracking-wider">
                                        Ongoing Investment
                                    </th>
                                    <th className="px-8 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {businesses.map((business) => (
                                    <tr key={business.id}>
                                        <td className="px-8 py-4 whitespace-nowrap text-center">
                                            <div className="text-lg text-gray-900">{business.name}</div>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-center">
                                            <div className="text-lg text-gray-900">{business.category}</div>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-center">
                                            <div className="text-lg text-gray-900">{business.likes}</div>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-center">
                                            <div className="text-lg text-gray-900">{business.investment}</div>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-center">
                                            <div className="text-lg text-gray-900">{business.ongoingInvestment}</div>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap text-right">
                                            <button className="inline-flex items-center justify-center px-6 py-3 bg-3D155F hover:bg-opacity-75 text-white rounded">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    );
}
export default SmallBusinessHome