import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import LandingNavbar from "../navbar/LandingNavbar";
import Form1 from "../forms/Form1";
import { SectionHeading } from "../typography";
import Form2 from "../forms/Form2";

interface ImageBannerProps {
  tag: string;
  title: string;
  image: string;
  description: string;
  cards: {
    title: string;
    description: string;
  }[];
  benefit: string;
}
const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  image,
  benefit,
  cards,
  tag,
  description,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-16/8 aspect-[4/7.2] overflow-hidden"
    >
      <div className="inset-x-0 absolute z-30 ">
        <LandingNavbar />
      </div>
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 z-10 bg-linear-[-20deg] from-[#1c1010]/72 from-0% via-40% via-[#1c1010]/45 to-100%  to-black/95 " />

      <div className="absolute inset-0  z-20 flex items-end pb-10 justify-center">
        <Container className="flex flex-col lg:gap-14 gap-6 relative">
          <div className="w-fit absolute top-26 lg:-top-10 right-0">
            <div className="lg:w-[90px] w-[60px] aspect-square relative">
              <Image
                src="/SVG-1.png"
                alt="alt"
                fill
                sizes="90px"
                className="animate-[spin_8s_linear_infinite]"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:gap-30">
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-white w-fit bg-[#1C1010]/99 px-4 py-1.25 rounded-full">
                <span>
                  <Foo />
                </span>
                {tag}
              </p>
              <h1
                className="font-primary text-3xl md:text-7xl/tight text-white lg:max-w-[30.5rem]"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p className="text-[#FAF6F2A6] max-w-3xl mt-4">{description}</p>
            </div>

            <div className="grid grid-cols-2 md:gap-6 gap-4 h-fit mt-auto lg:max-w-md w-full ml-auto">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={` ${i === 1 ? "bg-white" : "bg-[#1C1010]/90"} ${i === 2 && "col-span-2"} lg:p-5.5 p-4 rounded-[30px] flex gap-3 items-center h-fit`}
                >
                  {i === 2 && (
                    <div>
                      <Image
                        src="/SVG-2.png"
                        alt="alt"
                        width={36}
                        height={36}
                      />
                    </div>
                  )}{" "}
                  <div className="space-y-1">
                    <p
                      className={` font-primary italic ${i !== 1 ? "text-white" : "text-primary"} ${i === 2 ? "text-xl" : "lg:text-3xl text-2xl"} tracking-widest`}
                    >
                      {card.title}
                    </p>
                    <p
                      className={` uppercase max-md:text-xs ${i !== 1 ? "text-secondary" : "text-dark"}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="bg-[#FCF0EDCC] md:flex hidden py-6 px-2 rounded-[40px]  flex-col gap-3 "
            id="form"
          >
            <Form2 singleDate />
            <p
              className="text-sm text-primary max-w-3xl text-center mx-auto"
              dangerouslySetInnerHTML={{ __html: benefit }}
            />
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;

export const Foo = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99998 6.39999C8.77317 6.39999 9.39998 5.14639 9.39998 3.59999C9.39998 2.05359 8.77317 0.799988 7.99998 0.799988C7.22678 0.799988 6.59998 2.05359 6.59998 3.59999C6.59998 5.14639 7.22678 6.39999 7.99998 6.39999Z"
      fill="#E8B4A8"
    />
    <path
      d="M9.52168 7.50558C9.76061 8.24093 11.1466 8.44967 12.6173 7.97181C14.088 7.49395 15.0865 6.51044 14.8476 5.77508C14.6087 5.03973 13.2227 4.83099 11.752 5.30885C10.2813 5.78671 9.28275 6.77022 9.52168 7.50558Z"
      fill="#E8B4A8"
    />
    <path
      d="M8.94047 9.29442C8.31493 9.74889 8.54469 11.1315 9.45364 12.3826C10.3626 13.6336 11.6065 14.2794 12.2321 13.8249C12.8576 13.3704 12.6278 11.9878 11.7189 10.7368C10.8099 9.4857 9.566 8.83994 8.94047 9.29442Z"
      fill="#E8B4A8"
    />
    <path
      d="M7.05955 9.29443C6.43402 8.83996 5.19007 9.48572 4.28112 10.7368C3.37218 11.9878 3.14242 13.3705 3.76795 13.8249C4.39348 14.2794 5.63742 13.6336 6.54637 12.3826C7.45532 11.1315 7.68508 9.74891 7.05955 9.29443Z"
      fill="#E8B4A8"
    />
    <path
      d="M6.47833 7.50558C6.71726 6.77023 5.71871 5.78672 4.24799 5.30886C2.77728 4.83099 1.39134 5.03973 1.15241 5.77509C0.91348 6.51044 1.91204 7.49395 3.38275 7.97181C4.85346 8.44968 6.2394 8.24094 6.47833 7.50558Z"
      fill="#E8B4A8"
    />
    <path
      opacity="0.7"
      d="M7.99998 9.39998C8.77317 9.39998 9.39998 8.77317 9.39998 7.99998C9.39998 7.22678 8.77317 6.59998 7.99998 6.59998C7.22678 6.59998 6.59998 7.22678 6.59998 7.99998C6.59998 8.77317 7.22678 9.39998 7.99998 9.39998Z"
      fill="#A8874A"
    />
    <path
      d="M7.99999 8.69999C8.38659 8.69999 8.69999 8.38659 8.69999 7.99999C8.69999 7.61339 8.38659 7.29999 7.99999 7.29999C7.61339 7.29999 7.29999 7.61339 7.29999 7.99999C7.29999 8.38659 7.61339 8.69999 7.99999 8.69999Z"
      fill="#C9A870"
    />
    <path opacity="0.6" d="M8 8V6" stroke="#A8874A" strokeWidth="0.16" />
    <path
      opacity="0.7"
      d="M8.00001 6.24001C8.13256 6.24001 8.24001 6.13256 8.24001 6.00001C8.24001 5.86746 8.13256 5.76001 8.00001 5.76001C7.86746 5.76001 7.76001 5.86746 7.76001 6.00001C7.76001 6.13256 7.86746 6.24001 8.00001 6.24001Z"
      fill="#A8874A"
    />
    <path
      opacity="0.6"
      d="M8 7.99999L9.90211 7.38196"
      stroke="#A8874A"
      strokeWidth="0.16"
    />
    <path
      opacity="0.7"
      d="M9.90211 7.62197C10.0347 7.62197 10.1421 7.51452 10.1421 7.38197C10.1421 7.24942 10.0347 7.14197 9.90211 7.14197C9.76956 7.14197 9.66211 7.24942 9.66211 7.38197C9.66211 7.51452 9.76956 7.62197 9.90211 7.62197Z"
      fill="#A8874A"
    />
    <path
      opacity="0.6"
      d="M8 8L9.17557 9.61803"
      stroke="#A8874A"
      strokeWidth="0.16"
    />
    <path
      opacity="0.7"
      d="M9.17555 9.85805C9.3081 9.85805 9.41555 9.7506 9.41555 9.61805C9.41555 9.4855 9.3081 9.37805 9.17555 9.37805C9.043 9.37805 8.93555 9.4855 8.93555 9.61805C8.93555 9.7506 9.043 9.85805 9.17555 9.85805Z"
      fill="#A8874A"
    />
    <path
      opacity="0.6"
      d="M7.99997 8L6.8244 9.61803"
      stroke="#A8874A"
      strokeWidth="0.16"
    />
    <path
      opacity="0.7"
      d="M6.82441 9.85805C6.95696 9.85805 7.06441 9.7506 7.06441 9.61805C7.06441 9.4855 6.95696 9.37805 6.82441 9.37805C6.69186 9.37805 6.58441 9.4855 6.58441 9.61805C6.58441 9.7506 6.69186 9.85805 6.82441 9.85805Z"
      fill="#A8874A"
    />
    <path
      opacity="0.6"
      d="M8.00001 7.99999L6.0979 7.38196"
      stroke="#A8874A"
      strokeWidth="0.16"
    />
    <path
      opacity="0.7"
      d="M6.09791 7.62197C6.23046 7.62197 6.33791 7.51452 6.33791 7.38197C6.33791 7.24942 6.23046 7.14197 6.09791 7.14197C5.96536 7.14197 5.85791 7.24942 5.85791 7.38197C5.85791 7.51452 5.96536 7.62197 6.09791 7.62197Z"
      fill="#A8874A"
    />
  </svg>
);
