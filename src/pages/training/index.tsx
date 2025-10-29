import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { trainingModelRoutes } from "@/data/training-model";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const TrainingModels = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Training Models"
        description="Discover our diverse range of learning approaches tailored to your needs"
        imageUrl="/training/modal.png"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose Your Perfect{" "}
              <span className="text-primary">Learning Path</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you prefer traditional classroom learning, flexible online sessions, 
              or specialized corporate training, we have the perfect program to match 
              your learning style and schedule.
            </p>
          </motion.div>

          {/* Training Models Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {trainingModelRoutes.map((model, index) => (
              <motion.div
                key={model.title}
                variants={cardVariants}
                whileHover="hover"
                className="relative"
              >
                <Link to={model.href}>
                  <Card className="h-full transform transition-shadow hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <motion.div
                          variants={iconVariants}
                          initial="initial"
                          whileHover="hover"
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                        >
                          <model.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                      <CardTitle className="text-xl mb-2">{model.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <CardDescription>
                          {getModelDescription(model.title)}
                        </CardDescription>
                        <div className="pt-2">
                          <Button variant="ghost" asChild>
                            <Link to={model.href} className="group text-primary hover:text-primary/90 inline-flex items-center">
                              <span>Learn more</span>
                              <motion.span
                                className="inline-block ml-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                →
                              </motion.span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Animated highlight effect */}
                <motion.div
                  className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur"
                  initial={false}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our expert counselors are here to help you choose the perfect training model
              that aligns with your goals and schedule.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get model descriptions
function getModelDescription(modelTitle: string): string {
  const descriptions: { [key: string]: string } = {
    "Classroom Training": "Traditional in-person learning with hands-on experience and direct interaction with expert instructors.",
    "Online Training": "Flexible virtual learning with live sessions and interactive content accessible from anywhere.",
    "Weekend Training": "Intensive weekend sessions designed for working professionals seeking to upskill.",
    "Corporate Training": "Customized training solutions tailored to your organization's specific needs and goals.",
    "Internships": "Gain practical experience through real-world projects and professional mentorship.",
    "Trainers Profile": "Learn from industry experts with extensive experience in their respective domains.",
    "Course Schedule": "Find upcoming batches and flexible timing options that suit your schedule."
  };
  return descriptions[modelTitle] || "Discover more about this training model.";
}

export default TrainingModels;