"use client";
import { motion } from "framer-motion";
import { socials } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { RiDownloadLine } from "react-icons/ri";
import Button from "./ui/button";
import Link from "next/link";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.75);

  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white/50 transition-all hover:text-sjsu-gold"
      >
        <Icon className="text-2xl md:text-3xl" />
      </Link>
    );
  });

  return (
    <section ref={ref} id="home" className="mb-24 scroll-mt-96">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="mb-3 text-xl font-light tracking-wider text-gray-400 sm:mb-6 md:text-2xl">
          Welcome! I&apos;m
        </h1>
        <h1 className="mb-1 flex items-end text-5xl font-bold sm:mb-2 md:text-7xl">
          Prashant Timilsina{" "}
        </h1>
        <h2 className="mb-8 text-2xl font-medium text-white/50 lg:text-3xl">
          Software Developer @ <span className="text-[#E1A522]">Nepal</span>
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
        className="mb-8 text-lg text-gray-400 md:w-[65%] lg:w-[55%]"
      >
        I&apos;m currently a Computer Science Student from Nepal with experience
        in designing and building full-stack applications using modern
        technologies.{" "}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
        className="flex items-center lg:gap-2"
      >
        <Button href="/Alex_Ross_Resume.pdf" className="group md:text-lg">
          Resume
          <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
        </Button>
        <ul className="flex items-center gap-3 md:gap-4">{renderedSocials}</ul>
      </motion.div>
    </section>
  );
}
