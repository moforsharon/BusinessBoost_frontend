import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsHeart,BsHeartFill, BsFillEyeFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from "react-router-dom";
const Card = ({key, image, title, likes, description, category, price, }) => {
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    };
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                <img className="absolute w-full h-full object-cover rounded-t" src={image} alt="" />
            </div>
            <div className="px-4 py-6 md:px-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-3D155F">{title}</h2>
                    <div className="flex items-center">
                        <button onClick={handleClick}>

                            {liked ? <BsHeartFill className="text-df678c mr-1" size={24} /> : <BsHeart size={24} />}
                        </button>
                        <span className="text-sm text-gray-400">{likes}</span>
                    </div>
                </div>
                <p className="text-gray-500 text-sm font-medium mb-4">{description}</p>
                <div className="flex items-center justify-center mb-4">
                    <button className="py-2 px-10 border-2 border-df678c text-df678c font-medium rounded-md">
                        <Link to={`/business/${key}`}>View</Link>
                    </button>
                </div>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center">
                        <BsFillEyeFill className="mr-1" />
                        <span>{category}</span>
                    </div>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
