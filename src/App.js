import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import logo from './logo.svg';
import './App.css';
import Navbar from './components/assests/common/Navbar';
import HeroPage from './components/HeroPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/Services';
import ProjectsSlider from './components/ProjectsSlider';
import Footer from './components/assests/common/Footer';
import ContactPage from './components/ContactPage';
import BackToTop from './components/assests/common/BackTOTOp';
import Preloader from './components/assests/common/Preloader'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
      mirror: false,
    });

    // Simulate loading time for the preloader
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading is true
  }

  return (
    <>
    <div className='overflow-clip'>
      <BackToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<ProjectsSlider />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
      <Footer />
      </div>
    </>
   
  );
}

export default App;
