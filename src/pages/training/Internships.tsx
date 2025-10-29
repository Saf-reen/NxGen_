import { GraduationCap, Briefcase, Target } from 'lucide-react';
import { TrainingPage } from './TrainingPage';

const Internships = () => {
  return (
    <TrainingPage
      title="Internships"
      description="Gain practical experience through our industry internship programs"
      heroImage="/training/internship.png"
      benefits={[
        {
          icon: GraduationCap,
          title: "Practical Experience",
          description: "Work on real projects with industry experts"
        },
        {
          icon: Briefcase,
          title: "Industry Exposure",
          description: "Learn professional workplace practices and culture"
        },
        {
          icon: Target,
          title: "Career Growth",
          description: "Build your portfolio and enhance your resume"
        }
      ]}
      features={[
        "Real project experience",
        "Professional mentoring",
        "Industry certification",
        "Performance evaluation",
        "Job placement assistance",
        "Networking opportunities"
      ]}
    />
  );
};

export default Internships;