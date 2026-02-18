import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Smartphone, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of hero images
  const heroImages = [
    '/hero-image.jpg',
    '/hero-bg.png',
    '/hero-bg-1.jpeg'
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <SEO
        title="Best IT Training & Placement Institute in Pune - NxGen Tech Academy"
        description="Join Our 100% Job Guarantee Courses. Expert instructors, industry-relevant programs, hands-on training."
        type="website"
        path="/"
      />

      {/* Hero Section with Carousel */}
      <section className="relative bg-white text-gray-800 py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-2">Upscale Your Career in IT Industry</p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
                Certification &amp; Training Programs
              </h1>
            </div>

            <p className="text-lg text-gray-600 font-medium">
              SAP | SAS | Data Engineer | Salesforce | Data Science
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium text-lg px-8 rounded-md">
                <Link to="/all-courses">Explore Courses</Link>
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-lg text-[#000080]">
                <span className="font-bold text-2xl">15 Years</span> in the field of IT Training &amp; Placement Industry
              </p>
              <div className="h-0.5 w-full bg-gray-200 mt-4 max-w-md"></div>
            </div>

            <div className="pt-6">
              <p className="text-gray-600 mb-4 font-medium">Professionals hired by</p>
              <div className="flex flex-wrap items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" alt="Cognizant" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" alt="Accenture" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" alt="Infosys" className="h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Carousel Container */}
            <div className="relative w-full max-w-[600px] h-[600px]">
              {/* Images */}
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Hero slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                />
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-[#000080] w-8'
                      : 'bg-gray-400 w-2 hover:bg-gray-600'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Why Do Professionals Choose Our Institution?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
              Professionals choose NxGen Tech Academy Institution for their IT education for a multitude of reasons: expert instructors, industry-relevant programs, hands-on training, personalized career support, and a track record of success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Expert Instructors (10+ Years Exp)",
              "Industry-Relevant Programs",
              "Hands-on Training & Labs",
              "100% Job Placement Assistance",
              "Flexible Schedules (Weekend/Weekday)",
              "Global Certifications"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-secondary">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <h4 className="text-lg font-semibold">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAS Academy Feature */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Students learning" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-sm">Featured Program</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">SAS Academy for Clinical Programming</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                This SAS training prepares you for a career as a SAS Certified Clinical Trials Programming Professional, combining coursework and hands-on learning in clinical research and data analysis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Qualification: Graduate & Master’s Background in Life Sciences, IT, Stats.</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Prerequisite: Basic understanding of any programming language.</span>
                </li>
              </ul>
              <Button className="bg-secondary hover:bg-secondary/90 text-white mt-4" asChild>
                <Link to="/sas-training-institute-in-pune">Explore More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SAS Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">SAP Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "SAP Technical & Development", hours: "Multiple Courses", link: "/courses/sap-technical" },
              { title: "SAP Functional Modules", hours: "Multiple Courses", link: "/courses/sap-functional" },
              { title: "SAP Administration & HR", hours: "Multiple Courses", link: "/courses/sap-admin" },
              { title: "SAP Business Technology Platform (BTP)", hours: "Multiple Courses", link: "/courses/sap-btp" },
              { title: "SAP Specialized / Sub Courses", hours: "Multiple Courses", link: "/courses/sap-specialized" },
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-40 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 opacity-80"></div>
                  <span className="relative text-white font-bold text-xl px-4 text-center">{course.title}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    {course.hours}
                  </p>
                  <Link to={course.link} className="text-primary font-bold hover:text-secondary flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* Trending Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Trending Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Data Analytics", hours: "70 Hours", link: "/courses/data-analytics" },
              { title: "Python", hours: "45 Hours", link: "/courses/python" },
              { title: "Digital Marketing", hours: "60 Hours", link: "/courses/digital-marketing" },
              { title: "AIML", hours: "80 Hours", link: "/courses/aiml" },
            ].map((course, i) => (
              <div key={i} className="bg-white border rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-200"></div>
                  <span className="relative text-gray-800 font-bold text-lg px-4 text-center">{course.title}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {course.hours}
                  </p>
                  <Link to={course.link} className="text-primary font-bold hover:text-secondary flex items-center gap-2">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* SAP Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">SAP Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "SAP ABAP", duration: "2 Months", link: "#" },
              { title: "SAP Basis", duration: "2 Months", link: "#" },
              { title: "SAP S4 HANA FICO", duration: "2 Months", link: "#" },
              { title: "SAP S4 HANA MM", duration: "2 Months", link: "#" },
              { title: "SAP SD", duration: "2 Months", link: "#" },
              { title: "SAP S4 HANA PP", duration: "2 Months", link: "#" },
              { title: "SAP HR HCM", duration: "2 Months", link: "#" },
              { title: "SAP Success Factors", duration: "2 Months", link: "#" },
            ].map((course, i) => (
              <div key={i} className="bg-white border rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-colors">
                  <span className="text-gray-800 font-bold text-lg px-4 text-center group-hover:text-primary">{course.title}</span>
                </div>
                <div className="p-5 border-t">
                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    {course.duration}
                  </p>
                  <Link to={course.link} className="text-primary font-bold text-sm hover:text-secondary flex items-center gap-1">
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/all-courses">View All SAP Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ravi Rautele", text: "I have successfully completed my SAP FICO training from NxGen Tech Academy, which gave me a strong understanding of Financial Accounting and Controlling concepts.", course: "SAP FICO" },
              { name: "Vinod Goud", text: "THIS MONTH I HAVE COMPLETED SAP FICO COURSE. THE TRAINING IS WELL STRUCTURED AND EASY TO UNDERSTAND. COURSE CONTENT PROVIDES HANDS ON PRATICE.", course: "SAP FICO" },
              { name: "Ritik S. Mourya", text: "I have just completed my FullStack DOT NET training from NxGen Tech Academy. The sessions were very helpful and understanding session throughout the training.", course: "FullStack .NET" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="absolute -top-4 left-8 bg-secondary text-white p-2 rounded-full">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-primary">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-secondary">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SAS Certification Course in Canada (North America)", date: "2025-12-12", views: "725" },
              { title: "Get Certified and Advance Your Career with SAS Data & AI Programs", date: "2025-10-06", views: "479" },
              { title: "What is Data Analytics? Types and Benefits Explained", date: "2025-10-06", views: "920" }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors"></div>
                  {/* Placeholder for blog image */}
                  <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-xs rounded shadow">
                    {article.views} Views
                  </div>
                </div>
                <p className="text-xs text-secondary font-bold mb-1">{article.date}</p>
                <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;