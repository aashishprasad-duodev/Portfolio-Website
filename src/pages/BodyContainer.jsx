import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from '../Components/AboutSection'


const BodyContainer = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <HeroSection/>        
        <AboutSection/>
    </div>
  )
}

export default BodyContainer