import React from 'react';
import BlogForm from './BlogForm';

export default function CreateBlog() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-5xl mx-auto min-h-[80vh]">
            <h1 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">Create New Blog Post</h1>
            <BlogForm isEdit={false} />
        </div>
    );
}
