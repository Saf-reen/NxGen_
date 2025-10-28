import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/PageHero";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", course: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="GET CONNECTED WITH US"
        description="Stay in touch & grow your network. We're here to help you succeed."
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop"
      />

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 63097 82855",
                subinfo: "Mon-Fri, 10AM-6PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "nxgentechacademy@gmail.com",
                subinfo: "24/7 Support",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "First Floor, 1-121/63 Survey No.63 Part",
                subinfo: "Hotel Sitara Grand Backside, Miyapur, Telangana 500049",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover-lift text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                <p className="text-foreground font-medium mb-1">{contact.info}</p>
                <p className="text-sm text-muted-foreground">{contact.subinfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form (now with image background + overlay) */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop"
            alt="Students learning background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto">
            <div
              ref={ref}
              className={`text-center mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground text-white">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`bg-card rounded-2xl p-8 shadow-lg transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="course" className="text-sm font-medium">
                  Select Course <span className="text-destructive">*</span>
                </label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, course: value }))}
                >
                  <SelectTrigger id="course" className="h-12 w-full">
                    <SelectValue placeholder="Choose a course you're interested in" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="java">Java Full Stack Development</SelectItem>
                    <SelectItem value="python">Python Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="powerbi">Power BI</SelectItem>
                    <SelectItem value="testing">Software Testing</SelectItem>
                    <SelectItem value="cyber-security">Cyber Security</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
              <div className="p-6 text-center">
                <h3 className="text-4xl font-bold mb-2">Our Location</h3>
                <p className="text-muted-foreground">
                  First Floor, 1-121/63 Survey No. 63 Part Hotel Sitara Grand Backside, Miyapur, Telangana 500049
                </p>
              </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              {/* Map */}
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.280746844092!2d78.3542804!3d17.4941067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9398a74e6225%3A0x9ab33bfbaff07f32!2sSria%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1761212331672!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;