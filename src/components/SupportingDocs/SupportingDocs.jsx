import React, { useState } from 'react';

function SupportingDocuments() {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any necessary actions with the uploaded files
        console.log('PPTX File:', pptxFile);
        console.log('Image File 1:', imageFile1);
        console.log('Image File 2:', imageFile2);

        // Reset the form after submission
        setPptxFile(null);
        setImageFile1(null);
        setImageFile2(null);
    };

    return (
        <div className="max-w-md mx-auto container  mt-8 mb-20">
            <h1 className="text-xl text-df678c font-md text-center mb-4">Supporting Documents</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="pptxFile" className="text-gray-700 font-semibold">
                        PPTX Presentation:
                    </label>
                    <input
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
                        type="file"
                        id="imageFile2"
                        accept="image/*"
                        className="border border-gray-300 p-2 w-full"
                        onChange={handleImageFile2Change}
                    />
                </div>

                {/* <button
                    type="submit"
                    className="bg-DF678C hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded"
                >
                    Upload
                </button> */}
            </form>
        </div>
    );
}

export default SupportingDocuments;
