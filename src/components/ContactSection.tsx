import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://hook.eu2.make.com/fxekjjkmu9ktxrpv2u9gb6c9n8x5iqys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "shpivak.co.il",
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within 24 hours.",
        });
        
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/972546628825", "_blank");
  };

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to bridge the gap between business strategy and marketing execution? 
              Let's discuss how I can help your startup grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <Card className="gradient-card shadow-elevated border-0 slide-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 bg-background border-border focus:border-primary"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 bg-background border-border focus:border-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-foreground font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 bg-background border-border focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 bg-background border-border focus:border-primary min-h-[120px]"
                      placeholder="Tell me about your startup and how I can help..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white font-semibold py-3 rounded-full transition-bounce hover-lift"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp & Contact Info */}
            <div className="slide-up">
              <Card className="gradient-card shadow-elevated border-0 mb-6">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get instant responses and quick consultation via WhatsApp. 
                    Perfect for urgent questions or quick discussions.
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-bounce hover-lift"
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Contact Info */}
              <div className="text-center text-white space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Response Time</h4>
                  <p className="text-blue-100">Within 24 hours for all inquiries</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Consultation</h4>
                  <p className="text-blue-100">Free 30-minute strategy call for qualified startups</p>
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