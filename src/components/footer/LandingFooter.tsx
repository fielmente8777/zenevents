"use client"
import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { Container } from "../sectionComponants";
import { footerData } from "./footerdata";

const LandingFooter = () => {
  const pathName= usePathname()
  if (pathName === "/thank-you/"){
    return null
  }
  return (
    <footer className="max_screen_width bg-background3 text-white">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          <div className=" flex flex-col items-center max-w-xs gap-6">
            <div
              className={`relative 
                  w-35 aspect-4/4 md:w-30`}
            >
              <Image
                src={footerData.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-white text-center max-md:text-center">
              {footerData.description}
            </p>
            {/* <ul className="flex flex-wrap lg:gap-4 gap-2 w-full items-center">
              {footerData.cta.map((button, i) => (
                <li key={i} className="max-md:w-full">
                  <LinkButton
                    {...button}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white rounded-full border-none max-md:w-full justify-center py-3 px-4"
                    whatsAppIcon={i === 0}
                    calendarIcon={i === 1}
                  />
                </li>
              ))}
            </ul> */}
          </div>

          {footerData.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""} flex flex-col gap-4 md:gap-6`}
              key={index}
            >
              <h2
                className="md:text-3xl text-white font-primary  text-xl"
                dangerouslySetInnerHTML={{ __html: list.title ?? "" }}
              />
              <ul className={`flex flex-col md:gap-2 gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    <span
                      className={`mt-1 ${
                        index === 1
                          ? "text-white flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "text-white inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {/* {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-aboreto text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.title}
                      </span>
                    )} */}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-mont text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-white -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-0"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-white font-aboreto text-2xl my-auto"
                              : "md:text-lg text-white"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full md:rounded-2xl rounded-xl overflow-hidden max-md:aspect-4/3">
            <LazyLoadedMap src={contact.mapUrl} />
          </div>
        </div>
      </Container>
      <div className="bg-white h-px w-full" />
      <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
        <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white md:text-lg">
          {" "}
          <span className="text-white">
            © {new Date().getFullYear()} Zen Events & Sushi
          </span>
          <span className="md:block hidden">|</span>
          <span className="text-white">All Rights Reserved</span>
          {/* <span className="md:block hidden">|</span> */}
        </div>
        <p className="text-white!">
          Crafted with care by{" "}
          <Link
            href="https://www.fielmente.com/"
            className="font-bold"
            target="_blank"
          >
            Fielmente
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default LandingFooter;
