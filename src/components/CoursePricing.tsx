import { Badge, Check, Globe, Laptop, Users, Star } from "lucide-react";

export const CoursePricing = () => {
    const plans = [
        {
            title: "Training",
            icon: Laptop,
            subtitle: "Master the Fundamentals",
            price: "₹20,000",
            period: "Online",
            features: [
                "Live Interactive Sessions",
                "Recorded Videos Access",
                "Certification of Completion",
                "Offline Option: ₹25,000"
            ],
            description: "Perfect for beginners building strong theoretical knowledge.",
            theme: "gray",
            buttonVariant: "outline"
        },
        {
            title: "Internship",
            icon: Users,
            subtitle: "Real-World Experience",
            price: "₹30,000",
            period: "Offline / Hybrid",
            features: [
                "6 Months Duration",
                "Live Client Projects",
                "Experience Letter",
                "Mentor Guidance"
            ],
            description: "For learners who have the basics and need practical exposure.",
            theme: "green",
            buttonVariant: "outline"
        },
        {
            title: "Master Course",
            icon: Star,
            subtitle: "Training + Internship",
            price: "₹35,000",
            period: "Complete Package",
            isPopular: true,
            features: [
                "Full Training Modules",
                "6 Months Internship",
                "100% Placement Support",
                "Resume & Interview Prep"
            ],
            description: "Our most comprehensive program. From Zero to Job-Ready Professional.",
            theme: "blue",
            buttonVariant: "default"
        }
    ];

    return (
        <section className="py-16 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#000080] mb-3">Flexible Learning Plans</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Choose the learning mode that fits your career goals. We offer transparent pricing with no hidden costs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        const isBlue = plan.theme === 'blue';
                        const isGreen = plan.theme === 'green';

                        // Theme configurations
                        const borderColor = isBlue ? 'border-[#000080]' : isGreen ? 'border-green-600' : 'border-gray-200';
                        const headerColor = isBlue ? 'bg-[#000080] text-white' : isGreen ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800';
                        const checkColor = isBlue ? 'text-[#000080]' : isGreen ? 'text-green-600' : 'text-gray-500';
                        const shadow = isBlue ? 'shadow-xl scale-105 z-10' : 'shadow-md hover:shadow-lg';

                        return (
                            <div key={index} className={`relative flex flex-col bg-white rounded-xl border-2 ${borderColor} ${shadow} transition-all duration-300`}>

                                {/* Header */}
                                <div className={`p-6 text-center ${headerColor} ${isBlue ? 'rounded-t-lg' : 'rounded-t-lg'}`}>
                                    {plan.isPopular && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F6AD55] text-[#000080] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm border border-[#000080]/10">
                                            Most Recommended
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                                    <p className={`text-sm opacity-90 font-medium`}>{plan.subtitle}</p>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="text-center mb-6">
                                        <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                                        <div className="text-sm text-gray-500 font-medium mt-1">{plan.period}</div>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm text-gray-600 leading-relaxed text-center">
                                        {plan.description}
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                                <div className={`mt-0.5 min-w-[18px] ${checkColor}`}>
                                                    <Check className="w-5 h-5" />
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all text-sm uppercase tracking-wide
                                            ${isBlue
                                                ? 'bg-[#000080] text-white hover:bg-[#000080]/90 shadow-lg shadow-blue-900/20'
                                                : isGreen
                                                    ? 'bg-white border-2 border-green-600 text-green-700 hover:bg-green-50'
                                                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }
                                        `}>
                                            Choose Plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
