import { Calendar, Clock, Users } from 'lucide-react';
import { TrainingPage } from './TrainingPage';

const WeekendTraining = () => {
  return (
    <TrainingPage
      title="Weekend Training"
      description="Flexible weekend sessions designed for working professionals"
      heroImage="/training/weekend.png"
      benefits={[
        {
          icon: Calendar,
          title: "Weekend Schedule",
          description: "Convenient weekend classes that fit your work life"
        },
        {
          icon: Clock,
          title: "Flexible Timing",
          description: "Morning and afternoon batches to choose from"
        },
        {
          icon: Users,
          title: "Peer Learning",
          description: "Network with other working professionals"
        }
      ]}
      features={[
        "Intensive weekend sessions",
        "Practical case studies",
        "Industry-relevant projects",
        "Networking opportunities",
        "Flexible batch options",
        "Work-life balance"
      ]}
    />
  );
};

export default WeekendTraining;