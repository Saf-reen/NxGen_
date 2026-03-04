import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Grid, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import { categoryConfig, coursesData } from "@/data/categoryCourses";

const courseCategories = (() => {
  // 1. Get unique parent categories ensuring order based on config definition
  const parentCategories = Array.from(
    new Set(Object.values(categoryConfig).map((c) => c.parentCategory)),
  );

  return parentCategories
    .map((parent) => {
      // 2. Get all sub-categories (config entries) for this parent
      const subCats = Object.entries(categoryConfig)
        .filter(([_, config]) => config.parentCategory === parent)
        .map(([key, config]) => ({ key, ...config }));

      let items = [];

      // 3. Logic: If multiple sub-categories, show them. If single, show its courses.
      if (subCats.length > 1) {
        items = subCats.map((sc) => ({
          title: sc.title,
          desc: sc.description,
          link: `/courses/${sc.key}`,
        }));
      } else if (subCats.length === 1) {
        const subCat = subCats[0];
        const courses = coursesData.filter((c) => c.categoryId === subCat.key);
        items = courses.map((c) => ({
          title: c.title,
          desc: c.description || subCat.description,
          link: `/courses/${c.id}`,
        }));
      }

      return {
        category: parent,
        items,
      };
    })
    .filter((c) => c.items.length > 0); // content filter
})();

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    courseCategories[0]?.category || "SAP Courses",
  );
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
  const location = useLocation();

  const role = localStorage.getItem("role");
  const isAuthPage = [
    "/student-login",
    "/instructor-login",
    "/register",
  ].includes(location.pathname);
  const isSpecialAccount = role === "student" || role === "instructor";

  // Helper to find active items
  const activeItems =
    courseCategories.find((c) => c.category === activeCategory)?.items || [];

  if (isSpecialAccount || isAuthPage) {
    return (
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b pb-4 pt-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/Logo.png"
                alt="NxGen Tech Academy"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Logout Button - Only show if logged in */}
            {isSpecialAccount && (
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium px-6"
                onClick={() => {
                  localStorage.removeItem("username");
                  localStorage.removeItem("access_token");
                  localStorage.removeItem("role");
                  window.location.href = "/";
                }}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b pb-4 pt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 xl:gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/Logo.png"
              alt="NxGen Tech Academy"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Nav Controls - Middle Section */}
          <div className="flex flex-1 flex-col sm:flex-row items-center gap-3 xl:gap-4 w-full lg:w-auto justify-center lg:justify-start lg:pl-2 xl:pl-8 mt-2 lg:mt-0">
            {/* Hover Course Menu Button & Dropdown */}
            <div className="relative group/menu w-full sm:w-auto flex justify-center">
              <Button
                asChild
                className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-2 xl:px-6 gap-2 shrink-0 cursor-default"
              >
                <div>
                  <Grid className="w-4 h-4" />
                  Course Menu
                </div>
              </Button>

              {/* Invisible bridge for smooth hover */}
              <div className="absolute top-full left-0 w-full h-4 bg-transparent z-[60]"></div>

              {/* Priority dropdown, shown on hover of group/menu */}
              <div className="absolute top-[calc(100%+0.5rem)] left-0 w-64 bg-white shadow-xl rounded-md opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 z-[60] py-2 border border-gray-100">
                <ul className="flex flex-col">
                  {[
                    {
                      name: "SAP",
                      link: "/sap-courses",
                      items: [
                        { title: "SAP ABAP on S/4HANA", link: "/courses/sap-abap-s4hana" },
                        { title: "SAP ABAP with CDS, OData & RAP", link: "/courses/sap-abap-rap" },
                        { title: "SAP Fiori & UI5", link: "/courses/sap-fiori" },
                        { title: "SAP Full Stack Development", link: "/courses/sap-fullstack" },
                        { title: "SAP SD", link: "/courses/sap-sd" },
                        { title: "SAP MM", link: "/courses/sap-mm" },
                        { title: "SAP FICO", link: "/courses/sap-fico" },
                        { title: "SAP PP", link: "/courses/sap-pp" },
                        { title: "SAP BTP", link: "/courses/sap-btp" },
                        { title: "SAP PM", link: "/courses/sap-pm" },
                        { title: "SAP QM", link: "/courses/sap-qm" },
                        { title: "SAP SCM", link: "/courses/sap-scm" },
                        { title: "SAP EWM", link: "/courses/sap-ewm" },
                        { title: "SAP Basis", link: "/courses/sap-basis" },
                        { title: "SAP HCM", link: "/courses/sap-hcm-successfactors" },
                      ]
                    },
                    {
                      name: "Python",
                      link: "/courses/python",
                      items: courseCategories.find((c) => c.category === "Python")?.items || []
                    },
                    {
                      name: "AI",
                      link: "/courses/ai",
                      items: courseCategories.find((c) => c.category === "AI")?.items || []
                    },
                    {
                      name: "AIML",
                      link: "/courses/aiml",
                      items: courseCategories.find((c) => c.category === "AIML")?.items || []
                    },
                    {
                      name: "Data Analytics",
                      link: "/courses/power-bi",
                      items: courseCategories.find((c) => c.category === "Data Analytics")?.items || []
                    },
                    {
                      name: "Digital Marketing",
                      link: "/courses/digital-marketing",
                      items: courseCategories.find((c) => c.category === "Digital Marketing")?.items || []
                    }
                  ].map((category) => (
                    <li key={category.name} className="relative group/category px-4 py-2 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                      <Link to={category.link} className="w-full text-left font-medium text-gray-800">
                        {category.name}
                      </Link>
                      {category.items.length > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}

                      {/* Nested Dropdown */}
                      {category.items.length > 0 && (
                        <div className="absolute left-full top-0 ml-0 w-[600px] bg-[#fdfdfd] shadow-2xl rounded-md opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-300 z-[70] p-6 border border-gray-100">
                          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-6">
                            {category.items.map((item, idx) => (
                              <li key={idx}>
                                <Link to={item.link} className="block text-sm text-gray-700 hover:text-[#000080] font-medium transition-colors">
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <Link to={category.link} className="text-[#4169E1] font-semibold text-sm hover:underline underline-offset-4">
                              View All {category.name} Courses
                            </Link>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex w-full max-w-xs xl:max-w-xl relative">
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
            <Button
              asChild
              className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-2 xl:px-6"
            >
              <Link to="/all-courses">Explore All Courses</Link>
            </Button>
            <Button
              asChild
              className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-2 xl:px-6"
            >
              <Link to="/about">About Us</Link>
            </Button>
            {/* <Button asChild className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-2 xl:px-6">
              <Link to="/blogs">Blogs</Link>
            </Button> */}

            <Button
              asChild
              className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium px-2 xl:px-6"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            {localStorage.getItem("username") ? (
              <>
                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium px-2 xl:px-6"
                >
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium px-2 xl:px-6"
                  onClick={() => {
                    localStorage.removeItem("username");
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("role");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                asChild
                variant="outline"
                className="border-[#000080] text-[#000080] hover:bg-[#000080] hover:text-white font-medium px-2 xl:px-6"
              >
                <Link to="/register">Register</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute top-4 right-4 p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white mt-4 space-y-3 px-4 pb-6">
            <Button asChild className="w-full bg-[#000080] text-white">
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
            </Button>
            <Button asChild className="w-full bg-[#000080] text-white">
              <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                Blogs
              </Link>
            </Button>
            <Button asChild className="w-full bg-[#000080] text-white">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
            {localStorage.getItem("username") ? (
              <>
                <Button asChild className="w-full bg-secondary text-white">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Dashboard
                  </Link>
                </Button>
                <Button
                  className="w-full bg-red-500 text-white"
                  onClick={() => {
                    localStorage.removeItem("username");
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("role");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#000080] text-[#000080]"
                >
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register Now
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#000080] border border-[#000080]"
                  >
                    <Link
                      to="/student-login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Student
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#000080] border border-[#000080]"
                  >
                    <Link
                      to="/instructor-login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Instructor
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
