import React from 'react'
import HeroPage from '../HeroPage'
import AboutPage from '../AboutPage'
import SkillsPage from '../SkillsPage'
import Services from '../Services'
import ProjectsSlider from '../ProjectsSlider'
import ContactPage from '../ContactPage'

const Home = () => {
  return (
    <div>
        <HeroPage/>
        <AboutPage/>
        <SkillsPage/>
        <Services/>
        <ProjectsSlider/>
        <ContactPage/>
    </div>
  )
}

export default Home