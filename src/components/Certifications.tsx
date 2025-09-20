import { FileText, Award, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Fundamentals",
      provider: "Infosys Springboard",
      description: "Comprehensive certification covering Java programming fundamentals, object-oriented programming concepts, and core Java development practices.",
      skills: ["Java Programming", "OOP Concepts", "Core Java APIs", "Exception Handling"],
      icon: <FileText className="w-6 h-6" />,
      color: "bg-purple-600",
      status: "Completed",
      category: "Programming"
    },
    {
      title: "Java SE8 Features",
      provider: "Infosys Springboard",
      description: "Advanced certification focusing on Java 8 features including lambda expressions, streams, functional interfaces, and modern Java development practices.",
      skills: ["Lambda Expressions", "Streams API", "Functional Programming", "Java 8 Features"],
      icon: <Award className="w-6 h-6" />,
      color: "bg-pink-600",
      status: "Completed",
      category: "Programming"
    },
    {
      title: "C Programming",
      provider: "SkillRack",
      description: "Foundational certification in C programming covering basic to advanced concepts, data structures implementation, and algorithmic problem solving.",
      skills: ["C Programming", "Data Structures", "Algorithms", "Memory Management"],
      icon: <FileText className="w-6 h-6" />,
      color: "bg-purple-700",
      status: "Completed",
      category: "Programming"
    },
    {
      title: "Python Programming",
      provider: "SkillRack",
      description: "Introduction to Python programming covering syntax, data structures, and basic application development with Python.",
      skills: ["Python Syntax", "Data Types", "Control Structures", "Basic Scripting"],
      icon: <Award className="w-6 h-6" />,
      color: "bg-pink-700",
      status: "Completed",
      category: "Programming"
    }
  ];

  const interests = [
    {
      title: "Full Stack Development",
      description: "Passionate about building end-to-end web applications using modern technologies and frameworks.",
      icon: "🚀"
    },
    {
      title: "Front-End Engineering",
      description: "Creating beautiful, responsive, and user-friendly interfaces with attention to design and user experience.",
      icon: "🎨"
    },
    {
      title: "Software Development",
      description: "Developing robust, scalable software solutions with clean code practices and modern development methodologies.",
      icon: "💻"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Certifications & <span className="gradient-text">Interests</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and areas of technical interest driving continuous learning
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-poppins text-center mb-8">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${cert.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                        {cert.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {cert.category}
                        </Badge>
                        <CardTitle className="text-lg font-poppins group-hover:text-primary transition-colors">
                          {cert.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{cert.provider}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Skills Covered</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Areas of Interest */}
        <div>
          <h3 className="text-2xl font-bold font-poppins text-center mb-8">
            Areas of <span className="gradient-text">Interest</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <Card 
                key={index}
                className="group hover:shadow-purple transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/20 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {interest.icon}
                  </div>
                  <h4 className="text-xl font-semibold font-poppins group-hover:text-primary transition-colors">
                    {interest.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-bg-subtle p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Ready to <span className="gradient-text">Collaborate?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and challenges. Let's discuss how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="gradient-bg text-white hover:opacity-90 transition-smooth shadow-glow font-semibold px-8 py-3"
                asChild
              >
                <a href="mailto:sabarigowri636@gmail.com">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3"
                asChild
              >
                <a href="https://linkedin.com/in/sabarinathan-m-274218252" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;