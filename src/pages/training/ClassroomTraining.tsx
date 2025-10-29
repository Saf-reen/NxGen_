import { BookOpen, Users, Code } from 'lucide-react';
import { TrainingPage } from './TrainingPage';

const ClassroomTraining = () => {
  return (
    <TrainingPage
      title="Classroom Training"
      description="Experience hands-on learning with expert mentors in our state-of-the-art facilities"
      heroImage="/training/classroom.png"
      benefits={[
        {
          icon: BookOpen,
          title: "Hands-on Labs",
          description: "Learn by doing with real-world projects and practical exercises"
        },
        {
          icon: Users,
          title: "One-on-One Mentorship",
          description: "Personal guidance from industry experts to accelerate your growth"
        },
        {
          icon: Code,
          title: "Collaborative Projects",
          description: "Work with peers on team projects that simulate real work environments"
        }
      ]}
      features={[
        "Industry-standard curriculum",
        "Small batch sizes",
        "Flexible timing options",
        "Regular assessments",
        "Mock interviews",
        "Placement assistance"
      ]}
    />
  );
};

export default ClassroomTraining;