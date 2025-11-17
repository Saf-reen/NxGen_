import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed Background Image with Parallax Effect - stays in place while content scrolls */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-fixed -z-10"
          style={{
            backgroundImage: "url('/hero-bg.png')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* intentionally leave the hero image area empty of text; content appears below */}
        <div className="relative z-10" />
      </section>

      {/* New content section placed after the hero image
          - Left: main heading
          - Right: paragraph + buttons
          - Uses bg-muted and responsive flex layout */}
      <section className="py-8 bg-background -z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div className="w-full md:w-1/2" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Become Industry-Ready in SAP, Data
                <br />
                <span className="text-accent">& Full-Stack in 8–16 Weeks</span>
              </h1>
            </motion.div>

            <motion.div className="w-full md:w-1/2 p-6 rounded-lg" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-lg text-muted-foreground mb-6">
                  Live mentorship • Real client projects • Placement support.
                  Transform your career with industry-aligned tech education.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() =>
                      window.open(
                        'https://forms.gle/nLXYmZAERof9g77V7',
                        '_blank'
                      )
                    }
                  >
                    Apply Now
                  </Button>

                  <Button variant="outline-primary" size="lg" className=" hover:bg-white hover:text-accent">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          {/* WhatsApp quick chat button */}
        <a
          aria-label="Chat on WhatsApp"
          href={`https://wa.me/916309782855?text=${encodeURIComponent("Hi, I'm interested in courses at NxGen Tech Academy")}`}
          target="_blank"
          rel="noreferrer noopener"
          className="fixed right-6 bottom-28 z-10 bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:h-16 hover:w-16 hover:shadow-2xl"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
        </div>
      </section>
    </>
  );
};

