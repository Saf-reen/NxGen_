import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-400 relative overflow-hidden font-sans">
      {/* World Map Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'invert(1)'
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Col 1: Contact */}
          <div>
            <h3 className="text-white text-xl mb-6 font-semibold">Contact</h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#000080] mt-1 shrink-0" />
                <p>
                  First Floor, 1-121/63, Survey No. 63 Part, Hotel Sitara Grand Backside, Miyapur, Telangana – 500049
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#000080] shrink-0" />
                <span>+91 63097 82855</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Menu */}
          <div>
            <h3 className="text-white text-xl mb-6 font-semibold">Quick Menu</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h3 className="text-white text-xl mb-6 font-semibold">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/all-courses?category=SAP Courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> SAP Courses
                </Link>
              </li>
              <li>
                <Link to="/all-courses?category=Python" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> Python
                </Link>
              </li>
              <li>
                <Link to="/all-courses?category=AI" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> AI
                </Link>
              </li>
              <li>
                <Link to="/all-courses?category=AIML" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> AIML
                </Link>
              </li>
              <li>
                <Link to="/all-courses?category=Data Analytics" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#000080] rounded-full"></span> Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us */}
          <div>
            <h3 className="text-white text-xl mb-6 font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://x.com/tech_nxgen" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#000080] transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/NxGenTechAcademy/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#000080] transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@NxGenTechAcademy" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#000080] transition-colors text-white">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/nxgentechacademy/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#000080] transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/nxgen-tech-academy/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#000080] transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; NxGen Tech Academy. All Right Reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="#" className="hover:text-white">Cookies</Link>
            <Link to="#" className="hover:text-white">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
