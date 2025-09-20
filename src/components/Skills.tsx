import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Wrench, 
  Brain, 
  Users, 
  Globe 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      color: "bg-purple-600",
      skills: ["C", "Java", "Python (Basic)", "JavaScript"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Frontend Development",
      color: "bg-pink-600",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      color: "bg-purple-700",
      skills: ["Java", "Node.js", "REST APIs", "API Integration"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      color: "bg-pink-700",
      skills: ["MySQL", "SQL", "Database Design", "Query Optimization"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Technologies",
      color: "bg-purple-600",
      skills: ["Git", "VS Code", "Android Studio", "Flutter", "GitHub"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Core Areas",
      color: "bg-pink-600",
      skills: ["Data Structures", "Full Stack Development", "REST APIs", "Agile Development"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      color: "bg-purple-700",
      skills: ["Quick Learner", "Team Player", "Observant", "Time Management"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Languages",
      color: "bg-pink-700",
      skills: ["Tamil (Native)", "English (Fluent)"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-poppins group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold font-poppins text-center mb-8">
            Proficiency <span className="gradient-text">Levels</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "React.js", level: 85 },
              { skill: "Java", level: 80 },
              { skill: "JavaScript", level: 85 },
              { skill: "Node.js", level: 75 },
              { skill: "MySQL", level: 80 },
              { skill: "HTML/CSS", level: 90 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;