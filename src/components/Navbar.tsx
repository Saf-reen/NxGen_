import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Grid, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import { categoryConfig, coursesData } from "@/data/categoryCourses";

const courseCategories = (() => {
  // 1. Get unique parent categories ensuring order based on config definition
  const parentCategories = Array.from(new Set(Object.values(categoryConfig).map(c => c.parentCategory)));

  return parentCategories.map(parent => {
    // 2. Get all sub-categories (config entries) for this parent
    const subCats = Object.entries(categoryConfig)
      .filter(([_, config]) => config.parentCategory === parent)
      .map(([key, config]) => ({ key, ...config }));

    let items = [];

    // 3. Logic: If multiple sub-categories, show them. If single, show its courses.
    if (subCats.length > 1) {
      items = subCats.map(sc => ({
        title: sc.title,
        desc: sc.description,
        link: `/courses/${sc.key}`
      }));
    } else if (subCats.length === 1) {
      const subCat = subCats[0];
      const courses = coursesData.filter(c => c.categoryId === subCat.key);
      items = courses.map(c => ({
        title: c.title,
        desc: c.description || subCat.description,
        link: `/courses/${c.id}`
      }));
    }

    return {
      category: parent,
      items
    };
  }).filter(c => c.items.length > 0); // content filter
})();

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(courseCategories[0]?.category || "SAP Courses");
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
              className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-6 gap-2 shrink-0"
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
                                  ? 'bg-white border-[#F6AD55] text-[#000080] shadow-md'
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
                          {activeItems.map((item: any, index: number) => (
                            <div
                              key={index}
                              className="flex flex-col p-4 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <div className="relative z-10">
                                <h5 className="font-bold text-gray-800 text-lg group-hover:text-[#000080] transition-colors mb-2">
                                  {item.title}
                                </h5>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                  {item.desc}
                                </p>
                                <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="w-full justify-between hover:bg-[#000080] hover:text-white border-blue-200 text-[#000080] group/btn"
                                  onClick={() => setIsCourseMenuOpen(false)}
                                >
                                  <Link to={item.link}>
                                    Know More
                                    <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
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
            <Button asChild className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-6">
              <Link to="/all-courses">Explore All Courses</Link>
            </Button>
            <Button asChild className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-6">
              <Link to="/about">About Us</Link>
            </Button>
            <Button asChild className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-6">
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
            <Button asChild className="w-full bg-[#000080] text-white">
              <Link to="/all-courses">Explore All Courses</Link>
            </Button>
            <Button asChild className="w-full bg-[#000080] text-white">
              <Link to="/sas-training-institute-in-pune">SAS Certification</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
