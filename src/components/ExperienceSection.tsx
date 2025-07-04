
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    // {
    //   title: "SDE Intern",
    //   company: "Mediversal Healthcare",
    //   duration: "Feb 2025 - Ongoing",
    //   description: "Deployed an online registration platform on AWS EC2 with Route 53, ensuring 99.9% uptime and sub-2s load times. Secured email authentication and optimized RESTful APIs with Node.js and Express, improving response time by 25%. Built the front end using React Native CLI, reducing load times to under 1.5 seconds.",
    //   skills: ["AWS EC2", "Route 53", "Node.js", "Express", "React Native", "Docker", "TypeScript", "BitBucket"],
    //   link: "#"
    // },
    {
      title: "Summer Intern",
      company: "EiSystem",
      duration: "May 2024 - June 2024",
      description: "Engineered PharmaCart, an online pharmacy platform hosting 1,000+ products, ensuring a 99.9% secure transaction process.",
      skills: ["HTML", "CSS", "Javascript", "React"],
      link: "#"
    },
    
    {
      title: "ML Lead",
      company: "HackSlash Developers Community",
      duration: "Aug 2023 - July 2024",
      description: "Led the ML team consisting of 13+ members, organized introductory sessions for 130+ students at NIT Patna. Organized ByteVerse Hackathon with 2000+ participants (57% growth) and conducted 30+ bootcamps. Partnered with GDG Patna, Postman, Devfolio, and PW Skills for key events, overseeing the successful completion of 5-6 projects.",
      skills: ["GitHub", "Postman", "Project Management", "Community Building"],
      link: "#"
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">My professional journey</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <a 
                    href={exp.link} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="External link"
                  >
                    {/* <ExternalLink className="w-4 h-4" /> */}
                  </a>
                </div>
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <span>{exp.company}</span>
                </CardDescription>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  <span>{exp.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
