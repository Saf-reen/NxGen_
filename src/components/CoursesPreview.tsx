import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GraduationCap, Stethoscope, Calculator, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const courses = [
  {
    id: 1,
    title: "Java Full Stack Development",
    description: "Master Java Full Stack Development with Spring Boot, React, and Cloud technologies.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: "AI & Data Science",
    description: "Comprehensive Data Science and AI program covering Python, ML, Deep Learning, and NLP.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1508385082359-f5a2b56d3e47?w=400&h=300&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Python Full Stack Development",
    description: "Master Python Full Stack Development with Django, React, and modern web technologies.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Power BI Full Stack",
    description: "Master Power BI, DAX, SQL, and data visualization for business intelligence.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=300&fit=crop",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Software Testing Tools",
    description: "Master software testing with Selenium, Cypress & more. Learn automation testing.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 7,
    title: "Cyber Security",
    description: "Master cybersecurity fundamentals, ethical hacking, and enterprise security practices.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1508385082359-f5a2b56d3e47?w=400&h=300&fit=crop",
    color: "from-red-500 to-orange-500",
  },
];

export const CoursesPreview = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const categories = [
    { id: "java", name: "Java Full Stack" },
    { id: "mern", name: "MERN Full Stack" },
    { id: "ai", name: "AI & Data Science" },
    { id: "python", name: "Python Full Stack" },
    { id: "powerbi", name: "Power BI" },
    { id: "testing", name: "Testing tools" },
    { id: "cyber", name: "Cyber Security" },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
        <div className="text-center mb-8">
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {categories.map((c) => (
              <Button key={c.id} size="sm" asChild variant="outline" className="whitespace-nowrap">
                <Link to={`/courses?category=${c.id}`}>{c.name}</Link>
              </Button>
            ))}
          </div>
          <div>
            <Button variant="outline-primary" size="lg" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
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
