import { useState } from "react";
import { ExternalLink, Github, MapPin, Users, Globe, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Bus Tracking App",
      description: "A comprehensive mobile application for tracking buses in real-time using GPS technology and Firebase backend.",
      longDescription: "This Flutter-based mobile application provides real-time bus tracking capabilities with GPS integration. The app features live location updates, route optimization, and user-friendly interface for both passengers and administrators. Built with Firebase for real-time data synchronization and reliable backend services.",
      technologies: ["Flutter", "GPS", "Firebase", "Real-time Database", "Google Maps API"],
      features: [
        "Real-time GPS tracking of buses",
        "Interactive map with route visualization",
        "Push notifications for bus arrivals",
        "Admin panel for fleet management",
        "Offline mode support",
        "User authentication and profiles"
      ],
      icon: <Smartphone className="w-6 h-6" />,
      category: "Mobile App",
      status: "Completed"
    },
    {
      id: 2,
      title: "Student White Card Entry System",
      description: "A web-based system for managing student entry records with secure authentication and data management.",
      longDescription: "A comprehensive web application designed to streamline student entry management in educational institutions. The system features secure login, student record management, and real-time data processing using modern web technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "SQL", "Database Design"],
      features: [
        "Secure student authentication system",
        "Real-time entry/exit logging",
        "Administrative dashboard",
        "Student record management",
        "Report generation and analytics",
        "Responsive design for all devices"
      ],
      icon: <Users className="w-6 h-6" />,
      category: "Web Application",
      status: "Completed"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with interactive design elements.",
      longDescription: "A professionally designed portfolio website built with React.js and modern web technologies. Features responsive design, smooth animations, and optimized performance. Deployed on GitHub Pages with continuous integration.",
      technologies: ["React.js", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"],
      features: [
        "Responsive and mobile-first design",
        "Interactive project showcase",
        "Smooth scrolling and animations",
        "Contact form integration",
        "SEO optimized structure",
        "Fast loading and performance optimized"
      ],
      icon: <Globe className="w-6 h-6" />,
      category: "Portfolio",
      status: "Live"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development projects demonstrating full-stack capabilities and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-lg font-poppins group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge 
                    className={`${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    } text-xs`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-smooth"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-poppins gradient-text">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <Badge className="bg-primary/10 text-primary">
                            {project.category}
                          </Badge>
                          <Badge 
                            className={`${
                              project.status === 'Live' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>

                        <div>
                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {project.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            More projects and contributions available on my GitHub profile
          </p>
          <Button 
            variant="outline" 
            className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            asChild
          >
            <a href="https://github.com/sabarinathan-codecrusher" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;