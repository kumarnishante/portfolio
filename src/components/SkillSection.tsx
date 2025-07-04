
import { 
  Code, 
  FileType2, 
  Smartphone, 
  Boxes, 
  Palette, 
  Server, 
  Database, 
  Cog, 
  BarChart3, 
  Cloud,
  Github,
  Terminal,
  MonitorSmartphone,
  Monitor,
  Wrench
} from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const SkillSection = () => {
  const skills = [
    {
      category: "Data Structures",
      icon: <Server className="h-5 w-5 text-primary" />,
      description: "Technologies for server-side application logic and data management",
      items: [
        { 
          name: "Arrays", 
          icon: <Server className="h-6 w-6 text-green-600" />,
          description: ""
        },
        { 
          name: "Linked Lists", 
          icon: <Server className="h-6 w-6 text-gray-500" />,
          description: ""
        },
        { 
          name: "Stacks", 
          icon: <Database className="h-6 w-6 text-green-500" />,
          description: "NoSQL document database"
        },
        { 
          name: "Queues", 
          icon: <Database className="h-6 w-6 text-blue-600" />,
          description: ""
        },
        { 
          name: "Trees", 
          icon: <Code className="h-6 w-6 text-indigo-500" />,
          description: ""
        },
        { 
          name: "Graphs", 
          icon: <Boxes className="h-6 w-6 text-blue-500" />,
          description: ""
        }
      ],
    },
    {
      category: "Frontend",
      icon: <Monitor className="h-5 w-5 text-primary" />,
      description: "Technologies for building user interfaces and client-side applications",
      items: [
        { 
          name: "JavaScript", 
          icon: <FileType2 className="h-6 w-6 text-yellow-500" />,
          description: "Core language for web development"
        },
        { 
          name: "TypeScript", 
          icon: <FileType2 className="h-6 w-6 text-blue-500" />,
          description: "Typed superset of JavaScript"
        },
        { 
          name: "React-Native", 
          icon: <Smartphone className="h-6 w-6 text-sky-500" />,
          description: "Framework for building native mobile apps"
        },
        { 
          name: "React.Js", 
          icon: <Boxes className="h-6 w-6 text-blue-400" />,
          description: "Library for building user interfaces"
        },
        // { 
        //   name: "Next.Js", 
        //   icon: <Boxes className="h-6 w-6 text-black dark:text-white" />,
        //   description: "React framework for production"
        // },
        { 
          name: "Tailwind CSS", 
          icon: <Palette className="h-6 w-6 text-cyan-500" />,
          description: "Utility-first CSS framework"
        },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5 text-primary" />,
      description: "Technologies for server-side application logic and data management",
      items: [
        { 
          name: "Node.Js", 
          icon: <Server className="h-6 w-6 text-green-600" />,
          description: "JavaScript runtime for server-side execution"
        },
        { 
          name: "Express.Js", 
          icon: <Server className="h-6 w-6 text-gray-500" />,
          description: "Web application framework for Node.js"
        },
        { 
          name: "MongoDB", 
          icon: <Database className="h-6 w-6 text-green-500" />,
          description: "NoSQL document database"
        },
        { 
          name: "SQL", 
          icon: <Database className="h-6 w-6 text-blue-600" />,
          description: "Structured Query Language for relational databases"
        },
        { 
          name: "RESTful APIs", 
          icon: <Code className="h-6 w-6 text-indigo-500" />,
          description: "Architecture for networked applications"
        },
        // { 
        //   name: "Docker", 
        //   icon: <Boxes className="h-6 w-6 text-blue-500" />,
        //   description: "Platform for developing and deploying applications"
        // }
      ],
    },
    
    {
      category: "Tools & Others",
      icon: <Wrench className="h-5 w-5 text-primary" />,
      description: "Development tools and additional technologies",
      items: [
        // { 
        //   name: "AWS", 
        //   icon: <Cloud className="h-6 w-6 text-orange-500" />,
        //   description: "Cloud computing platform"
        // },
        { 
          name: "Git", 
          icon: <Code className="h-6 w-6 text-orange-600" />,
          description: "Version control system"
        },
        { 
          name: "GitHub", 
          icon: <Github className="h-6 w-6 text-violet-600" />,
          description: "Platform for version control and collaboration"
        },
        { 
          name: "VS Code", 
          icon: <Terminal className="h-6 w-6 text-blue-600" />,
          description: "Source code editor"
        },
        // { 
        //   name: "Jira", 
        //   icon: <Cog className="h-6 w-6 text-blue-500" />,
        //   description: "Issue tracking and project management tool"
        // },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>
        
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {skills.map((skillGroup, groupIndex) => (
              <Card 
                key={groupIndex} 
                className="bg-card rounded-xl border border-border/80 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/80 hover:scale-[1.02] animate-slide-in-bottom"
                style={{ animationDelay: `${groupIndex * 0.2}s` }}
              >
                <CardHeader className="pb-2 pt-6">
                  <CardTitle className="text-xl font-semibold flex items-center justify-center gap-2">
                    {skillGroup.icon}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-8 py-6">
                  <div className="space-y-5">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <HoverCard key={skillIndex}>
                        <HoverCardTrigger asChild>
                          <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/70 transition-all duration-100 cursor-pointer">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex-shrink-0 p-1">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                            <div className="text-base font-medium">{skill.name}</div>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 p-4">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">{skill.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>
        
        <div className="mt-24 max-w-4xl mx-auto">
          <Card className="bg-card rounded-xl border border-border/40 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/80 hover:scale-[1.02] animate-slide-in-bottom">
            <CardHeader className="pb-2 pt-6">
              <CardTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
                {/* <Wrench className="h-5 w-5 text-primary" /> */}
                {/* Other Skills & Areas of Expertise */}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6 px-8 py-6">
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  // "Microservices Architecture",
                  // "Kubernetes",
                  // "Database Optimization",
                  // "Redis & Caching",
                  // "Authentication & Authorization",
                  // "Security Best Practices",
                  // "Load Balancing",
                  // "Message Queues (RabbitMQ/Kafka)",
                  // "ORMs (Sequelize, Mongoose)",
                  // "Unit & Integration Testing",
                  // "Error Handling & Logging",
                  // "WebSockets",
                  // "GraphQL",
                  // "CI/CD Pipelines",
                  // "API Documentation (Swagger)",
                  // "Cloud Infrastructure",
                ].map((item, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary/80 px-4 py-2 rounded-full text-secondary-foreground text-sm font-medium transition-all duration-300 hover:bg-secondary animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
