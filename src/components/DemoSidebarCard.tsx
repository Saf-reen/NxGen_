import DemoForm from "./DemoForm";

interface DemoSidebarCardProps {
    courseTitle?: string;
}

const DemoSidebarCard = ({ courseTitle }: DemoSidebarCardProps) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Free Demo</h3>
            <p className="text-sm text-gray-500 mb-6">Experience our expert-led training firsthand.</p>
            <DemoForm defaultCourse={courseTitle} />
        </div>
    );
};

export default DemoSidebarCard;
