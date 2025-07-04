
import { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Github, Twitter, Instagram, MessageCircle} from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_r50hjhb';
    const templateId = 'template_w2iiphe';
    const publicKey = 'czEoO2_dpfPF5AmqJ';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (response.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 order-2 lg:order-1 animate-fade-in">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="kumarnishant@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  placeholder="Hi there, I would like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:john@example.com" className="hover:text-primary transition-colors">
                        krnishantcse@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                        +91 7372882301
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-12">
                <h3 className="text-xl font-semibold">Follow Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/kumarnishante"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label="GitHub profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kumarnishante/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/kumarnishante/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label="Instagram profile"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/917372882301?text=Hi%20Kumar!%20I%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label="WhatsApp profile"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
