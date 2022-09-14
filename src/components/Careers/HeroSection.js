import React from 'react'
import CareersHero from "../../images/careersHero.png";

const HeroSection = () => {
  return (
    <div className='flex xl:flex-row lg:flex-row flex-col items-center justify-around h-screen w-full'>
        {/* text  */}
        <div className='xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold xl:w-1/2 lg:w-1/2 w-full flex justify-center items-center '>
            <span className='xl:w-3/6 lg:w-3/6 w-full xl:px-0 lg:px-0 px-10'>Find your dream jobs with us easily</span>
        </div>

        {/* heroImage */}
        <div className='h-full flex items-center xl:w-1/2 lg:w-1/2 w-full'>
          <img src={CareersHero} alt="" className='h-4/6'/>
        </div>
    </div>
  )
}

export default HeroSection