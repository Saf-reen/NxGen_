import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Stethoscope, Calculator, BookOpen, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";

const categories = [
  { id: "all", name: "All Courses" },
  { id: "java", name: "Java Full Stack" },
  { id: "mern", name: "MERN Full Stack" },
  { id: "ai", name: "AI & Data Science" },
  { id: "python", name: "Python Full Stack" },
  { id: "powerbi", name: "Power BI" },
  { id: "testing", name: "Testing tools" },
  { id: "cyber", name: "Cyber Security" },
];

const courses = [
  { id: 1, title: "Java Full stack", category: "java", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" , description: "Java Full Stack with Spring Boot, React and real projects.", duration: "16 Weeks", students: "250+ Students", rating: "4.9", icon: GraduationCap, color: "from-blue-500 to-cyan-500" },
  { id: 2, title: "Python Fullstack", category: "python", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop", description: "Python Full Stack with Django and React.", duration: "16 Weeks", students: "200+ Students", rating: "4.8", icon: BookOpen, color: "from-green-500 to-emerald-500" },
  { id: 3, title: "MERN Full Stack", category: "mern", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", description: "MERN stack (Mongo, Express, React, Node) with projects.", duration: "16 Weeks", students: "300+ Students", rating: "4.8", icon: GraduationCap, color: "from-indigo-500 to-purple-500" },
  { id: 4, title: "UI Development", category: "mern", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", description: "Front-end UI Development with modern frameworks.", duration: "12 Weeks", students: "180+ Students", rating: "4.6", icon: BookOpen, color: "from-pink-500 to-rose-500" },
  { id: 5, title: "React JS", category: "mern", image: "https://images.unsplash.com/photo-1526378721823-6c45d9e9f9d8?w=600&h=400&fit=crop", description: "React.js fundamentals and advanced patterns.", duration: "8 Weeks", students: "350+ Students", rating: "4.7", icon: GraduationCap, color: "from-sky-500 to-blue-500" },
  { id: 6, title: "UI/UX Designing", category: "python", image: "https://images.unsplash.com/photo-1534152731935-25c6b2f3f91b?w=600&h=400&fit=crop", description: "Design principles, Figma and prototyping.", duration: "10 Weeks", students: "220+ Students", rating: "4.6", icon: GraduationCap, color: "from-emerald-500 to-teal-500" },
  { id: 7, title: "Node JS", category: "mern", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop", description: "Backend development with Node.js and Express.", duration: "12 Weeks", students: "280+ Students", rating: "4.7", icon: Calculator, color: "from-purple-500 to-pink-500" },
  { id: 8, title: "Web Designing", category: "mern", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", description: "Website design, layouts and responsive patterns.", duration: "8 Weeks", students: "240+ Students", rating: "4.5", icon: GraduationCap, color: "from-orange-500 to-yellow-500" },
  { id: 9, title: "PHP with MySQL", category: "mern", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop", description: "PHP and MySQL full-stack development.", duration: "10 Weeks", students: "150+ Students", rating: "4.3", icon: BookOpen, color: "from-cyan-500 to-blue-500" },
  { id: 10, title: "Digital Marketing", category: "ai", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", description: "SEO, Ads and Social Media marketing.", duration: "6 Weeks", students: "400+ Students", rating: "4.4", icon: GraduationCap, color: "from-amber-500 to-orange-500" },
  { id: 11, title: "Python", category: "python", image: "https://images.unsplash.com/photo-1545235617-9465f9d2b0b9?w=600&h=400&fit=crop", description: "Core Python programming and applications.", duration: "8 Weeks", students: "500+ Students", rating: "4.9", icon: BookOpen, color: "from-green-500 to-lime-500" },
  { id: 12, title: "UI Designing", category: "python", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop", description: "UI design basics and tools.", duration: "8 Weeks", students: "190+ Students", rating: "4.2", icon: GraduationCap, color: "from-pink-500 to-fuchsia-500" },
  { id: 13, title: "Django", category: "python", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", description: "Django web framework for Python.", duration: "12 Weeks", students: "210+ Students", rating: "4.6", icon: BookOpen, color: "from-indigo-500 to-violet-500" },
  { id: 14, title: "Graphic Design Training", category: "ai", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", description: "Graphic design fundamentals and tools.", duration: "10 Weeks", students: "170+ Students", rating: "4.3", icon: GraduationCap, color: "from-rose-500 to-pink-500" },
  { id: 15, title: "SEO", category: "ai", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", description: "Search engine optimisation techniques.", duration: "6 Weeks", students: "300+ Students", rating: "4.4", icon: GraduationCap, color: "from-amber-500 to-yellow-500" },
  { id: 16, title: "Google AdWords", category: "ai", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", description: "Paid advertising with Google Ads.", duration: "6 Weeks", students: "250+ Students", rating: "4.1", icon: GraduationCap, color: "from-green-500 to-teal-500" },
  { id: 17, title: "Power BI", category: "powerbi", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=400&fit=crop", description: "Power BI and business intelligence.", duration: "12 Weeks", students: "120+ Students", rating: "4.7", icon: GraduationCap, color: "from-orange-500 to-red-500" },
  { id: 18, title: "Software Testing Tools", category: "testing", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop", description: "Manual and automation testing with popular tools.", duration: "14 Weeks", students: "100+ Students", rating: "4.6", icon: Stethoscope, color: "from-indigo-500 to-blue-500" },
  { id: 19, title: "Cyber Security", category: "cyber", image: "https://images.unsplash.com/photo-1508385082359-f5a2b56d3e47?w=600&h=400&fit=crop", description: "Cybersecurity fundamentals and ethical hacking labs.", duration: "16 Weeks", students: "90+ Students", rating: "4.8", icon: Calculator, color: "from-red-500 to-orange-500" },
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
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  total={filteredCourses.length}
                />
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

const CourseCard = ({
  course,
  index,
  total,
}: {
  course: typeof courses[0];
  index: number;
  total: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const Icon = course.icon;

  // If the grid shows 3 columns on large screens and there is only 1 item in the last row,
  // make the last item span 2 columns so it doesn't leave two empty slots. This keeps layout
  // visually balanced. Adjusts only on large screens (lg breakpoint).
  const remainder = total % 3;
  const isLast = index === total - 1;
  const spanClass = isLast && remainder === 1 ? "lg:col-span-1" : "";

  return (
    <Link
      to={`/courses/${course.id}`}
      ref={ref}
      className={`group block transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${spanClass}`}
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
