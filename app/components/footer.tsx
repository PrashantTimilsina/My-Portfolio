import { footerLinks } from "../lib/data";
import Link from "next/link";

export default function Footer() {
  const renderedLinks = footerLinks.map(({ name, href, icon: Icon }) => {
    return (
      <Link key={name} href={href} target="_blank">
        <Icon className="text-3xl transition-colors hover:text-sjsu-gold" />
      </Link>
    );
  });

  return (
    <footer className="flex flex-col items-center py-12 text-gray-400/50">
      <div className="mb-4 flex items-center justify-center gap-4">
        {renderedLinks}
      </div>
      {new Date().getFullYear()} © Prashant Timilsina
    </footer>
  );
}
