import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, BookOpen, Video, FileText, CheckCircle, ArrowLeft, Code, Database, Terminal, Monitor, Cloud, Layers, Cpu, GitBranch, Zap, BarChart, Search } from "lucide-react";
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
  const generateCourseSchema = (course: Course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "NxGen Tech Academy",
      "sameAs": "https://nxgentechacademy.com"
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": course.startDate
    },
    "instructor": {
      "@type": "Person",
      "name": course.instructor.name,
      "jobTitle": course.instructor.designation
    },
    "courseMode": "Blended",
    "timeRequired": course.duration,
    "educationalCredentialAwarded": "Certificate of Completion",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": course.rating,
      "ratingCount": "250"
    }
  });

  // Derive related technologies (use features if present, otherwise derive from syllabus topics).
  const getRelatedTechnologies = (course: Course) => {
    const fromFeatures = Array.isArray(course.features) ? course.features.slice() : [];

    // Flatten first syllabus topics to use as fallback
    const syllabusTopics: string[] = [];
    if (Array.isArray(course.syllabus)) {
      for (const module of course.syllabus) {
        if (Array.isArray(module.topics)) {
          for (const t of module.topics) {
            if (typeof t === "string") syllabusTopics.push(t);
          }
        }
      }
    }

    // Create ordered list preferring features, then syllabus topics (unique, preserve order)
    const combined = [...fromFeatures, ...syllabusTopics];
    const seen = new Set<string>();
    const uniques: string[] = [];
    for (const item of combined) {
      const label = item.trim();
      if (!label) continue;
      const key = label.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        uniques.push(label);
      }
      if (uniques.length >= 6) break; // limit how many we show
    }

    // Ensure at least 2 items: if not, add generic placeholders
    while (uniques.length < 2) {
      uniques.push("Fundamentals");
    }

    return uniques;
  };

  const mapIconForTech = (tech: string) => {
    const k = tech.toLowerCase();
    if (k.includes("react")) return Code;
    if (k.includes("node") || k.includes("express")) return Terminal;
    if (k.includes("mongo") || k.includes("mongodb") || k.includes("database") || k.includes("sql")) return Database;
    if (k.includes("django") || k.includes("python")) return Code;
    if (k.includes("java") || k.includes("spring")) return Code;
    if (k.includes("docker") || k.includes("containers")) return Layers;
    if (k.includes("aws") || k.includes("cloud")) return Cloud;
    if (k.includes("figma") || k.includes("design") || k.includes("ux")) return Monitor;
    if (k.includes("redux") || k.includes("state")) return GitBranch;
    if (k.includes("analytics") || k.includes("power bi") || k.includes("data")) return BarChart;
    if (k.includes("seo") || k.includes("marketing")) return Search;
    return Code; // fallback
  };

  return (
    <div className="min-h-screen">
      <Preloader isLoading={isLoading} threshold={800} />
      <SEO
        title={course.metaTitle}
        description={course.metaDescription}
        image={course.image}
        type="course"
        path={`/courses/${id}`}
        schemaData={generateCourseSchema(course)}
      />
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

      {/* Related Technology Cards (ensure minimum 2) */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">Technologies & Subjects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {getRelatedTechnologies(course).map((t, i) => {
              const Icon = mapIconForTech(t);
              return (
                <div
                  key={i}
                  className="bg-card rounded-lg p-4 flex flex-col items-start gap-2 hover:shadow-lg transition-shadow cursor-default"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold">{t}</p>
                  </div>
                </div>
              );
            })}
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
