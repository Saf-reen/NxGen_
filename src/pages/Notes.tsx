import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Download, BookOpen, Search, Clock, Book, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/PageHero";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const categories = [
  { id: "all", name: "All Resources" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Development" },
  { id: "backend", name: "Backend Development" },
  { id: "data", name: "Data Analytics" },
  { id: "sap", name: "SAP Development" },
];

const materials = [
  {
    id: 1,
    title: "Frontend Web Development",
    subject: "web",
    description: "Master HTML, CSS, JavaScript, React and modern frontend development techniques.",
    pages: "120 Pages",
    format: "PDF",
    size: "15 MB",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "HTML5 and CSS3 Fundamentals",
        duration: "4 hours",
        topics: ["Semantic HTML", "Flexbox", "CSS Grid", "Responsive Design"],
        difficulty: "Beginner"
      },
      {
        title: "JavaScript Essentials",
        duration: "6 hours",
        topics: ["ES6+", "Promises", "Async/Await", "DOM Manipulation"],
        difficulty: "Intermediate"
      },
      {
        title: "React Fundamentals",
        duration: "8 hours",
        topics: ["Components", "Props", "State", "Hooks"],
        difficulty: "Intermediate"
      },
      {
        title: "State Management",
        duration: "5 hours",
        topics: ["Context API", "Redux", "Zustand", "State Patterns"],
        difficulty: "Advanced"
      },
      {
        title: "Performance Optimization",
        duration: "4 hours",
        topics: ["Code Splitting", "Lazy Loading", "Memoization", "Bundle Analysis"],
        difficulty: "Advanced"
      },
      {
        title: "Testing and Deployment",
        duration: "5 hours",
        topics: ["Jest", "React Testing Library", "CI/CD", "Vercel Deployment"],
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    subject: "web",
    description: "Learn user interface design, user experience principles, and design tools like Figma.",
    pages: "150 Pages",
    format: "PDF",
    size: "18 MB",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "Dart Programming",
        duration: "5 hours",
        topics: ["Syntax", "OOP", "Async Programming", "Collections"],
        difficulty: "Beginner"
      },
      {
        title: "Flutter Widgets",
        duration: "8 hours",
        topics: ["Material Design", "Custom Widgets", "Layouts", "Navigation"],
        difficulty: "Intermediate"
      },
      {
        title: "State Management",
        duration: "6 hours",
        topics: ["Provider", "Riverpod", "Bloc Pattern", "GetX"],
        difficulty: "Advanced"
      },
      {
        title: "API Integration",
        duration: "4 hours",
        topics: ["REST APIs", "GraphQL", "WebSockets", "Local Storage"],
        difficulty: "Intermediate"
      },
      {
        title: "Platform Integration",
        duration: "5 hours",
        topics: ["Native Features", "Camera", "Location", "Notifications"],
        difficulty: "Advanced"
      },
      {
        title: "App Publishing",
        duration: "4 hours",
        topics: ["App Store", "Play Store", "CI/CD", "Analytics"],
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: 3,
    title: "Flutter Mobile Development",
    subject: "mobile",
    description: "Build cross-platform mobile apps with Flutter and Dart programming language.",
    pages: "130 Pages",
    format: "PDF",
    size: "16 MB",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "Dart Programming",
        duration: "6 hours",
        topics: ["Syntax", "OOP", "Async Programming", "Collections"],
        difficulty: "Beginner"
      },
      {
        title: "Flutter Widgets",
        duration: "7 hours",
        topics: ["Material Design", "Custom Widgets", "Layouts", "Navigation"],
        difficulty: "Intermediate"
      },
      {
        title: "State Management",
        duration: "8 hours",
        topics: ["Provider", "Bloc", "GetX", "State Patterns"],
        difficulty: "Advanced"
      },
      {
        title: "API Integration",
        duration: "5 hours",
        topics: ["REST APIs", "GraphQL", "Local Storage", "Caching"],
        difficulty: "Advanced"
      },
      {
        title: "Platform Features",
        duration: "6 hours",
        topics: ["Camera", "Location", "Notifications", "Permissions"],
        difficulty: "Advanced"
      },
      {
        title: "App Publishing",
        duration: "4 hours",
        topics: ["App Store", "Play Store", "CI/CD", "Analytics"],
        difficulty: "Expert"
      }
    ]
  },
  {
    id: 4,
    title: "iOS App Development",
    subject: "mobile",
    description: "Create native iOS applications using Swift and SwiftUI framework.",
    pages: "140 Pages",
    format: "PDF",
    size: "19 MB",
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "Swift Fundamentals",
        duration: "6 hours",
        topics: ["Swift Syntax", "Optionals", "Collections", "Functions"],
        difficulty: "Beginner"
      },
      {
        title: "SwiftUI Basics",
        duration: "7 hours",
        topics: ["Views", "Modifiers", "Layout", "Navigation"],
        difficulty: "Intermediate"
      },
      {
        title: "Data & State",
        duration: "8 hours",
        topics: ["State", "Binding", "ObservableObject", "Environment"],
        difficulty: "Advanced"
      },
      {
        title: "iOS Features",
        duration: "6 hours",
        topics: ["CoreData", "Networking", "Maps", "Notifications"],
        difficulty: "Advanced"
      },
      {
        title: "Advanced UI",
        duration: "7 hours",
        topics: ["Animations", "Custom Views", "Gestures", "Accessibility"],
        difficulty: "Advanced"
      },
      {
        title: "App Store",
        duration: "4 hours",
        topics: ["Testing", "Distribution", "App Review", "Analytics"],
        difficulty: "Expert"
      }
    ]
  },
  {
    id: 5,
    title: "Node.js Backend Development",
    subject: "backend",
    description: "Build scalable server-side applications with Node.js, Express, and MongoDB.",
    pages: "120 Pages",
    format: "PDF",
    size: "15 MB",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "Node.js Basics",
        duration: "5 hours",
        topics: ["Event Loop", "Modules", "NPM", "Express"],
        difficulty: "Beginner"
      },
      {
        title: "Express Framework",
        duration: "6 hours",
        topics: ["Routing", "Middleware", "Error Handling", "Security"],
        difficulty: "Intermediate"
      },
      {
        title: "MongoDB",
        duration: "7 hours",
        topics: ["CRUD", "Mongoose", "Aggregation", "Indexing"],
        difficulty: "Advanced"
      },
      {
        title: "Authentication",
        duration: "5 hours",
        topics: ["JWT", "OAuth", "Sessions", "Security"],
        difficulty: "Advanced"
      },
      {
        title: "API Design",
        duration: "6 hours",
        topics: ["REST", "GraphQL", "Documentation", "Testing"],
        difficulty: "Advanced"
      },
      {
        title: "Deployment",
        duration: "4 hours",
        topics: ["Docker", "CI/CD", "Cloud", "Monitoring"],
        difficulty: "Expert"
      }
    ]
  },
  {
    id: 6,
    title: "Python Django Development",
    subject: "backend",
    description: "Master backend development with Python Django framework and PostgreSQL.",
    pages: "125 Pages",
    format: "PDF",
    size: "17 MB",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "Django Basics",
        duration: "5 hours",
        topics: ["MVT Pattern", "URLs", "Views", "Templates"],
        difficulty: "Beginner"
      },
      {
        title: "Models & ORM",
        duration: "7 hours",
        topics: ["Models", "Queries", "Migrations", "Admin"],
        difficulty: "Intermediate"
      },
      {
        title: "Forms & Auth",
        duration: "6 hours",
        topics: ["Forms", "Validation", "Authentication", "Permissions"],
        difficulty: "Advanced"
      },
      {
        title: "REST APIs",
        duration: "5 hours",
        topics: ["DRF", "Serializers", "ViewSets", "Authentication"],
        difficulty: "Advanced"
      },
      {
        title: "Advanced Django",
        duration: "8 hours",
        topics: ["Signals", "Middleware", "Caching", "Celery"],
        difficulty: "Advanced"
      },
      {
        title: "Deployment",
        duration: "4 hours",
        topics: ["Gunicorn", "Nginx", "PostgreSQL", "Docker"],
        difficulty: "Expert"
      }
    ]
  },
  {
    id: 7,
    title: "Data Analytics with Python",
    subject: "data",
    description: "Learn data analysis using Python, Pandas, NumPy, and data visualization tools.",
    pages: "140 Pages",
    format: "PDF",
    size: "20 MB",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "Python Basics",
        duration: "5 hours",
        topics: ["NumPy", "Pandas", "Data Types", "Functions"],
        difficulty: "Beginner"
      },
      {
        title: "Data Cleaning",
        duration: "6 hours",
        topics: ["Missing Data", "Outliers", "Transformation", "Validation"],
        difficulty: "Intermediate"
      },
      {
        title: "Visualization",
        duration: "7 hours",
        topics: ["Matplotlib", "Seaborn", "Plotly", "Dashboards"],
        difficulty: "Intermediate"
      },
      {
        title: "Statistics",
        duration: "8 hours",
        topics: ["Descriptive", "Inferential", "Hypothesis", "Regression"],
        difficulty: "Advanced"
      },
      {
        title: "Machine Learning",
        duration: "10 hours",
        topics: ["Scikit-learn", "Models", "Evaluation", "Pipeline"],
        difficulty: "Advanced"
      },
      {
        title: "Big Data",
        duration: "6 hours",
        topics: ["Spark", "Hadoop", "Cloud Tools", "Deployment"],
        difficulty: "Expert"
      }
    ]
  },
  {
    id: 8,
    title: "Business Intelligence & SQL",
    subject: "data",
    description: "Learn SQL, Power BI, and advanced data analysis techniques for business insights.",
    pages: "110 Pages",
    format: "PDF",
    size: "16 MB",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "SQL Fundamentals",
        duration: "6 hours",
        topics: ["Queries", "Joins", "Aggregations", "Subqueries"],
        difficulty: "Beginner"
      },
      {
        title: "Data Modeling",
        duration: "5 hours",
        topics: ["Schema Design", "Normalization", "Relationships", "Keys"],
        difficulty: "Intermediate"
      },
      {
        title: "Power BI Basics",
        duration: "7 hours",
        topics: ["Data Import", "Transformations", "DAX", "Visuals"],
        difficulty: "Intermediate"
      },
      {
        title: "Advanced Analytics",
        duration: "8 hours",
        topics: ["Measures", "Calculations", "Time Intelligence", "KPIs"],
        difficulty: "Advanced"
      },
      {
        title: "Dashboard Design",
        duration: "6 hours",
        topics: ["Layout", "Interactivity", "Best Practices", "Sharing"],
        difficulty: "Advanced"
      },
      {
        title: "Enterprise BI",
        duration: "4 hours",
        topics: ["Security", "Gateway", "Deployment", "Administration"],
        difficulty: "Expert"
      }
    ]
  },
  {
    id: 9,
    title: "SAP ABAP Development",
    subject: "sap",
    description: "Master SAP ABAP programming and enterprise system development.",
    pages: "160 Pages",
    format: "PDF",
    size: "22 MB",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "ABAP Basics",
        duration: "6 hours",
        topics: ["Syntax", "Data Types", "Control Flow", "Forms"],
        difficulty: "Beginner"
      },
      {
        title: "OO ABAP",
        duration: "8 hours",
        topics: ["Classes", "Interfaces", "Events", "Exceptions"],
        difficulty: "Intermediate"
      },
      {
        title: "Database",
        duration: "7 hours",
        topics: ["OpenSQL", "Native SQL", "BOPF", "CDS Views"],
        difficulty: "Advanced"
      },
      {
        title: "UI Development",
        duration: "6 hours",
        topics: ["Dynpro", "Web Dynpro", "Fiori", "UI5"],
        difficulty: "Advanced"
      },
      {
        title: "Integration",
        duration: "8 hours",
        topics: ["RFC", "BAPI", "Web Services", "Cloud"],
        difficulty: "Advanced"
      },
      {
        title: "Security",
        duration: "5 hours",
        topics: ["Authorization", "Roles", "Auditing", "Compliance"],
        difficulty: "Expert"
      }
    ]
  },
  {
    id: 10,
    title: "SAP HANA Development",
    subject: "sap",
    description: "Learn SAP HANA development, modeling, and implementation techniques.",
    pages: "145 Pages",
    format: "PDF",
    size: "18 MB",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=400&fit=crop",
    chapters: [
      {
        title: "HANA Basics",
        duration: "5 hours",
        topics: ["Architecture", "Studio", "Tables", "Views"],
        difficulty: "Beginner"
      },
      {
        title: "Data Modeling",
        duration: "7 hours",
        topics: ["Attributes", "Calculations", "Associations", "Hierarchies"],
        difficulty: "Intermediate"
      },
      {
        title: "SQLScript",
        duration: "8 hours",
        topics: ["Procedures", "Functions", "Libraries", "Optimization"],
        difficulty: "Advanced"
      },
      {
        title: "XS Advanced",
        duration: "6 hours",
        topics: ["MTA", "Services", "Security", "UI"],
        difficulty: "Advanced"
      },
      {
        title: "Integration",
        duration: "7 hours",
        topics: ["ERP", "BW", "S/4HANA", "Cloud"],
        difficulty: "Advanced"
      },
      {
        title: "Administration",
        duration: "5 hours",
        topics: ["Monitoring", "Backup", "Security", "Migration"],
        difficulty: "Expert"
      }
    ]
  }
];

