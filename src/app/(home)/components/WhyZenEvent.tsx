import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import WhyZenEventCard from "./cards/WhyZenEventCard";
import { WhyZenEventProps } from "@/@types/landingPageTypes";

const WhyZenEvent: React.FC<WhyZenEventProps> = ({
  tag,
  title,
  cards,
  buttons,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="background-color-3"
      containerClassName="md:space-y-12 space-y-6"
    >
      <div className="flex flex-col gap-2.5 justify-center items-center">
        <p className="px-4 py-1 max-md:text-sm tracking-widest text-tertiary uppercase font-semibold border border-tertiary rounded-full bg-tertiary/10 shadow backdrop-blur-sm">
          {tag}
        </p>
        <SectionHeading title={title} titleColor="white" textCenter />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <WhyZenEventCard
            key={i}
            {...card}
            className={i === 0 ? "col-span-2" : ""}
          />
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

export default WhyZenEvent;
