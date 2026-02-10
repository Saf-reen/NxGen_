import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen font-sans text-gray-700">
      <SEO
        title="Contact Us - NxGen Tech Academy"
        description="Get in touch with NxGen Tech Academy. Visit our offices in Pune and Bangalore or send us a message."
        type="website"
        path="/contact"
      />

      {/* Hero Section */}
      <div className="bg-[#000080] py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <div className="text-sm opacity-90 font-medium flex justify-center gap-2">
            <Link to="/" className="hover:text-gray-200">Home</Link> / <span>Contact Us</span>
          </div>
        </div>
        {/* Decorative background circle */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information (Left Column) */}
            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-bold text-[#000080] uppercase tracking-wider mb-2">We Accelerate Customer Experiences</h3>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">GET IN TOUCH</h2>
                <div className="w-16 h-1 bg-[#000080] mb-6"></div>
                <p className="text-gray-600 leading-relaxed">
                  Have questions about our courses or want to visit our center? We are here to help you. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-8">
                {/* Pune Kothrud */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#000080]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Pune (Kothrud)</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      103, 1st Floor, NxGenTechAcademy Pvt. Ltd., Himgauri, Above KFC, Kothrud, Pune, Maharashtra 411038
                    </p>
                    <p className="font-bold text-[#000080]">+91 9960 935 600</p>
                  </div>
                </div>

                {/* Wakad */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#000080]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Wakad</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Office 101, Rajgad Building, Ratnadeep lane, Datta mandir road, Wakad. Pimpri Chinchwad
                    </p>
                    <p className="font-bold text-[#000080]">+91 9960 935 965</p>
                  </div>
                </div>

                {/* Bangalore */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#000080]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Bangalore</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Office No - 322, 3 Floor, Raheja Arcade, Koramangala, 5 Block, 80ft Road, Karnataka, Bangalore 560095.
                    </p>
                    <p className="font-bold text-[#000080]">+91 6364 012 099</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#000080]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Email Us</h4>
                    <p className="text-gray-600 hover:text-[#000080]">info@nxgentechnet.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#000080] hover:bg-[#000080]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Focused on Pune Kothrud */}
      <section className="h-[400px] w-full">
        <iframe
          src="#"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="NxGen Tech Academy Location"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;