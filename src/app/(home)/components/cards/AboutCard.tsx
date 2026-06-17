import { AboutProps } from "@/@types/landingPageTypes";

const AboutCard: React.FC<AboutProps["cards"][0]> = ({
    tag,
    title,
    description
}) => {
    return (
        <div className="bg-white border border-[#E8D8D0] lg:rounded-[40px] p-4 lg:p-6 flex flex-col gap-2">
            <p className="text-4xl text-tertiary tracking-widest">{tag}</p>
            <p className="font-bold font-primary text-xl md:text-2xl text-primary">{title}</p>
            <p className="text-sm text-dark">{description}</p>
        </div>
    );
}

export default AboutCard;