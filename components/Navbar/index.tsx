import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button/Button'

const Navbar = () => {
  return (
        <div className="w-full h-30 py-9 flex justify-between items-center gap-25">
          <div className="h-full inline-flex justify-left items-center  font-medium text-xl">
            <Image
              src="/assets/logo-white.svg"
              alt="Logo"
              width={100}
              height={100}
            ></Image>

            <h1 className="font-bold text-white text-sm">Aphex Pharma Solutions</h1>        
          </div>

          <div className="inline-flex h-4 text-white items-center justify-center">
            <ul className="flex gap-8 text-center items-center">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Seminars</li>
              <li>PDC</li>
              <li>eQMS (CloudTheApp)</li>
            </ul>
          </div>

          <Button text="Contact Us" />
        </div>
  )
}

export default Navbar