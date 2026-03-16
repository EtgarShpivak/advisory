import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageSquare, Check, ExternalLink } from "lucide-react";

const included = [
  "Weekly 60-min session — prepared in advance, focused on decisions",
  "Pre-session deep dive — I review your data before we meet",
  "Clear action list after every session",
  "No long-term commitment — cancel anytime",
];

const AdvisoryContact = () => {
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
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString(), source: "shpivak.co.il/advisory" }),
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
      className="relative overflow-hidden"
    >
      {/* Pricing Section - Dark */}
      <div className="bg-[#0a0d13] py-24 md:py-28 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />

        <div className={`container mx-auto px-6 md:px-12 relative z-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-[#c8a96e]/60" />
              <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">The Offer</p>
              <div className="h-[1px] w-8 bg-[#c8a96e]/60" />
            </div>

            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-bold text-[#f0ede8] tracking-tight">$2,500</span>
              <span className="text-lg text-[#6b7280] font-normal ml-1">/month</span>
            </div>

            <div className="max-w-md mx-auto mb-10">
              <ul className="space-y-3 text-left">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#c8a96e]/10">
                      <Check className="w-3 h-3 text-[#c8a96e]" />
                    </div>
                    <span className="text-[15px] leading-relaxed text-[#8b919e]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[14px] text-[#4b5157] max-w-sm mx-auto leading-relaxed">
              Between sessions, I'm reachable for critical decisions. First session finds the gaps — every session after builds momentum.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Light */}
      <div className="bg-[#fafaf9] py-24 md:py-28">
        <div className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-3 text-[#1a1a1a] tracking-[-0.01em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's talk.
              </h2>
              <p className="text-[17px] text-[#71717a] max-w-md mx-auto">
                30 minutes. No pitch. Just whether this makes sense for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="adv-name" className="text-[12px] font-semibold mb-2 block text-[#52525b] tracking-wide uppercase">Name *</Label>
                  <Input id="adv-name" name="name" value={formData.name} onChange={handleChange}
                    className="bg-white border-[#e5e2dc] rounded-xl px-4 py-3 h-12 focus:ring-1 focus:ring-[#c8a96e]/30 focus:border-[#c8a96e]/50 text-[#1a1a1a] placeholder:text-[#c0c0c0] transition-colors"
                    placeholder="Your full name" required />
                </div>
                <div>
                  <Label htmlFor="adv-email" className="text-[12px] font-semibold mb-2 block text-[#52525b] tracking-wide uppercase">Email *</Label>
                  <Input id="adv-email" name="email" type="email" value={formData.email} onChange={handleChange}
                    className="bg-white border-[#e5e2dc] rounded-xl px-4 py-3 h-12 focus:ring-1 focus:ring-[#c8a96e]/30 focus:border-[#c8a96e]/50 text-[#1a1a1a] placeholder:text-[#c0c0c0] transition-colors"
                    placeholder="your@email.com" required />
                </div>
                <div>
                  <Label htmlFor="adv-company" className="text-[12px] font-semibold mb-2 block text-[#52525b] tracking-wide uppercase">Company</Label>
                  <Input id="adv-company" name="company" value={formData.company} onChange={handleChange}
                    className="bg-white border-[#e5e2dc] rounded-xl px-4 py-3 h-12 focus:ring-1 focus:ring-[#c8a96e]/30 focus:border-[#c8a96e]/50 text-[#1a1a1a] placeholder:text-[#c0c0c0] transition-colors"
                    placeholder="Your company name" />
                </div>
                <div>
                  <Label htmlFor="adv-message" className="text-[12px] font-semibold mb-2 block text-[#52525b] tracking-wide uppercase">Message *</Label>
                  <Textarea id="adv-message" name="message" value={formData.message} onChange={handleChange}
                    className="bg-white border-[#e5e2dc] rounded-xl px-4 py-3 focus:ring-1 focus:ring-[#c8a96e]/30 focus:border-[#c8a96e]/50 min-h-[100px] text-[#1a1a1a] placeholder:text-[#c0c0c0] transition-colors"
                    placeholder="Tell me about your startup..." required />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0a0d13] text-white font-semibold text-[15px] rounded-full transition-all duration-300 hover:bg-[#1a1f2e] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Book a Free Discovery Call"}
                </button>
              </form>

              <div className="flex flex-col justify-center items-center text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-emerald-50">
                  <MessageSquare className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1a1a1a]">Prefer WhatsApp?</h3>
                <p className="mb-6 text-[15px] text-[#71717a] max-w-xs leading-relaxed">
                  Perfect for a fast intro.
                </p>
                <button
                  className="px-8 py-3.5 bg-[#16a34a] text-white font-semibold text-[15px] rounded-full transition-all duration-300 hover:bg-[#15803d]"
                  onClick={() => window.open("https://wa.me/972546628825", "_blank")}
                >
                  Chat on WhatsApp
                </button>
                <a
                  href="https://www.linkedin.com/in/etgar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-[13px] font-semibold text-[#c8a96e] hover:text-[#b8954e] transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Podcast */}
      <div className="bg-white py-16 border-t border-[#f0ede8]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-[15px] text-[#71717a] mb-2">
            Weekly podcast on founders & marketing
          </p>
          <a
            href="https://open.spotify.com/show/6vBCY3fsfJu41nq5LQNsDe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#c8a96e] hover:text-[#b8954e] transition-colors"
          >
            Founders' Marketing Compass on Spotify
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryContact;
