"use client"

import {motion} from "motion/react"
import { ExpandableCardDemo } from "./expendable"

export default function Projects(){
    return (
        <motion.div 
    initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.3}}
    className="w-[100%] h-[100%]">
      <h1 className="text-[#000000] text-[47px]">Projects</h1>
      <p className="text-[#2b2b2b] text-[24px] mb-[25px]">"A selection of projects I’ve worked on. Some are private, but others can be found on my GitHub."</p>
      <ExpandableCardDemo />


    </motion.div>
    )
}