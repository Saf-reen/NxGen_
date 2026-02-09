import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, ChevronRight, Eye, Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
    {
        id: 1,
        title: "SAS Certification Course in Canada (North America)",
        excerpt: "Explore the opportunities of SAS certification in the North American market and how it can boost your data career.",
        date: "2025-12-12",
        author: "Admin",
        category: "SAS",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
        readTime: "5 min read",
        views: "2.4k",
        comments: 12,
        shares: 45
    },
    {
        id: 2,
        title: "Get Certified and Advance Your Career with SAS Data & AI Programs",
        excerpt: "Learn how SAS Data & AI programs are shaping the future of analytics and why you should get certified now.",
        date: "2025-10-06",
        author: "Admin",
        category: "Career",
        image: "https://images.unsplash.com/photo-1599658880436-e252446958d5?q=80&w=600&auto=format&fit=crop",
        readTime: "7 min read",
        views: "1.8k",
        comments: 8,
        shares: 32
    },
    {
        id: 3,
        title: "What is Data Analytics? Types and Benefits Explained",
        excerpt: "A comprehensive guide to understanding Data Analytics, its different types, and how it benefits modern businesses.",
        date: "2025-10-06",
        author: "Admin",
        category: "Data Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        readTime: "6 min read",
        views: "3.1k",
        comments: 24,
        shares: 89
    },
    {
        id: 4,
        title: "What is SAP S/4HANA? A Complete Guide",
        excerpt: "Discover the power of SAP S/4HANA, the next-generation ERP business suite.",
        date: "2025-09-15",
        author: "Admin",
        category: "SAP",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        readTime: "8 min read",
        views: "4.2k",
        comments: 18,
        shares: 56
    },
    {
        id: 5,
        title: "SuccessFactors Employee Central: Key Features & Benefits",
        excerpt: "Deep dive into SAP SuccessFactors Employee Central and how it revolutionizes HR operations.",
        date: "2025-08-22",
        author: "Admin",
        category: "SAP SuccessFactors",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
        readTime: "4 min read",
        views: "1.5k",
        comments: 6,
        shares: 21
    },
    {
        id: 6,
        title: "The Future of Cloud Computing with AWS and Azure",
        excerpt: "Comparing AWS and Azure: Which cloud platform is right for your career path in 2026?",
        date: "2025-07-10",
        author: "Admin",
        category: "Cloud Computing",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        readTime: "6 min read",
        views: "2.8k",
        comments: 15,
        shares: 48
    }
];

const Blogs = () => {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <SEO
                title="Our Blogs & Insights - Aspire Techsoft"
                description="Stay updated with the latest trends in IT, SAP, Data Science, and Career Advice from Aspire Techsoft experts."
                type="website"
                path="/blogs"
            />

            {/* Page Header */}
            <div className="bg-[#000080] py-16 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Latest Insights</h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                        Expert articles on Technology, Career Growth, and Industry Trends.
                    </p>
                    <div className="text-sm opacity-90 font-medium flex justify-center gap-2 items-center">
                        <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span>Blogs</span>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            </div>

            {/* Blog Grid Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#000080] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#000080] transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-6 text-gray-400 text-xs mb-4 pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-1.5 hover:text-[#000080] transition-colors cursor-pointer" title="Views">
                                            <Eye className="w-4 h-4" />
                                            <span>{post.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 hover:text-[#000080] transition-colors cursor-pointer" title="Comments">
                                            <MessageCircle className="w-4 h-4" />
                                            <span>{post.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 hover:text-[#000080] transition-colors cursor-pointer" title="Shares">
                                            <Share2 className="w-4 h-4" />
                                            <span>{post.shares}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-700">By {post.author}</span>
                                        </div>
                                        <Link
                                            to="#"
                                            className="text-[#000080] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {!blogPosts.length && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No blog posts found.</p>
                        </div>
                    )}

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center gap-2">
                        <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50" disabled>Previous</Button>
                        <Button className="bg-[#000080] hover:bg-[#000080]/90 text-white">1</Button>
                        <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">2</Button>
                        <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">3</Button>
                        <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">Next</Button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-gray-400 mb-8">Get the latest updates, articles, and resources sent straight to your inbox.</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000080]"
                        />
                        <Button type="submit" size="lg" className="bg-[#000080] hover:bg-[#000080]/90 text-white font-medium">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
