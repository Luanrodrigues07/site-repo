'use client'

import {
  FacebookLogo,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from 'phosphor-react'

export default function Footer() {
  return (
    <div>
      <div className="flex justify-between p-[5rem] bg-slate-900">
        <div className="flex justify-center items-start flex-col gap-3">
          <h1 className="font-bold text-[24px] pb-[1rem]">Services</h1>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Mobile Development
          </a>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Front-End Development
          </a>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Data Development
          </a>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Back-End Development
          </a>
        </div>
        <div className="flex justify-center items-start flex-col gap-3">
          <h1 className="font-bold text-[24px] pb-[2rem]">Browse</h1>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Carrers Nexus
          </a>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Events Nexus
          </a>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Cases Nexus
          </a>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Blog Nexus
          </a>
        </div>
        <div className="flex justify-center items-start flex-col gap-3">
          <h1 className="font-bold text-[24px] pb-[2rem]">Talk with us!</h1>
          <a className=" text-[12px] cursor-pointer hover:underline">
            Contato@Nexus.com
          </a>
          <div className="flex flex-row gap-2">
            <InstagramLogo className=" cursor-pointer" size={30} />
            <LinkedinLogo className=" cursor-pointer" size={30} />
            <FacebookLogo className=" cursor-pointer" size={30} />
            <YoutubeLogo className=" cursor-pointer" size={30} />
          </div>
        </div>
      </div>
      <div className=" py-5 bg-slate-900">
        <div className="border-b border-gray-600/20"></div>
        <div className="flex justify-center items-center flex-row w-[100%] gap-1">
          <a className=" text-[10px] pt-[0.5rem]">Nexus Software Development</a>
          <Globe className=" pt-[0.4rem]" size={20} />
        </div>
      </div>
    </div>
  )
}
