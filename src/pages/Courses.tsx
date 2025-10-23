import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Stethoscope, Calculator, BookOpen, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";

const categories = [
  { id: "all", name: "All Courses" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Development" },
  { id: "backend", name: "Backend Development" },
  { id: "data", name: "Data Analytics" },
  { id: "sap", name: "SAP Development" },
];

const courses = [
  {
    id: 1,
    title: "Frontend Web Development",
    category: "web",
    description: "Master HTML, CSS, JavaScript, React and modern frontend development techniques.",
    duration: "6 Months",
    students: "250+ Students",
    rating: "4.9",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "UI/UX Design",
    category: "web",
    description: "Learn user interface design, user experience principles, and design tools like Figma.",
    duration: "4 Months",
    students: "400+ Students",
    rating: "4.8",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Flutter Mobile Development",
    category: "mobile",
    description: "Build cross-platform mobile apps with Flutter and Dart programming language.",
    duration: "6 Months",
    students: "300+ Students",
    rating: "4.9",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "iOS App Development",
    category: "mobile",
    description: "Create native iOS applications using Swift and SwiftUI framework.",
    duration: "6 Months",
    students: "200+ Students",
    rating: "4.7",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=600&h=400&fit=crop",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    title: "Node.js Backend Development",
    category: "backend",
    description: "Build scalable server-side applications with Node.js, Express, and MongoDB.",
    duration: "5 Months",
    students: "500+ Students",
    rating: "4.8",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 6,
    title: "Python Django Development",
    category: "backend",
    description: "Master backend development with Python Django framework and PostgreSQL.",
    duration: "5 Months",
    students: "450+ Students",
    rating: "4.8",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 7,
    title: "Data Analytics with Python",
    category: "data",
    description: "Master data analysis using Python, Pandas, NumPy, and data visualization tools.",
    duration: "4 Months",
    students: "400+ Students",
    rating: "4.9",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 8,
    title: "Business Intelligence & SQL",
    category: "data",
    description: "Learn SQL, Power BI, and advanced data analysis techniques for business insights.",
    duration: "3 Months",
    students: "300+ Students",
    rating: "4.8",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 9,
    title: "SAP ABAP Development",
    category: "sap",
    description: "Master SAP ABAP programming and enterprise system development.",
    duration: "6 Months",
    students: "350+ Students",
    rating: "4.8",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 10,
    title: "SAP HANA Development",
    category: "sap",
    description: "Learn SAP HANA development, modeling, and implementation techniques.",
    duration: "5 Months",
    students: "250+ Students",
    rating: "4.7",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&h=400&fit=crop",
    color: "from-purple-500 to-blue-500",
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
      <PageHero
        title="Our Courses"
        description="Choose from our comprehensive range of courses designed to help you achieve your academic goals"
        imageUrl="https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=1200&h=800&fit=crop"
      />

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
      <section className="py-20 bg-muted">
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
