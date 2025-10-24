import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award, BookOpen, Video, FileText, CheckCircle, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SEO } from "@/components/SEO";

interface Course {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  duration: string;
  students: string;
  rating: string;
  price: string;
  startDate: string;
  instructor: {
    name: string;
    image: string;
    designation: string;
    experience: string;
  };
    outcomes: string[];
    tools: string[];
    placement: {
      avgSalary: string;
      companies: string[];
      successRate: string;
    };
    fees: {
      amount: string;
      emi: string;
    };
    testimonials: Array<{
      name: string;
      company: string;
      text: string;
      image: string;
    }>;
  features: string[];
  syllabus: Array<{
    module: string;
    topics: string[];
  }>;
}

// Mock course data - in real app, this would come from an API
const courseDetails: Record<number, Course> = {
  1: {
    title: "Java Full Stack Development",
    description: "Master Java Full Stack Development with Spring Boot, React, and Cloud technologies. Industry-aligned curriculum with real projects.",
    metaTitle: "Java Full Stack Development Course | NxGen Tech Academy",
    metaDescription: "Become a certified Java Full Stack Developer. Learn Spring Boot, React, and Cloud technologies with hands-on projects and placement support.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    duration: "16 Weeks",
    students: "250+ Students",
    rating: "4.9",
    price: "₹45,000",
    startDate: "2025-11-15",
    instructor: {
      name: "John Doe",
      image: "/instructors/john-doe.jpg",
      designation: "Senior Java Architect",
      experience: "12+ years"
    },
      outcomes: [
        "Build enterprise applications using Spring Boot & React",
        "Master cloud deployment on AWS/Azure",
        "Implement secure authentication and authorization",
        "Create scalable microservices architecture",
        "Develop RESTful APIs and GraphQL endpoints"
      ],
      tools: [
        "Spring Boot",
        "React",
        "MySQL",
        "AWS/Azure",
        "Docker",
        "Jenkins"
      ],
      placement: {
        avgSalary: "6-12 LPA",
        companies: ["TCS", "Infosys", "Wipro", "Tech Mahindra"],
        successRate: "85%"
      },
      fees: {
        amount: "₹45,000",
        emi: "₹8,000/month for 6 months"
      },
      testimonials: [
        {
          name: "Rahul Kumar",
          company: "TCS",
          text: "The hands-on project experience helped me land my dream job at TCS. The mentors were extremely supportive.",
          image: "/testimonials/rahul.jpg"
        },
        {
          name: "Priya Sharma",
          company: "Infosys",
          text: "The curriculum is well-structured and industry-relevant. I'm now working as a Full Stack Developer at Infosys.",
          image: "/testimonials/priya.jpg"
        }
      ],
    features: [
      "Live coding sessions with industry experts",
      "Real-world project development",
      "Cloud deployment training",
      "Git & DevOps practices",
      "Job placement assistance",
      "Interview preparation"
    ],
    syllabus: [
      {
        module: "Core Java",
        topics: ["OOP Concepts", "Collections", "Multithreading", "Generics", "Java 8+ Features"]
      },
      {
        module: "Spring Framework",
        topics: ["Spring Core", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA"]
      },
      {
        module: "Frontend Development",
        topics: ["HTML/CSS", "JavaScript", "React.js", "Redux", "TypeScript"]
      },
    ],
  },
  2: {
    title: "Python Full Stack Development",
    description: "Master Python Full Stack Development with Django, React, and modern web technologies. Build real-world applications.",
    metaTitle: "Python Full Stack Development Course | NxGen Tech Academy",
    metaDescription: "Learn Python Full Stack Development with Django & React. Join our industry-aligned course with placement support.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=600&fit=crop",
    duration: "16 Weeks",
    students: "200+ Students",
    rating: "4.8",
    price: "₹40,000",
    startDate: "2025-11-15",
    instructor: {
      name: "Jane Smith",
      image: "/instructors/jane-smith.jpg",
      designation: "Python Development Lead",
      experience: "8+ years"
    },
    features: [
      "Hands-on Python programming",
      "Django framework mastery",
      "Database design & development",
      "API development",
      "Frontend integration",
      "Deployment strategies"
    ],
    syllabus: [
      {
        module: "Python Fundamentals",
        topics: ["Core Python", "OOP in Python", "File Handling", "Exception Handling", "Modules & Packages"]
      },
      {
        module: "Django Framework",
        topics: ["MVT Architecture", "Models & ORM", "Views & Templates", "Forms & Authentication", "REST APIs"]
      },
      {
        module: "Frontend Technologies",
        topics: ["HTML5 & CSS3", "JavaScript", "React.js", "API Integration", "State Management"]
      },
    ],
  },
  3: {
    title: "MERN Full Stack Development",
    description: "Comprehensive MERN Stack Development course covering MongoDB, Express.js, React, and Node.js with real projects.",
    metaTitle: "MERN Stack Development Course | NxGen Tech Academy",
    metaDescription: "Master MERN Stack Development. Learn MongoDB, Express.js, React, and Node.js with hands-on projects.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
    duration: "16 Weeks",
    students: "180+ Students",
    rating: "4.9",
    price: "₹42,000",
    startDate: "2025-11-20",
    instructor: {
      name: "Mike Johnson",
      image: "/instructors/mike-johnson.jpg",
      designation: "Senior MERN Developer",
      experience: "10+ years"
    },
    features: [
      "Modern JavaScript fundamentals",
      "Full MERN stack coverage",
      "Real-time application development",
      "Authentication & security",
      "Cloud deployment training",
      "Industry best practices"
    ],
    syllabus: [
      {
        module: "JavaScript & Node.js",
        topics: ["ES6+ Features", "Node.js Core", "Express.js", "RESTful APIs", "WebSockets"]
      },
      {
        module: "Frontend with React",
        topics: ["React Components", "React Hooks", "Redux", "Router", "Material UI"]
      },
      {
        module: "MongoDB & Database",
        topics: ["MongoDB CRUD", "Mongoose ODM", "Aggregation", "Indexing", "Data Modeling"]
      },
    ],
  },
  4: {
    title: "AI & Data Science",
    description: "Comprehensive Data Science and AI program covering Python, Machine Learning, Deep Learning, and Natural Language Processing.",
    metaTitle: "AI & Data Science Course | NxGen Tech Academy",
    metaDescription: "Master Data Science & AI. Learn Python, ML, Deep Learning & NLP with real-world projects and placement assistance.",
    image: "https://images.unsplash.com/photo-1508385082359-f5a2b56d3e47?w=1200&h=600&fit=crop",
    duration: "20 Weeks",
    students: "150+ Students",
    rating: "4.9",
    price: "₹55,000",
    startDate: "2025-11-25",
    instructor: {
      name: "Sarah Chen",
      image: "/instructors/sarah-chen.jpg",
      designation: "AI Research Lead",
      experience: "9+ years"
    },
    features: [
      "Hands-on ML projects",
      "Deep learning implementations",
      "NLP applications",
      "Data visualization",
      "Cloud ML deployment",
      "Research paper discussions"
    ],
    syllabus: [
      {
        module: "Machine Learning",
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering", "Ensemble Methods"]
      },
      {
        module: "Deep Learning",
        topics: ["Neural Networks", "CNN", "RNN", "Transformers", "GANs"]
      },
      {
        module: "Natural Language Processing",
        topics: ["Text Processing", "Word Embeddings", "Language Models", "BERT & GPT", "Applications"]
      },
    ],
  },
  5: {
    title: "Power BI Full Stack",
    description: "Master Power BI, DAX, SQL, and data visualization. Learn to create impactful business intelligence solutions.",
    metaTitle: "Power BI Development Course | NxGen Tech Academy",
    metaDescription: "Learn Power BI, DAX, SQL & data visualization. Create powerful BI solutions with our industry-expert instructors.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&h=600&fit=crop",
    duration: "12 Weeks",
    students: "120+ Students",
    rating: "4.7",
    price: "₹35,000",
    startDate: "2025-11-30",
    instructor: {
      name: "David Wilson",
      image: "/instructors/david-wilson.jpg",
      designation: "BI Solutions Architect",
      experience: "7+ years"
    },
    features: [
      "DAX formula mastery",
      "Advanced data modeling",
      "Custom visuals creation",
      "ETL processes",
      "Report automation",
      "Dashboard best practices"
    ],
    syllabus: [
      {
        module: "Power BI Fundamentals",
        topics: ["Data Import & Transform", "Power Query Editor", "Data Relationships", "Basic Visualizations", "Publishing Reports"]
      },
      {
        module: "Advanced DAX",
        topics: ["DAX Functions", "Calculated Columns", "Measures", "Time Intelligence", "Advanced Calculations"]
      },
      {
        module: "Power BI Service",
        topics: ["Workspaces", "Gateway Setup", "Report Distribution", "Row-Level Security", "Mobile Reports"]
      },
    ],
  },
  6: {
    title: "Software Testing Tools",
    description: "Comprehensive software testing course covering manual and automation testing with popular tools and frameworks.",
    metaTitle: "Software Testing Course | NxGen Tech Academy",
    metaDescription: "Master software testing with Selenium, Cypress & more. Learn automation testing with hands-on projects.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    duration: "14 Weeks",
    students: "100+ Students",
    rating: "4.6",
    price: "₹38,000",
    startDate: "2025-12-05",
    instructor: {
      name: "Lisa Anderson",
      image: "/instructors/lisa-anderson.jpg",
      designation: "QA Lead",
      experience: "8+ years"
    },
    features: [
      "Manual testing fundamentals",
      "Automation frameworks",
      "Performance testing",
      "Mobile testing",
      "API testing",
      "Test management"
    ],
    syllabus: [
      {
        module: "Manual Testing",
        topics: ["SDLC & STLC", "Test Cases & Scenarios", "Bug Reporting", "Test Planning", "Agile Testing"]
      },
      {
        module: "Automation Testing",
        topics: ["Selenium WebDriver", "TestNG", "Cypress", "Appium", "Jenkins CI/CD"]
      },
      {
        module: "Specialized Testing",
        topics: ["API Testing", "Performance Testing", "Security Testing", "Mobile Testing", "Cloud Testing"]
      },
    ],
  },
  7: {
    title: "Cyber Security",
    description: "Master cybersecurity fundamentals, ethical hacking, and enterprise security practices with hands-on labs.",
    metaTitle: "Cyber Security Course | NxGen Tech Academy",
    metaDescription: "Learn Cyber Security & Ethical Hacking. Master security tools and techniques with practical training.",
    image: "https://images.unsplash.com/photo-1508385082359-f5a2b56d3e47?w=1200&h=600&fit=crop",
    duration: "16 Weeks",
    students: "90+ Students",
    rating: "4.8",
    price: "₹45,000",
    startDate: "2025-12-10",
    instructor: {
      name: "Robert White",
      image: "/instructors/robert-white.jpg",
      designation: "Security Expert",
      experience: "11+ years"
    },
    features: [
      "Ethical hacking training",
      "Security tools mastery",
      "Penetration testing",
      "Network security",
      "Incident response",
      "Security certifications prep"
    ],
    syllabus: [
      {
        module: "Security Fundamentals",
        topics: ["Network Basics", "Cryptography", "Security Policies", "Risk Management", "Compliance"]
      },
      {
        module: "Ethical Hacking",
        topics: ["Reconnaissance", "Scanning", "Exploitation", "Web Security", "Wireless Security"]
      },
      {
        module: "Defense & Response",
        topics: ["Firewall Configuration", "IDS/IPS", "Incident Handling", "Forensics", "Security Auditing"]
      },
    ],
  }
};

const CourseDetail = () => {
  const { id } = useParams();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);
  const { ref: syllabusRef, isVisible: syllabusVisible } = useScrollAnimation(0.2);

  // Get course details or use default
  const course = courseDetails[Number(id) as keyof typeof courseDetails] || courseDetails[1];

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

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title={course.metaTitle}
        description={course.metaDescription}
        image={course.image}
        type="course"
        path={`/courses/${id}`}
        schemaData={generateCourseSchema(course)}
      />
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
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
