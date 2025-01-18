import React, { useState } from 'react';
import contactimage from '../components/assests/images/contacimage.png';
import { Facebook, Instagram, SendButton, Whatsapp } from './assests/common/icons';
import emailjs from 'emailjs-com';
import verified from '../components/assests/images/verified.gif';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear errors as the user types
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
        if (!formData.email.trim()) newErrors.email = 'Please enter your email.';
        if (!formData.number.trim() || formData.number.length !== 10) newErrors.number = 'Please enter a valid 10-digit mobile number.';
        if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
        return newErrors;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Send the form data with emailjs
        emailjs
            .sendForm(
                'service_5f78p17',
                'template_d8tfytw',
                e.target,
                'xb0mdTrfSBY4WC1Dn'
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    setShowPopup(true);

                    setFormData({
                        name: '',
                        email: '',
                        number: '',
                        message: ''
                    });

                    setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
                },
                (error) => {
                    console.log('Error sending email:', error.text);
                }
            );
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
                    <div className="flex gap-5 justify-center items-center md:justify-start md:items-start my-2" data-aos="fade-up"
                        data-aos-duration="3000">
                        <a
                            href="https://www.facebook.com/anupduhan.duhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white w-9 h-9 hover:bg-blue-800 hover:scale-110 transition-all duration-700 rounded-full flex justify-center items-center"
                        >
                            <Facebook />
                        </a>
                        <a
                            href="https://wa.me/9671444736"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white w-9 h-9 rounded-full hover:scale-110 hover:bg-green-400 transition-all duration-700 flex justify-center items-center"
                        >
                            <Whatsapp />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white w-9 h-9 hover:bg-rose-700 hover:scale-110 transition-all duration-700 rounded-full flex justify-center items-center"
                        >
                            <Instagram />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <form onSubmit={submitHandler} className="w-full p-8 rounded-lg" data-aos="zoom-in">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            CONTACT ME
                        </h2>
                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:border-b-rose-700 outline-none transition-all duration-300"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-b-rose-700 outline-none transition-all duration-300"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        {/* Mobile Number */}
                        <div className="mb-4">
                            <label htmlFor="number" className="block text-white font-medium mb-2">
                                Mobile Number
                            </label>
                            <input
                                type="number"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleInputChange}
                                placeholder="Enter your mobile number"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-b-rose-700 outline-none transition-all duration-300"
                            />
                            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                        </div>
                        {/* Message */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Write your message"
                                rows="1"
                                className="w-full px-4 py-2 text-white border-b border-white bg-lightblack caret-white shadow-sm placeholder-gray-400 focus:outline-none focus:border-b-rose-700 outline-none transition-all duration-300"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 w-full items-center justify-center gap-2 flex bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-300 text-black font-bold rounded-lg"
                        >
                            Submit <SendButton />
                        </button>
                    </form>
                </div>
            </div>
            {showPopup && (
                <div className="fixed flex justify-center items-center z-100 top-1/2 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold px-10 py-5 rounded-lg shadow-lg opacity-100 transition-opacity duration-1000 ease-in-out">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-line"></div>
                    <img src={verified} alt="tickicon" className="w-12 mr-4" />
                    <h1 className="text-green-600 font-bold">Information Submitted Successfully!</h1>
                </div>
            )}
        </div>
    );
};

export default ContactPage;
