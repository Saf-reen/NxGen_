import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const courses = [
    "Full Stack PHP Training", "Full Stack Dot Net Training", "Full Stack Java Training", "UI UX Design Training", "Full Stack MERN Training",
    "SAP FICO on S/4 HANA Training", "SAP MM on S/4 HANA Training", "SAP PP on S/4 HANA Training", "SAP SD on S/4 HANA Training", "SAP PM on S/4 HANA Training",
    "SAP Security on S/4 HANA Training", "SAP BW on HANA Traning", "SAP SuccessFactors EC", "SAP UI5 Training", "SAP ABAP ON HANA Training",
    "SAP BASIS on S/4 HANA Training", "SAP EWM Training", "SAP ARIBA Training", "SAP APO Training", "SAP Security Training",
    "SAP GRC Training", "SAP ABAP Training", "SAP BASIS Training", "SAP HR Training", "SAP BI Training", "SAP WM Training",
    "Salesforce Training", "Informatica Training", "Abinitio Training", "Data Analytics", "Data Science Course",
    "Python", "Advance Excel", "Power BI", "AWS Certified Solutions Architect", "AWS SysOps Administrator",
    "Software Testing Course", "Clinical Data Management Course"
];

const AllCourses = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <SEO
                title="All Courses - Aspire Techsoft"
                description="Browse our comprehensive list of IT courses including SAP, Full Stack, Data Science, and more."
                type="website"
                path="/all-courses.php"
            />
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-primary mb-2 text-center">All Programs</h1>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Explore our wide range of industry-oriented training programs designed to launch your career.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <Link key={index} to="#" className="group">
                            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100 group-hover:border-secondary h-full flex flex-col justify-between">
                                <div>
                                    <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                                        <BookOpen className="w-6 h-6 text-primary group-hover:text-secondary" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors mb-2">
                                        {course}
                                    </h3>
                                </div>
                                <div className="mt-4 flex items-center text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    View Course <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
