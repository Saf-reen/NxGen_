import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Search, ArrowLeft } from "lucide-react"; // Import ArrowLeft if needed, though AllCourses is top level
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { coursesData, categoryConfig } from "@/data/categoryCourses";

// Helper to get all unique parent categories or just use the config keys
// The Sidebar in AllCourses used "SAP Courses", "Data Analytics" etc.
// categoryConfig keys are slugs like "sap-technical", "sap-functional".
// These map to parentCategory: "SAP Courses".

// Let's build a list of unique Parent Categories for the sidebar
const parentCategories = Array.from(new Set(Object.values(categoryConfig).map(c => c.parentCategory)));
// Add "All"
const categoriesList = ["All Courses", ...parentCategories];

const AllCourses = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get("category") || "All Courses";
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    // Sync state if URL param changes (e.g. navigation from footer)
    React.useEffect(() => {
        const categoryParam = searchParams.get("category");
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
        window.scrollTo(0, 0);
    }, [searchParams]);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter Logic
    const filteredCourses = coursesData.filter(course => {
        // 1. Search Query
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());

        // 2. Category Filter
        // We need to check if the course's categoryId maps to the selected Parent Category
        const config = categoryConfig[course.categoryId];
        const courseParentCategory = config ? config.parentCategory : "Other";

        const matchesCategory = selectedCategory === "All Courses" || courseParentCategory === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-white font-sans text-gray-700">
            <SEO
                title="Our Course Basket - All Courses"
                description="Explore our comprehensive course basket including SAP, Full Stack, Data Science, and more."
                type="website"
                path="/all-courses"
            />

            {/* Hero Section - Matching CategoryPage Style */}
            <div className="bg-[#000080] py-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute right-10 top-10 w-32 h-32 rounded-full border-8 border-white"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    {/* Optional Back Link if needed, but this is a main page */}
                    {/* <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link> */}
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Course Basket</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">Explore our wide range of industry-leading courses.</p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-12">

                {/* Search Bar - Matching CategoryPage Style */}
                <div className="flex justify-center mb-10">
                    <div className="relative w-full max-w-xl">
                        <Input
                            type="text"
                            placeholder="Search your course..."
                            className="w-full pl-6 pr-12 py-6 rounded-full border border-gray-300 shadow-sm text-lg focus:ring-2 focus:ring-[#000080]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - Categories */}
                    <div className="w-full lg:w-1/4 shrink-0">
                        <h2 className="text-xl font-normal text-gray-700 mb-6 text-center lg:text-left">Categories</h2>
                        <div className="flex flex-col space-y-3">
                            {categoriesList.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`py-3 px-4 rounded border text-center lg:text-left transition-all duration-200 ${selectedCategory === category
                                        ? "bg-[#000080] text-white border-[#000080]"
                                        : "bg-white text-[#000080] border-[#000080] hover:bg-blue-50"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Course List - Matching CategoryPage GRID Interface */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {(() => {
                                // 1. Check for Sub-Categories first (e.g. for "SAP Courses")
                                const subCategories = Object.entries(categoryConfig)
                                    .filter(([_, config]) => config.parentCategory === selectedCategory)
                                    .map(([key, config]) => ({ key, ...config }));

                                // If we have multiple sub-categories, show them instead of raw courses
                                if (subCategories.length > 1) {
                                    return subCategories.map((subCat) => (
                                        <div
                                            key={subCat.key}
                                            className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                                        >
                                            <div className="mb-4">
                                                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                                    {subCat.title}
                                                </h3>
                                            </div>

                                            <div className="w-full h-px bg-gray-200 mb-4"></div>

                                            <div className="flex-grow">
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {subCat.description}
                                                </p>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                                <Link
                                                    to={`/courses/${subCat.key}`}
                                                    className="text-[#000080] font-semibold text-sm hover:underline"
                                                >
                                                    Explore Category
                                                </Link>
                                            </div>
                                        </div>
                                    ));
                                }

                                // 2. Fallback to showing individual courses
                                if (filteredCourses.length > 0) {
                                    return filteredCourses.map((course) => {
                                        // Get the category title for this course
                                        const config = categoryConfig[course.categoryId];
                                        const categoryTitle = config ? config.title : "Other";

                                        return (
                                            <div
                                                key={course.id}
                                                className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                                            >
                                                {/* Category Badge */}
                                                <div className="mb-3">
                                                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                                                        {categoryTitle}
                                                    </span>
                                                </div>

                                                <div className="mb-4">
                                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                                        {course.title}
                                                    </h3>
                                                </div>

                                                <div className="w-full h-px bg-gray-200 mb-4"></div>

                                                <div className="flex-grow">
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {course.description || `Comprehensive training on ${course.title} including real-world projects and certification.`}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    });
                                }

                                // 3. Empty State
                                return (
                                    <div className="col-span-full text-center py-10 text-gray-500">
                                        <p className="text-xl">No courses found matching your criteria.</p>
                                        <Button asChild variant="link" className="mt-2 text-[#000080]">
                                            <Link to="/contact">Contact us for custom requirements</Link>
                                        </Button>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;