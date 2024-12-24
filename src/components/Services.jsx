import React from 'react'
import { CARDS_DATA_LIST } from './assests/common/helper'

const Services = () => {
    return (
        <div className="">
            <h2 className='text-fourty font-bold  text-center text-maincolor'> SERVICES </h2>
            <div className='max-w-7xl mx-auto px-4  grid grid-cols-1 md:grid-cols-4 py-10 gap-10'>
                    {CARDS_DATA_LIST.map((obj, i) => {
                        return (
                            <div key={i} className='shadow-custom-red px-7 py-10 rounded-lg gap-4 flex justify-start flex-col'>
                               <img src={obj.image} alt="webdesign" className='max-w-[350px]' />
                               <h1 className='text-2xl text-buttoncolor font-bold'>{obj.title}</h1>
                               <p className='text-lightblack text-xl font-semibold leading-tight'>{obj.description}</p>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    )
}

export default Services