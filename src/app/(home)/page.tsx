import ImageBanner from "@/components/banners/ImageBanner";
import About from "./components/About";
import Events from "./components/Events";
import { landingPageData } from "./components/landingPageData";
import OurPromise from "./components/OurPromise";
import SlidingGallery from "./components/SlidingGallery";
import WhyZenEvent from "./components/WhyZenEvent";
import { Container, Section } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";

export default function Home() {
  return (
    <main className="background-color-1">
      <ImageBanner {...landingPageData.bannerData} />
      <Section defaultPadding={false} className="md:hidden block">
        <Container>
          <div className="py-6 flex flex-col gap-5 w-full mx-auto" id="form">
            <Form1 />
            <p
              className="text-sm text-tertiary max-w-3xl text-center mx-auto"
              dangerouslySetInnerHTML={{
                __html: landingPageData.bannerData.benefit,
              }}
            />
          </div>
        </Container>
      </Section>
      <About {...landingPageData.aboutData} />
      <Events {...landingPageData.events} />
      <WhyZenEvent {...landingPageData.whyZenEvent} />
      <SlidingGallery images={landingPageData.slidingGallery} />
      <OurPromise {...landingPageData.ourPromise} />
    </main>
  );
}
