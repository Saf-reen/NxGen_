import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CoursesPreview } from "@/components/CoursesPreview";
import { NotesSection } from "@/components/NotesSection";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { ContactPreview } from "@/components/ContactPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <CoursesPreview />
      <NotesSection />
      <PartnersCarousel />
      <ContactPreview />
    </>
  );
};

export default Home;
