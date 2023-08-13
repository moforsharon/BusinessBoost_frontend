import React from 'react';
import { useState } from "react";

function BusinessInformation() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    // const [coverPhoto, setCoverPhoto] = useState(null);
    const [shortPitch, setShortPitch] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            title,
            category,
            location,
            description,
            selectedImage,
            shortPitch,
        });
        // TODO: Submit form data to backend
    };

    // const handleCoverPhotoChange = (event) => {
    //     setCoverPhoto(event.target.files[0]);
    // };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
                        className=" block w-full px-3 py-2 text-gray-400  border border-df678c rounded-md shadow-sm  focus:outline-none focus:ring-df678c focus:border-df678c sm:text-sm"
                        name="category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}

                    >
                        <option value="" className="text-red-300">Select a category</option>
                        <option value="category1" className="text-black">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
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
                <div className="mb-4 justify-around">
                    <label htmlFor="file-upload" className="border border-df678c mb-20 rounded-lg align-center px-3 py-4 bg-df678c text-white">
                       Upload Cover Photo
                    </label>
                    <input id="file-upload"
                        type="file" className="hidden mt-1 w-full px-4 py-2 border border-df678c rounded-lg focus:outline-none focus:shadow-outline-blue" accept="image/*" onChange={handleImageChange} />
                    {selectedImage && (
                        <div>
                           
                            <img src={selectedImage} alt="Preview" style={{ maxWidth: '200px'}} />
                        </div>
                    )}
                </div>
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
        </div>
    )
}
export default BusinessInformation;