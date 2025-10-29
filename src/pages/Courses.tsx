import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Preloader } from "@/components/Preloader";
import { categories, getCoursesByCategory } from "@/data";
import type { Course } from "@/data/types";
import { SEO } from '@/components/SEO';

const Courses = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    // Simulate data loading - in real app, this would be an API call
    setIsLoading(true);
    const loadData = async () => {
      try {
        // Artificial delay to show loading state only when network is slow
        await new Promise(resolve => setTimeout(resolve, 100));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading courses:', error);
        setIsLoading(false);
      }
    };
    loadData();
  }, [selectedCategory]);

  const filteredCourses = getCoursesByCategory(selectedCategory);

  return (
    <div className="min-h-screen">
      <Preloader isLoading={isLoading} threshold={800} />
      <SEO
        title="Courses – NxGen Tech Academy"
        description="Explore our professional courses in Full Stack, Python, Data Science, Power BI, Testing, and Cybersecurity. Practical, project-based training with placement support."
        keywords={categories.map(c => c.name).join(', ')}
      />
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
      <section className="py-20 bg-card">
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
  course: Course;
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
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover-lift h-full">
        <div className="relative h-56 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br to-black/20 opacity-40`} />
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

          {/* Technologies / subjects involved (show up to 4) */}
          {course.features && course.features.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {course.features.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          )}

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
