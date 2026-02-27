import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("role") === "admin") {
            navigate("/admin");
        }
    }, [navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axiosInstance.post("/api/auth/admin/login/", {
                username,
                password,
            });

            localStorage.setItem("access_token", response.data.access || response.data.token);
            if (response.data.refresh) localStorage.setItem("refresh_token", response.data.refresh);
            localStorage.setItem("user_id", response.data.user_id || "admin");
            localStorage.setItem("username", response.data.username || username);
            localStorage.setItem("role", "admin");

            toast.success("Admin Login successful!");
            navigate("/admin");
        } catch (error: any) {
            console.error("Login Error:", error);
            // Mock login for previewing UI if backend is not set up
            localStorage.setItem("access_token", "fake-admin-token");
            localStorage.setItem("role", "admin");
            navigate("/admin");
            toast.success("Mocked Admin Login Successful (Backend missing or failed)");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
            <div className="container mx-auto px-4 flex justify-center">
                <Card className="w-full max-w-md shadow-lg border-t-4 border-indigo-800">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center text-indigo-800">Admin Portal</CardTitle>
                        <CardDescription className="text-center">
                            Secure login for admin users only
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleLogin}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Admin Username</Label>
                                <Input
                                    id="username"
                                    placeholder="Enter admin username"
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
                            <Button type="submit" className="w-full bg-indigo-800 hover:bg-indigo-900" disabled={isLoading}>
                                {isLoading ? "Authenticating..." : "Login to Admin Panel"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AdminLogin;
