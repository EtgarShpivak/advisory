import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-white blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center fade-in relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/e2761060-d09c-4f05-bade-17ae76a86fd9.png" 
                alt="Etgar Shpivak" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-elevated border-4 border-white/20"
              />
              <div className="absolute inset-0 rounded-full shadow-glow"></div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-300">Etgar Shpivak</span>
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 font-medium">
            Executive Coach & fCMO for Early-Stage Startups
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-blue-50">
            I help founders bridge the gap between business needs of CEOs, boards, and investors 
            and strategic & operational marketing activities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-bounce hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-full transition-bounce"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform cursor-pointer"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8 text-white/60" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;