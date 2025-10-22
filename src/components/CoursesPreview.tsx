import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GraduationCap, Stethoscope, Calculator, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const courses = [
  {
    id: 1,
    title: "Engineering Entrance",
    description: "Comprehensive preparation for JEE, MHT-CET and other engineering entrance exams.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Medical Entrance",
    description: "Expert guidance for NEET and medical college entrance preparation.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Foundation Courses",
    description: "Strong foundation for students from classes 8th to 10th.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Board Exam Prep",
    description: "Complete preparation for 11th and 12th board examinations.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    color: "from-orange-500 to-red-500",
  },
];

export const CoursesPreview = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of courses designed to help you excel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline-primary" size="lg" asChild>
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
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
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover-lift h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-60`} />
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {course.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
