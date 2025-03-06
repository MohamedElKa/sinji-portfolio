"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./useOutsideHook";
// import { useTheme } from "../context/themeContext";
import { X } from 'lucide-react';
import { Github } from 'lucide-react';


export function ExpandableCardDemo({theme} : {theme: string}) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <X />
            </motion.button>
          <motion.div
  layoutId={`card-${active.title}`}
  ref={ref}
  className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{
    opacity: 0,
    scale: 0.95, // Optional: You can add a scaling effect for more dynamic closing
    transition: {
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 },
    },
  }}
>
  <motion.div layoutId={`image-${active.title}`}>
    <Image
      priority
      width={500}
      height={500}
      src={active.src}
      alt={active.title}
      className="w-[500px] h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
    />
  </motion.div>

  <div>
    <div className="flex justify-between items-start p-4">
      <div className="">
        <motion.h3
          layoutId={`title-${active.title}`}
          className="font-bold text-neutral-700 text-[25px] dark:text-neutral-200"
        >
          {active.title}
        </motion.h3>
        <motion.p
          layoutId={`description-${active.title}`}
          className="text-neutral-600 dark:text-neutral-400 text-[20px]"
        >
          {active.description}
        </motion.p>
      </div>

      <motion.a
        layoutId={`button-${active.title}`}
        href={active.ctaLink}
        target="_blank"
        className="w-[45px] h-[45px] flex justify-center items-center text-sm rounded-full font-bold bg-[#2B8FAB] text-white"
      >
            <Github />
      </motion.a>
    </div>
    <div className="pt-4 relative px-4">
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-neutral-600 text-[22px]   h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
      >
        {typeof active.content === "function"
          ? active.content()
          : active.content}
      </motion.div>
    </div>
  </div>
</motion.div>

          </div>
        ) : null}
      </AnimatePresence>
      <ul className="projectsList w-[1100px] mx-auto w-full ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}-${index}`}
            key={`card-${card.title}-${id}-${index}`}
            onClick={() => setActive(card)}
            className="p-4  flex flex-col transition-2 md:flex-row justify-between items-center hover:bg-neutral-50 hover:text-[#ffffff] hover:text-black dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}-${index}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-[100%] w-[100%] md:h-[95px] md:w-[95px] rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}-${index}`}
                  className={"font-medium text-[31px] text-center md:text-left " + (theme === "dark" ? "text-[#D6D6D6]": "text-black")}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}-${index}`}
                  className="text-neutral-600 text-[23px] dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}-${index}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#2B8FAB] hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Web",
    title: "ft_transcendence",
    src: "/projects/ft_trans_h.png",
    ctaText: "Show",
    ctaLink: "https://github.com/MohamedElKa/ft_transcendence",
    content: () => {
      return (
        <p>
       Developed a real-time multiplayer web app as part of my
42 curriculum final project. Built the frontend using
Next.js and Tailwind, while the backend uses Django and
PostgreSQL. Integrated authentication (2FA), WebSockets
for real-time interactions, and Docker for
containerization. The project reinforced my skills in
scalability, security, and full-stack development.
        </p>
      );
    },
  },
  {
    description: "Low Level",
    title: "Minishell ",
    src: "/projects/m_h.png",
    ctaText: "Show",
    ctaLink: "https://github.com/MohamedElKa/minishell",
    content: () => {
      return (
        <p>
         Built a lightweight Unix shell in C, replicating Bash
functionalities.
Implemented
command
parsing,
environment variables, process handling (fork, execve,
waitpid), and redirections. Focused on memory
management (malloc/free) and avoiding leaks using
valgrind. This project deepened my understanding of
system calls and low-level programming.
        </p>
      );
    },
  },

  {
    description: "Low Level",
    title: "Cub3d",
    src: "/projects/c_h.png",
    ctaText: "Show",
    ctaLink: "https://github.com/MohamedElKa/cub3d",
    content: () => {
      return (
        <p>
          A 3D game engine implemented in C, using raycasting to render a 3D world in a 2D map.
        </p>
      );
    },
  },
  {
    description: "Web",
    title: "Chat App",
    src: "/projects/Chat.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <p>
         Coming Soon...
        </p>
      );
    },
  },
  {
    description: "Low Level",
    title: "IRC Server",
    src: "/projects/Chat.png",
    ctaText: "Show",
    ctaLink: "https://github.com/MohamedElKa/ft_irc",
    content: () => {
      return (
        <p>
         Designed and implemented a custom IRC server in C++,
supporting multi-client communication, channels,
authentication, and basic chat commands. Used
poll/select for handling multiple connections efficiently.
The biggest challenge was ensuring stable and
concurrent communication between users while
maintaining performance and security.
        </p>
      );
    },
  },
  {
    description: "Others",
    title: "Rest of 1337 Projects",
    src: "/projects/r_h.png",
    ctaText: "Show",
    ctaLink: "https://github.com/MohamedElKa?tab=repositories",
    content: () => {
      return (
        <p>
         Mainly in C and some in C++, these projects cover a wide range of topics, including data structures, algorithms, networking, and more.
        </p>
      );
    },
  },
];
