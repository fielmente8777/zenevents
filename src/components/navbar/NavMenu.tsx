"use client";

import { useWebContext } from "@/context-api/WebContext";
import Link from "next/link";
import { useEffect } from "react";
import { WebsiteNavData } from "./navData";

const NavMenu = () => {
  const { isOpenNavBar, setIsOpenNavBar } = useWebContext();

  useEffect(() => {
    if (isOpenNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenNavBar]);

  return (
    <div
      className={`
        absolute top-full left-0 w-full z-40
        bg-primary text-white text-white
        transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        overflow-hidden
        ${
          isOpenNavBar
            ? "max-h-[calc(100dvh-10px)] opacity-100"
            : "max-h-0 opacity-0"
        }
      `}
    >
      {/* Menu Content */}
      <nav className="max_width py-12 md:py-16">
        <ul className="flex flex-col items-center gap-6 md:gap-8">
          {WebsiteNavData.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpenNavBar(false)}
                className="
                  text-xl md:text-4xl
                  font-primary
                  uppercase tracking-[0.12em]
                  text-white/90
                  transition-colors duration-300
                  hover:text-white
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
