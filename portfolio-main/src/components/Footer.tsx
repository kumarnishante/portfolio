
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-8 border-t border-border relative">
    <div className="section-container">
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} Kumar Nishant. All rights reserved.
          </p>
        </div>
  
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
