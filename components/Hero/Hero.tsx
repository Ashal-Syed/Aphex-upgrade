import React from 'react'
import Button from '../UI/Button/Button'
import Hero_Image from './Hero_Image'

const Hero = () => {
  return (
    <section data-label="Full Section" className="w-full h-[480px] flex items-center justify-between py-5">
      <div data-label="Left" className="w-1/2 h-full flex justify-center flex-col gap-7">
        <h1 className="text-heading">Pharmaceutical Quality, CMC and CMC Regulatory Services</h1>
        <div data-label="Description">
          <p className="text-body">With 30 years of expertise, you can rely on. Your partner in Pharmaceutical Quality, CMC and regulatory solutions</p>
        </div>
        <Button text='Read More' link='/about_us'/>
      </div>
      
      <Hero_Image />

    </section>
  )
}

export default Hero