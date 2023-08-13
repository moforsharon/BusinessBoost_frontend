import React from 'react';

function Footer() {
    return (
        <footer className="bg-0C0313 text-white">
            <div className="container py-8 flex flex-wrap justify-between items-center ml-6">
                {/* First row */}
                <img src={require("../../images/bbwhite-removebg-preview.png")} alt="Logo" className="h-100 w-80 mr-4 " />
                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                    <div>
                        <h3 className="font-bold text-lg">Features</h3>
                        <ul className="list-none mt-2">
                            <li className="mb-2 text-sm">Business Branding</li>
                            <li className="mb-2 text-sm">Management</li>
                            <li className="mb-2 text-sm">Analytics</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <h3 className="font-bold text-lg">Resources</h3>
                    <ul className="list-none mt-2">
                        <li className="mb-2  text-sm">Blog</li>
                        <li className="mb-2 text-sm">Support</li>
                        <li className="mb-2 text-sm">Terms and Services</li>
                    </ul>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <h3 className="font-bold text-lg">Company</h3>
                    <ul className="list-none mt-2">
                        <li className="mb-2 text-sm">About</li>
                        <li className="mb-2 text-sm">Our Team</li>
                        <li className="mb-2 text-sm">Contact</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <a href="#">
                        <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="Facebook" className="w-6 h-6 mr-2 rounded-full" />
                    </a>
                    <a href="#">
                        <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-512.png" alt="LinkedIn" className="w-6 h-6 mr-2 rounded-full" />
                    </a>
                    <a href="#">
                        <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/twitter-512.png" alt="Twitter" className="w-6 h-6 mr-2 rounded-full" />
                    </a>
                    <a href="#">
                        <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/instagram-512.png" alt="Instagram" className="w-6 h-6 rounded-full" />
                    </a>
                </div>
                {/* Second row */}
                <div className="w-full  border-white mt-10 mb-4 text-center">
                    <p className="">Copy right  2023 Business Boost. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
