import { Link } from "react-router-dom";
import { Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">

          {/* Column 1: Pune + Popular Left */}
          <div className="space-y-12">
            {/* Pune Section */}
            <div>
              <h3 className="text-white text-xl mb-6">Pune</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  103, 1st Floor, AspireTechsoft Pvt. Ltd., Himgauri, Above KFC, Kothrud, Pune, Maharashtra 411038
                </p>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4" />
                  <span>+91 9960935600</span>
                </div>
                <Button className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white h-8 text-xs px-4 rounded">
                  VED-LMS
                </Button>
              </div>
            </div>

            {/* Popular Link (Bottom Left subset) */}
            <div>
              <h3 className="text-white text-xl mb-6">Popular Link</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Placement</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Testimonial</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Training Certificate</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Sitemap</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Blogs</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Wakad + Services */}
          <div className="space-y-12">
            {/* Wakad Section */}
            <div>
              <h3 className="text-white text-xl mb-6">Wakad</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Office 101, Rajgad Building, Ratnadeep lane, Datta mandir road, Wakad. Pimpri Chinchwad
                </p>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4" />
                  <span>+91 99609 35965</span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 pt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2B6CB0] transition-colors text-white">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2B6CB0] transition-colors text-white">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2B6CB0] transition-colors text-white">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2B6CB0] transition-colors text-white">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2B6CB0] transition-colors text-white">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-white text-xl mb-6">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> SAP Training</Link></li>
                <li><Link to="/sas-training-institute-in-pune" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> SAS Certification</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Salesforce</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Data Science</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> AWS Certification</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Full Stack Development</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Bangalore */}
          <div>
            <h3 className="text-white text-xl mb-6">Bangalore</h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Office No - 322, 3 Floor, Raheja Arcade, Koramangala, 5 Block, 80ft Road, Karnataka, Bangalore 560095.
              </p>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4" />
                <span>+91 6364 012 099</span>
              </div>
            </div>
          </div>

          {/* Column 4: Popular Link (Right Top) */}
          <div>
            <h3 className="text-white text-xl mb-6">Popular Link</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Terms & Condition</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Job Openings</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Join Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Hire Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="border border-slate-600 w-1 h-1 block"></span> Become a Trainer</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; Aspire techSoft Pvt.Ltd. All Right Reserved.</p>
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

