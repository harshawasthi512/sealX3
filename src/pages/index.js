import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";



export default function Home() {
  const [lightMode,setlightMode] = useState(true)
  return (
    <div className={`${lightMode ? "bg-white" : "bg-black"} h-full`}>
      <Head>
        <title>Dlist</title>
      </Head>
      <div className="flex flex-col justify-between items-stretch h-full">
      <Navbar lightMode = {lightMode} setlightMode = {setlightMode}/>
      <Hero lightMode={lightMode}/> 
      <Footer lightMode={lightMode}/>
      </div>
    </div>
  );
}
