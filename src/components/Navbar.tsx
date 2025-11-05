import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { TrainingModelMenu } from "./TrainingModelMenu";
import { trainingModelRoutes } from "@/data/training-model";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Set scroll state to toggle navbar background
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize state on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Reset scroll state on route change to ensure consistency
    setIsScrolled(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path || (path === '/' && location.pathname === '');

  const navLinks = [
    // { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Training Model", type: "dropdown" },
    { 
      name: "Courses", 
      path: "/courses",
    },
    { name: "Mentors", path: "/mentors" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    // { name: "Notes & Materials", path: "/notes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background text-primary shadow-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          
          <Link 
            to="/"
            className="transition-transform duration-300 hover:scale-105 cursor-pointer border-none bg-transparent"
          >
            <img src="/Logo.png" alt="Logo" className="h-10 w-30" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.type === "dropdown" ? (
                  <div key={link.name} className={`${
                    isScrolled ? "text-primary" : "text-white"
                  }`}>
                    <TrainingModelMenu />
                  </div>
              ) : (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                      isActive(link.path)
                        ? "text-secondary font-semibold"
                        : isScrolled
                          ? "text-primary hover:text-primary/90"
                          : "text-white hover:text-white/90"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${
                      isActive(link.path) ? "w-full" : ""
                    }`} />
                  </Link>
                </div>
              )
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
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t border-border animate-fade-in ${
            isScrolled ? 'bg-background/95' : 'bg-black/20'
          } backdrop-blur-lg`}>
            {navLinks.map((link) => (
              link.type === "dropdown" ? (
                <div key={link.name} className="px-4 py-2">
                  <span className="text-lg font-medium mb-2 block">Training Model</span>
                  <div className="space-y-2">
                    {trainingModelRoutes.map((route) => (
                      <Link
                        key={route.href}
                        to={route.href}
                            className="flex items-center gap-2 px-2 py-1.5 text-sm rounded text-secondary hover:bg-accent/50 transition-colors"
                      >
                        <route.icon className="w-4 h-4" />
                        {route.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 transition-colors relative ${
                      isActive(link.path) 
                        ? "text-secondary font-semibold" 
                        : isScrolled
                          ? "text-primary hover:text-primary/90"
                          : "text-white hover:text-white/90"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              )
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
