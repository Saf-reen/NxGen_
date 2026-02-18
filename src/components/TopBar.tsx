/* eslint-disable */
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const TopBar = () => {
    return (
        <div className="bg-[#000080] text-white font-sans">
            <div className="container mx-auto px-4">
                {/* Top Row: Socials, Marquee, Logins */}
                <div className="flex flex-col lg:flex-row justify-between items-center py-2 gap-4 border-b border-white/10">

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        <a href="https://www.facebook.com/NxGenTechAcademy/" target="_blank" className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"><Facebook className="w-4 h-4" /></a>
                        <a href="https://www.youtube.com/@NxGenTechAcademy" target="_blank" className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"><Youtube className="w-4 h-4" /></a>
                        <a href="https://www.instagram.com/nxgentechacademy/" target="_blank" className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"><Instagram className="w-4 h-4" /></a>
                        <a href="https://www.linkedin.com/in/nxgen-tech-academy/" target="_blank" className="w-8 h-8 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition-colors"><Linkedin className="w-4 h-4" /></a>
                    </div>

                    {/* Marquee Text */}
                    <div
                        className="flex-1 px-4 overflow-hidden w-full lg:w-auto text-sm font-medium"
                        dangerouslySetInnerHTML={{ __html: '<marquee scrollamount="5">Join Our 100% Job Guarantee Courses (Open to All Graduates/ Diploma Holders/ Career Gaps/ Non-IT Backgrounds/ Pass-Outs from Any Year).</marquee>' }}
                    />

                    {/* Login Buttons */}
                    <div className="flex items-center gap-3 shrink-0">
                        <a href="#" className="px-4 py-1.5 border border-white rounded text-sm hover:bg-white hover:text-primary transition-colors">
                            Student Login
                        </a>
                        <a href="#" className="px-4 py-1.5 border border-white rounded text-sm hover:bg-white hover:text-primary transition-colors">
                            Instructor Login
                        </a>
                    </div>
                </div>

                {/* Bottom Row: Contact Info */}
                <div className="flex flex-wrap justify-center items-center gap-4 py-3 text-sm md:text-base font-medium">
                    <div className="flex items-center gap-2 border border-white/30 px-3 py-1 rounded bg-white/5">
                        <span>Corporate: +91 9701314138</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <span>Hyderabad - +91 9701314138</span>
                        <span className="hidden md:inline">|</span>
                        <span>Online - +91 9701314138</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
