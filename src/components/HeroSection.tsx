import { useState } from 'react';
import { ArrowRight, Loader2, FileDown} from 'lucide-react';
import { toast } from 'sonner';

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = async () => {
    setIsDownloading(true);

    const fileUrl =
      'https://drive.google.com/file/d/1ES9Uepj_pRcF3ZVPvbA5XS0Wzduru5Gg/view?usp=sharing';

    try {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Resume.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setIsDownloading(false);
        // toast.success('✅ Resume download Initiated!');
      }, 3000);
    } catch (error) {
      console.error('Error triggering download:', error);
      toast.error('❌ Unable to download the resume. Please try again later.');
      setIsDownloading(false);
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center space-y-8 lg:space-y-0">
          {/* Developer Info Card - Appears on top in mobile view */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-6 animate-float"></div>
              <div className="relative glass dark:glass-dark rounded-3xl p-8 backdrop-blur-xl shadow-xl">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4 font-mono">
                    <div className="text-primary">
                      <span className="text-muted-foreground">const</span> developer = {'{'}
                    </div>
                    <div className="pl-6">
                      <span className="text-muted-foreground">name:</span>{' '}
                      <span className="text-green-500">'Kumar Nishant'</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-muted-foreground">skills:</span> [
                      <span className="text-amber-500">'TypeScript'</span>,{' '}
                      <span className="text-amber-500">'Node.Js'</span>,{' '}
                      <span className="text-amber-500">'MySQL'</span>,{' '}
                      <span className="text-amber-500">'AWS'</span>],
                    </div>
                    <div className="pl-6">
                      <span className="text-muted-foreground">isAvailable:</span>{' '}
                      <span className="text-blue-500">true</span>
                    </div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text and CTA Section */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Kumar Nishant</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Software Developer</p>
            </div>

            <p className="text-lg">
              I love building elegant, user-friendly applications that simplify complex problems.
              Currently exploring opportunities to apply these skills effectively.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#experience" className="btn-primary flex items-center justify-center gap-2 group">
                Work Experience
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`btn-outline inline-flex items-center justify-center gap-2 group${
                isDownloading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </>
              )}
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
