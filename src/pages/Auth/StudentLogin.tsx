import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const StudentLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("username")) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axiosInstance.post("/api/auth/student-login/", {
                username_or_email: username,
                password,
                role: "student",
            });

            console.log("Student Login Response:", response.data);
            // Store token securely (e.g., localStorage or secure cookie)
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            localStorage.setItem("user_id", response.data.user_id);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("role", response.data.role);

            toast.success("Login successful! Welcome back.");
            navigate("/dashboard"); // Redirect to dashboard
        } catch (error: any) {
            console.error("Login Error:", error);
            toast.error(error.response?.data?.message || "Login failed. Check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12">
            <div className="container mx-auto px-4 flex justify-center">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center text-[#000080]">Student Portal</CardTitle>
                        <CardDescription className="text-center">
                            Login to your student account
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleLogin}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Username or Email</Label>
                                <Input
                                    id="username"
                                    placeholder="Enter your username or email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <Button type="submit" className="w-full bg-[#000080] hover:bg-[#000080]/90" disabled={isLoading}>
                                {isLoading ? "Logging in..." : "Login as Student"}
                            </Button>
                            <div className="text-sm text-center text-gray-500">
                                Don't have an account?{" "}
                                <Link to="/register" className="text-[#000080] font-semibold hover:underline">
                                    Register here
                                </Link>
                            </div>
                            <div className="text-xs text-center">
                                Are you an instructor?{" "}
                                <Link to="/instructor-login" className="text-blue-600 hover:underline">
                                    Instructor Login
                                </Link>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default StudentLogin;
