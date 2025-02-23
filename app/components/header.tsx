"use client";
// import { Toggle } from "@radix-ui/react-toggle";
import {motion} from "motion/react"
import Link from "next/link";
import "../app_css/globals.css"
import { Toggle } from "@/components/ui/toggle"
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import { useTheme } from "../context/themeContext";

export default function Header({setActiveComponent} : {setActiveComponent: any}){
    const {theme, setTheme} = useTheme()
    return (
        <motion.header 
         initial={{ y: -355}}
         animate={{ y: 0}}
         onClick={() =>{
         }}
         style={{color: (theme === "dark" ? "#D6D6D6": "black")}}
         transition={{duration: 0.5}}
         className={"flex max-w-[1100px] min-w-[1100px]  justify-between  items-center "}>
            <h1 className="text-[56px] font-[800] cursor-pointer">SINJI</h1>
            <ul className="text-[39px] items-center font-[400] links flex gap-[25px]">
                <li><Link href="#" onClick={() =>{setActiveComponent("about")}} className="font-[400]">ABOUT</Link></li>
                <li><Link href="#" onClick={() =>{setActiveComponent("techs")}}>TECHS</Link></li>
                <li><Link href="#" onClick={() =>{setActiveComponent("projects")}}>PROJECTS</Link></li>
            <li className="flex items-center" onClick={() =>{
                if (theme === "light") {
                    setTheme("dark")
                    }
                else{
                    setTheme("light")

                }
        }}>
            <Toggle className="Toggle text-[39px] w-[35px] h-[35px]">    <Moon className="w-[35px] h-[35px]"/>
            </Toggle>
            </li>

            </ul>
        </motion.header>
    )
}