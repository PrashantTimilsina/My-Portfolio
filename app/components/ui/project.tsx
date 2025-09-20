import { ProjectType } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Button from "./button";

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  const { name, image, description, tech, link, code } = project;
  return (
    <div className="flex min-h-full flex-grow flex-col rounded-lg bg-slate-700">
      <div className="relative flex h-56 items-center overflow-hidden rounded-t-lg bg-slate-950 lg:h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="flex flex-grow flex-col p-4">
        <div className="mb-6 flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
          <ul className="flex flex-wrap items-center gap-1">
            {tech.map((t, i) => {
              return (
                <li key={i}>
                  <Image src={t.src} alt={t.alt} className="h-6 w-auto" />
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mb-2 font-medium text-gray-400">{description}</p>
        <div
          className={`grid ${
            link ? "grid-cols-2" : "grid-cols-1"
          } gap-2 mt-auto`}
        >
          {link && (
            <Button href={link} className="w-full !py-2">
              Website <FaExternalLinkAlt />
            </Button>
          )}

          <Button href={code} className="w-full !py-2">
            {code === "#" ? "Private" : "Code"} <FaGithub />
          </Button>
        </div>
      </div>
    </div>
  );
}
