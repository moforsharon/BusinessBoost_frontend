import { React, useState, useEffect } from 'react';
import Header from '../../components/Navbar/Navbar';
import SmallBusinessHeader from '../../components/SmallBusinessheader';
import Footer from '../../components/Footer/Footer';
import { BsBookmark } from 'react-icons/bs';
import { BsBookmarkFill, BsCheck, BsChat, BsDownload } from 'react-icons/bs';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';



function ViewBusinessPage() {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [reviews, setReviews] = useState([])
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [showItems, setShowItems] = useState(false)
    const { id } = useParams();
    const [business, setBusiness] = useState({});
    const [businessOwner, setBusinessOwner] = useState({});
    const businessOwnerId = Cookies.get('businessOwnerId');


    useEffect(() => {
        const fetchBusiness = async () => {
            try {
                const response = await axios.get(`/business/business/${id}`);
                setBusiness(response.data);
                console.log(response.data)
                if(business.userId === businessOwnerId) {
                    setShowItems(!showItems)
                }
            } catch (error) {
                console.error(error);
            }
        };
        //function to add review on a business
        const getFeedback = async () => {
            try {
                const response = await axios.get(`/feedback/business/${id}`);
                setReviews(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        };
        const fetchBusinessOwner = async() => {
            try {
                const response = await axios.get(`/business_owner/${businessOwnerId}`);
                
                setBusinessOwner(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchBusinessOwner();
        fetchBusiness();
        getFeedback()
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await axios.post(`/feedback/new/${id}`, {
                    title: name,
                    details: message
                });
                console.log(res.data)
        } catch (error) {
            console.error(error);
        }
        // Clear the form inputs
        setName('');
        setMessage('');
    };
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const wordCount = inputValue.split(' ').length;

        if (wordCount <= 100) {
            setMessage(inputValue);
        }
    };
    const handleBookmarkToggle = () => {
        setIsBookmarked(!isBookmarked);
        setShowAlert(!isBookmarked)
    };

    useEffect(() => {
        let timer;

        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 2000); // Adjust the duration (in milliseconds) as needed
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);
    return (
        <div>
            <SmallBusinessHeader/>


            <div className=" min-h-screen justify">
                {showAlert && (<div>

                    {isBookmarked ? (<p className='justify-center flex mt-5 font-bold-md mr-3 text-green-500 '>Added to Bookmarks <BsCheck className='h-6 w-6' /></p>) :
                        (<p className='justify-center flex mt-5 font-bold-md mr-3 text-red-500'>Removed from Bookmarks</p>)}
                </div>)}


                <div className=" py-8 px-4 sm:px-6 lg:px-8">
                    <div className=" rounded-lg p-6">
                        <div className="flex justify-start">

                            <h1 className="text-3xl font-bold text-3D155F mb-4 lg:text-4xl md:text-3xl">{business.businessTitle}</h1>
                            {showItems && <div>
                                {isBookmarked ? (
                                    <BsBookmarkFill
                                        className="text-yellow-400 cursor-pointer h-6 w-6 mt-3 ml-8"
                                        onClick={handleBookmarkToggle}
                                    />
                                ) : (
                                    <BsBookmark
                                        className="text-gray-500 cursor-pointer h-5 w-5 mt-3 ml-8"
                                        onClick={handleBookmarkToggle}
                                    />
                                )}
                            </div>}
                        </div>
                        <h2 className="  text-gray-800 mb-2">Owner: {businessOwner.name}</h2>
                        <p className="text-gray-600 mb-2">
                            Location: {business.location}
                        </p>
                        <p className="text-gray-600 mb-2">
                            Category: {business.category}
                        </p>
                        <p className="text-gray-600 mb-4">
                            Invesment Amount: {business.amountNeeded
                            }
                        </p>
                        <img
                            src={business.coverPhoto}
                            alt="Business Cover"
                            className="w-1/3 rounded-lg mb-6"
                        />
                        <p className="text-3D155F font-bold text-xl mb-1">Description</p>
                        <p className="text-gray-500 font-medium text-sm mb-8 md:text-base">{business.description}</p>
                        <p className="text-3D155F font-bold text-xl mb-1">Short pitch</p>
                        <p className="text-gray-500 font-medium text-sm mb-8 md:text-base">{business.shortPitch}</p>


                        <div className="inline-flex  items-center mb-6">
                            <a
                                href={business.pptPresentation}
                                download={`${business.title}.pptx`}
                                className="inline-flex items-center justify-center px-4 py-2 bg-3D155F text-white rounded"
                            >
                                Download Business Plan
                                <BsDownload className='ml-2' />
                            </a>
                            {showItems && <button className="inline-flex py-2 justify-center  px-4 border-2 border-df678c text-df678c bold-md rounded ml-10">
                                <BsChat className='mr-2' />
                                <Link to={`/chat/${business.userId}`}> Message Owner</Link>
                            </button>}
                        </div>
                    </div>

                </div>
            </div>

            {/* Reviews section */}
            <div className="py-8 px-10 bg-gray-100 justify">

                <h2 className="text-2xl font-semibold text-3D155F font-md text-center mb-4">Reviews</h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center ">
                    {/* Render reviews */}
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <p className="text-gray-800 font-semibold">{review.title}</p>
                                <p className="text-gray-600">{review.details}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                            </div>
                        </div>
                    ))}
                </div>

                {/* Review form */}
                {showItems && <div className="mt-8 bg-white p-4  rounded shadow-md ">
                    <h2 className="text-2xl font-semibold text-3D155F font-md text-center mb-4">Leave a Review</h2>
                    <form onSubmit={handleSubmit}>


                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-gray-300 border rounded py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">
                                Your Message (Max 100 Words)
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 border rounded py-2 px-3 text-gray-800 h-32 resize-none focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div className='flex  justify-center'>
                            <button
                                type="submit"
                                className="py-2 px-10 border-2 border-df678c  text-df678c font-medium rounded-md transition-colors duration-300 ease-in-out"
                            >
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>}
            </div>
            <Footer />
        </div>
    );
}

export default ViewBusinessPage;
