import React, { useState } from "react";
import {
    Star,
    Download,
    FileText,
    PlayCircle,
    Instagram,
    Linkedin,
    Youtube,
    Facebook,
    CheckSquare,
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const SapFicoPage = () => {
    const [showAllSyllabus, setShowAllSyllabus] = useState(false);

    const syllabusItems = [
        "1. Financial Accounting & Controlling",
        "2. Configuration of Master Data Human resources.",
        "3. Organization Of Payroll",
        "4. Time Management And Travel",
        "5. Organizational Management",
        "6. Enterprise Compensation Management",
        "7. Personnel Development",
        "8. Training and Event Management",
        "9. SAP Learning Solution",
        "10. Manager Desktop/Manager Self-Service"
    ];

    const displayedSyllabus = showAllSyllabus ? syllabusItems : syllabusItems.slice(0, 5);

    return (
        <div className="min-h-screen bg-[#f8fafe] font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* Left Hero Content */}
                    <div className="flex-1">
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-black mb-6">
                            SAP FICO course in Pune
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                            Aspire Techsoft offers SAP FICO training in Pune led by real-time industry experts.
                            Our SAP FICO syllabus is designed to meet current industry demands, incorporating
                            real-world examples and interview preparation. The course focuses on the SAP FICO module,
                            which manages financial and accounting operations, and is beneficial for aspiring SAP consultants.
                        </p>

                        {/* Ratings & Social Proof */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-xl">4.9</span>
                                <div className="flex text-yellow-400">
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                    <Star fill="currentColor" className="w-5 h-5" />
                                </div>
                                <span className="text-gray-500 text-sm">(1,245 Reviews)</span>
                            </div>

                            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

                            <div className="flex items-center gap-4 text-sm font-semibold text-gray-700">
                                <div className="flex items-center gap-1">
                                    <span className="text-[#DB4437]">G</span> 4.9
                                </div>
                                <div className="flex items-center gap-1">
                                    <Facebook className="w-4 h-4 text-[#4267B2]" fill="currentColor" /> 4.5
                                </div>
                                <div className="flex items-center gap-1">
                                    <Instagram className="w-4 h-4 text-[#E1306C]" /> 4.7
                                </div>
                                <div className="flex items-center gap-1">
                                    <Linkedin className="w-4 h-4 text-[#0077b5]" fill="currentColor" /> 4.8
                                </div>
                                <div className="flex items-center gap-1">
                                    <Youtube className="w-4 h-4 text-[#FF0000]" fill="currentColor" /> 4.6
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Button className="bg-[#0066FF] hover:bg-[#0052cc] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all h-auto flex flex-col items-center justify-center leading-tight">
                                <span>Download</span>
                                <span className="text-sm font-normal">Brochure</span>
                            </Button>
                            <Button className="bg-[#0066FF] hover:bg-[#0052cc] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all h-auto flex flex-col items-center justify-center leading-tight">
                                <span>Placement</span>
                                <span className="text-sm font-normal">Records</span>
                            </Button>

                            <div className="flex items-center gap-3 ml-4 cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <PlayCircle className="w-8 h-8 text-orange-400 fill-orange-100" />
                                </div>
                                <div className="flex flex-col text-sm font-bold leading-tight">
                                    <span>Watch</span>
                                    <span>INTRO</span>
                                    <span>VIDEO</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Hero Form - "Enroll Now" */}
                    <div className="w-full lg:w-[400px] shrink-0">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-2xl font-bold text-center mb-6">Enroll Now</h3>
                            <form className="space-y-4">
                                <Input placeholder="Enter your full name" className="bg-white border-gray-200" />
                                <Input placeholder="Enter your email" className="bg-white border-gray-200" />
                                <Input placeholder="Enter mobile number" className="bg-white border-gray-200" />
                                <Input placeholder="Enter Course name" className="bg-white border-gray-200" />

                                {/* Recaptcha Placeholder */}
                                <div className="bg-[#f9f9f9] border border-gray-300 rounded p-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="robot1" />
                                        <label htmlFor="robot1" className="text-sm">I'm not a robot</label>
                                    </div>
                                    <div className="text-[10px] text-gray-500 text-center leading-tight">
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8 mx-auto" alt="" />
                                        reCAPTCHA
                                    </div>
                                </div>

                                <Button className="w-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold py-6 text-lg">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- ORANGE CTA BAR --- */}
            <div className="w-full bg-[#F7941D] py-4 mt-8">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 className="text-white text-xl md:text-2xl font-bold">
                        Start Mapping Your Career Path
                    </h2>
                    <Button className="bg-white text-black hover:bg-gray-100 font-bold rounded-full px-8">
                        Apply Now
                    </Button>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="container mx-auto px-4 py-12">

                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
                    SAP FICO course in Pune
                </h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {[
                            "About SAP FICO Training",
                            "What is SAP FICO?",
                            "SAP FICO sub-modules",
                            "What is SAP CO?",
                            "SAP CO sub-modules",
                            "Who Can Learn SAP FICO Course?",
                            "Importance of SAP FICO Consultants in the organization",
                            "Why Choose Aspire Techsoft Academy for SAP FICO Training in Pune",
                            "Trainer Profile of SAP FICO Module",
                            "Why Choose Aspire Techsoft for SAP FICO Online Training in Pune",
                            "SAP FICO Training in Pune Options?",
                            "SAP FICO Training Pune Course Highlights"
                        ].map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white border border-gray-100 rounded-xl shadow-sm px-6"
                            >
                                <AccordionTrigger className="text-base font-bold text-slate-800 hover:text-orange-500 hover:no-underline py-4">
                                    {item}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Content for {item} goes here. This section provides detailed information about the topic.
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* --- TRAINER & SYLLABUS + SIDEBAR FORM --- */}
                <div className="flex flex-col lg:flex-row gap-12 mt-16 max-w-6xl mx-auto">

                    {/* Left Column */}
                    <div className="flex-1">

                        {/* Trainer Profile */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Meet Our Expert Trainer</h3>
                            <Card className="border-none shadow-none bg-transparent">
                                <CardContent className="p-0 flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="w-24 h-24 rounded-full overflow-hidden bg-blue-100 shrink-0 border-2 border-white shadow-md">
                                        <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" alt="Trainer" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-blue-900">Parag P</h4>
                                        <p className="text-sm text-gray-500 mb-4">19+ years Experience :</p>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            Parag is having overall 19 years of experience in Finance. He started his career as an Account officer. After 6 years, he switched his career to SAP FICO Consulting. Currently he is leading a project as a project manager. Simultaneously, he has taken up profile of part time trainer with our institute as he is having interest in teaching.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Course Syllabus */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold">Course Syllabus -</h3>
                                <Button className="bg-[#a8449c] hover:bg-[#8e3883] text-white rounded-full text-xs px-4 h-8">
                                    Download Syllabus
                                </Button>
                            </div>

                            <div className="space-y-4">
                                {displayedSyllabus.map((item, index) => (
                                    <div key={index} className="bg-white border rounded-lg p-4 shadow-sm flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                                        <span className="font-semibold text-sm sm:text-base text-gray-800">{item}</span>
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    </div>
                                ))}
                            </div>

                            {/* See More Button */}
                            <div className="mt-4 flex justify-center lg:justify-start">
                                <Button
                                    variant="outline"
                                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                    onClick={() => setShowAllSyllabus(!showAllSyllabus)}
                                >
                                    {showAllSyllabus ? "See Less ↑" : "See More ↓"}
                                </Button>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Career Counseling Form */}
                    <div className="w-full lg:w-[380px] shrink-0">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-center mb-1">Get Free Career</h3>
                            <h3 className="text-xl font-bold text-center mb-4">Counseling</h3>

                            <p className="text-center text-gray-500 text-xs mb-6 px-4">
                                Fill the form to receive course details, fees, syllabus & placements.
                            </p>

                            <form className="space-y-4">
                                <div className="relative">
                                    <div className="absolute left-3 top-2.5 text-blue-500">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                                    </div>
                                    <Input placeholder="Full Name" className="pl-10" />
                                </div>

                                <div className="relative">
                                    <div className="absolute left-3 top-2.5 text-blue-500">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                    </div>
                                    <Input placeholder="Mobile Number" className="pl-10" />
                                </div>

                                <div className="relative">
                                    <div className="absolute left-3 top-2.5 text-blue-500">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                    </div>
                                    <Input placeholder="Email Address" className="pl-10" />
                                </div>

                                <div className="relative">
                                    <div className="absolute left-3 top-2.5 text-blue-500">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" /></svg>
                                    </div>
                                    <Input placeholder="Select Course" className="pl-10" />
                                </div>

                                {/* Recaptcha Placeholder */}
                                <div className="bg-[#f9f9f9] border border-gray-300 rounded p-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="robot2" />
                                        <label htmlFor="robot2" className="text-sm">I'm not a robot</label>
                                    </div>
                                    <div className="text-[10px] text-gray-500 text-center leading-tight">
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8 mx-auto" alt="" />
                                        reCAPTCHA
                                    </div>
                                </div>

                                <Button className="w-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold py-6 text-base rounded-md mt-2">
                                    Submit Now
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Bottom Space */}
                <div className="h-20"></div>

            </div>
        </div>
    );
};

export default SapFicoPage;
