import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: "Executive Coaching",
      description: "Personal coaching for startup founders on bridging business needs with marketing execution. Build the strategic thinking and leadership skills needed to communicate effectively with boards and investors while driving marketing results.",
      features: [
        "Strategic thinking development",
        "Board communication skills",
        "Marketing leadership",
        "Stakeholder alignment"
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Fractional CMO",
      description: "Hands-on marketing leadership for early-stage startups. From translating business objectives into marketing strategy to execution, I work as your part-time CMO to build scalable growth systems that align with stakeholder expectations.",
      features: [
        "Marketing strategy development",
        "Growth system implementation",
        "Team leadership & mentoring",
        "Performance measurement"
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Compass,
      title: "GTM & Marketing Advisory",
      description: "Weekly 1-on-1 sessions for founders who need a sharp, experienced perspective on their go-to-market and marketing decisions. No fluff. Real output every session.",
      features: [
        "Campaign & channel optimization",
        "Positioning & messaging",
        "Budget allocation",
        "ICP definition & GTM planning"
      ],
      gradient: "from-orange-500 to-yellow-600",
      link: "/advisory",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Services
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for startup founders to bridge business strategy with marketing execution
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card shadow-card hover-lift border-0 slide-up group h-full">
                <CardContent className="p-8">
                  {/* Service Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-foreground">Key Areas:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 gradient-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="text-center">
                    <Button 
                      className="gradient-primary text-white font-semibold px-6 py-2 rounded-full transition-bounce hover-lift"
                      onClick={() => {
                        if (service.link) {
                          navigate(service.link);
                        } else {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {service.link ? "Learn More" : "Learn More"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;