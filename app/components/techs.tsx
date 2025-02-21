
"use client";

import { GlowingEffect } from "./glowing-effect";
import "../app_css/projects.css"
import { useState, useEffect } from "react";
import jsonData from "../data/pjs.json" assert { type: 'json' };
import Image from "next/image";
import {motion} from "motion/react"
const WebProjects = ({web}) =>{
  return ( <ul className="pList flex flex-wrap gap-[25px] xl:max-h-[34rem]">
    {
      web.map((w) =>{
        return (
          <GridItem
          key={w.name}
          name={w.name}
          type={w.type}
          image={w.image}

        />
        )
      })
    }
   
  </ul>)
}
const Tools = ({tools}) =>{
  return ( <ul className="pList flex flex-wrap gap-[25px] xl:max-h-[34rem]">
    {
      tools.map((t) =>{
        return (
          <GridItem
          key={t.name}
          name={t.name}
          type={t.type}
          image={t.image}

        />
        )
      })
    }
   
  </ul>)
}
const LowLevel = ({low_level}) =>{
  return ( <ul className="pList flex flex-wrap gap-[25px] xl:max-h-[34rem]">
    {
      low_level.map((l) =>{
        return (
          <GridItem
          key={l.name}
          name={l.name}
          type={l.type}
          image={l.image}

        />
        )
      })
    }
   
  </ul>)
}
export default function Techs() {
  const [data, setData] = useState({})
  useEffect(() =>{
    console.log(jsonData)
    setData(jsonData)
  }, [])
  useEffect(() =>{
    console.log(data.web)
  }, [data])
  return (
    <motion.div 
    initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.3}}
    className="w-[100%] h-[100%]">
      <h1 className="text-[#000000] text-[47px]">Technologies & Skills</h1>
      <p className="text-[#2b2b2b] text-[24px] mb-[25px]">"These are the technologies I have expertise in and use for development."</p>
        <h1 className="text-[38px] text-[#2B8FAB] mb-[25px]">Web</h1>
        {data.web && <WebProjects web={data.web}/>}
        <h1 className="text-[38px] text-[#2B8FAB] mt-[75px] mb-[25px]">Tools</h1>
        {data.tools && <Tools tools={data.tools}/>}
        <h1 className="text-[38px] text-[#2B8FAB] mt-[75px] mb-[25px]">Low Level</h1>
        {data.low_level && <LowLevel low_level={data.low_level}/>}


    </motion.div>
  );
}

interface GridItemProps {
  name: string;
  type: string;
  image: string;
  
}

const GridItem = ({name, type, image}: GridItemProps) => {
  return (
    <li className={`flex flex-col list-none w-[230px] md:w-[255px]`}>
      <div className="relative w-[230px] h-[155px] rounded-1.5xl border md:rounded-2xl">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="bg-white w-[230px] h-[155px] rounded-1.5xl pl-[15px] md:rounded-2xl relative flex items-center  h-full  gap-6 overflow-hidden  border-1.5 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <img
            className="w-[80px] h-[80px]"
            src={image}
            alt={name}
          ></img>
          <div>
              <h1 className="text-[27px]">{name}</h1>
              <h2 className="text-[20px] text-[#2B8FAB]">{type}</h2>
          </div>
        </div>
      </div>
    </li>
  );
};
