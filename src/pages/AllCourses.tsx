import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Search, ArrowLeft, Star, Clock, Users, Monitor, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { coursesData, categoryConfig } from "@/data/categoryCourses";
import { PageHero } from "@/components/PageHero";

const AllCourses = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get("category") || "All Courses";
    const initialSubCategory = searchParams.get("sub") || null;

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<string | null>(initialSubCategory);

    // Sync state if URL param changes
    useEffect(() => {
        const categoryParam = searchParams.get("category");
        const subParam = searchParams.get("sub");
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
        setSelectedSubCategoryId(subParam);
        window.scrollTo(0, 0);
    }, [searchParams]);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSubCategorySelect = (subId: string) => {
        setSelectedSubCategoryId(subId);
        setSearchParams({ category: selectedCategory, sub: subId });
    };

    const handleBackToCategories = () => {
        setSelectedSubCategoryId(null);
        setSearchParams({ category: selectedCategory });
    };

    const filteredCourses = coursesData.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());

        if (selectedSubCategoryId) {
            return matchesSearch && course.categoryId === selectedSubCategoryId;
        }

        const parentCategory = categoryConfig[course.categoryId]?.parentCategory || "Other";
        const matchesCategory = selectedCategory === "All Courses" || parentCategory === selectedCategory;

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

            <PageHero
                title={selectedSubCategoryId ? categoryConfig[selectedSubCategoryId]?.title : "Our Course Basket"}
                description={selectedSubCategoryId ? categoryConfig[selectedSubCategoryId]?.description : "Explore our wide range of industry-leading courses."}
            >
                {selectedSubCategoryId && (
                    <button
                        onClick={handleBackToCategories}
                        className="inline-flex items-center text-white/80 hover:text-white transition-colors mt-4"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
                    </button>
                )}
            </PageHero>

            <div className="container mx-auto px-4 py-12">
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
                    {/* Sidebar - Categories (Only visible when no subcategory is selected) */}
                    {!selectedSubCategoryId && (
                        <div className="w-full lg:w-1/4 shrink-0">
                            <h2 className="text-xl font-normal text-gray-700 mb-6 text-center lg:text-left">Categories</h2>
                            <div className="flex flex-col space-y-3">
                                {categoriesList.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setSearchParams({ category });
                                        }}
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
                    )}

                    {/* Content Area */}
                    <div className={`w-full ${selectedSubCategoryId ? '' : 'lg:w-3/4'}`}>
                        <div className={`grid grid-cols-1 ${selectedSubCategoryId ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
                            {(() => {
                                if (selectedSubCategoryId) {
                                    // Show Courses in the selected SubCategory
                                    if (filteredCourses.length === 0) {
                                        return (
                                            <div className="col-span-full text-center py-10 text-gray-500">
                                                <p className="text-xl">No courses found in this category.</p>
                                                <Button onClick={handleBackToCategories} variant="link" className="mt-2 text-[#000080]">
                                                    Back to categories
                                                </Button>
                                            </div>
                                        );
                                    }

                                    return filteredCourses.map((course) => (
                                        <div
                                            key={course.id}
                                            className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                        >
                                            {/* Image Section - No Gaps */}
                                            {course.image && course.image !== "code-icon" ? (
                                                <div className="w-full h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-full h-48 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center border-b border-gray-100">
                                                    <img src="/Logo.png" alt={course.title} className="h-16 opacity-50" />
                                                </div>
                                            )}

                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                                        {course.title}
                                                    </h3>
                                                </div>

                                                <div className="flex items-center gap-1 mb-4">
                                                    {[...Array(course.rating || 5)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                    <span className="text-blue-500 text-xs ml-2">(33 Reviews)</span>
                                                </div>

                                                <div className="flex-grow">
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                        {course.description || `Comprehensive training on ${course.title} including real-world projects and certification.`}
                                                    </p>
                                                </div>

                                                <div className="flex flex-col gap-2 mb-6 border-t border-gray-100 pt-4">
                                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                                        <Clock className="w-4 h-4 text-green-600" />
                                                        <span>Duration: {course.duration || "40+ hours"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                                        <Users className="w-4 h-4 text-green-600" />
                                                        <span>Students Enrolled: {course.enrolled || "1500+"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                                        <Monitor className="w-4 h-4 text-green-600" />
                                                        <span>Mode: {course.mode || "Online"}</span>
                                                    </div>
                                                </div>

                                                <div className="mt-auto flex justify-end">
                                                    <Button asChild className="bg-[#10B981] hover:bg-[#059669] text-white flex items-center gap-2 rounded-md px-6">
                                                        <Link to={`/courses/${course.id}`}>
                                                            <Eye className="w-4 h-4" /> View Course
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ));
                                }

                                // Default Category/SubCategory Selection View
                                let displayList: any[] = [];

                                if (selectedCategory === "All Courses") {

                                    const parentCounts: Record<string, number> = {};
                                    Object.values(categoryConfig).forEach(c => {
                                        parentCounts[c.parentCategory] = (parentCounts[c.parentCategory] || 0) + 1;
                                    });

                                    const multiSubCatParents = Object.keys(parentCounts).filter(p => parentCounts[p] > 1);

                                    const groupSubCats = Object.entries(categoryConfig)
                                        .filter(([_, config]) => multiSubCatParents.includes(config.parentCategory))
                                        .map(([key, config]) => ({ type: 'category', id: key, ...config }));

                                    const filteredGroupSubCats = searchQuery
                                        ? groupSubCats.filter(cat => cat.title.toLowerCase().includes(searchQuery.toLowerCase()))
                                        : groupSubCats;

                                    const individualCourses = filteredCourses
                                        .filter(course => {
                                            const config = categoryConfig[course.categoryId];
                                            const parentCategory = config ? config.parentCategory : "Other";
                                            return !multiSubCatParents.includes(parentCategory);
                                        })
                                        .map(course => ({ type: 'course', id: course.id, ...course }));

                                    displayList = [...filteredGroupSubCats, ...individualCourses];

                                } else {
                                    const subCategories = Object.entries(categoryConfig)
                                        .filter(([_, config]) => config.parentCategory === selectedCategory)
                                        .map(([key, config]) => ({ type: 'category', id: key, ...config }));

                                    if (subCategories.length > 1) {
                                        displayList = searchQuery
                                            ? subCategories.filter(cat => cat.title.toLowerCase().includes(searchQuery.toLowerCase()))
                                            : subCategories;
                                    } else {
                                        displayList = filteredCourses.map(course => ({ type: 'course', id: course.id, ...course }));
                                    }
                                }

                                if (displayList.length === 0) {
                                    return (
                                        <div className="col-span-full text-center py-10 text-gray-500">
                                            <p className="text-xl">No courses found matching your criteria.</p>
                                            <Button asChild variant="link" className="mt-2 text-[#000080]">
                                                <Link to="/contact">Contact us for custom requirements</Link>
                                            </Button>
                                        </div>
                                    );
                                }

                                return displayList.map((item) => {
                                    const isSubCat = item.type === 'category';
                                    const desc = isSubCat
                                        ? item.description
                                        : item.description || `Comprehensive training on ${item.title} including real-world projects and certification.`;

                                    return (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                                        >
                                            <div className="mb-4">
                                                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <div className="w-full h-px bg-gray-200 mb-4"></div>

                                            <div className="flex-grow">
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {desc}
                                                </p>
                                            </div>

                                            <div className={`pt-4 border-t border-gray-100 flex items-center ${isSubCat ? 'justify-between mt-6' : 'justify-end mt-4'}`}>
                                                {isSubCat ? (
                                                    <button
                                                        onClick={() => handleSubCategorySelect(item.id)}
                                                        className={`text-[#000080] text-sm hover:underline font-semibold`}
                                                    >
                                                        Explore Category
                                                    </button>
                                                ) : (
                                                    <Button asChild className="bg-[#10B981] hover:bg-[#059669] text-white flex items-center gap-2 rounded-md px-6">
                                                        <Link to={`/courses/${item.id}`}>
                                                            View Course
                                                        </Link>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper for unique categories list (need to move it or recalculate it inside)
const parentCategories = Array.from(new Set(Object.values(categoryConfig).map(c => c.parentCategory)));
const categoriesList = ["All Courses", ...parentCategories];

export default AllCourses;
