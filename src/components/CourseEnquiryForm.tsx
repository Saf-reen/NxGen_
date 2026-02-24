import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import axiosInstance from "@/api/axiosInstance";

interface CourseEnquiryFormProps {
    courseTitle?: string;
}

const CourseEnquiryForm = ({ courseTitle }: CourseEnquiryFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: courseTitle ? `Interested in ${courseTitle} course.` : "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await axiosInstance.post("/api/leads/contact-us/", formData);
            toast.success("Enquiry sent! We will contact you soon.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: courseTitle ? `Interested in ${courseTitle} course.` : "",
            });
        } catch (error: any) {
            console.error("Enquiry Error:", error);
            toast.error(error.response?.data?.message || "Failed to send enquiry. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-semibold text-gray-600">Full Name</label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white"
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-semibold text-gray-600">Email Address</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white"
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="phone" className="text-xs font-semibold text-gray-600">Phone Number</label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white"
                />
            </div>
            <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-gray-600">Message/Enquiry</label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Any specific questions?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white min-h-[80px]"
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-[#000080] hover:bg-[#000080]/90 text-white font-bold h-12 text-lg shadow-lg shadow-blue-900/10"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Enquire Now"}
            </Button>
            <p className="text-[10px] text-center text-gray-400">
                By submitting, you agree to our privacy policy.
            </p>
        </form>
    );
};

export default CourseEnquiryForm;
