import React, { useState } from 'react';
import contactimage from '../components/assests/images/contacimage.png';
import { Facebook, Instagram, SendButton, Whatsapp } from './assests/common/icons';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setShowPopup(true); // Show the popup

        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        // Hide the popup after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };


    return (
        <div className="bg-lightblack mt-20">
            <div className="px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img
                        src={contactimage}
                        alt="contactimage"
                        className="w-[350px] py-10"
                    />
                    <div className='flex gap-5  justify-center items-center  md:justify-start md:items-start my-2'>
                        <a
                            href="https://www.facebook.com/anupduhan.duhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-white w-9 h-9 hover:bg-blue-800 hover:scale-110 transition-all duration-700 rounded-full flex justify-center items-center'
                        >
                            <Facebook />
                        </a>
                        <a
                            href="https://www.whatsapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-white w-9 h-9 rounded-full hover:scale-110 hover:bg-green-400 transition-all duration-700 flex justify-center items-center'
                        >
                            <Whatsapp />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-white w-9 h-9 hover:bg-rose-700 hover:scale-110 transition-all duration-700 rounded-full flex justify-center items-center'
                        >
                            <Instagram />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <form onSubmit={submitHandler} className="w-full p-8 rounded-lg">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            CONTACT ME
                        </h2>
                        {/* Name */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-white font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                maxLength={5}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-b-rose-700 focus:ring-0 focus-visible:ring-0 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent transition-all duration-300"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-white font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-b-rose-700 focus:ring-0 focus-visible:ring-0 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent transition-all duration-300"
                                required
                            />
                        </div>
                        {/* Message */}
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-white font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Write your message"
                                rows="1"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-b-rose-700 focus:ring-0 focus-visible:ring-0 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent transition-all duration-300"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 w-full items-center justify-center gap-2 flex bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-300 text-black font-bold rounded-lg "
                        >
                            Submit <SendButton />
                        </button>
                    </form>
                </div>
            </div>
            {showPopup && (
                <div className="fixed z-100 top-1/2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-10 py-5 rounded-lg shadow-lg">
                    Form Data Submitted Successfully!
                </div>
            )}
        </div>
    );
};

export default ContactPage;
