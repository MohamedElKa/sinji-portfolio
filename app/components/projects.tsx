"use client"

import {motion} from "motion/react"
import { ExpandableCardDemo } from "./expendable"
import { useTheme } from "../context/themeContext"

export default function Projects(){
  const {theme, setTheme} = useTheme()
    return (
        <motion.div 
    initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.3}}
    className={"w-[100%] h-[100%] " + (theme === "dark" ? "text-[#D6D6D6]": "text-black")}>
      <h1 className=" text-[47px]">Projects</h1>
      <p className=" text-[24px] mb-[25px]">"&quot;A selection of projects I’ve worked on. Some are private, but others can be found on my GitHub.&quot;"</p>
      <ExpandableCardDemo theme={theme} setTheme={setTheme} />


    </motion.div>
    )
}