const Notes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, isVisible } = useScrollAnimation(0.2);

  const filteredMaterials = materials.filter((material) => {
    const matchesCategory = selectedCategory === "all" || material.subject === selectedCategory;
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // use index-based selection so we can implement a sliding carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset active index when filters or search change or when the filtered list shrinks
  useEffect(() => {
    if (filteredMaterials.length === 0) {
      setActiveIndex(0);
      return;
    }

    // clamp index to available range
    setActiveIndex((idx) => (idx >= filteredMaterials.length ? 0 : idx));
  }, [selectedCategory, searchQuery, filteredMaterials.length]);

  const selectedNote = filteredMaterials[activeIndex] ?? null;

  // autoplay slider
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    // clear any existing interval
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    if (filteredMaterials.length <= 1) return;

    if (!isPaused) {
      autoplayRef.current = window.setInterval(() => {
        setActiveIndex((i) => (i + 1) % filteredMaterials.length);
      }, 6000); // change slide every 6s
    }

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [filteredMaterials.length, isPaused]);

  return (
    <div className="min-h-screen pt-20">
      <PageHero
        title="NOTES AND STUDY MATERIALS"
        description="Download comprehensive study materials and notes prepared by expert educators"
        imageUrl="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=800&fit=crop"
      />

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search study materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
          
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

      {/* Materials Section with Side Navigation */}
      <section className="py-20 bg-muted min-h-[calc(100vh-400px)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Side Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-card rounded-xl p-6 shadow-md sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Available Notes</h3>
                <div className="space-y-2">
                  {filteredMaterials.map((material, idx) => (
                    <button
                      key={material.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeIndex === idx ? "bg-primary/10 text-primary" : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5" />
                        <div>
                          <p className="font-medium line-clamp-1">{material.title}</p>
                          <p className="text-xs text-muted-foreground capitalize">{material.subject}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content (Slider) */}
            <div className="lg:w-3/4 relative">
              {filteredMaterials.length === 0 ? (
                <div className="bg-card rounded-xl p-12 text-center">
                  <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Notes Available</h3>
                  <p className="text-muted-foreground">Try a different filter or search term.</p>
                </div>
              ) : (
                <div className="overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Notes slideshow"
                  >
                    {filteredMaterials.map((material) => (
                      <div key={material.id} className="w-full flex-shrink-0" style={{ minWidth: '100%' }}>
                        <div className="p-0">
                          <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                            <div className="h-[300px] relative overflow-hidden">
                              <img src={material.image} alt={material.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm">{material.subject}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-2">{material.title}</h2>
                                <p className="text-white/90">{material.description}</p>
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="flex flex-wrap gap-4 items-center mb-6 pb-6 border-b">
                                <div className="flex items-center gap-2">
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                  </div>
                                  <span>{material.pages}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-primary" />
                                  </div>
                                  <span>{material.format}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Download className="w-5 h-5 text-primary" />
                                  </div>
                                  <span>{material.size}</span>
                                </div>
                              </div>

                              <h3 className="text-xl font-semibold mb-4">Chapters Included</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {material.chapters.map((chapter: any, index) => (
                                  <TooltipProvider key={chapter.title}>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer group transition-all">
                                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">{index + 1}</div>
                                          <span className="group-hover:text-primary transition-colors">{chapter.title}</span>
                                        </div>
                                      </TooltipTrigger>
                                      <TooltipContent side="right" className="p-4 max-w-sm bg-card border-0 shadow-xl">
                                        <div className="space-y-3">
                                          <div className="flex items-center gap-2 text-primary">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{chapter.duration}</span>
                                          </div>
                                          <div className="flex items-center gap-2 text-primary">
                                            <GraduationCap className="w-4 h-4" />
                                            <span className="text-sm">{chapter.difficulty}</span>
                                          </div>
                                          <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-primary">
                                              <Book className="w-4 h-4" />
                                              <span className="text-sm">Key Topics:</span>
                                            </div>
                                            <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                                              {chapter.topics.map((topic: string) => (
                                                <li key={topic} className="list-disc">{topic}</li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                ))}
                              </div>

                              <Button variant="hero" size="lg" className="w-full mt-6">
                                <Download className="w-5 h-5 mr-2" />
                                Download Notes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* slider controls */}
                  <div className="mt-6 flex items-center justify-center gap-3">
                    {filteredMaterials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${activeIndex === i ? 'bg-primary' : 'bg-muted-foreground/40'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom <span className="gradient-text">Study Materials?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us to request specific study materials.
          </p>
          <Button variant="hero" size="lg">
            Request Materials
          </Button>
        </div>
      </section>
    </div>
  );
};

const MaterialCard = ({ material, index }: { material: typeof materials[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`bg-card rounded-xl p-6 shadow-md hover-lift transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xs px-3 py-1 bg-secondary rounded-full font-medium capitalize">
          {material.subject}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2">{material.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        {material.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
        <span>{material.pages}</span>
        <span>•</span>
        <span>{material.format}</span>
        <span>•</span>
        <span>{material.size}</span>
      </div>

      <Button variant="default" className="w-full group">
        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
        Download Now
      </Button>
    </div>
  );
};

export default Notes;
