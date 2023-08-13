import React, { useState, useEffect } from "react";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaCheck } from "react-icons/fa"; // import checkbox 
import Card from "../../components/Card/Card";
import axios from "axios";
import { BsHeart, BsHeartFill, BsFillEyeFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Businesses() {
    const [isOpen, setIsOpen] = useState(false);
    const [businesses, setBusinesses] = useState([])

    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    };
    useEffect(() => {
        console.log(businesses)
        
            getBusinesses();

        
    }, []);

    const getBusinesses = async () => {
        try {
            const res = await axios.get(`/business/businesses/`);
            const fetchedBusinesses = res.data.data;
            setBusinesses(fetchedBusinesses)
            console.log(res.data)

            // Do something with the retrieved businesses
        } catch (error) {
            console.error(error);
        }
    };

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            {/* Header component  */}
            <Header></Header>
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left filter panel */}

                {/* <div className=" bg-gray-50 w-full lg:w-1/6  p-4 ">
                    <div className="flex items-center justify-between flex-wrap">

                        <h2 className="sm:flex sm:items-center sm:flex-shrink-0 text-black font-md text-lg mb-4">Filter By</h2>
                        <div className="block lg:hidden">
                            <button
                                onClick={toggle}
                                className="flex items-center px-3 py-2 border rounded text-black border-black "
                            >
                                <svg
                                    className="fill-current h-3 w-3"
                                    viewBox="0 0 24 24"
                                // xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Menu</title>
                                    {isOpen ? (
                                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />

                                    ) : (

                                        <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${isOpen ? "block" : "hidden"
                            } w-full block flex-grow lg:flex  flex-col lg:items-center `}
                    >
                        
                        <div className="mb-4 flex flex-col border-b-2 border-gray-300 pb-4">
                            <h3 className="text-gray-700 text-lg font-md mb-2">Category</h3>
                            <div className="ml-4">

                                <label className="inline-flex items-center pb-3">
                                    <input type="checkbox" className="form-checkbox " />
                                    <span className="ml-2 text-sm">Option 1</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 2</span>
                                </label>
                            </div>
                           
                        </div>
                       
                        <div className="mb-4 flex flex-col border-b-2 border-gray-300 pb-4">
                            <h3 className="text-gray-700 text-lg font-md  mb-2">Location</h3>
                            <div className="ml-4">

                                <label className="inline-flex items-center pb-3">
                                    <input type="checkbox" className="form-checkbox " />
                                    <span className="ml-2 text-sm">Option 1</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 2</span>
                                </label>
                            </div>
                            
                            
                        </div>
                        
                        <div className="mb-4 flex flex-col">
                            <h3 className="text-gray-700 text-lg font-md  mb-2">Price</h3>
                            <div className="ml-4">
                                <label className="inline-flex   items-center pb-3">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 1</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 2</span>
                                </label>
                            </div>
                            
                        </div>
                    </div>
                </div> */}
                {/* Business cards */}
                <div className=" w-full lg:w-full h-1/5 grid lg:grid-cols-3 md:w-1/3 md:px-50 sm:grid-cols-1 sm:grid-flow-row  lg:p-20  md:grid-cols-1 md:grid-flow-row  justify-center items-center gap-12">
                    {businesses.map((business) => (
                        // <Card
                        //     key={business._id}
                        //     image={business.coverPhoto}
                        //     title={business.businessTitle}
                        //     description={business.description}
                        //     category={business.category}
                        //     likes={42}
                        //     price={business.amountNeeded}

                        // />
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                                <img className="absolute w-full h-full object-cover rounded-t" src={business.coverPhoto} alt="" />
                            </div>
                            <div className="px-4 py-6 md:px-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-2xl font-bold text-3D155F">{business.businessTitle}</h2>
                                    <div className="flex items-center">
                                        <button onClick={handleClick}>

                                            {liked ? <BsHeartFill className="text-df678c mr-1" size={24} /> : <BsHeart size={24} />}
                                        </button>
                                        <span className="text-sm text-gray-400">5</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm font-medium mb-4">{business.description}</p>
                                <div className="flex items-center justify-center mb-4">
                                    <button className="py-2 px-10 border-2 border-df678c text-df678c font-medium rounded-md">
                                        <Link to={`/business/${business._id}`}>View</Link>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between text-gray-500 text-sm">
                                    <div className="flex items-center">
                                        <BsFillEyeFill className="mr-1" />
                                        <span>{business.category}</span>
                                    </div>
                                    <span>{business.amountNeeded}</span>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
                {/* Footer component  */}
            </div>
            <Footer></Footer>
        </div>

    )
}

export default Businesses;