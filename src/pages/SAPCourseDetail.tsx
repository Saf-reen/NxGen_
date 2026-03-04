import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft, Star, Clock, Users, BookOpen,
    CheckCircle, Briefcase, Award, PlayCircle, Code
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Preloader } from "@/components/Preloader";
import { coursesData } from "@/data/categoryCourses";
import { getSapCourseContent } from "@/data/sapCoursesContent";
import { CoursePricing } from "@/components/CoursePricing";
import DemoSidebarCard from "@/components/DemoSidebarCard";
import { PageHero } from "@/components/PageHero";
import { Helmet } from "react-helmet-async";

const SAPCourseDetail = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);

    const basicCourse = coursesData.find(c => c.id === id);
    const content = basicCourse ? getSapCourseContent(id || "", basicCourse.title) : null;

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);
        return () => clearTimeout(timer);
    }, [id]);

    if (!basicCourse || !content) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold mb-4">Course not found</h2>
                <Button asChild>
                    <Link to="/courses-menu">Browse All Courses</Link>
                </Button>
            </div>
        );
    }

    const duration = basicCourse.duration || "40+ hours";
    const enrolled = basicCourse.enrolled || "1500+";

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Helmet>
                <title>{`${basicCourse.title} Training in Hyderabad | NxGen Tech Academy`}</title>
                <meta name="description" content={`Master ${basicCourse.title}. 100% placement guarantee, expert-led training.`} />
            </Helmet>

            <Preloader isLoading={isLoading} threshold={800} />

            <PageHero
                title={basicCourse.title}
                description={basicCourse.description || "Master SAP tools with certified experts and real-world projects."}
            >
                <Link to="/courses-menu" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Courses
                </Link>
            </PageHero>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Quick Stats */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap items-center gap-6 text-gray-600">
                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-500">
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <span className="font-bold text-gray-900">{basicCourse.rating || "5.0"}</span>
                                <span className="text-xs text-gray-500">(Student Reviews)</span>
                            </div>
                            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-gray-400" />
                                <span>{duration}</span>
                            </div>
                            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-gray-400" />
                                <span>{enrolled} Enrolled</span>
                            </div>
                        </div>

                        {/* Dynamic SAP Content Sections */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                            <h2 className="text-2xl font-bold text-[#000080] mb-4 flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-blue-600" /> What is {basicCourse.title} ?
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {content.whatIs}
                            </p>
                        </section>

                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                            <h2 className="text-2xl font-bold text-[#000080] mb-4 flex items-center gap-2">
                                <Star className="w-6 h-6 text-yellow-500" /> Why {basicCourse.title} ?
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {content.whyCourse}
                            </p>
                        </section>

                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                            <h2 className="text-2xl font-bold text-[#000080] mb-6 flex items-center gap-2">
                                <Award className="w-6 h-6 text-purple-600" /> Key Benefits
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {content.keyBenefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5 text-green-600">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                            <h2 className="text-2xl font-bold text-[#000080] mb-6 flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-[#10B981]" /> Why Choose NXGen {basicCourse.title}
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {content.whyChooseNxGen.map((reason, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 text-blue-600">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                            <h2 className="text-2xl font-bold text-[#000080] mb-6 flex items-center gap-2">
                                <Briefcase className="w-6 h-6 text-orange-500" /> Career Opportunities After {basicCourse.title} Course
                            </h2>
                            <ul className="space-y-4 pl-2">
                                {content.careerOpportunities.map((career, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <div className="h-2 w-2 rounded-full bg-blue-400 shrink-0"></div>
                                        <span className="text-lg">{career}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <CoursePricing courseTitle={basicCourse.title} />

                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                            <h2 className="text-2xl font-bold text-[#000080] mb-4 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-blue-600" /> {basicCourse.title} Course Fees and Duration
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {content.feesAndDuration}
                            </p>
                            <div className="mt-6 flex gap-4">
                                <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold inline-flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Duration: {duration}
                                </div>
                            </div>
                        </section>

                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                            <h2 className="text-2xl font-bold text-[#000080] mb-4">Conclusion</h2>
                            <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-[#000080] pl-4 italic">
                                {content.conclusion}
                            </p>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: Sidebar (Sticky Demo Form) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6 self-start pb-8">

                            {/* Sticky Demo Booking Form */}
                            <div className="shadow-lg rounded-2xl overflow-hidden border border-gray-100 bg-white">
                                <DemoSidebarCard courseTitle={basicCourse.title} />
                            </div>

                            {/* Course Highlights Widget */}
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                                <h4 className="font-bold text-[#000080] mb-4 flex items-center gap-2">
                                    Course Highlights
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <PlayCircle className="w-4 h-4 text-blue-500" /> 50+ Hours Live Sessions
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <Code className="w-4 h-4 text-blue-500" /> 10+ Assignments
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <Award className="w-4 h-4 text-blue-500" /> Certification Included
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-700">
                                        <Users className="w-4 h-4 text-blue-500" /> 1:1 Mentorship
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Help */}
                            <div className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <p className="text-sm text-gray-500 mb-2">Need guidance on {basicCourse.title}?</p>
                                <a href="tel:+919960935600" className="text-[#000080] font-bold hover:underline text-lg">
                                    Call Us: +91 9960 935 600
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SAPCourseDetail;
