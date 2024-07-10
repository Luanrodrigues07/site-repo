"use client";

import Image from "next/image";
import logo from "../../app/nexuslogo.png";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Banner() {
  const redirectToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/company/101440268/";
  };

  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/nexus_software/";
  };

  return (
    <div className="bgcustom flex justify-center items-center h-[100vh] min-h-full min-w-full text-[white] gap-10 flex-col overflow-hidden">
      <Image src={logo} width={150} alt="" quality={100} />

      <div className="flex justify-center items-center flex-col">
        <h2 className="text-[20px] font-bold">Nosso site está em manutenção</h2>
        <p className="text-[15px] font-custom">Voltamos em breve!</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div onClick={redirectToLinkedIn} className="cursor-pointer">
          <FaLinkedin size={40} fill="white" />
        </div>
        <div onClick={redirectToInstagram} className="cursor-pointer">
          <FaInstagramSquare size={40} fill="white" />
        </div>
      </div>
    </div>
  );
}
