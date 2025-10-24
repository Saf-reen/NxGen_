import React from 'react';
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CoursesPreview } from "@/components/CoursesPreview";
import { NotesSection } from "@/components/NotesSection";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { ContactPreview } from "@/components/ContactPreview";
import { SEO } from "@/components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="NxGen Tech Academy - Learn Tech Skills with Industry Experts"
        description="Industry-ready courses in SAP, Data Analytics, and Web Development. Hands-on projects, mentors, and placements for learners in Telangana & beyond."
        type="website"
        path="/"
      />
      <Hero />
      <WhyChooseUs />
      <CoursesPreview />
      <NotesSection />
      <PartnersCarousel />
      <ContactPreview />
    </div>
  );
};

export default Home;