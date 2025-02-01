import React from 'react'
import LOGO from "@/images/logo.png";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdDarkMode , MdLightMode} from "react-icons/md";

export default function Navbar(props) {
  return (
    <div className={`flex justify-between px-3 py-2 border-b-2 rounded-bl-xl rounded-br-xl ${props.lightMode ? "bg-gradient-to-b from-green-300 to-white text-black" : "bg-gradient-to-b from-green-600 to-black text-white"}`}>
        <div className='flex '>
          <div>
            <Image src={LOGO} alt='logo' width={80} height={80} />
          </div>
          <div className='flex items-center'>
            <h1 className='font-bold text-3xl'>sealX3</h1>
          </div>
        </div>

        <div className='flex items-center gap-4 px-3'>
        <a href="https://github.com/harshawasthi512" className='hover:scale-110 duration-300 hover:text-blue-800 hover:cursor-pointer' target='blank'><FaGithub fontSize={32}/></a>
        <a href="https://www.linkedin.com/in/harsh-awasthi-831a9b27b" className='hover:scale-110 duration-300 hover:text-blue-500 hover:cursor-pointer' target='blank'><FaLinkedin fontSize={32}/></a>
        <a href="https://www.instagram.com/ig.harsh._" className='hover:scale-110 duration-300 hover:text-pink-500 hover:cursor-pointer' target='blank'><FaSquareInstagram fontSize={32}/></a>
        {
          props.lightMode ? (
            <div className='hover:scale-110 duration-300' onClick={()=>props.setlightMode(!props.lightMode)}>
              <MdDarkMode fontSize={32}/>
            </div>
          ) : (
            <div className='hover:scale-110 duration-300' onClick={()=>props.setlightMode(!props.lightMode)}>
              <MdLightMode fontSize={32}/>
            </div>
          )
        }
        </div>
    </div>
  )
}
