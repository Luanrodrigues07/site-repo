'use client'
import { Database, DeviceMobile, Globe, HardDrives } from 'phosphor-react'

export default function Knowledgement() {
  return (
    <div className=" text-center mt-[1rem]">
      <h1 className=" text-3xl font-bold pt-[1rem] textCustomG">
        Understand our knowledge
      </h1>
      <div className="flex h-[80rem] justify-center items-center overflow-hidden pb-[8rem]">
        <div className=" p-4 rounded-[8px] grid lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[8px] bgcustom w-[40rem] h-[30rem]">
            <div className=" p-4 rounded-t-[8px] bg-slate-800 w-[40rem] h-[5rem] flex items-center gap-6 flex-row font-bold">
              <DeviceMobile size={40} />
              <h2>Mobile Development </h2>
            </div>
            <div className="h-[20rem] p-[1rem] justify-center items-center flex">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                totam. Amet ipsa praesentium eligendi iure itaque, quidem nemo
                velit ratione delectus temporibus et vel eum facere suscipit
                rerum quo eaque?
              </p>
            </div>
          </div>
          <div className="rounded-[8px] bgcustom w-[40rem] h-[30rem]">
            <div className=" p-4 rounded-t-[8px] bg-slate-800 w-[40rem] h-[5rem] flex items-center gap-6 flex-row font-bold">
              <Globe size={40} />
              <h2>Front-End Development </h2>
            </div>
            <div className="h-[20rem] p-[1rem] justify-center items-center flex">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                totam. Amet ipsa praesentium eligendi iure itaque, quidem nemo
                velit ratione delectus temporibus et vel eum facere suscipit
                rerum quo eaque?
              </p>
            </div>
          </div>
          <div className="rounded-[8px] bgcustom w-[40rem] h-[30rem]">
            <div className=" p-4 rounded-t-[8px] bg-slate-800 w-[40rem] h-[5rem] flex items-center gap-6 flex-row font-bold">
              <Database size={40} />
              <h2>Data Development </h2>
            </div>
            <div className="h-[20rem] p-[1rem] justify-center items-center flex">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                totam. Amet ipsa praesentium eligendi iure itaque, quidem nemo
                velit ratione delectus temporibus et vel eum facere suscipit
                rerum quo eaque?
              </p>
            </div>
          </div>
          <div className="rounded-[8px] bgcustom w-[40rem] h-[30rem]">
            <div className=" p-4 rounded-t-[8px] bg-slate-800 w-[40rem] h-[5rem] flex items-center gap-6 flex-row font-bold">
              <HardDrives size={40} />
              <h2>Back-End Development </h2>
            </div>
            <div className="h-[20rem] p-[1rem] justify-center items-center flex">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                totam. Amet ipsa praesentium eligendi iure itaque, quidem nemo
                velit ratione delectus temporibus et vel eum facere suscipit
                rerum quo eaque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
