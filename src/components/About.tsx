import { Code, Lightbulb, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Expertise",
      description: "Proficient in both frontend and backend development with modern technologies"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about finding innovative solutions to complex challenges"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Clean Code",
      description: "Committed to writing maintainable, efficient, and scalable code"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Strong collaboration skills with experience in Agile development"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-bg-subtle">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with 
              extensive experience in both frontend and backend development. My journey in software development 
              has been driven by a love for creating innovative solutions that make a real impact.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in <span className="text-primary font-semibold">HTML, CSS, JavaScript, React.js</span> on 
              the frontend and <span className="text-primary font-semibold">Java, Node.js</span> on the backend, 
              I enjoy building end-to-end applications that deliver exceptional user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">quick learner</span> who thrives in collaborative 
              environments, constantly seeking opportunities to grow and contribute to meaningful projects. 
              My approach combines technical excellence with creative problem-solving to deliver results that exceed expectations.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React.js", "Java", "JavaScript", "Node.js", "MySQL", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-purple transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold font-poppins text-lg">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;