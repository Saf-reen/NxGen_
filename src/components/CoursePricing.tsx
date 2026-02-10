import { Check, Laptop, Users, Star, GraduationCap, Award, Briefcase } from "lucide-react";

export const CoursePricing = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#000080] mb-3">Course Fee Details</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Choose the learning mode that fits your career goals
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Training Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left Section - Image/Visual */}
                            <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-12 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full translate-x-1/4 -translate-y-1/4"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-1/4 translate-y-1/4"></div>

                                <div className="relative z-10 text-center">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                        <Laptop className="w-24 h-24 text-white mx-auto mb-4" />
                                        <h3 className="text-3xl font-bold text-white mb-2">Training</h3>
                                        <p className="text-gray-200 text-lg">Master the Fundamentals</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Details */}
                            <div className="p-8 md:p-10">
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-bold text-gray-900">₹20,000</span>
                                        <span className="text-gray-500">/ Online</span>
                                    </div>
                                    <p className="text-sm text-gray-600">Perfect for beginners building strong theoretical knowledge</p>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Live Interactive Sessions</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Recorded Videos Access</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Certification of Completion</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Offline Option: ₹25,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Internship Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left Section - Image/Visual */}
                            <div className="bg-gradient-to-br from-green-600 to-green-800 p-12 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full translate-x-1/4 -translate-y-1/4"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-1/4 translate-y-1/4"></div>

                                <div className="relative z-10 text-center">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                        <Users className="w-24 h-24 text-white mx-auto mb-4" />
                                        <h3 className="text-3xl font-bold text-white mb-2">Internship</h3>
                                        <p className="text-gray-200 text-lg">Real-World Experience</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Details */}
                            <div className="p-8 md:p-10">
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-bold text-gray-900">₹30,000</span>
                                        <span className="text-gray-500">/ Offline/Hybrid</span>
                                    </div>
                                    <p className="text-sm text-gray-600">For learners who have the basics and need practical exposure</p>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">6 Months Duration</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Live Client Projects</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Experience Letter</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Mentor Guidance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Master Course Card - Highlighted */}
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#000080] relative">

                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left Section - Image/Visual */}
                            <div className="bg-gradient-to-br from-[#000080] to-blue-900 p-12 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full translate-x-1/4 -translate-y-1/4"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-1/4 translate-y-1/4"></div>

                                <div className="relative z-10 text-center">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                        <Star className="w-24 h-24 text-white mx-auto mb-4" />
                                        <h3 className="text-3xl font-bold text-white mb-2">Master Course</h3>
                                        <p className="text-gray-200 text-lg">Training + Internship</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Details */}
                            <div className="p-8 md:p-10">
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-bold text-[#000080]">₹35,000</span>
                                        <span className="text-gray-500">/ Complete Package</span>
                                    </div>
                                    <p className="text-sm text-gray-600 font-medium">Our most comprehensive program - From Zero to Job-Ready Professional</p>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#000080] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Full Training Modules</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#000080] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">6 Months Internship</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#000080] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">100% Placement Support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#000080] mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">Resume & Interview Prep</span>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                    <p className="text-sm text-gray-700">
                                        <strong className="text-[#000080]">💼 Best Value:</strong> Complete career transformation with training, hands-on experience, and guaranteed placement assistance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
