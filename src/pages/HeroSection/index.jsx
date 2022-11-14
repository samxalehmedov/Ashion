import React from 'react'

const HeroSection = ({title}) => {
  return (
    <div className='relative flex justify-center items-center w-full lg:h-[500px] md:h-[400px] h-[300px] bg-productHeroBg bg-center bg-no-repeat bg-cover'>
        <h2 className='text-primary200 lg:text-[70px] md:text-6xl text-5xl font-bold capitalize'>{title}</h2>
    </div>
  )
}

export default HeroSection