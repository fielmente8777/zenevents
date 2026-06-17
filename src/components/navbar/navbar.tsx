"use client";

import { usePathname } from "next/navigation";
import LandingNavbar from "./LandingNavbar";
import WebsiteNav from "./WebsiteNav";

export default function Navbar() {
  const pathName = usePathname();
  if (pathName === "/landing-page/") {
    return <LandingNavbar />;
  } else if (pathName === "/thank-you/") {
    return null;
  } else {
    return <WebsiteNav />;
  }
}
