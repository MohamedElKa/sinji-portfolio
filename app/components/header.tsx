"use client";
// import { Toggle } from "@radix-ui/react-toggle";
import {motion} from "motion/react"
import Link from "next/link";
import "../app_css/globals.css"
import { Toggle } from "@/components/ui/toggle"
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import { useTheme } from "../context/themeContext";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
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
         className={"flex w-[1100px]  justify-between  items-center header"}>
            <h1 onClick={() =>{
                setActiveComponent("about")
            }} className="text-[56px] font-[800] cursor-pointer">SINJI</h1>
            <div className="flex gap-[15px] menu">
            <Menubar className="menu cursor-pointer">
  <MenubarMenu >
    <MenubarTrigger className="text-[22px] cursor-pointer">Menu</MenubarTrigger>
    <MenubarContent align="end" >
      <MenubarItem onClick={() =>{setActiveComponent("about")}} className="text-[25px] cursor-pointer">About</MenubarItem>
      <MenubarItem onClick={() =>{setActiveComponent("techs")}} className="text-[25px] cursor-pointer">Techs</MenubarItem>
      <MenubarItem onClick={() =>{setActiveComponent("projects")}} className="text-[25px] cursor-pointer">Projects</MenubarItem>
      
    </MenubarContent>
  </MenubarMenu>
</Menubar>
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
                </div>

            <ul className="links text-[39px] items-center font-[400] links flex gap-[25px]">
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
            <Toggle className="Toggle text-[39px] w-[35px] h-[35px]">  {theme == "light" ? <Moon className="w-[35px] h-[35px]"/> : <Sun className="w-[45px] h-[45px]"/>}  
            </Toggle>
            </li>

            </ul>
        </motion.header>
    )
}