import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Users, BookOpen, UserCheck, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen font-sans text-gray-700">
      <SEO
        title="About Us - Aspire Techsoft"
        description="Aspire Techsoft is a reputed IT training institute in Pune offering SAS, SAP, Full Stack, and more."
        type="website"
        path="/about"
      />

      {/* Page Header / Breadcrumb */}
      <div className="bg-[#2B6CB0] py-16 relative">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="text-sm opacity-90 font-medium flex justify-center gap-2">
            <Link to="/" className="hover:text-gray-200">Home</Link> / <span>Pages</span> / <span>About Us</span>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Mission Quote Banner */}
      <div className="bg-gray-100 py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif italic text-[#2B6CB0] font-medium leading-relaxed">
            "Our Mission is to Build Nation Through Education And Beyond Limitation"
          </h2>
        </div>
      </div>

      {/* Main Content: Welcome & Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2B6CB0] mb-4">Welcome to Aspire Techsoft Pvt Ltd</h3>
                <p className="text-gray-600 leading-relaxed">
                  Established in 2011, Aspire Techsoft is a reputed IT training institute in Pune India that strives to make IT education easily accessible to students and professionals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#2B6CB0] mb-4">Who We Are</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                  <p>
                    Established in 2011, we are the Information Technology Training division of Aspire Techsoft Academy is a reputed IT training institute in Pune India that strives to make IT education easily accessible to students and professionals. We are ranked among the Best Software Training Institutes in India.
                  </p>
                  <p>
                    We are SAS Authorized Training Institute in Pune. We specialize in SAS, ERP, SAP, Full –Stack Development, JAVA, .NET, Data Warehousing, Cloud Computing, Informatica, Abinitio, etc. Over 10000+ Retail, and corporate candidates trained. More than 170 corporate clients. ISO certified Training and development center. We offer globally accepted certifications from SAS.
                  </p>
                  <p>
                    Our students master the skills for IT Infrastructure Management, followed by On-Job industry training and stipends. Our training opens doors to exciting careers in technical support, facility management, projects, and marketing management.
                  </p>
                  <p>
                    Our proficiency lies in identifying your talent, understanding your aptitude, analyzing your needs, and nurturing you to reach the zenith of technical excellence. We believe in the innate potential of each individual.
                  </p>
                </div>
              </div>
            </div>

            {/* Image/Visuals */}
            <div className="relative">
              <div className="bg-white p-2 rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Students learning"
                  className="rounded-lg w-full object-cover h-[500px]"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-white font-medium">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#2B6CB0] hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#2B6CB0] mb-4 flex items-center gap-3">
                <span className="p-2 bg-blue-50 rounded-full"><TargetIcon className="w-6 h-6" /></span>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our Mission is to deliver innovative Software trainings, nurture creativity, and cultivate a passion for knowledge, by ensuring that our learners become leaders and change-makers in their respective fields.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-secondary hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <span className="p-2 bg-green-50 rounded-full"><EyeIcon className="w-6 h-6" /></span>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Inform, educate, and inspire people to reach their professional goals with less stress and more enthusiasm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#2B6CB0] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">2011</div>
              <div className="text-lg opacity-90 uppercase tracking-wider text-sm">Year Founded</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">28 +</div>
              <div className="text-lg opacity-90 uppercase tracking-wider text-sm">Employees</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">42 +</div>
              <div className="text-lg opacity-90 uppercase tracking-wider text-sm">Trainers</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">100K +</div>
              <div className="text-lg opacity-90 uppercase tracking-wider text-sm">Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2B6CB0] mb-4">Aspire Team</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm">We truly care about our customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                {/* Placeholder for founder image */}
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500" alt="Sachin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h4 className="text-xl font-bold">Sachin</h4>
                  <p className="text-sm opacity-90">CEO | Founder Director</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sachin has been instrumental in conceptualizing and incubating business ideas and scaling them to a leadership position...
                </p>
              </div>
            </div>

            {/* HR Manager */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500" alt="Pallavi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h4 className="text-xl font-bold">Pallavi</h4>
                  <p className="text-sm opacity-90">HR Manager</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pallavi has extensive experience of 6+ years in the field of Human Resources Management with exposure to Manpower Planning...
                </p>
              </div>
            </div>

            {/* Technical Head */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500" alt="Shankar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h4 className="text-xl font-bold">Shankar</h4>
                  <p className="text-sm opacity-90">Technical Head</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shankar has 6 years of experience in Digital Marketing, SAP Basis, Networking, and SAP ABAP as well as business Leadership...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Icons components for cleaner JSX
const TargetIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

export default About;
