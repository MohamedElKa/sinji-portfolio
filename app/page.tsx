// import Image from "next/image";
"use client"
import About from "./components/about";
import {motion} from "motion/react"

export default function Home() {
    const AboutMotion = motion(About)
  
  return (
   <div>
            <AboutMotion exit={{x:1555}} transition={{duration: 1}}/>


   </div>)
}
