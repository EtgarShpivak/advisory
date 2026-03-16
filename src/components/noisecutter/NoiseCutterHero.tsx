import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/advisory-hero.jpg";

const verticals = [
  "Vertical SaaS",
  "eCommerce",
  "B2C / D2C",
  "Fintech / InsurTech / RegTech",
  "AdTech / MarTech",
];

const NoiseCutterHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden" style={{ background: "#0b0e14" }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,14,20,0.9) 40%, rgba(11,14,20,0.6) 100%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="tracking-[0.25em] font-semibold text-sm md:text-base mb-3" style={{ color: "#c8a96e" }}>
            ETGAR SHPIVAK
          </p>
          <p className="text-sm mb-5" style={{ color: "#a0a8b8" }}>
            Go-To-Market & Marketing Advisor for Startups
          </p>

          {/* Vertical tags */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {verticals.map((v) => (
              <span
                key={v}
                className="px-3 py-1 text-[13px] font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#a0a8b8",
                  borderRadius: "6px",
                }}
              >
                {v}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5" }}>
            The Noise Cutter.{" "}
            <span style={{ color: "#c8a96e" }}>Weekly Go-To-Market & Marketing Advisory</span>{" "}
            for Seed & Series A Startups.
          </h1>

          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "#a0a8b8" }}>
            Most founders don't have a strategy problem. They have too many answers and not enough clarity. Stop optimizing everything. Start doubling down on what works.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="font-bold rounded-full text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "#c8a96e",
                color: "#0a0a0f",
                padding: "14px 40px",
                fontSize: "16px",
              }}
              onClick={() => document.getElementById("advisory-contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Free Discovery Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent font-semibold px-8 py-5 rounded-full text-sm transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: "#3a3f4a", color: "#e5e7eb" }}
              onClick={() => document.getElementById("advisory-about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>

          {/* Micro-copy */}
          <p className="mt-4 text-xs" style={{ color: "#6b7280" }}>
            30 minutes. No pitch. No fluff. Just a confident conversation about your real challenges.
          </p>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("advisory-about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" style={{ color: "#6b7280" }} />
      </button>

      <style>{`
        @keyframes ctaGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </section>
  );
};

export default NoiseCutterHero;
