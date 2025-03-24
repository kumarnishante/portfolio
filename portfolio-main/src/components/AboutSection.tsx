import { useState } from 'react';
import { FileDown, GraduationCap, BookOpen,PhoneCall } from 'lucide-react';
import { toast } from 'sonner';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">Get to know me better</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1 animate-fade-in">
          <p className="text-lg">
            I'm a passionate software developer skilled in building scalable web and mobile applications, with a strong focus on writing clean, efficient code and delivering intuitive user experiences. I have hands-on experience with AWS, JavaScript, TypeScript, Node.js, React, React Native, and various backend technologies.
          </p>

          <p className="text-lg">
            I’ve contributed to diverse projects, includinng secure storage systems on blockchain, optimized parking algorithms, and high-traffic APIs. As a community leader and placement coordinator, I’ve also led hackathons and collaborated with industry leaders. I'm always eager to explore new technologies and take on challenging projects.
          </p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                 <span>B.Tech, NIT Patna</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Computer Science & Engineering</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span>Coffee Enthusiast</span>
                </div> */}
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="btn-outline inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in">
              <div className="aspect-[4/5]">
                <img 
                  src="/assets/profile.jpeg" 
                  alt="John Doe" 
                  className="object-cover w-full h-full brightness-90 hover:brightness-100 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-primary/10 transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
