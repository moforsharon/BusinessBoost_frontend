import React from 'react';

const SmallCard = ({ icon, text }) => {
    return (
        <div className="bg-white rounded-md shadow-sm p-4   rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center text-white bg-3D155F rounded-full w-12 h-12">
                {icon}
            </div>
            <p className="text-gray-500 font-bold mt-4 text-center">{text}</p>
        </div>
    );
};

export default SmallCard;