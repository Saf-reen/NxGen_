import React from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Settings, LogOut, PlusCircle } from "lucide-react";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";

const AdminSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("role");
        navigate("/admin-login");
    };

    const isActive = (path: string) => location.pathname === path;
    const isBlogsActive = location.pathname.includes('/admin/blogs');

    return (
        <div className="w-64 bg-slate-900 text-white min-h-screen flex flex-col shadow-xl">
            <div className="p-6 border-b border-slate-800">
                <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-indigo-500" />
                    Admin Panel
                </h2>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                <Link to="/admin" className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('/admin') ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
                    <LayoutDashboard className="w-5 h-5" />
                    Dashboard
                </Link>
                <Link to="/admin/blogs" className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isBlogsActive ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
                    <FileText className="w-5 h-5" />
                    Manage Blogs
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-950/30 hover:text-red-300 rounded-lg transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className="flex bg-slate-50 min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-8 overflow-y-auto h-screen">
                <Routes>
                    <Route path="/" element={<BlogList />} />
                    <Route path="blogs" element={<BlogList />} />
                    <Route path="blogs/create" element={<CreateBlog />} />
                    <Route path="blogs/edit/:id" element={<EditBlog />} />
                </Routes>
            </main>
        </div>
    );
};

export default AdminDashboard;
