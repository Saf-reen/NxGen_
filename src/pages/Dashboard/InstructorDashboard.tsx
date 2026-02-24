import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calendar, ChevronRight, Loader2, PlusCircle } from "lucide-react";

const InstructorDashboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("username");
        const role = localStorage.getItem("role");

        if (!storedUser || role !== "instructor") {
            navigate("/instructor-login");
            return;
        }

        setUsername(storedUser);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-transparent pb-20">
            <PageHero
                title={`Instructor Portal: welcome, ${username}!`}
                description="Manage your courses, students, and schedules from one place."
            />

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stats Card */}
                    <Card className="bg-white shadow-lg border-none">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Total Students</CardTitle>
                            <Users className="w-4 h-4 text-[#000080]" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-[#000080]">0</div>
                            <p className="text-xs text-gray-400 mt-1">Students enrolled in your courses</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-lg border-none">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Active Courses</CardTitle>
                            <BookOpen className="w-4 h-4 text-[#000080]" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-[#000080]">0</div>
                            <p className="text-xs text-gray-400 mt-1">Courses currently being taught</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-lg border-none">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">Upcoming Sessions</CardTitle>
                            <Calendar className="w-4 h-4 text-[#000080]" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-[#000080]">0</div>
                            <p className="text-xs text-gray-400 mt-1">Live classes scheduled for this week</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12">
                    <div className="bg-white rounded-2xl shadow-xl p-16 text-center border border-gray-100 animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <PlusCircle className="w-10 h-10 text-[#000080]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Courses Found</h3>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">You haven't created or been assigned any courses yet. Start by creating a new course module.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="bg-[#000080] hover:bg-secondary px-8 h-12 text-lg">
                                Create New Course
                            </Button>
                            <Button variant="outline" className="border-[#000080] text-[#000080] hover:bg-blue-50 px-8 h-12 text-lg">
                                View Curriculum
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;
