import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

export default function ThankYou() {
  return (
    <main>
      <SectionWithContainer>
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="max-w-sm w-full relative aspect-4/2 bg-secondary rounded-md">
            <Image
              src="/logo.png"
              alt="Image"
              fill
              sizes="100vw"
              priority
              loading="eager"
              className="object-contain p-2"
            />
          </div>
          <p className="">THANK YOU FOR SUBMITTING</p>
          <h1 className="font-bold font-primary text-2xl md:text-5xl text-primary">
            We will get back to you shortly!
          </h1>
          <LinkButton
            href="/"
            label="Back to Home"
            className="w-fit mx-auto rounded-full"
          />
        </div>
      </SectionWithContainer>
    </main>
  );
}
