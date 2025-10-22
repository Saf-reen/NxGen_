import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.2);
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={titleRef}
            className={`transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ABOUT US
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Empowering minds, shaping futures - Your partner in educational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={missionRef}
              className={`transition-all duration-700 ${
                missionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students collaborating"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div
              className={`transition-all duration-700 ${
                missionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Education Academy was founded with a singular vision: to provide world-class education
                that empowers students to achieve their dreams. What started as a small coaching center
                has grown into a comprehensive educational institution serving thousands of students.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 15 years of experience in education, we've helped countless students secure
                admissions in top engineering and medical colleges across the country. Our success lies
                in our commitment to personalized attention, innovative teaching methods, and a genuine
                care for each student's success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to evolve, incorporating the latest educational technologies while
                maintaining the personal touch that has been our hallmark since day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              ref={visionRef}
              className={`bg-card rounded-2xl p-8 shadow-lg transition-all duration-700 ${
                visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, high-quality education that equips students with the knowledge,
                skills, and confidence needed to excel in their chosen fields and contribute positively
                to society.
              </p>
            </div>

            <div
              className={`bg-card rounded-2xl p-8 shadow-lg transition-all duration-700 ${
                visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative educational institution, recognized for excellence
                in teaching, student success, and for creating future leaders who will make a difference
                in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={valuesRef}
            className={`text-center mb-12 transition-all duration-700 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards in education" },
              { icon: Users, title: "Integrity", desc: "Maintaining honesty and strong moral principles" },
              { icon: Target, title: "Innovation", desc: "Embracing new ideas and teaching methods" },
              { icon: Eye, title: "Student-Centric", desc: "Putting student success at the heart of everything" },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 shadow-md hover-lift text-center transition-all duration-700 ${
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/60 to-secondary/60 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "5000+", label: "Students Taught" },
              { value: "98%", label: "Success Rate" },
              { value: "50+", label: "Expert Faculty" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
