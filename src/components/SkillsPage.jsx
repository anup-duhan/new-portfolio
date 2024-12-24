import React from 'react'
import skills from '../components/assests/images/skills.png'
import html from '../components/assests/images/🦆 icon _HTML 5 Logo_.png'
import css from '../components/assests/images/🦆 icon _Alternate CSS3 Logo_.png'
import bootstrap from '../components/assests/images/🦆 icon _Bootstrap_.png'
import javascript from '../components/assests/images/🦆 icon _JavaScript (JS) Square_.png'
import react from '../components/assests/images/🦆 icon _React_.png'
import vector from '../components/assests/images/Vector.png'
const SkillsPage = () => {
  return (
    <div className='py-10'>
      <div className='px-4 md:px-14 mx-auto grid grid-cols-1 md:grid-cols-2 '>
        <div className=''>
          <h3 className='text-fourty font-bold text-textmaincolor'> SKILLS</h3>
          <div>
            <p className='text-2xl  font-semibold mt-5'>HTML/HTML5</p>
            <input type="range" class="range-input w-[90%] accents" max="100" min="0" value="90" />
            <p className='text-2xl text-black font-semibold '>CSS/CSS3</p>
            <input type="range" class="range-input w-[90%] accents" max="100" min="0" value="80" />
            <p className='text-2xl text-black font-semibold '>TaILWINDCSS</p>
            <input type="range" class="range-input w-[90%] accents" max="100" min="0" value="85" />
            <p className='text-2xl text-black font-semibold '>BOOTSTRAP</p>
            <input type="range" class="range-input w-[90%] accents" max="100" min="0" value="75" />
            <p className='text-2xl text-black font-semibold '>REACT JS</p>
            <input type="range" class="range-input w-[90%] accents" max="100" min="0" value="90" />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={skills} alt="skills" className='w-[300px] my-5 md:my-0' />
        </div>
      </div>
      <div className='bg-background mt-5'>
        <div className='max-w-7xl mx-auto px-4 md:px-14 lg:px-6 md:py-10'>
          <div class="overflow-hidden">
            <div class="running flex gap-4 justify-center items-center">

              <div class="min-w-[300px]">
                <img src={html} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={css} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={bootstrap} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={react} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={vector} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={bootstrap} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={html} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={javascript} alt="apple" className='w-[100px]' />
              </div>



              <div class="min-w-[300px]">
                <img src={css} alt="apple" className='w-[100px]' />
              </div>


              <div class="min-w-[300px]">
                <img src={react} alt="apple" className='w-[100px]' />
              </div>

              <div class="min-w-[300px]">
                <img src={html} alt="apple" className='w-[100px]' />
              </div>

              <div class="min-w-[300px]">
                <img src={bootstrap} alt="apple" className='w-[100px]' />
              </div>
              <div class="min-w-[300px]">
                <img src={vector} alt="apple" className='w-[100px]' />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default SkillsPage