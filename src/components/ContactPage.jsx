import React from 'react';
import contactimage from '../components/assests/images/contacimage.png';
import { SendButton } from './assests/common/icons';

const ContactPage = () => {
    return (
        <div className="bg-lightblack mt-20">
            <div className="px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img
                        src={contactimage}
                        alt="contactimage"
                        className="w-[350px] py-10"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <form className="w-full p-8 rounded-lg">
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
                                placeholder="Write your message"
                                rows="1"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-b-rose-700 focus:ring-0 focus-visible:ring-0 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent transition-all duration-300"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 w-full items-center justify-center gap-2 flex hover:text-white bg-white text-black font-bold rounded-lg shadow-md hover:bg-rose-700 transition-all duration-1000"
                        >
                            Submit <SendButton />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
