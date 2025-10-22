import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "University Partner 1", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  { name: "University Partner 2", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop" },
  { name: "University Partner 3", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=100&fit=crop" },
  { name: "University Partner 4", logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop" },
  { name: "University Partner 5", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=100&fit=crop" },
  { name: "University Partner 6", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop" },
];

export const PartnersCarousel = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-secondary/90">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Educational Tie-Ups</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborating for Excellence in Education
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 mx-4"
              >
                <div className="bg-card rounded-lg p-6 shadow-md hover-lift">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
