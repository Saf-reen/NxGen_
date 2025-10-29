import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Code } from 'lucide-react';
import { PageHero } from '@/components/PageHero';

interface TrainingPageProps {
  title: string;
  description: string;
  benefits: Array<{
    icon: typeof BookOpen;
    title: string;
    description: string;
  }>;
  features: string[];
  heroImage: string;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({
  title,
  description,
  benefits,
  features,
  heroImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <div className="min-h-screen">
      <PageHero
        title={title}
        description={description}
        // imageUrl={heroImage}
        imageUrl={heroImage}
      />

      {/* Modal trigger and modal */}
      <div className="container mx-auto px-4 -mt-28 flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white/90 text-black px-4 py-2 rounded-md shadow-md hover:shadow-lg transition"
        >
          View image
        </button>
      </div>

      {/* Modal markup */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-2 hover:bg-white"
              aria-label="Close image"
            >
              ✕
            </button>
            <motion.img
              src={heroImage}
              alt={`${title} hero`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="rounded-md w-full h-auto max-h-[80vh] object-cover shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-card rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Key <span className="text-primary">Features</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to succeed in your learning journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};