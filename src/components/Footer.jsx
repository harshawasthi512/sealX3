import React from 'react'
import LOGO from "@/images/logo.png";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";


export default function Footer(props) {
    return (
        <div className={`rounded-tl-xl rounded-tr-xl border-t-2 bg-gradient-to-t flex justify-around px-5 py-1 ${props.lightMode? ("from-green-300 to-white text-black") : ("from-green-600 to-black text-white")}`}>
            <div>
                <div className='flex items-center'>
                    <div>
                        <Image src={LOGO} height={100} width={100} alt='logo' />
                    </div>
                    <div className='justify-end items-end mb-3'>
                        <h1 className='font-bold text-3xl'>sealX3</h1>
                        <p className='text-sm'>Developed by Harsh Awasthi</p>
                    </div>
                </div>
                
            </div>
            <div className='justify-around'>
                <div className='gap-3'>
                    <div >
                        <a href="" className='hover:underline hover:underline-offset-4'>Privacy</a>
                    </div>
                    <div>
                        <a href="https://pixelsbeing.site" className='hover:underline hover:underline-offset-4' target='blank'>Get Your site</a>
                    </div>
                </div>
                <div className='flex gap-3 py-4'>
                    <div>
                        <a href="https://github.com/harshawasthi512" target='blank'><FaGithub fontSize={32} className='hover:scale-110 duration-300 hover:text-blue-800 hover:cursor-pointer' /></a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/harsh-awasthi-831a9b27b" target='blank'><FaLinkedin fontSize={32} className='hover:scale-110 duration-300 hover:text-blue-500 hover:cursor-pointer'/></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/ig.harsh._" target='blank'><FaSquareInstagram fontSize={32} className='hover:scale-110 duration-300 hover:text-pink-500 hover:cursor-pointer'/></a>
                    </div>



                </div>

            </div>
        </div>
    )
}
