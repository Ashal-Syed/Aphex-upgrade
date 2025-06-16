import React from 'react'
import Button from '../UI/Button/Button'

const Hero = () => {
  return (
    <div className="w-full h-[480px] flex items-center justify-between p-5">
      <div className="w-[700px] h-full flex justify-center flex-col gap-7">
        <h1 className="text-white text-[44px] font-extrabold">Pharmaceutical Quality, CMC and CMC Regulatory Services</h1>
        <div className="">
          <p className="text-gray-200 text-md">With 30 years of expertise, you can rely on.</p>
          <p className="text-gray-200 text-md">Your partner in Pharmaceutical Quality, CMC and regulatory solutions</p>
        </div>
        <Button text='Read More'/>
        
      </div>
      <div className="w-96 h-64 relative scale-180 mr-30">
        <div className="w-96 h-64 absolute bg-[#1B15C5] rounded-full blur-[100px]" />
        <div className="w-72 h-52 left-[36.28px] top-[54.27px] absolute origin-top-left rotate-[-10deg] bg-zinc-300/0 rounded-[20px] border-2 border-indigo-400" />
        <img className="w-80 h-52 left-[50px] top-[26.50px] absolute rounded-[20px]" src="/assets/Images/hero-image.jpg" />
      </div>
    </div>
  )
}

export default Hero