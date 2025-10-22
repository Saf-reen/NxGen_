import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();



  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Ensure navbar starts transparent on every route change
    setIsScrolled(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Courses", 
      path: "/courses",

    },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Notes & Materials", path: "/notes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <img src="/Logo.png" alt="Logo" className="h-10 w-30"/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                    isActive(link.path)
                      ? "text-secondary font-semibold"
                      : "text-primary hover:text-primary/80 hover:bg-muted"
                  }`}
                >
                  {link.name}
                  {!isScrolled && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
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
            className="lg:hidden p-2 rounded-lg transition-colors text-primary hover:text-primary/80 hover:bg-muted"
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
                <Link
                  to={link.path}
                  className={`block px-4 py-3 hover:bg-muted transition-colors ${
                    isActive(link.path) ? "text-secondary font-semibold" : "text-primary hover:text-primary/80"
                  }`}
                >
                  {link.name}
                </Link>
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
