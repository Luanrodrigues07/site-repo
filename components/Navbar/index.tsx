'use client'
import Image from 'next/image'
import teste from '../../public/teste.png'
import { useState } from 'react'

export default function Navbar() {
  const [language, setlanguage] = useState('EN')

  const handleChangeLanguage = (selectedLanguage: 'PT' | 'EN') => {
    setlanguage(selectedLanguage)
  }
  return (
    <main>
      <div className="flex h-[4rem] min-h-full min-w-full items-center bg-transparent justify-center overflow-hidden">
        <h1 className="font-custom text-[25px]">NEXUS</h1>
        <div className="flex flex-row gap-10 text-white">
          <ul className="flex flex-row pl-[15rem] gap-10 text-white pt-1">
            <li className="cursor-pointer font-custom  hover:text-[#7F4AFF]">
              Home
            </li>
            <li className="cursor-pointer font-custom  hover:text-[#7F4AFF]">
              About-Us
            </li>
            <li className="cursor-pointer font-custom  hover:text-[#7F4AFF]">
              Contact
            </li>
            <li className="cursor-pointer font-custom  hover:text-[#7F4AFF]">
              Portfolio
            </li>
            <li className="cursor-pointer font-custom  hover:text-[#7F4AFF]">
              Careers
            </li>
          </ul>
          <div className="bgcustom rounded-[8rem] flex h-[2rem] w-[10rem] bg-[#7F4AFF] justify-center align-middle rounded-[16px">
            <button className="rounded-[8px] border-none">
              Request a Quote
            </button>
          </div>
          <div className="flex gap-3 bg-gray-600 w-[5.5rem] justify-center rounded-[16px] items-center text-[12px]">
            <button
              style={{ color: language === 'PT' ? '#30F2A3' : 'white' }}
              className={`text-${
                language === 'PT' ? '#30F2A3' : 'white'
              } rounded-[50%] hover:text-[#30F2A3]`}
              onClick={() => handleChangeLanguage('PT')}
            >
              PT
            </button>
            <p className=" cursor-default">|</p>
            <button
              style={{ color: language === 'EN' ? '#30F2A3' : 'white' }}
              className={`text-${
                language === 'EN' ? '#30F2A3' : 'white'
              } rounded-[50%] hover:text-[#30F2A3]`}
              onClick={() => handleChangeLanguage('EN')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
