import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Search, Star, Code, Database, Cloud, Layout, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Data Definitions matching the screenshot
const categories = [
    "SAP Courses",
    // "Full Stack Development",
    "Data Analytics",
    "SAP S/4 HANA",
    "Python",
    "Artificial Intelligence",
    "AI/ML",
    // "Software Testing",
    // "SAS Courses"
];

const allCoursesData = [
    // SAP Courses
    {
        id: "sap-abap",
        title: "SAP-ABAP",
        category: "SAP Courses",
        image: "code-icon", // Special case for the icon shown in screenshot
        rating: 5
    },
    {
        id: "sap-apo",
        title: "SAP-APO",
        category: "SAP Courses",
        image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAP+APO",
        rating: 5
    },
    {
        id: "sap-basis",
        title: "SAP-BASIS",
        category: "SAP Courses",
        image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAP+S/4+HANA",
        rating: 5
    },
    {
        id: "sap-grc",
        title: "SAP-GRC",
        category: "SAP Courses",
        image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAP+GRC",
        rating: 5
    },
    {
        id: "sap-ui",
        title: "SAP UI",
        subtitle: "SAP UI5 / FIORI",
        category: "SAP Courses",
        image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAP+UI5+/+FIORI",
        rating: 5
    },
    {
        id: "sap-mm",
        title: "SAP-MM",
        subtitle: "SAP S/4 HANA",
        category: "SAP Courses",
        image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAP+S/4+HANA",
        rating: 5
    },
    {
        id: "sap-pm",
        title: "SAP S4 HANA PM",
        subtitle: "SAP PLANT MAINTENANCE",
        category: "SAP S/4 HANA",
        image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAP+PLANT+MAINTENANCE",
        rating: 5
    },
    {
        id: "sap-mm",
        title: "SAP-MM",
        subtitle: "SAP S/4 HANA",
        category: "SAP S/4 HANA",
        image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAP+S/4+HANA",
        rating: 5
    },

    // Full Stack (Mock Data)
    { id: "fs-java", title: "Power BI", category: "Data Analytics", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Power+BI", rating: 5 },
    { id: "fs-dotnet", title: "Tableau", category: "Data Analytics", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Tableau", rating: 5 },

    // Data Science (Mock Data)
    { id: "ds-python", title: "Data Science with Python", category: "Data Analytics", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Python", rating: 5 },
    { id: "ds-python", title: "Data Science with Python", category: "Python", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Python", rating: 5 },
    { id: "ds-python", title: "Python", category: "Python", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=Python", rating: 5 },

    // SAS Courses (Mock Data)
    { id: "sas-clinical", title: "Machine Learning", category: "AI/ML", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAS", rating: 5 },
    { id: "sas-clinical", title: "Artificial Intelligence", category: "Artificial Intelligence", image: "https://via.placeholder.com/150x100/000000/FFFFFF?text=SAS", rating: 5 },
];

const AllCourses = () => {
    const [selectedCategory, setSelectedCategory] = useState("SAP Courses");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = allCoursesData.filter(course =>
        course.category === selectedCategory &&
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white font-sans text-gray-700">
            <SEO
                title="Our Course Basket - All Courses"
                description="Explore our comprehensive course basket including SAP, Full Stack, Data Science, and more."
                type="website"
                path="/all-courses"
            />

            {/* Hero Section - Blue Banner */}
            <div className="bg-[#2B6CB0] py-20 relative overflow-hidden">
                {/* Decorative background elements can be added here if needed */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute right-10 top-10 w-32 h-32 rounded-full border-8 border-white"></div>
                    <div className="absolute left-20 bottom-10 w-24 h-24 bg-white rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Course Basket</h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-8">

                {/* Search Bar */}
                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-2xl">
                        <Input
                            type="text"
                            placeholder="Search Your Course Here!"
                            className="w-full pl-6 pr-12 py-6 rounded-full border border-gray-300 shadow-sm text-lg focus:ring-2 focus:ring-[#2B6CB0] focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-transparent">
                            <Search className="text-gray-400 w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - Categories */}
                    <div className="w-full lg:w-1/4 shrink-0">
                        <h2 className="text-xl font-normal text-gray-700 mb-6 text-center">All Categories</h2>
                        <div className="flex flex-col space-y-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`py-3 px-4 rounded border text-center transition-all duration-200 ${selectedCategory === category
                                        ? "bg-[#1a56db] text-white border-[#1a56db]"
                                        : "bg-white text-[#1a56db] border-[#1a56db] hover:bg-blue-50"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Course List */}
                    <div className="w-full lg:w-3/4">
                        {filteredCourses.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6">
                                {filteredCourses.map((course) => (
                                    <Link key={course.id} to="/sap-fico-on-s4-hana" className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center hover:shadow-md transition-shadow">
                                        {/* Image Section - Left */}
                                        <div className="w-32 h-24 shrink-0 mr-6 flex items-center justify-center bg-gray-100 rounded overflow-hidden border">
                                            {course.image === "code-icon" ? (
                                                <div className="w-full h-full flex items-center justify-center bg-white">
                                                    <div className="border-2 border-[#1a56db] text-[#1a56db] rounded p-1 font-bold">
                                                        &lt; / &gt;
                                                    </div>
                                                </div>
                                            ) : (
                                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                            )}
                                        </div>

                                        {/* Content Section - Right */}
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-[#1a56db] mb-2">
                                                {course.title}
                                            </h3>
                                            <div className="flex space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-10">
                                <p className="text-xl text-gray-500">No Result Found!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
