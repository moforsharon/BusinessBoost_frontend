import React, { useState } from 'react';
import SmallBusinessHeader from '../../components/SmallBusinessheader';
import Footer from '../../components/Footer/Footer';
import BusinessInformation from '../../components/BusinessInfo/BusinessInfo';
import FinancialInformation from '../../components/FinancialInfo/FinancialInfo';
import SupportingDocuments from '../../components/SupportingDocs/SupportingDocs';
import axios from "axios";
// import Cookies from "cookiejs";
import Cookies from 'js-cookie';
import './spinner.css';

import { useLocation, useParams } from 'react-router-dom';


const Form = () => {
    // const location1 = useLocation();
    // const businessOwnerId = location1.state?.businessOwnerId;
    const { businessOwnerId } = useParams();

    // Retrieve the user ID from the cookie
    const cookieUserId = Cookies.get('businessOwnerId');
    const [loading, setLoading] = useState(false);

    const [activeTab, setActiveTab] = useState(0);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    // const [coverPhoto, setCoverPhoto] = useState(null);
    const [shortPitch, setShortPitch] = useState("");
    const [coverPhoto, setSelectedImage] = useState(null);
    const [investment, setInvestment] = useState("");
    const [profit, setProfit] = useState("");
    const [returnTime, setReturnTime] = useState("");
    const [pptxFile, setPptxFile] = useState(null);
    const [imageFile1, setImageFile1] = useState(null);
    const [imageFile2, setImageFile2] = useState(null);

    const handlePptxFileChange = (e) => {
        const file = e.target.files[0];
        setPptxFile(file);
    };

    const handleImageFile1Change = (e) => {
        const file = e.target.files[0];
        setImageFile1(file);
    };

    const handleImageFile2Change = (e) => {
        const file = e.target.files[0];
        setImageFile2(file);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        console.log(cookieUserId)

        // Perform any necessary actions with the uploaded files
        console.log('Cover Photo:', coverPhoto);
        console.log('PPTX File:', pptxFile);
        console.log('Image File 1:', imageFile1);
        console.log('Image File 2:', imageFile2);
        console.log({
            investment,
            profit,
            returnTime,

        });

        console.log({
            title,
            category,
            location,
            description,
            shortPitch,
        });

        try {
            let res = await axios.post(`/business/create/${cookieUserId}`, {
                coverPhoto: coverPhoto,
                pptPresentation: pptxFile,
                idCardPhoto: imageFile1,
                passportPhoto: imageFile2,
                businessTitle: title,
                category: category,
                location: location,
                description: description,
                shortPitch: shortPitch,
                amountNeeded: investment,
                percentProfit: profit,
                expectedReturnTime: returnTime,

            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false);

            window.location.href = '/smallbusiness';

        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>


            <SmallBusinessHeader />
            <div className=" bg-gray-100  justify-center py-12 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-2/3 mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="flex items-center w-2/3 mx-auto">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 ${activeTab >= 0 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div>
                            <div
                                className={`h-2 w-16 flex-1  ${activeTab >= 1 ? 'bg-3D155F' : 'bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 ${activeTab >= 1 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div>
                            <div
                                className={`h-2 w-16 flex-1  ${activeTab >= 2 ? 'bg-3D155F' : 'bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 ${activeTab >= 2 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div>
                            {/* <div
                                className={`h-2 w-16 flex-1 ${activeTab >= 3 ? 'bg-3D155F' : ' bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center  justify-center z-10 border-2 ${activeTab >= 3 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div> */}
                        </div>
                    </div>
                    {activeTab === 0 && (<div className="container mx-auto mt-8">
                        <form className="max-w-lg mx-auto">
                            <h1 className="text-xl text-df678c font-md text-center mb-4">Business Information</h1>
                            <div className="mb-4">

                                <input
                                    placeholder='Title'
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                                />
                            </div>
                            <div className="mb-4">

                                <select
                                    className=" block w-full px-3 py-2   border border-df678c rounded-md shadow-sm  focus:outline-none focus:ring-df678c focus:border-df678c sm:text-sm"
                                    name="category"
                                    value={category}
                                    onChange={(event) => setCategory(event.target.value)}

                                >
                                    <option value="" className="text-black">Select a category</option>
                                    <option value="category1" className="text-black">Agriculture</option>
                                    <option value="category2" className="text-black">Electronics</option>
                                    <option value="category3" className="text-black">Furnitures</option>
                                </select>
                            </div>
                            <div className="mb-4">

                                <input
                                    placeholder='Location'
                                    type="text"
                                    name="location"
                                    value={location}
                                    onChange={(event) => setLocation(event.target.value)}
                                    className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                                />
                            </div>
                            <div className="mb-4">

                                <textarea
                                    placeholder='Description'
                                    name="description"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    className="mt-1 w-full px-4 border-df678c py-2 border rounded-lg focus:outline-none focus:shadow-outline-blue"
                                ></textarea>
                            </div>
                            {/* <div className="mb-4">
                    <label htmlFor="cover-photo" className="block text-gray-700 font-bold">
                        Cover Photo
                    </label>
                    <input
                        type="file"
                        name="cover-photo"
                        onChange={handleCoverPhotoChange}
                        className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                    />
                </div> */}

                            <div className="mb-4">

                                <textarea
                                    placeholder='Short pitch'
                                    name="short-pitch"
                                    value={shortPitch}
                                    onChange={(event) => setShortPitch(event.target.value)}
                                    className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                                ></textarea>
                            </div>
                        </form>
                    </div>)}
                    {activeTab === 1 && (<div className="container mx-auto mt-8 mb-20">
                        <form className="max-w-lg mx-auto">
                            <h1 className="text-xl text-df678c font-md text-center mb-4">Financial Information</h1>
                            <div className="mb-4">

                                <input
                                    placeholder='Investment amount'
                                    type="number"
                                    name="investment"
                                    value={investment}
                                    onChange={(event) => setInvestment(event.target.value)}
                                    className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    placeholder='Profit on Investment in percentage'
                                    type="number"
                                    name="profit"
                                    value={profit}
                                    onChange={(event) => setProfit(event.target.value)}
                                    className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    placeholder='Return Time'
                                    type="text"
                                    name="returnTime"
                                    value={returnTime}
                                    onChange={(event) => setReturnTime(event.target.value)}
                                    className="mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue"
                                />
                            </div>
                        </form>
                    </div>)}
                    {activeTab === 2 && (<div className="max-w-md mx-auto container  mt-8 mb-20">
                        <h1 className="text-xl text-df678c font-md text-center mb-4">Supporting Documents</h1>
                        <form className="max-w-lg mx-auto">
                            <div className="mb-4 justify-around">
                                <label htmlFor="file-upload" className=" p-2 w-full">
                                    Upload Cover Photo
                                </label>
                                <input
                                    name='coverPhoto'
                                    id="file-upload"
                                    type="file"
                                    className="text-gray-700 font-semibold"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="pptxFile" className="text-gray-700 font-semibold">
                                    PPTX Presentation:
                                </label>
                                <input
                                    name='pptPresentation'
                                    type="file"
                                    id="pptxFile"
                                    accept=".pptx"
                                    className="border border-gray-300 p-2 w-full"
                                    onChange={handlePptxFileChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="imageFile1" className="text-gray-700 font-semibold">
                                    Photo of ID card
                                </label>
                                <input
                                    name='idCardPhoto'
                                    type="file"
                                    id="imageFile1"
                                    accept="image/*"
                                    className="border border-gray-300 p-2 w-full"
                                    onChange={handleImageFile1Change}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="imageFile2" className="text-gray-700 font-semibold">
                                    Passport size Photo
                                </label>
                                <input
                                    name='passportPhoto'
                                    type="file"
                                    id="imageFile2"
                                    accept="image/*"
                                    className="border border-gray-300 p-2 w-full"
                                    onChange={handleImageFile2Change}
                                />
                            </div>
                            {loading ? (
                                <div className="flex justify-center items-center h-16">
                                    {/* Use a circular icon with rotating animation */}
                                    <div className="spinner"></div>
                                </div>
                            ) :

                    (<div className="flex flex-col items-center mb-15 justify-center">

                        <button type="submit" onClick={handleSubmit} className="bg-df678c  hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded">
                            Create Business
                        </button>
                    </div>)}
                        </form>
                    </div>)

                    }
                    {/* {activeTab === 3 &&
                        <div className="flex flex-col items-center mb-15 justify-center">
                            <h2 className="text-xl text-df678c font-md text-center mb-4">Finished</h2>
                            <p className="text-center mt-8 mb-4">You're all ready to go</p>
                            <button type="submit" onClick={handleSubmit} className="bg-df678c  hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded">
                                Create Business
                            </button>
                        </div>} */}
                    <div className="flex justify-around flex-row">
                        {activeTab !== 3 ? (<button
                            className="mt-6 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-4"
                            onClick={() => handleTabClick(activeTab - 1)}
                            disabled={activeTab === 0}
                        >
                            Previous
                        </button>) : null}

                        {activeTab !== 2 ? (
                            <button
                                className="mt-6 px-4 py-2 bg-df678c text-white rounded-lg ml-4"
                                onClick={() => handleTabClick(activeTab + 1)}
                            >
                                Next
                            </button>
                        ) :
                            null}

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default Form;