import { Users, Award, Star } from 'lucide-react';
import { TrainingPage } from './TrainingPage';

const TrainersProfile = () => {
  return (
    <TrainingPage
      title="Trainers Profile"
      description="Meet our expert trainers with years of industry experience"
      heroImage="/training/training.png"
      benefits={[
        {
          icon: Users,
          title: "Expert Trainers",
          description: "Learn from industry professionals with proven track records"
        },
        {
          icon: Award,
          title: "Certified Professionals",
          description: "Industry-certified trainers with relevant qualifications"
        },
        {
          icon: Star,
          title: "Industry Experience",
          description: "Trainers with extensive real-world project experience"
        }
      ]}
      features={[
        "Experienced mentors",
        "Industry experts",
        "Hands-on teaching approach",
        "Regular knowledge updates",
        "Personalized guidance",
        "Interactive sessions"
      ]}
    />
  );
};

export default TrainersProfile;