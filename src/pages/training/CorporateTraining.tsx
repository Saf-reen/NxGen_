import { Building, Users, Trophy } from 'lucide-react';
import { TrainingPage } from './TrainingPage';

const CorporateTraining = () => {
  return (
    <TrainingPage
      title="Corporate Training"
      description="Customized training solutions for organizations and businesses"
      heroImage="/training/corporate.png"
      benefits={[
        {
          icon: Building,
          title: "Customized Programs",
          description: "Training programs tailored to your organization's needs"
        },
        {
          icon: Users,
          title: "Team Development",
          description: "Comprehensive skill development for entire teams"
        },
        {
          icon: Trophy,
          title: "ROI Focused",
          description: "Training designed to deliver measurable business impact"
        }
      ]}
      features={[
        "Customized curriculum",
        "On-site training option",
        "Skill gap analysis",
        "Progress tracking",
        "Team assessments",
        "Post-training support"
      ]}
    />
  );
};

export default CorporateTraining;