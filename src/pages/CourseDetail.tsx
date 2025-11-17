import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Award, BookOpen, CheckCircle, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SEO } from "@/components/SEO";
import { Preloader } from "@/components/Preloader";
import { courses } from "@/data";
import type { Course } from "@/data/types";

const CourseDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);
  const { ref: syllabusRef, isVisible: syllabusVisible } = useScrollAnimation(0.2);

  // Get course details from centralized store
  const courseId = Number(id);
  const course = courses[courseId] || Object.values(courses)[0];
  
  useEffect(() => {
    // Simulate data loading - in real app, this would be an API call
    setIsLoading(true);
    const loadData = async () => {
      try {
        // Artificial delay to show loading state only when network is slow
        await new Promise(resolve => setTimeout(resolve, 100));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading course:', error);
        setIsLoading(false);
      }
    };
    loadData();
  }, [id]);

  // Generate schema markup for the course
  return (
    <div className="min-h-screen">
      <Preloader isLoading={isLoading} threshold={800} />
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={course.image}
          loading="lazy"
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-accent opacity-80" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link to="/courses" className="inline-flex items-center gap-2 text-white mb-4 hover:text-primary-glow transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Courses
            </Link>
            <h1
              ref={heroRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {course.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">{course.description}</p>
          </div>
        </div>
      </section>

      {/* Course Info Cards */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "Duration", value: course.features.duration },
              { icon: BookOpen, label: "Projects", value: course.features.projects },
              { icon: Award, label: "Rating", value: `${course.rating} ★` },
              { icon: Award, label: "Price", value: `${course.price}` },
            ].map((stat, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-md text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={featuresRef}
            className={`mb-12 transition-all duration-700 ${
              featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll <span className="gradient-text">Get</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(course.features).map(([key, value], index) => (
              <div
                key={key}
                className={`bg-card rounded-lg p-6 shadow-md flex items-start gap-3 hover-lift transition-all duration-700 ${
                  featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Enroll now and take the first step towards your dream career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfCORZn1qWHl6NuhIfGkGfAkxhVzF3paBVMSSqndMferNEK_Q/viewform?usp=header">Enroll Now</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-green-700 text-green-700 hover:bg-white hover:text-accent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
