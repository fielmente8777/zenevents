import ImageBanner from "@/components/banners/ImageBanner";
import Form2 from "@/components/forms/Form2";
import { Container, Section } from "@/components/sectionComponants";
import About from "./components/About";
import Events from "./components/Events";
import { landingPageData } from "./components/landingPageData";
import OurPromise from "./components/OurPromise";
import SlidingGallery from "./components/SlidingGallery";
import WhyZenEvent from "./components/WhyZenEvent";

export default function Home() {
  return (
    <main className="background-color-1">
      <ImageBanner {...landingPageData.bannerData} />
      <Section>
        <Container className="bg-[#FCF0ED] border border-tertiary lg:rounded-[40px] box-shadow">
          <div className="py-6 flex flex-col gap-5 w-full mx-auto" id="form">
            <Form2 singleDate />
            <p
              className="text-sm text-primary max-w-3xl text-center mx-auto"
              dangerouslySetInnerHTML={{
                __html: landingPageData.bannerData.benefit,
              }}
            />
          </div>
        </Container>
      </Section>

      <About {...landingPageData.aboutData} />
      <div className="h-0.5 w-full max_screen_width bg-[linear-gradient(to_right,#fff,#a8874a,#fff)]" />
      <Events {...landingPageData.events} />
      <SlidingGallery images={landingPageData.slidingGallery} />
      <WhyZenEvent {...landingPageData.whyZenEvent} />
      <SlidingGallery images={landingPageData.slidingGallery2}  aspectRatio="aspect-3/2"/>
      <OurPromise {...landingPageData.ourPromise} />
    </main>
  );
}
