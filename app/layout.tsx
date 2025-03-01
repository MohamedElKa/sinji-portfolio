'use client'
import "./app_css/globals.css";
import { Karantina } from 'next/font/google';
import Header from "./components/header";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from "react";
import { WiMoonAltNew } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";
import { useMotionValue } from "motion/react";
import { AnimatePresence, motion, useScroll } from "motion/react"
import { usePathname, useRouter } from "next/navigation";
import About from "./components/about";
import Techs from "./components/techs";
import Projects from "./components/projects";
import { Twitter } from 'lucide-react';
import { FloatingDockDemo } from "./components/floatingDock";
import { ThemeProvider } from "./context/themeContext";
import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";
const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");

  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setBodyHeight(document.body.scrollHeight);
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(document.body);

    // Initial height
    updateHeight();

    return () => observer.disconnect();
  }, []);
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
        className={`${karantina.className} bg-[#D9D9D9] max-w-[100vw] flex flex-col items-center justify-center ` + (theme === "dark" ? "bg-black" : "bg-white")}
      >
        <ThemeProvider theme={theme} setTheme={setTheme}>
          <Header setActiveComponent={setActiveComponent}/>
          <div className="w-[1100px] w-[1100px] about pt-[75px] pb-[75px]">
          <AnimatePresence mode="wait">
            {renderComponent()}
          </AnimatePresence>
          </div>
          <AnimatePresence>
            <footer className="h-[135px] w-[100%] pb-[25px] flex flex-col justify-center items-center">
                <FloatingDockDemo />
                <p className="text-[#2B8FAB] text-[18px]">Copyright ©2025 All rights reserved to Sinji (mel-karm)</p>      
            </footer>
            {/* <motion.div className="w-[100vw] h-[555px]">

      
          </motion.div> */}
          </AnimatePresence>

        </ThemeProvider>
        <ShootingStars bodyHeight={bodyHeight}/>
      <StarsBackground bodyHeight={bodyHeight}/>
      </body>
    </html>
  );
}
