import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img src="/Logo.png" alt="Aspire IT" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              Aspire Techsoft is a leading IT training institute offering job-oriented courses with 100% placement assistance. We are dedicated to shaping your career with expert guidance and practical learning.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/all-courses.php" className="hover:text-secondary transition-colors">All Courses</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/sas-training-institute-in-pune" className="hover:text-secondary transition-colors">SAS Certification</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-secondary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Popular Courses</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-secondary transition-colors">Data Analytics</Link></li>
              <li><Link to="#" className="hover:text-secondary transition-colors">Full Stack Java</Link></li>
              <li><Link to="#" className="hover:text-secondary transition-colors">SAP S/4 HANA</Link></li>
              <li><Link to="#" className="hover:text-secondary transition-colors">Data Science</Link></li>
              <li><Link to="#" className="hover:text-secondary transition-colors">Software Testing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Office No. 12, 1st Floor, Aspire Towers, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>+91 9960 935 600</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>info@aspireit.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Aspire Techsoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
