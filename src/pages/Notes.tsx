import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Download, BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "All Subjects" },
  { id: "physics", name: "Physics" },
  { id: "chemistry", name: "Chemistry" },
  { id: "mathematics", name: "Mathematics" },
  { id: "biology", name: "Biology" },
];

const materials = [
  {
    id: 1,
    title: "Mechanics Complete Notes",
    subject: "physics",
    description: "Comprehensive notes covering all topics in mechanics including kinematics, dynamics, and work-energy theorem.",
    pages: "120 Pages",
    format: "PDF",
    size: "15 MB",
  },
  {
    id: 2,
    title: "Organic Chemistry Reactions",
    subject: "chemistry",
    description: "Detailed notes on organic chemistry reactions with mechanisms and important examples.",
    pages: "95 Pages",
    format: "PDF",
    size: "12 MB",
  },
  {
    id: 3,
    title: "Calculus Problem Sets",
    subject: "mathematics",
    description: "Practice problems and solutions for differential and integral calculus.",
    pages: "80 Pages",
    format: "PDF",
    size: "8 MB",
  },
  {
    id: 4,
    title: "Human Physiology Notes",
    subject: "biology",
    description: "Complete notes on human body systems with diagrams and key points.",
    pages: "150 Pages",
    format: "PDF",
    size: "25 MB",
  },
  {
    id: 5,
    title: "Electromagnetism Guide",
    subject: "physics",
    description: "In-depth study material for electromagnetic theory and applications.",
    pages: "110 Pages",
    format: "PDF",
    size: "18 MB",
  },
  {
    id: 6,
    title: "Inorganic Chemistry",
    subject: "chemistry",
    description: "Comprehensive notes on periodic table, chemical bonding, and coordination compounds.",
    pages: "130 Pages",
    format: "PDF",
    size: "20 MB",
  },
];

const Notes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, isVisible } = useScrollAnimation(0.2);

  const filteredMaterials = materials.filter((material) => {
    const matchesCategory = selectedCategory === "all" || material.subject === selectedCategory;
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            NOTES AND STUDY MATERIALS
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Download comprehensive study materials and notes prepared by expert educators
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search study materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {filteredMaterials.map((material, index) => (
              <MaterialCard key={material.id} material={material} index={index} />
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No study materials found.</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom <span className="gradient-text">Study Materials?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us to request specific study materials.
          </p>
          <Button variant="hero" size="lg">
            Request Materials
          </Button>
        </div>
      </section>
    </div>
  );
};

const MaterialCard = ({ material, index }: { material: typeof materials[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`bg-card rounded-xl p-6 shadow-md hover-lift transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xs px-3 py-1 bg-secondary rounded-full font-medium capitalize">
          {material.subject}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2">{material.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        {material.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
        <span>{material.pages}</span>
        <span>•</span>
        <span>{material.format}</span>
        <span>•</span>
        <span>{material.size}</span>
      </div>

      <Button variant="default" className="w-full group">
        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
        Download Now
      </Button>
    </div>
  );
};

export default Notes;
