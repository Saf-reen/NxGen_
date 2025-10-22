import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          Every Great Dream Begins With<br />
          <span className="text-accent">a Strong Foundation</span>
        </h1>
        
        <h3 className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up opacity-90 font-light">
          Here, inspiration and determination come together—helping imaginations take flight<br className="hidden md:block" />
          and transforming aspirations into reality.
        </h3>

        <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" asChild>
            <Link to="/courses">Explore Courses</Link>
          </Button>
        </div>

        
      </div>
    </section>
  );
};
