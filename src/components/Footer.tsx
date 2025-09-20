import { Heart, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
  ];

  return (
    <footer className="bg-gradient-bg-subtle border-t border-primary/20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-poppins gradient-text">
              Sabarinathan M
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative web solutions 
              with modern technologies and clean code practices.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="https://linkedin.com/in/sabarinathan-m-274218252" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="https://github.com/sabarinathan-codecrusher" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-smooth text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-sm">+91 99947 40104</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <a 
                  href="mailto:sabarigowri636@gmail.com"
                  className="text-sm hover:text-primary transition-smooth"
                >
                  sabarigowri636@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-sm">Salem, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Sabarinathan M. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm text-center md:text-right flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;