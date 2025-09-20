import { ArrowDown, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-600/20 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-pink-600/20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-purple-600/30 animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins">
                <span className="gradient-text">Sabarinathan M</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground font-poppins">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Passionate about creating innovative web solutions with modern technologies. 
                Specialized in React, Java, and full-stack development.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone className="w-4 h-4 text-purple-600" />
                <span>+91 99947 40104</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Mail className="w-4 h-4 text-purple-600" />
                <span>sabarigowri636@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth shadow-purple"
                asChild
              >
                <a href="https://linkedin.com/in/sabarinathan-m-274218252" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth shadow-purple"
                asChild
              >
                <a href="https://github.com/sabarinathan-codecrusher" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="gradient-bg text-white hover:opacity-90 transition-smooth shadow-glow font-semibold px-8 py-6 text-lg"
                onClick={scrollToAbout}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-6 text-lg"
                asChild
              >
                <a href="mailto:sabarigowri636@gmail.com">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Sabarinathan M - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full hover:bg-primary/10"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;