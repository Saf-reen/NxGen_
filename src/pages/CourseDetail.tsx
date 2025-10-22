import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, BookOpen, Video, FileText, CheckCircle, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Mock course data - in real app, this would come from an API
const courseDetails = {
  1: {
    title: "JEE Advanced Preparation",
    description: "Complete preparation program for JEE Advanced with comprehensive coverage of all topics, regular tests, and personalized mentoring.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop",
    duration: "2 Years",
    students: "250+ Students",
    rating: "4.9",
    features: [
      "Daily live classes with expert faculty",
      "Weekly mock tests and assessments",
      "Comprehensive study material",
      "24/7 doubt clearing sessions",
      "Personal mentorship program",
      "Previous year papers practice",
    ],
    syllabus: [
      { module: "Physics", topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"] },
      { module: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
      { module: "Mathematics", topics: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry", "Vectors"] },
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);
  const { ref: syllabusRef, isVisible: syllabusVisible } = useScrollAnimation(0.2);

  // Get course details or use default
  const course = courseDetails[Number(id) as keyof typeof courseDetails] || courseDetails[1];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={course.image}
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
              { icon: Clock, label: "Duration", value: course.duration },
              { icon: Users, label: "Students", value: course.students },
              { icon: Award, label: "Rating", value: `${course.rating} ★` },
              { icon: BookOpen, label: "Mode", value: "Online + Offline" },
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
              Everything you need to succeed in your exam preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.features.map((feature, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-6 shadow-md flex items-start gap-3 hover-lift transition-all duration-700 ${
                  featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={syllabusRef}
            className={`mb-12 transition-all duration-700 ${
              syllabusVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Course <span className="gradient-text">Syllabus</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive coverage of all topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.syllabus.map((module, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 shadow-lg transition-all duration-700 ${
                  syllabusVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{module.module}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Enroll now and take the first step towards your dream career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-accent"
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
