import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface EventsProps {
  tag: string;
  title: string;
  description: string;
  cards: {
    title: string;
    tags: string[];
    image: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const Events: React.FC<EventsProps> = ({
  tag,
  title,
  description,
  cards,
  buttons,
}) => {
  const gridPattern = [
    "lg:col-span-2 lg:row-span-6",
    "lg:col-span-2 lg:row-span-3",
    "lg:col-span-2 lg:row-span-3",
    "lg:col-span-2 lg:row-span-3",
    "lg:col-span-2 lg:row-span-3",
    "lg:col-span-6 lg:row-span-2",
  ];

  return (
    <SectionWithContainer
      containerClassName="md:space-y-12 space-y-6"
      sectionClassName="background-color-2 relative"
      containerId="#events"
    >
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
      <div className="grid lg:grid-cols-2 grid-cols-1 items-end">
        <div className="space-y-2 max-w-md w-full">
          <p className="px-4 py-1 max-md:text-sm w-fit text-tertiary tracking-widest uppercase border border-tertiary rounded-full bg-tertiary/10  backdrop-blur-sm">
            {tag}
          </p>
          <SectionHeading title={title} />
        </div>
        <p className="text-dark max-w-lg lg:ml-auto">{description}</p>
      </div>
      <div className="grid relative lg:grid-cols-6 grid-cols-2 lg:auto-rows-[5.5rem] auto-rows-[12rem] grid-flow-row md:gap-6 gap-4">
        {cards.map((src, index) => (
          <div
            key={index}
            className={`${
              gridPattern[index % gridPattern.length]
            } overflow-hidden  w-full h-full rounded-xl group lg:rounded-4xl relative aspect-auto`}
          >
            <Image
              src={src.image}
              alt={`Gallery Image ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/65  to-black/10" />
            <div className="absolute lg:inset-x-6 inset-x-2 bottom-4 z-20">
              <p className="text-white font-primary md:text-2xl text-xl">
                {src.title}
              </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                {src.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-white  lg:text-sm tracking-wider text-[0.5rem] backdrop-blur-sm bg-white/10 uppercase rounded-full px-2 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

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
    </SectionWithContainer>
  );
};

export default Events;
