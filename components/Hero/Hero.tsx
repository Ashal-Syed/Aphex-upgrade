import React from 'react'
import Button from '../UI/Button/Button'
import Hero_Image from './Hero_Image'

const Hero = () => {
  return (
    <section data-label="Full Section" className="w-full flex items-center justify-between py-5 lg:py-30">
      <div data-label="Left" className="w-full lg:w-1/2 h-full flex justify-center flex-col gap-7">
        <h1 className="text-heading">Pharmaceutical Quality, CMC and CMC Regulatory Services</h1>
        <div data-label="Description">
          <p className="text-body">With 30 years of expertise, you can rely on. Your partner in Pharmaceutical Quality, CMC and regulatory solutions</p>
        </div>
        <Button text='Read More' link='/about_us'/>
      </div>
      
          <div
      data-label="Right"
      className="hidden lg:flex w-1/2 h-full items-center justify-end"
    >
        <Hero_Image />
      </div>

    </section>
  )
}

export default Hero