"use client";
import { motion } from "framer-motion";
import { socials } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { RiDownloadLine } from "react-icons/ri";
import Button from "./ui/button";
import Link from "next/link";
import mypic from "@/public/mypic.png";
import Image from "next/image";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.75);

  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-black/50 transition-all hover:text-sjsu-gold dark:text-white/50"
      >
        <Icon className="text-2xl md:text-3xl" />
      </Link>
    );
  });

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 grid scroll-mt-96 grid-cols-1 gap-10 sm:gap-8 md:grid-cols-[70%_30%]"
    >
      <div className="order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-3 text-xl font-light tracking-wider text-gray-900 dark:text-gray-400 sm:mb-6 md:text-2xl">
            Welcome! I&apos;m
          </h1>
          <h1 className="mb-1 flex items-end text-4xl font-bold text-black dark:text-white sm:mb-2 sm:text-5xl md:text-7xl">
            Prashant Timilsina{" "}
          </h1>
          <h2 className="mb-8 text-2xl font-medium text-slate-800 dark:text-white/50 lg:text-3xl">
            Software Developer @ <span className="text-[#E1A522]">Nepal</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.75 }}
          viewport={{ once: true }}
          className="mb-8 text-lg text-gray-700 dark:text-gray-400 md:w-[65%] lg:w-[55%]"
        >
          I&apos;m currently a Computer Science Student from Nepal with
          experience in designing and building full-stack applications using
          modern technologies.{" "}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
          viewport={{ once: true }}
          className="flex items-center lg:gap-2"
        >
          <Button
            href="/Alex_Ross_Resume.pdf"
            className="group font-semibold md:text-lg"
          >
            Resume
            <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
          </Button>
          <ul className="flex items-center gap-3 md:gap-4">
            {renderedSocials}
          </ul>
        </motion.div>
      </div>
      <div className="order-1 max-sm:flex max-sm:justify-center md:order-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-80 w-80 overflow-hidden rounded-full"
        >
          <Image
            src={mypic}
            alt="My Image"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
