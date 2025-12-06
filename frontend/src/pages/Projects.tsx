import { Card, CardContent } from "@/components/ui/card";
import { Folder, ArrowUpRight } from "lucide-react";

const Projects = () => {
  // Placeholder for future projects
  const comingSoon = true;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my work and learning journey in technology
          </p>
        </div>

        {/* Projects or Coming Soon */}
        {comingSoon ? (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-primary/10 rounded-full">
                    <Folder className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Projects Coming Soon</h2>
                <p className="text-muted-foreground text-lg">
                  I'm currently working on exciting projects that will be showcased here. 
                  Stay tuned for updates!
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example project card structure for future use */}
            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105 duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="h-8 w-8 text-primary" />
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-muted-foreground mb-4">
                  Brief description of the project and technologies used.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    Technology
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
