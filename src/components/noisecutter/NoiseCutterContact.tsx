import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageSquare, Check, ExternalLink, RefreshCw } from "lucide-react";

const included = [
  "Weekly 60-minute advisory session (prepared, not improvised)",
  "Pre-session review of your campaigns, data, and materials",
  "Prioritized action list after every session",
  "Async availability between sessions for quick decisions",
  "No long-term commitment — cancel anytime",
];

const NoiseCutterContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://hook.eu2.make.com/fxekjjkmu9ktxrpv2u9gb6c9n8x5iqys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString(), source: "shpivak.co.il/thenoisecutter" }),
      });
      if (response.ok) {
        toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else throw new Error("Failed");
    } catch {
      toast({ title: "Failed to send message", description: "Please try again or contact me via WhatsApp.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="advisory-contact"
      className={`py-6 md:py-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ background: "#f4f5f7" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Standalone line above the offer */}
          <div className="text-center mb-10">
            <p className="text-lg md:text-xl font-medium italic leading-relaxed" style={{ color: "#374151", fontFamily: "'Playfair Display', serif" }}>
              Before we add anything — let's find what's already there.
            </p>
          </div>

          {/* Pricing */}
          <div className="text-center mb-10">
            <p className="tracking-[0.25em] font-semibold text-xs mb-4" style={{ color: "#b8954e" }}>THE OFFER</p>
            <div className="text-5xl md:text-6xl font-extrabold mb-2" style={{ color: "#111827" }}>
              $2,500<span className="text-xl font-normal" style={{ color: "#6b7280" }}> /month</span>
            </div>
          </div>

          {/* What's included */}
          <div className="max-w-lg mx-auto mb-8">
            <p className="tracking-[0.15em] font-bold text-xs mb-4 text-center" style={{ color: "#b8954e" }}>
              WHAT'S INCLUDED
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(22,163,74,0.1)" }}>
                    <Check className="w-3 h-3" style={{ color: "#16a34a" }} />
                  </div>
                  <span className="text-base leading-[1.65]" style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow-up emphasis */}
          <div className="max-w-lg mx-auto mb-8 rounded-xl p-6" style={{ background: "#fff", border: "1px solid #e5e7eb" }}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(184,149,78,0.1)" }}>
                <RefreshCw className="w-4 h-4" style={{ color: "#b8954e" }} />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1" style={{ color: "#111827" }}>
                  This isn't a one-off. It's a working relationship.
                </h4>
                <p className="text-sm leading-[1.7]" style={{ color: "#4b5563" }}>
                  The first session sets direction. The follow-ups are where the real momentum happens — reviewing results, adjusting strategy, and making sure execution stays on track week after week.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-14">
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
              Built for Seed and Series A founders in:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Vertical SaaS", "eCommerce", "B2C / D2C", "Fintech / InsurTech / RegTech", "AdTech / MarTech"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-md"
                  style={{ background: "rgba(184,149,78,0.08)", color: "#8a7340" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#111827" }}>
              Let's talk.
            </h2>
            <p className="text-base max-w-md mx-auto leading-[1.7]" style={{ color: "#4b5563" }}>
              30 minutes. No pitch. Just a direct conversation about whether this makes sense for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nc-name" className="text-xs font-semibold mb-1.5 block" style={{ color: "#374151" }}>Name *</Label>
                <Input id="nc-name" name="name" value={formData.name} onChange={handleChange}
                  className="bg-white border-gray-300 rounded-lg px-4 py-3 h-11 focus:ring-1 text-gray-900 placeholder:text-gray-400"
                  placeholder="Your full name" required />
              </div>
              <div>
                <Label htmlFor="nc-email" className="text-xs font-semibold mb-1.5 block" style={{ color: "#374151" }}>Email *</Label>
                <Input id="nc-email" name="email" type="email" value={formData.email} onChange={handleChange}
                  className="bg-white border-gray-300 rounded-lg px-4 py-3 h-11 focus:ring-1 text-gray-900 placeholder:text-gray-400"
                  placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="nc-company" className="text-xs font-semibold mb-1.5 block" style={{ color: "#374151" }}>Company</Label>
                <Input id="nc-company" name="company" value={formData.company} onChange={handleChange}
                  className="bg-white border-gray-300 rounded-lg px-4 py-3 h-11 focus:ring-1 text-gray-900 placeholder:text-gray-400"
                  placeholder="Your company name" />
              </div>
              <div>
                <Label htmlFor="nc-message" className="text-xs font-semibold mb-1.5 block" style={{ color: "#374151" }}>Message *</Label>
                <Textarea id="nc-message" name="message" value={formData.message} onChange={handleChange}
                  className="bg-white border-gray-300 rounded-lg px-4 py-3 focus:ring-1 min-h-[100px] text-gray-900 placeholder:text-gray-400"
                  placeholder="Tell me about your startup..." required />
              </div>
              <Button type="submit" disabled={isSubmitting}
                className="w-full font-bold py-5 rounded-full text-sm transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
                style={{ background: "#111827", color: "#fff", padding: "14px 40px", fontSize: "16px" }}>
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Book a Free Discovery Call"}
              </Button>
            </form>

            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(22,163,74,0.08)" }}>
                <MessageSquare className="w-6 h-6" style={{ color: "#16a34a" }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#111827" }}>Prefer WhatsApp?</h3>
              <p className="mb-5 text-base max-w-xs leading-[1.7]" style={{ color: "#4b5563" }}>
                Quick response. Perfect for a fast intro.
              </p>
              <Button
                className="font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105"
                style={{ background: "#16a34a", color: "#fff" }}
                onClick={() => window.open("https://wa.me/972546628825", "_blank")}>
                Chat on WhatsApp
              </Button>
              <div className="mt-6 text-xs">
                <a href="https://www.linkedin.com/in/etgar/" target="_blank" rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:underline font-semibold" style={{ color: "#b8954e" }}>
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>

          {/* Podcast Section */}
          <div className="mt-20 text-center">
            <h3 className="text-xl md:text-2xl font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#111827" }}>
              Thinking about how founders manage marketing?
            </h3>
            <p className="text-base mb-3" style={{ color: "#6b7280" }}>
              I explore exactly that every week on Founders' Marketing Compass.
            </p>
            <a
              href="https://open.spotify.com/show/6vBCY3fsfJu41nq5LQNsDe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-bold hover:underline"
              style={{ color: "#b8954e" }}
            >
              Listen on Spotify →
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoiseCutterContact;
