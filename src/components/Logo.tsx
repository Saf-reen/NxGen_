import { GraduationCap } from "lucide-react";

interface LogoProps {
  isScrolled?: boolean;
}

export const Logo = ({ isScrolled = true }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {/* Navy blue circle background */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
        }`}>
          <GraduationCap className={`w-6 h-6 transition-colors duration-300 ${
            isScrolled ? "text-primary-foreground" : "text-white"
          }`} />
        </div>
        {/* Green accent dot */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
          isScrolled ? "bg-accent border-background" : "bg-accent border-white/20"
        }`} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-bold transition-colors duration-300 ${
          isScrolled ? "text-primary" : "text-white"
        }`}>Education</span>
        <span className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
          isScrolled ? "text-muted-foreground" : "text-white/80"
        }`}>ACADEMY</span>
      </div>
    </div>
  );
};
