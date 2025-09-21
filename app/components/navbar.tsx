"use client";
import { links } from "../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/section-context";
import { useEffect } from "react";
import { useWindowSizeHook } from "../lib/hooks";
import { ModeToggle } from "./Mode-toggle";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const width = useWindowSizeHook();

  useEffect(() => {
    const linksContainer = document.getElementById("links-container");
    const activeLink = document.getElementById(activeSection);
    if (linksContainer && activeLink && width < 700) {
      setTimeout(() => {
        linksContainer.scrollTo({
          left: activeLink.offsetLeft - linksContainer.offsetWidth / 2,
          behavior: "smooth",
        });
      }, 750); // allow time for section to scroll into view
    }
  }, [activeSection, width]);

  const renderedLinks = links.map(({ hash, label }, index) => {
    return (
      <li key={hash}>
        <Link
          href={hash}
          id={label}
          onClick={() => {
            setActiveSection(label);
            setTimeOfLastClick(Date.now());
          }}
          className={`${
            index === 0 ? "ml-2" : index === links.length - 1 && "mr-2"
          } rounded-full outline-none relative transition-all dark:text-gray-400 text-gray-100 font-medium px-4 py-1.5 flex ${
            activeSection == label
              ? "dark:text-white font-medium"
              : "hover:bg-slate-700 hover:text-white"
          }`}
        >
          {label}
          {label === activeSection && (
            <motion.span
              className="absolute inset-0 -z-10 rounded-full bg-sjsu-gold"
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </li>
    );
  });

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="fixed left-1/2 top-0 z-10 flex w-full max-w-full -translate-x-1/2 transform bg-slate-800/50 py-4 outline-none backdrop-blur-md sm:bg-slate-800/75 md:top-6 md:w-auto md:rounded-full md:p-2"
    >
      <ul
        id="links-container"
        className="scroll-hide flex items-center gap-1 overflow-x-auto sm:gap-2"
      >
        {renderedLinks}
      </ul>
      <button className="rounded !bg-[#565F6C] text-black dark:bg-black dark:text-white">
        <ModeToggle />
      </button>
    </motion.nav>
  );
}
