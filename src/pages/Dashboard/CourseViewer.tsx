import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { detailedCourses, DetailedCourse } from "@/data/detailedCourses";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, FileText, Download, CheckCircle, ArrowLeft, Clock, Award, Users, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import axiosInstance from "@/api/axiosInstance";

// Mock videos for demonstration
const defaultVideos = [
    { id: 1, title: "Introduction to the Course", duration: "10:25", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Setting up the Environment", duration: "15:40", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Core Concepts & Fundamentals", duration: "25:10", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, title: "Practical Implementation - Part 1", duration: "32:15", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const CourseViewer = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [course, setCourse] = useState<DetailedCourse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeVideo, setActiveVideo] = useState(defaultVideos[0]);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                setIsLoading(true);
                // Try to fetch specific course from API first
                // If the backend doesn't support /api/courses/id/, we find it in the list
                const response = await axiosInstance.get(`/api/courses/${id}/`).catch(async () => {
                    const listRes = await axiosInstance.get("/api/courses/");
                    return { data: listRes.data.find((c: any) => c.id === id) };
                });

                if (response.data) {
                    setCourse(response.data);
                } else if (id && detailedCourses[id]) {
                    // Fallback to local detailed courses if API fails or doesn't have it
                    setCourse(detailedCourses[id]);
                } else {
                    navigate("/dashboard");
                }
            } catch (error) {
                console.error("Error fetching course viewer data:", error);
                if (id && detailedCourses[id]) {
                    setCourse(detailedCourses[id]);
                } else {
                    navigate("/dashboard");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourseData();
    }, [id, navigate]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-[#000080] animate-spin mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Preparing your classroom...</p>
                </div>
            </div>
        );
    }

    if (!course) return null;

    return (
        <div className="min-h-screen bg-white">
            <SEO title={`${course.title} - Learning Portal`} description={course.tagline} />

            {/* Header */}
            <div className="bg-[#000080] text-white py-4 sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <div className="hidden md:block">
                        <h1 className="text-lg font-bold line-clamp-1">{course.title}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">
                            Authorized Access
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Video Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group">
                            <iframe
                                className="w-full h-full"
                                src={activeVideo.url}
                                title={activeVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#000080]">{activeVideo.title}</h2>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" className="gap-2 border-[#000080] text-[#000080] h-10">
                                        <Download className="w-4 h-4" /> Resources
                                    </Button>
                                    <Button className="gap-2 bg-secondary hover:bg-secondary/90 text-white h-10">
                                        Next Lesson
                                    </Button>
                                </div>
                            </div>

                            <Tabs defaultValue="overview" className="w-full mt-6">
                                <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
                                    <TabsTrigger value="overview" className="px-6 py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#000080] data-[state=active]:bg-transparent data-[state=active]:text-[#000080] bg-transparent shadow-none text-sm font-bold">
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger value="curriculum" className="px-6 py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#000080] data-[state=active]:bg-transparent data-[state=active]:text-[#000080] bg-transparent shadow-none text-sm font-bold">
                                        Full Syllabus
                                    </TabsTrigger>
                                    <TabsTrigger value="notes" className="px-6 py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#000080] data-[state=active]:bg-transparent data-[state=active]:text-[#000080] bg-transparent shadow-none text-sm font-bold">
                                        Notes
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="overview" className="space-y-6 animate-in fade-in duration-500">
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-800">Learning Path</h3>
                                        <p className="text-gray-600 leading-relaxed">{course.overview}</p>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100">
                                        <div className="text-center">
                                            <Clock className="w-6 h-6 mx-auto mb-2 text-secondary" />
                                            <span className="block text-sm font-bold text-gray-800">{course.duration}</span>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Course Length</span>
                                        </div>
                                        <div className="text-center">
                                            <Users className="w-6 h-6 mx-auto mb-2 text-secondary" />
                                            <span className="block text-sm font-bold text-gray-800">Premium</span>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Content</span>
                                        </div>
                                        <div className="text-center">
                                            <Award className="w-6 h-6 mx-auto mb-2 text-secondary" />
                                            <span className="block text-sm font-bold text-gray-800">{course.level}</span>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Level</span>
                                        </div>
                                        <div className="text-center">
                                            <CheckCircle className="w-6 h-6 mx-auto mb-2 text-secondary" />
                                            <span className="block text-sm font-bold text-gray-800">{course.projects}</span>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Case Studies</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-800">Mastery Checklist</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {course.outcomes.map((outcome, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100/50">
                                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                    <span className="text-sm text-gray-700 font-medium">{outcome}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="curriculum">
                                    <Accordion type="single" collapsible className="w-full">
                                        {course.curriculum.map((module, idx) => (
                                            <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-xl mb-3 px-4 overflow-hidden bg-white shadow-sm">
                                                <AccordionTrigger className="hover:no-underline py-4">
                                                    <span className="text-left font-bold text-gray-800">{module.module}</span>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className="space-y-2 pb-2">
                                                        {module.topics.map((topic, tidx) => (
                                                            <li key={tidx} className="flex items-center gap-3 p-3 hover:bg-blue-50/50 rounded-lg transition-colors cursor-pointer group">
                                                                <PlayCircle className="w-4 h-4 text-gray-400 group-hover:text-[#000080]" />
                                                                <span className="text-sm text-gray-600 group-hover:text-gray-900 font-medium">{topic}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </TabsContent>

                                <TabsContent value="notes">
                                    <div className="p-12 border-2 border-dashed border-gray-100 rounded-xl text-center bg-gray-50/50">
                                        <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                                        <h4 className="text-lg font-bold text-gray-800">Smart Notes</h4>
                                        <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">Your personal workspace for tracking key learnings during this lesson.</p>
                                        <Button className="bg-[#000080] hover:bg-secondary">Start Taking Notes</Button>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>

                    {/* Sidebar - Course Content List */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden sticky top-24">
                            <div className="p-6 border-b bg-gray-50/50">
                                <h3 className="text-lg font-bold text-[#000080]">Recorded Sessions</h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-secondary w-[25%]" />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap uppercase">1 of 4 Done</span>
                                </div>
                            </div>
                            <div className="max-h-[55vh] overflow-y-auto custom-scrollbar p-2 space-y-1">
                                {defaultVideos.map((video) => (
                                    <div
                                        key={video.id}
                                        onClick={() => setActiveVideo(video)}
                                        className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeVideo.id === video.id
                                                ? "bg-blue-50 border border-blue-100 shadow-inner"
                                                : "hover:bg-gray-50"
                                            }`}
                                    >
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${activeVideo.id === video.id
                                                ? "bg-[#000080] text-white shadow-lg shadow-blue-200"
                                                : "bg-gray-100 text-gray-500"
                                            }`}>
                                            {activeVideo.id === video.id ? <PlayCircle className="w-4 h-4 animate-pulse" /> : video.id}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className={`text-xs font-bold leading-tight line-clamp-2 ${activeVideo.id === video.id ? "text-[#000080]" : "text-gray-700"}`}>
                                                {video.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {video.duration}
                                                </span>
                                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">HD Class</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#000080] to-secondary p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">Instructor Support</h3>
                                <p className="text-sm text-blue-100/90 mb-6 font-medium leading-relaxed">Stuck on a concept? Message our expert mentors for instant clarification.</p>
                                <Button asChild className="w-full bg-white text-[#000080] hover:bg-blue-50 font-bold h-12 shadow-lg">
                                    <Link to="/contact">Ask a Question</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseViewer;
