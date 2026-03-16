import { Card, CardContent } from "@/components/ui/card";
import { Rocket, GraduationCap, BookOpen, Mic } from "lucide-react";

const CredentialsSection = () => {
  const credentials = [
    {
      icon: Rocket,
      title: "Techstars Mentor",
      description: "Global startup accelerator",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Lecturer and head of program",
      description: "Ono Academic College",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: BookOpen,
      title: "Best-Selling Author",
      description: "Marketing in the Digital Era",
      gradient: "from-green-500 to-blue-600",
    },
    {
      icon: Mic,
      title: "Podcast Host",
      description: "Founders' Marketing Compass",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Credentials & Recognition
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized expertise across entrepreneurship, education, and thought leadership
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="gradient-card shadow-card hover-lift border-0 slide-up group">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${credential.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <credential.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {credential.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {credential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;