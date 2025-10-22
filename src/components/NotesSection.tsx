import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FileText, Download, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const NotesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=600&fit=crop')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-accent opacity-90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center text-white transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <FileText className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            NOTES AND STUDY MATERIALS
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Comprehensive Resources for Academic Success
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/notes">
                <BookOpen className="mr-2" />
                Browse Materials
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-accent">
              <Download className="mr-2" />
              Request Materials
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: FileText, text: "1000+ Study Notes" },
              { icon: Download, text: "Instant Downloads" },
              { icon: BookOpen, text: "Updated Content" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
