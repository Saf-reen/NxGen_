import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import DemoForm from "./DemoForm";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle?: string;
}

export const DemoModal = ({ isOpen, onClose, courseTitle }: DemoModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden rounded-2xl [&>button]:text-white [&>button]:opacity-100 [&>button]:right-6 [&>button]:top-6 [&>button_svg]:h-6 [&>button_svg]:w-6">
                <div className="bg-[#000080] p-6 text-white text-center">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center text-white">Book a Free Demo Class</DialogTitle>
                        <DialogDescription className="text-blue-100 text-center">
                            Experienced trainers will help you understand the course curriculum and career path.
                        </DialogDescription>
                    </DialogHeader>
                </div>
                <div className="p-6">
                    <DemoForm
                        defaultCourse={courseTitle}
                        onSuccess={onClose}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
