import React from "react";
import { FloatingDock } from "./floating-dock";
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";

// import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <Linkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mohamed-el-karmi-9992b3255/",
    },

    {
      title: "Github",
      icon: (
        <Github  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/MohamedElKa",
    },
    {
      title: "Instagram",
      icon: (
        <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/elsimokarmi/",
    },
    // {
    //   title: "Aceternity UI",
    //   icon: (
    //     <Image
    //       src="https://assets.aceternity.com/logo-dark.png"
    //       width={20}
    //       height={20}
    //       alt="Aceternity Logo"
    //     />
    //   ),
    //   href: "#",
    // },
    {
      title: "Discord",
      icon: (
        <FaDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discordapp.com/users/858475231525601302",
    },

    {
      title: "Reddit",
      icon: (
        <FaRedditAlien className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Mohamed59543099",
    },
  ];
  return (
    <div className="flex  items-center justify-center w-[100%] h-[100%]">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
