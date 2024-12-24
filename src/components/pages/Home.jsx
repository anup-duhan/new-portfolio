import React from 'react'
import HeroPage from '../HeroPage'
import AboutPage from '../AboutPage'
import SkillsPage from '../SkillsPage'
import Services from '../Services'
import ProjectsSlider from '../ProjectsSlider'

const Home = () => {
  return (
    <div>
        <HeroPage/>
        <AboutPage/>
        <SkillsPage/>
        <Services/>
        <ProjectsSlider/>
    </div>
  )
}

export default Home