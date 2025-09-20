import { Calendar, MapPin, Building, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const achievements = [
    "Developed multiple React + Java + MySQL full-stack applications",
    "Built robust REST APIs for seamless frontend-backend communication",
    "Implemented Agile development methodologies in team projects",
    "Optimized database queries for improved application performance",
    "Enhanced team collaboration through effective communication and code reviews",
    "Contributed to project planning and requirement analysis"
  ];

  const technologies = [
    "React.js", "Java", "MySQL", "REST APIs", "JavaScript", 
    "HTML5", "CSS3", "Git", "Agile", "Team Collaboration"
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-bg-subtle">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and key contributions in full-stack development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow animate-fade-in">
            {/* Timeline indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-1 gradient-bg"></div>
            
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Building className="w-5 h-5" />
                    <h3 className="text-2xl font-bold font-poppins">Full Stack Developer Intern</h3>
                  </div>
                  <p className="text-xl font-semibold text-muted-foreground">Viswa Digital Technology</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>March 2024 – August 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span>6 months</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    VDT
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold font-poppins mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Key Achievements & Contributions
                </h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-smooth"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold font-poppins mb-4">Technologies & Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact Section */}
              <div className="bg-gradient-bg-subtle p-6 rounded-lg border border-primary/20">
                <h4 className="text-lg font-semibold font-poppins mb-3 gradient-text">Impact & Growth</h4>
                <p className="text-muted-foreground leading-relaxed">
                  During my internship, I gained hands-on experience in full-stack development, working on real-world projects 
                  that enhanced my technical skills and understanding of industry best practices. I successfully contributed to 
                  multiple project deliverables while learning valuable lessons about teamwork, code quality, and agile development processes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;