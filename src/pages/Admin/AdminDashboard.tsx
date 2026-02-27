import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Settings, LogOut, Menu, X } from "lucide-react";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";

const AdminDashboard = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("role");
        navigate("/admin-login");
    };

    const isActive = (path: string) => location.pathname === path;
    const isBlogsActive = location.pathname.includes('/admin/blogs');

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 text-white shadow-md z-40 relative">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Settings className="w-6 h-6 text-indigo-500" />
                    Admin Panel
                </h2>
                <button onClick={toggleMobileMenu} className="p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md">
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`
                ${isMobileMenuOpen ? 'flex' : 'hidden'} 
                md:flex flex-col w-full md:w-64 bg-slate-900 text-white 
                absolute md:relative z-30 h-[calc(100vh-68px)] md:h-screen md:min-h-screen shadow-xl top-[68px] md:top-0
            `}>
                <div className="hidden md:flex p-6 border-b border-slate-800">
                    <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                        <Settings className="w-6 h-6 text-indigo-500" />
                        Admin Panel
                    </h2>
                </div>
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link to="/admin" onClick={closeMobileMenu} className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin') ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link to="/admin/blogs" onClick={closeMobileMenu} className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isBlogsActive ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
                        <FileText className="w-5 h-5" />
                        Manage Blogs
                    </Link>
                </nav>
                <div className="p-4 border-t border-slate-800 mt-auto">
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-950/30 hover:text-red-300 rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full md:h-screen relative z-10">
                <Routes>
                    <Route path="/" element={<BlogList />} />
                    <Route path="blogs" element={<BlogList />} />
                    <Route path="blogs/create" element={<CreateBlog />} />
                    <Route path="blogs/edit/:id" element={<EditBlog />} />
                </Routes>
            </main>

            {/* Backdrop for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-20 top-[68px]"
                    onClick={closeMobileMenu}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
