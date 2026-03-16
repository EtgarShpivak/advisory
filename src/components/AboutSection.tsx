import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "20+",
      label: "Years Experience",
    },
    {
      icon: Target,
      number: "$10M+",
      label: "Campaigns Managed",
    },
    {
      icon: Award,
      number: "Top 25",
      label: "PPC Expert (PPCHero)",
    },
    {
      icon: Users,
      number: "2",
      label: "Successful Exits",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  <strong>My unique value:</strong> Thanks to my experience as both an entrepreneur and a seasoned marketer, 
                  I know how to bridge the gap between the business needs of CEOs, boards, and investors and strategic 
                  & operational marketing activities.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  I have successfully worked across all business stages and marketing funnels. With 20+ years of experience, 
                  I've managed multi-million dollar campaigns and built a business from idea to exit.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  I've been recognized as a TOP 25 Most Influential PPC Expert by PPCHero and co-authored a best-selling 
                  book on digital marketing. Today I focus on coaching early-stage startup founders.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My experience includes: One exit as an entrepreneur, one exit as a CMO, and one startup that failed - 
                  which taught me valuable lessons about failure and resilience.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 slide-up">
              {stats.map((stat, index) => (
                <Card key={index} className="gradient-card shadow-card hover-lift border-0">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 gradient-secondary rounded-full">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-2 gradient-primary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;