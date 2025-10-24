import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import LeadForm from "./LeadForm";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Background Image with Parallax Effect - stays in place while content scrolls */}
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop')",
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Become Industry-Ready in SAP, Data<br />
            <span className="text-accent">& Full-Stack in 8–16 Weeks</span>
        </h1>
        
        <h3 className="text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto animate-slide-up opacity-90 font-light text-center">
            Live mentorship • Real client projects • Placement support<br className="hidden md:block" />
            Transform your career with industry-aligned tech education.
        </h3>

        {/* Lead capture form (short) */}
        {/* <div className="mt-6 mb-8 flex justify-center">
          <LeadForm />
        </div> */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Apply Now</Link>
          </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-accent">
              Download Brochure
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-accent" asChild>
              <Link to="/contact">Talk to an Advisor</Link>
            </Button>
        </div>

        
        {/* WhatsApp quick chat button */}
        <a
          aria-label="Chat on WhatsApp"
          href={`https://wa.me/918501049836?text=${encodeURIComponent("Hi, I'm interested in courses at NxGen Tech Academy")}`}
          target="_blank"
          rel="noreferrer noopener"
          className="fixed right-6 bottom-28 z-10 bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:h-16 hover:w-16 hover:shadow-2xl"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M21 12.08C21 6.54 16.52 2 11 2S1 6.54 1 12.08c0 2 .65 3.86 1.76 5.39L1 22l4.9-1.28C7.7 21.13 9.31 21.5 11 21.5c5.52 0 10-4.54 10-9.42z" fill="currentColor"/>
            <path d="M17.5 14.5c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.2.4-.9 1.3-1.1 1.5-.2.2-.4.2-.8.1-.4-.1-1.6-.6-3-1.9-1.1-1.1-1.8-2.5-2-3-.2-.5 0-.7.2-.9.2-.2.4-.4.6-.6.2-.2.3-.3.5-.5.2-.2.3-.3.5-.5.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6 0-.2-.8-1.8-1.1-2.3-.3-.5-.6-.4-.9-.4-.3 0-.7 0-1.1 0-.4 0-1 .1-1.5.5-.5.4-1.6 1.6-1.6 3.9 0 2.4 1.6 4.8 1.8 5.1.2.3 2.8 4.4 6.8 6 4 .1 4.6-2 4.7-2.2.1-.2.9-1.6 1-2 .1-.4.1-.7 0-.9-.2-.3-.6-.5-1-.7z" fill="#fff"/>
          </svg>
        </a>

      </div>
    </section>
  );
};

