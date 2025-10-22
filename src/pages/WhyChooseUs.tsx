import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  Laptop,
  GraduationCap,
  Target,
  Building2,
  Clock,
  Globe2,
  Trophy
} from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Industry-Relevant Curriculum",
    description: "Learn from updated courses designed by experts with real-world applications"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Guided by professionals with 7+ years of industry experience"
  },
  {
    icon: GraduationCap,
    title: "Placement Assistance",
    description: "Job-oriented programs with dedicated career support and guidance"
  },
  {
    icon: Laptop,
    title: "Hands-On Projects",
    description: "Work on live, real-world projects that matter"
  },
  {
    icon: Clock,
    title: "Flexible Learning Modes",
    description: "Choose from online, offline, or hybrid learning options"
  },
  {
    icon: Award,
    title: "Recognized Certification",
    description: "Industry-recognized certificates valued by top employers"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    quote: "Thanks to NxGen, I landed my first tech job in just 3 months! The practical approach and mentor support made all the difference."
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "The curriculum is so well-structured and current. I learned more in 6 months here than in my entire college program."
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    quote: "The project-based learning approach gave me a portfolio that impressed employers. Highly recommended!"
  }
];

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: Building2, value: "50+", label: "Corporate Partners" },
  { icon: Trophy, value: "90%", label: "Placement Success" },
  { icon: Globe2, value: "5+", label: "Years of Excellence" }
];

const WhyChooseUs = () => {
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollAnimation(0);
  const { ref: highlightsRef, isVisible: isHighlightsVisible } = useScrollAnimation(0.1);
  const { ref: testimonialsRef, isVisible: isTestimonialsVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: isStatsVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div 
          ref={heroRef}
          className={`relative z-10 container mx-auto px-4 text-center transition-all duration-700 ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose NxGen?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Empowering learners with real-world skills for a digital future
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book a Free Demo</Link>
          </Button>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div
            ref={highlightsRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              isHighlightsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
          <div
            ref={testimonialsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
              isTestimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-muted rounded-xl p-6 relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary/60 to-secondary/60">
        <div className="container mx-auto px-4">
          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
              isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-background shadow-sm flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with us.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="default" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              4.9/5 from 1000+ reviews
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;