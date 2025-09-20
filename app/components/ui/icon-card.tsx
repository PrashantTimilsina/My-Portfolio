import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { IconType } from "react-icons";

type IconCardProps = {
  name: string;
  image?: StaticImageData | null;
  icon?: IconType | null;
  href?: string;
};

export default function IconCard({
  name,
  icon: Icon,
  image,
  href,
}: IconCardProps) {
  const cardContent = (
    <Fragment>
      {image ? (
        <Image src={image} alt={name} className="h-10 w-auto" />
      ) : (
        Icon && <Icon className="h-10 w-auto text-sjsu-gold" />
      )}

      <p className="line-clamp-1 text-center text-sm font-medium text-black dark:text-white/50">
        {name}
      </p>
    </Fragment>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      className="flex flex-col items-center gap-3 rounded-lg bg-slate-700/25 p-2 transition-all hover:bg-slate-600/25"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="flex flex-col items-center gap-3 overflow-x-hidden rounded-lg bg-slate-700/25 p-2 transition-all">
      {cardContent}
    </div>
  );
}
