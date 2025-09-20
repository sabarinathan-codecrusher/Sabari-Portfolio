import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Engineering College",
      duration: "2020 – 2024",
      grade: "CGPA: 8.50",
      description: "Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, and web development. Completed multiple projects in full-stack development and participated in technical seminars.",
      highlights: [
        "Strong foundation in Data Structures & Algorithms",
        "Web Development specialization",
        "Software Engineering principles",
        "Database Management Systems",
        "Final year project in Full Stack Development"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-purple-600"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Polytechnic College",
      duration: "2015 – 2018",
      grade: "67%",
      description: "Focused on practical aspects of computer engineering including programming, hardware fundamentals, and basic software development. Built a strong foundation for advanced computer science studies.",
      highlights: [
        "Programming fundamentals (C, Java)",
        "Computer Hardware & Networks",
        "Basic Web Development",
        "Database concepts",
        "Technical communication skills"
      ],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-pink-600"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "High School",
      duration: "2014 – 2015",
      grade: "69.6%",
      description: "Completed secondary education with focus on science and mathematics, laying the groundwork for technical education and career development.",
      highlights: [
        "Strong foundation in Mathematics",
        "Science and analytical thinking",
        "Communication skills development",
        "Problem-solving aptitude"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "bg-purple-700"
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-bg-subtle">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning path in computer science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((education, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow hover:shadow-purple transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 gradient-bg"></div>
              
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${education.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                      {education.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl lg:text-2xl font-bold font-poppins">{education.degree}</h3>
                      <p className="text-lg font-semibold text-muted-foreground">{education.institution}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          <span>{education.duration}</span>
                        </div>
                        <Badge className="bg-primary/10 text-primary w-fit">
                          {education.grade}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {education.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold font-poppins mb-3 gradient-text">Key Highlights</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {education.highlights.map((highlight, highlightIndex) => (
                      <div 
                        key={highlightIndex} 
                        className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-smooth"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Achievement Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">8.50</div>
              <div className="text-muted-foreground">CGPA in B.E.</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">4+</div>
              <div className="text-muted-foreground">Years of Technical Education</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">CS</div>
              <div className="text-muted-foreground">Computer Science Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;