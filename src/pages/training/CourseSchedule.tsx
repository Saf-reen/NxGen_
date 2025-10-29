import { CalendarDays, Clock, Zap } from 'lucide-react';
import { TrainingPage } from './TrainingPage';

const CourseSchedule = () => {
  return (
    <TrainingPage
      title="Course Schedule"
      description="Find the perfect timing for your learning journey"
      heroImage="/training/course.png"
      benefits={[
        {
          icon: CalendarDays,
          title: "Flexible Batches",
          description: "Multiple batch timings to suit your schedule"
        },
        {
          icon: Clock,
          title: "Convenient Timing",
          description: "Morning, afternoon, and evening slots available"
        },
        {
          icon: Zap,
          title: "Fast-track Options",
          description: "Accelerated learning paths for quick completion"
        }
      ]}
      features={[
        "Regular batch updates",
        "Multiple time slots",
        "Weekend batches",
        "Fast-track courses",
        "Customized schedules",
        "Easy batch transfers"
      ]}
    />
  );
};

export default CourseSchedule;