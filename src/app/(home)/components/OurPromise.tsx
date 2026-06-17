import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface OurPromiseProps {
  tag: string;
  title: string;
  description: string;
  buttons: {
    label: string;
    href: string;
  }[];
  tagLine: string;
}

const OurPromise: React.FC<OurPromiseProps> = ({
  tag,
  title,
  description,
  buttons,
  tagLine,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative">
      <div className="w-fit absolute bottom-2 left-2">
        <div className="lg:w-36.5 w-10 aspect-square relative">
          <Image
            src="/SVG.png"
            alt="alt"
            fill
            sizes="146px"
            className="animate-[spin_8s_linear_infinite]"
          />
        </div>
      </div>
      <div className="bg-linear-[140deg,#1C1010E0,#1C1010B2,#8B1A1A80] max-w-5xl w-full mx-auto rounded-4xl shadow relative">
        <div className="w-fit absolute bottom-4 left-4">
          <div className="lg:w-15 w-8 aspect-square relative">
            <Image
              src="/SVG-1.png"
              alt="alt"
              fill
              sizes="60px"
              className="animate-[spin_8s_linear_infinite]"
            />
          </div>
        </div>
        <div className="w-fit absolute top-4 right-4">
          <div className="lg:w-28 w-15 aspect-square relative">
            <Image
              src="/SVG-1.png"
              alt="alt"
              fill
              sizes="112px"
              className="animate-[spin_8s_linear_infinite]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center max-lg:py-10 lg:pt-24 pb-12 px-4 max-w-2xl w-full mx-auto ">
          <p className="text-sm tracking-widest w-fit uppercase border border-tertiary/30 rounded-full bg-tertiary/10 backdrop-blur-sm text-tertiary px-4 py-1">
            {tag}
          </p>
          <SectionHeading title={title} textCenter titleColor="white" />
          <p className=" text-white text-center">{description}</p>
          <ul className="flex flex-wrap lg:gap-4 gap-2 w-full items-center justify-center">
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
          <p className="text-sm text-[#E8B4A899] text-center">{tagLine}</p>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurPromise;
