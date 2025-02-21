'use client'
import "./app_css/globals.css";
import { Karantina } from 'next/font/google';
import Header from "./components/header";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from "react";

import { AnimatePresence, motion, useScroll } from "motion/react"
import { usePathname, useRouter } from "next/navigation";
import About from "./components/about";
import Techs from "./components/techs";
import Projects from "./components/projects";
import { Twitter } from 'lucide-react';
import { FloatingDockDemo } from "./components/floatingDock";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const [component, setComponent] = useState(About)
  const [activeComponent, setActiveComponent] = useState<string>("about");
  useEffect(() =>{
    const savedComponent = localStorage.getItem("Component")
    if (savedComponent){
      setActiveComponent(savedComponent)
    }
    else{
      setActiveComponent("about")

    }
  }, [])
  useEffect(() =>{
    localStorage.setItem("Component", activeComponent);
    
  }, [activeComponent])
  const renderComponent = () =>{
    if (activeComponent === "about"){
      return (<About key={"A"} />)
      // setComponent(About);
    }
    else if (activeComponent === "techs"){
      return (<Techs key={"T"} />)

    }
    else if (activeComponent === "projects"){
      return (<Projects key={"P"} />)

    }
  }
  return (
    <html lang="en">
      <body
        className={`${karantina.className} bg-[#D9D9D9] max-w-[100vw] flex flex-col items-center justify-center`}
      >

        <Header setActiveComponent={setActiveComponent}/>
        <div className="max-w-[1100px] min-w-[1100px] pt-[75px] pb-[75px]">
        <AnimatePresence mode="wait">
          {renderComponent()}
        </AnimatePresence>
        </div>
        <AnimatePresence>
          <footer className="h-[135px] w-[100%] bg-[#2B8FAB]">
              <FloatingDockDemo />          
          </footer>

        </AnimatePresence>
      </body>
    </html>
  );
}
