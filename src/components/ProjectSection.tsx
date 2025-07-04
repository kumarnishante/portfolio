
import { Github, ExternalLink } from 'lucide-react';

const ProjectSection = () => {
  const projects = [
    {
      title: "Appointment Scheduling API",
      description: "Developed a RESTful API to manage appointment scheduling operations with a focus on scalability and security. Implemented data validation using Zod to ensure integrity and prevent conflicts, including a 20-minute buffer to avoid overlaps.",
      image: "/assets/appointment.png",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Docker", "Zod", "Swagger", "Winston"],
      github: "https://github.com/kumarnishante/portfolio/tree/main",
      demo: "https://github.com/kumarnishante/portfolio/tree/main",
    },
    {
      title: "Attention-based Efficient CNN-GRU Architecture for Human Action Recognition",
      description: "My project focuses on attention-based human activity recognition, utilizing deep learning to enhance accuracy by prioritizing relevant features in sequential data for improved classification and analysis.",
      image: "/assets/HIR.png",
      tags: ["CNN", "Bi-GRU", "Numpy", "Tensorflow",],
      github: "#",
      demo: "https://colab.research.google.com/drive/1Ph3rW5Lvp5nH-Jcfpn9qiSjzYgiCuq2u?usp=sharing#scrollTo=uo3C8a-DyxQA",
    },
    {
      title: "Email Authentication API",
      description: "Developed a secure email authentication API where users can sign up, sign in, and reset passwords. Integrated OTP-based verification for successful sign-up. Ensured protection against common web vulnerabilities, optimized response times, and safeguarded against malicious payloads. Handled graceful server shutdown to prevent data corruption and ensure system stability.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express.js", "MySQL", "Postman"],
      github: "#",
      demo: "#",
    },
    // {
    //   title: "Blockchain-Based EHR Management",
    //   description: "A secure and efficient system for storing electronic health records and managing billing on a permissioned blockchain. Enabled doctors to securely add prescriptions and bills to patient accounts, ensuring data integrity and privacy.",
    //   image: "/assets/blockchain.png",
    //   tags: ["Solidity", "Ether.js", "IPFS", "Hardhat", "Metamask", "Next.js", "Styled Components"],
    //   github: "#",
    //   demo: "#",
    // },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-end gap-3 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a 
                        href={project.github} 
                        className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors duration-300"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.demo} 
                        className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors duration-300"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
