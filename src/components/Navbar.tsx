import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCoursesDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Courses", 
      path: "/courses",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Courses", path: "/courses" },
        { name: "Engineering", path: "/courses?category=engineering" },
        { name: "Medical", path: "/courses?category=medical" },
        { name: "Foundation", path: "/courses?category=foundation" },
      ]
    },
    { name: "Why Choose Us", path: "/#why-choose-us" },
    { name: "Notes & Materials", path: "/notes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/98 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <Logo isScrolled={isScrolled} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 ${
                        isScrolled
                          ? isActive(link.path)
                            ? "text-primary font-semibold"
                            : "text-foreground hover:text-primary hover:bg-muted"
                          : "text-white font-medium hover:text-accent"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                      isScrolled
                        ? isActive(link.path)
                          ? "text-primary font-semibold"
                          : "text-foreground hover:text-primary hover:bg-muted"
                        : "text-white font-medium hover:text-accent"
                    }`}
                  >
                    {link.name}
                    {!isScrolled && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-muted text-foreground" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                      className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center justify-between"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isCoursesDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isCoursesDropdownOpen && (
                      <div className="bg-muted/50">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-8 py-2 hover:bg-muted/80 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 hover:bg-muted transition-colors ${
                      isActive(link.path) ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
