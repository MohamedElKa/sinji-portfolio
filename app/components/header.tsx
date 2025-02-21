"use client";
import {motion} from "motion/react"
import Link from "next/link";

export default function Header({setActiveComponent} : {setActiveComponent: any}){
    return (
        <motion.header 
         initial={{ y: -355}}
         animate={{ y: 0}}
         onClick={() =>{
         }}
         transition={{duration: 0.5}}
         className="flex max-w-[1100px] min-w-[1100px]  justify-between  items-center">
            <h1 className="text-[56px] font-[800] cursor-pointer">SINJI</h1>
            <ul className="text-[39px] font-[400] links flex gap-[25px]">
                <li><Link href="#" onClick={() =>{setActiveComponent("about")}} className="font-[400]">ABOUT</Link></li>
                <li><Link href="#" onClick={() =>{setActiveComponent("techs")}}>TECHS</Link></li>
                <li><Link href="#" onClick={() =>{setActiveComponent("projects")}}>PROJECTS</Link></li>

            </ul>
        </motion.header>
    )
}