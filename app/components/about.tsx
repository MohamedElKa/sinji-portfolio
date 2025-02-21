"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import { motion, useMotionValue, useScroll } from "motion/react"

export default function About(){
    const [isFlip, setIsFlip] = useState<boolean>(true)
    const l = useMotionValue(0)
    useEffect(() =>{
        setTimeout(() =>{
            l.set(105);
        }, 1000)
    }, [])
    
    return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.3}} className="max-w-[100%] flex flex-col justify-center items-center">
        {/* <motion.div   initial={false} style={{x: l}}   className="w-[155px] h-[155px] bg-black">

        </motion.div> */}
           <motion.img
            src="/profile.png"
            className="w-[755px] h-[555px] profile"
            alt="profile"
            onClick={() =>{
                console.log("efef")
                setIsFlip(false)
            }}
            initial={{height: 0}}
            animate={{height: 555}}
            transition={{duration: 0.5}}
           >

           </motion.img>
           <div className="w-[755px] pt-[25px] pb-[25px]">
                <h1 className="text-[#2B8FAB] text-[34px]">Hi, I'm Mohamed ELKarmi</h1>
                <p className="text-[20px]">As a student at 1337 with four years of programming experience, I am deeply passionate about web development. Eager to continuously expand my skill set, I approach every challenge with enthusiasm and a thirst for knowledge. With a solid foundation in programming and a keen interest in exploring new technologies, I am ready to embark on new learning opportunities and contribute to impactful projects in the world of web development.
                </p>
           </div>
        </motion.div>
    )
}