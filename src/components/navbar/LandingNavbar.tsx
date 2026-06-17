"use client";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "../buttons/LinkButton";
import { navData } from "./navData";

const LandingNavbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    return;
  };
  return (
    <header className="max_screen_width w-full">
      {/* TOP BAR */}
      <nav className="max_width">
        <div className="flex py-4 w-full items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <div className="relative aspect-4/4 w-20 md:w-25">
              <Image
                src={navData.logo}
                alt="The Acacia Hotel Logo"
                fill
                priority
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <ul className="lg:flex border hidden border-white/15 bg-white/10 backdrop-blur-lg px-5 py-2.5  rounded-full items-center gap-8 ml-36 w-fit self-center-safe">
            {navData.links.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  type="button"
                  className="text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          {/* BUTTON */}
          <ul className="flex items-center gap-2">
            {navData.buttons.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-primary text-white px-2 md:px-6 py-2 md:py-3"
                >
                  <span className="">
                    <CalendarIcon />
                  </span>
                  <span className="lg:block text-base hidden">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
