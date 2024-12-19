import logo from './logo.svg';
import './App.css';
import Navbar from './components/assests/common/Navbar';
import HeroPage from './components/HeroPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="*" element={<Navigate to="/" replace />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/Skills' element={<SkillsPage/>}/>
    </Routes>

    </>
  );
}

export default App;
