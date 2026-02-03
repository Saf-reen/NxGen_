import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Grid } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Button className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-medium px-6 gap-2 shrink-0">
              <Grid className="w-4 h-4" />
              Course Menu
            </Button>

            {/* Search Bar */}
            <div className="flex w-full max-w-xl relative">
              <input
                type="text"
                placeholder="Search Your Course Here!"
                className="w-full h-10 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-primary"
              />
              <button className="bg-[#F6AD55] hover:bg-[#F6AD55]/90 text-white w-12 flex items-center justify-center rounded-r-md">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button asChild className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-medium px-6">
              <Link to="/all-courses.php">Explore All Courses</Link>
            </Button>
            <Button asChild className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white font-medium px-6">
              <Link to="/sas-training-institute-in-pune">SAS Certification</Link>
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
              <Link to="/all-courses.php">Explore All Courses</Link>
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
