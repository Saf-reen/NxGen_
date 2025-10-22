import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          Every Great Dream Begins With<br />
          <span className="text-primary-glow">a Strong Foundation</span>
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
