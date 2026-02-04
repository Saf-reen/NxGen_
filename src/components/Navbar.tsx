import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Grid, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const courseCategories = [
  {
    category: "SAP Courses",
    items: [
      "SAP Technical & Development Courses",
      "SAP Specialized / Sub Courses",
      "SAP Functional Modules",
      "SAP Administration & HR Modules",
    ]
  },
  {
    category: "Python",
    items: ["Python"]
  },
  {
    category: "AI",
    items: ["Artificial Intelligence Course"]
  },
  {
    category: "AIML",
    items: ["AI & Machine Learning Course"]
  },
  {
    category: "Data Analytics",
    items: ["Power BI"]
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("SAP Courses");
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);

  // Helper to find active items
  const activeItems = courseCategories.find(c => c.category === activeCategory)?.items || [];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b pb-4 pt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/Logo.png" alt="Aspire Techsoft" className="h-12 w-auto object-contain" />
          </Link>

          {/* Nav Controls - Middle Section */}
          <div className="flex flex-1 items-center gap-4 w-full lg:w-auto justify-center lg:justify-start lg:pl-8">

            {/* Course Menu Button */}
            <Button
              className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-medium px-6 gap-2 shrink-0"
              onClick={() => setIsCourseMenuOpen(true)}
            >
              <Grid className="w-4 h-4" />
              Course Menu
            </Button>

            {/* Mega Menu Overlay - Fixed at top */}
            {isCourseMenuOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsCourseMenuOpen(false)}
                />

                {/* Menu Content */}
                <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80%] z-50 bg-white shadow-xl rounded-b-xl animate-in slide-in-from-top-5 duration-200">
                  <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                      <h3 className="text-2xl font-bold text-[#1a202c]">Course Categories</h3>
                      <Button variant="ghost" size="icon" onClick={() => setIsCourseMenuOpen(false)}>
                        <X className="w-6 h-6 text-gray-500" />
                      </Button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 h-[70vh]">
                      {/* Categories Sidebar */}
                      <div className="w-full lg:w-1/3 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="flex flex-col gap-2">
                          {courseCategories.map((cat) => (
                            <div
                              key={cat.category}
                              className={`
                                     flex items-center justify-between px-6 py-4 rounded-lg cursor-pointer transition-all duration-200 font-medium text-base border
                                     ${activeCategory === cat.category
                                  ? 'bg-white border-[#F6AD55] text-[#2B6CB0] shadow-md'
                                  : 'border-gray-100 hover:bg-gray-50 text-gray-700 hover:text-gray-900'}
                                   `}
                              onClick={() => setActiveCategory(cat.category)}
                            >
                              <div className="flex items-center gap-3">
                                <span>{cat.category}</span>
                              </div>
                              {activeCategory === cat.category ? (
                                <ChevronRight className="w-5 h-5 text-[#F6AD55]" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-gray-300 opacity-0 group-hover:opacity-100" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Items List */}
                      <div className="w-full lg:w-2/3 bg-gray-50/50 rounded-xl p-6 overflow-y-auto border border-gray-100">
                        <h4 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b">{activeCategory}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeItems.map((item, index) => (
                            <Link
                              key={index}
                              to="/sap-fico-on-s4-hana"
                              onClick={() => setIsCourseMenuOpen(false)}
                              className="flex items-start p-3 rounded-lg hover:bg-white hover:shadow-sm hover:border-blue-100 border border-transparent transition-all duration-200 group"
                            >
                              <span className="text-gray-600 group-hover:text-[#2B6CB0] font-medium leading-relaxed">
                                {item}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Search Bar */}
            <div className="flex w-full max-w-xl relative">
              <input
                type="text"
                placeholder="Search Your Course Here!"
                className="w-full h-10 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-primary"
              />
              <button className="bg-secondary hover:bg-secondary/90 text-white w-12 flex items-center justify-center rounded-r-md">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button asChild className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-medium px-6">
              <Link to="/all-courses">Explore All Courses</Link>
            </Button>
            <Button asChild className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-medium px-6">
              <Link to="/about">About Us</Link>
            </Button>
            <Button asChild className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-medium px-6">
              <Link to="/blogs">Blogs</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute top-4 right-4 p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white mt-4 space-y-3">
            <Button asChild className="w-full bg-[#2B6CB0] text-white">
              <Link to="/all-courses">Explore All Courses</Link>
            </Button>
            <Button asChild className="w-full bg-[#2B6CB0] text-white">
              <Link to="/sas-training-institute-in-pune">SAS Certification</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
