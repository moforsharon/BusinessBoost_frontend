import React from "react";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import SmallCard from "../../components/Small card/SmallCard";
import { BsPersonCheck, BsSearch, BsBriefcase } from 'react-icons/bs';
function Home() {
    return (
        <div>
            <Navbar></Navbar>

            {/* Section 1 */}
            <div className="container mx-auto px-5 py-10 md:py-20 ">
                <div className="md:flex md:items-center md:justify-around">
                    <div className="md:w-1/2 md:pr-10 ">
                        <h2 className="text-4xl font-bold text-3D155F mb-4 lg:text-6xl md:text-5xl">
                            Boosting Your Business To Another Level
                        </h2>
                        <p className="text-gray-500 font-medium text-sm mb-8 md:text-base">
                            We link small businesses to investment opportunities and funding, providing personalized solutions that help entrepreneurs grow and thrive. Our focus is on building strong relationships with investors and entrepreneurs, fostering innovation and creating value for all stakeholders.
                        </p>
                        <div className="flex flex-col md:flex-row">
                            <button className="px-12 py-3    text-white font-bold bg-df678c rounded-md mb-2 md:mr-2 md:mb-0">
                                Create
                            </button>
                            <button className="py-3 px-12 text-df678c font-bold bg-transparent border-2 border-df678c rounded-md md:ml-2">
                                Invest
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-10 mt-20 ">
                        <div className="relative h-64 md:h-auto top-10">
                            <div className="absolute  top-0 left-0 w-full  h-full bg-df678c rounded-full z-10"></div>
                            <img className="relative bottom-40 z-20 w-full h-full  " src={require("../../images/success-removebg-preview.png")} alt="Success" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Business section */}
            <div className="bg-gray-50 py-16">
                <h2 className="text-5xl font-bold text-3D155F text-center mb-8">Businesses</h2>
                <p className="text-gray-500 text-center text-sm font-bold px-5 mb-10">Browse our selection of fascinating businesses in search of funding. Uncover new investment opportunities and take the first step towards realizing their potential.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-20">
                    <Card
                        image={require("../../images/Rectangle 10business1.png")}
                        title="T&S Restaurant"
                        likes={50}
                        description="Description of the first card goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        category="Food"
                        price="$20"
                    />
                    <Card
                        image={require("../../images/Rectangle 10business2.png")}
                        title="Paper Recycling"
                        likes={20}
                        description="Description of the second card goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        category="Fashion"
                        price="$30"
                    />
                    <Card
                        image={require("../../images/Rectangle 10Business3.png")}
                        title="We Grow"
                        likes={10}
                        description="Description of the third card goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        category="Travel"
                        price="$50"
                    />
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-3D155F py-3 px-20 text-white text-lg font-md rounded-md"><a href="/businesses">View More</a></button>
                </div>
            </div>

            {/* section 4 */}
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse mb-12 lg:flex-row lg:mb-0">
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-2xl font-bold text-3D155F lg:text-3xl">Create a Business</h2>
                        <p className="mt-4 text-sm text-gray-500 font-bold-md lg:text-base">
                            Ready to turn your entrepreneurial vision into reality? Create a business listing on our platform and gain access to a world of investment opportunities and funding options. With exposure to a wider audience, our platform can help you take your small business to the next level. Start your journey towards success today by joining our network of innovative and driven entrepreneurs.
                        </p>
                        <button className="inline-block py-2 px-10 border-2 border-df678c text-df678c font-medium mt-5 rounded-md">
                            Get started
                        </button>
                    </div>
                    <div className="flex justify-center lg:w-1/2">
                        <img src={require("../../images/Rectangle 13.png")} alt="Business Image 1" className="w-full max-w-xs h-auto rounded-t lg:rounded-t-none lg:rounded-l" />
                    </div>
                </div>
                <div className="flex flex-col justify-center mb-12 lg:flex-row lg:mb-0 mt-6 ">
                    <div className=" flex justify-center lg:w-1/2">
                        <img src={require("../../images/Rectangle 13 (1).png")} alt="Business Image 2" className="w-full max-w-xs h-auto rounded-t lg:rounded-t-none lg:rounded-r" />
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-2xl font-bold text-3D155F lg:text-3xl">Be part of something great.
                            Invest in a high potential business</h2>
                        <p className="mt-4 text-sm text-gray-500 font-bold-md lg:text-base">
                            Unlock the potential of small businesses and enjoy profitable returns on your investments. By investing in small businesses, you not only have the opportunity to grow your wealth but also make a meaningful impact on the lives of hardworking entrepreneurs. Help turn their dreams into reality while securing your financial future - start investing in potential businesses today.
                        </p>
                        <button className="inline-block py-2 px-10 border-2 border-df678c text-df678c font-medium mt-5 rounded-md">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
            {/* In some few steps section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-3D155F text-center mb-8">In Some Few Steps</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <SmallCard icon={<BsPersonCheck />} text="Create A Business" />
                        <SmallCard icon={<BsSearch />} text="Get Investment" />
                        <SmallCard icon={<BsBriefcase />} text="Grow your Business" />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>

    )
}

export default Home;