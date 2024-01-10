'use client'

export default function Banner() {
  return (
    <div className="bgcustom flex justify-center items-center h-[45rem] min-h-full min-w-full text-[white] flex-col overflow-hidden">
      <h1 className="text-[60px] font-bold">The Nexus</h1>
      <h2 className="text-[60px] font-bold">will take you to the next level</h2>
      <p className="text-[35px] font-custom">We turn yours into reality</p>
      <div
        className="
       bg-black text-[white] rounded-[6rem] w-[20rem] 
       h-[3rem] mt-[4rem] flex items-center justify-center 
       hover:bg-gray-900 hover:transition-duration-1000 cursor-pointer"
      >
        <button className="">Discover our services</button>
      </div>
    </div>
  )
}
