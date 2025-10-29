import { MonitorPlay, Video, Users } from 'lucide-react';
import { TrainingPage } from './TrainingPage';

const OnlineTraining = () => {
  return (
    <TrainingPage
      title="Online Training"
      description="Learn from anywhere with our interactive virtual classroom platform"
      heroImage="/training/online.png"
      benefits={[
        {
          icon: MonitorPlay,
          title: "Live Interactive Sessions",
          description: "Real-time interaction with instructors and peers"
        },
        {
          icon: Video,
          title: "Recorded Sessions",
          description: "Access to recorded classes for revision and flexibility"
        },
        {
          icon: Users,
          title: "Virtual Labs",
          description: "Practice with cloud-based development environments"
        }
      ]}
      features={[
        "24/7 Learning portal access",
        "Interactive Q&A sessions",
        "Virtual team projects",
        "Self-paced modules",
        "Online assessments",
        "Digital resources library"
      ]}
    />
  );
};

export default OnlineTraining;