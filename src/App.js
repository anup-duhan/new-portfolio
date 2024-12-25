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

function App() {
  return (
    <>
    <BackToTop/>
    <Navbar/>
    <Routes>
    <Route path="*" element={<Navigate to="/" replace />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/Skills' element={<SkillsPage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<ProjectsSlider/>}/>
      <Route path='contacts' element={<ContactPage/>}/>
    </Routes>
    <Footer/>

    </>
  );
}

export default App;
