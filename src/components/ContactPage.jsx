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
    message: '',
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
    if (!formData.number.trim() || formData.number.length !== 10)
      newErrors.number = 'Please enter a valid 10-digit mobile number.';
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
        () => {
          setShowPopup(true);
          setFormData({
            name: '',
            email: '',
            number: '',
            message: '',
          });

          setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <section className="bg-lightblack mt-20" aria-labelledby="contact-heading">
      <div className="px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src={contactimage}
            alt="Contact Us"
            className="w-[350px] py-10"
            loading="lazy" // Lazy-load image
          />
          <div
            className="flex gap-5 justify-center md:justify-start my-2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <a
              href="https://www.facebook.com/anupduhan.duhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="bg-white w-9 h-9 hover:bg-blue-800 hover:scale-110 transition-all duration-700 rounded-full flex justify-center items-center"
            >
              <Facebook />
            </a>
            <a
              href="https://wa.me/9671444736"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="bg-white w-9 h-9 rounded-full hover:scale-110 hover:bg-green-400 transition-all duration-700 flex justify-center items-center"
            >
              <Whatsapp />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
              className="bg-white w-9 h-9 hover:bg-rose-700 hover:scale-110 transition-all duration-700 rounded-full flex justify-center items-center"
            >
              <Instagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className='my-2'>
          <form
            onSubmit={submitHandler}
            className="w-full p-8 rounded-lg bg-gray-800"
            data-aos="zoom-in"
            aria-labelledby="form-heading"
          >
            <h2 id="form-heading" className="text-2xl font-bold text-white mb-6">
              CONTACT ME
            </h2>

            {/* Name Field */}
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
                className="w-full px-4 py-2 border-b border-white bg-gray-800 text-white shadow-sm placeholder-gray-400 focus:border-rose-700 outline-none transition-all"
                aria-required="true"
              />
              {errors.name && (
                <p className="text-red-500 text-sm" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
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
                className="w-full px-4 py-2 border-b border-white bg-gray-800 text-white shadow-sm placeholder-gray-400 focus:border-rose-700 outline-none transition-all"
                aria-required="true"
              />
              {errors.email && (
                <p className="text-red-500 text-sm" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mobile Number Field */}
            <div className="mb-4">
              <label htmlFor="number" className="block text-white font-medium mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 border-b border-white bg-gray-800 text-white shadow-sm placeholder-gray-400 focus:border-rose-700 outline-none transition-all"
                aria-required="true"
              />
              {errors.number && (
                <p className="text-red-500 text-sm" role="alert">
                  {errors.number}
                </p>
              )}
            </div>

            {/* Message Field */}
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
                rows="3"
                className="w-full px-4 py-2 border-b border-white bg-gray-800 text-white shadow-sm placeholder-gray-400 focus:border-rose-700 outline-none transition-all"
                aria-required="true"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all text-black font-bold rounded-lg"
            >
              Submit <SendButton />
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div
          className="fixed flex justify-center items-center z-50 top-1/2 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold px-10 py-5 rounded-lg shadow-lg"
          role="dialog"
          aria-live="assertive"
        >
          <img src={verified} alt="Success" className="w-12 mr-4" loading="lazy" />
          <h1 className="text-green-600 font-bold">
            Information Submitted Successfully!
          </h1>
        </div>
      )}
    </section>
  );
};

export default ContactPage;
