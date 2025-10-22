import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Stethoscope, Calculator, BookOpen, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Courses" },
  { id: "engineering", name: "Engineering" },
  { id: "medical", name: "Medical" },
  { id: "foundation", name: "Foundation" },
  { id: "board", name: "Board Exam" },
];

const courses = [
  {
    id: 1,
    title: "JEE Advanced Preparation",
    category: "engineering",
    description: "Comprehensive coaching for JEE Advanced with expert faculty and proven methods.",
    duration: "2 Years",
    students: "250+ Students",
    rating: "4.9",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "JEE Mains Intensive",
    category: "engineering",
    description: "Focused preparation for JEE Mains with regular mock tests and doubt sessions.",
    duration: "1 Year",
    students: "400+ Students",
    rating: "4.8",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=600&h=400&fit=crop",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "NEET Complete Package",
    category: "medical",
    description: "Complete NEET preparation covering Physics, Chemistry, and Biology with experts.",
    duration: "2 Years",
    students: "300+ Students",
    rating: "4.9",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "NEET Short Term",
    category: "medical",
    description: "Intensive 6-month crash course for NEET aspirants with revision focus.",
    duration: "6 Months",
    students: "200+ Students",
    rating: "4.7",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    title: "Foundation for Class 8-10",
    category: "foundation",
    description: "Build strong fundamentals in Math, Science with engaging learning methods.",
    duration: "1 Year",
    students: "500+ Students",
    rating: "4.8",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 6,
    title: "Class 11th Science",
    category: "board",
    description: "Complete coverage of 11th standard syllabus with board exam focus.",
    duration: "1 Year",
    students: "450+ Students",
    rating: "4.8",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 7,
    title: "Class 12th Science",
    category: "board",
    description: "Comprehensive 12th board preparation with entrance exam integration.",
    duration: "1 Year",
    students: "400+ Students",
    rating: "4.9",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 8,
    title: "MHT-CET Preparation",
    category: "engineering",
    description: "Specialized coaching for Maharashtra CET with state board integration.",
    duration: "1 Year",
    students: "350+ Students",
    rating: "4.8",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    color: "from-blue-500 to-purple-500",
  },
];

const Courses = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Courses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Choose from our comprehensive range of courses designed to help you achieve your academic goals
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No courses found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const CourseCard = ({ course, index }: { course: typeof courses[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const Icon = course.icon;

  return (
    <Link
      to={`/courses/${course.id}`}
      ref={ref}
      className={`group block transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover-lift h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-60`} />
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-1 rounded-full">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">{course.rating} ★</span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            {course.description}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Courses;
