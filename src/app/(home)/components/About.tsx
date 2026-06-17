import { AboutProps } from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import AboutCard from "./cards/AboutCard";
import AboutSlider from "./slider/AboutSlider";

const About: React.FC<AboutProps> = ({
  tag,
  title,
  description,
  image,
  buttons,
  listOfTags,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative" containerId="#about">
      <div className="w-fit absolute top-2 right-2">
        <div className="lg:w-36.5 w-20 aspect-square relative">
          <Image
            src="/SVG.png"
            alt="alt"
            fill
            sizes="146px"
            className="animate-[spin_8s_linear_infinite]"
          />
        </div>
      </div>
      <div className="space-y-3 text-center md:mb-10 mb-6">
        <p className="text-sm  tracking-widest mx-auto w-fit uppercase border border-tertiary/30 rounded-full bg-tertiary/10 backdrop-blur-sm text-tertiary px-4 py-1">
          {tag}
        </p>
        <SectionHeading title={title} />
      </div>
      <div className="grid lg:grid-cols-[1.5fr_1.8fr] gap-10 grid-cols-1 items-center">
        <div className="w-full relative lg:block hidden lg:aspect-4/3.75 aspect-[4/3.55]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover lg:rounded-[42px] rounded-4xl"
          />
        </div>
        <div className="flex flex-col gap-5 lg:gap-8">
          <p className="text-dark text-center">{description}</p>
          <div className="w-full relative lg:hidden lg:aspect-4/3.75 aspect-[4/3.55]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover lg:rounded-[42px] rounded-4xl"
            />
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-4">
            {listOfTags.map((tag, i) => (
              <li
                key={i}
                className="lg:text-xs text-[10px] font-bold uppercase text-tertiary tracking-widest border border-tertiary/25 bg-tertiary/10 py-2 lg:px-4 px-3 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="lg:grid hidden grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <AboutCard key={i} {...card} />
            ))}
          </div>
          <AboutSlider cards={cards} />
          <ul className="flex flex-wrap lg:gap-4 gap-2 w-full items-center">
            {buttons.map((button, i) => (
              <li key={i} className="max-md:w-full">
                <LinkButton
                  {...button}
                  target={i !== 2 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-primary text-white border-none max-md:w-full justify-center rounded-full py-3 px-4"
                  whatsAppIcon={i === 1}
                  callIcon={i === 0}
                  calendarIcon={i === 2}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default About;
