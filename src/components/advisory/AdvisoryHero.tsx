import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/advisory-hero.jpg";

const verticals = ["Vertical SaaS", "eCommerce", "B2C / D2C", "Fintech", "AdTech / MarTech"];

const AdvisoryHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0d13]">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.3)",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d13]/95 via-[#0a0d13]/80 to-[#0a0d13]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d13] via-transparent to-[#0a0d13]/60" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96e]/40 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-[#c8a96e]/60" />
            <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">
              Etgar Shpivak
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] mb-6 tracking-[-0.02em]" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[#f0ede8]">Too much noise.</span>
            <br />
            <span className="text-[#f0ede8]/50">Not enough growth.</span>
            <br />
            <span className="text-[#c8a96e]">Let's fix that.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#8b919e] leading-relaxed mb-8 max-w-lg">
            Weekly Go-To-Market advisory for startup founders who need decisions, not meetings.
          </p>

          {/* Vertical tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {verticals.map((v) => (
              <span
                key={v}
                className="px-3 py-1.5 text-[12px] font-medium tracking-wide text-[#6b7280] border border-white/[0.06] rounded-full bg-white/[0.03]"
              >
                {v}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group px-8 py-4 bg-[#c8a96e] text-[#0a0d13] font-semibold text-[15px] rounded-full transition-all duration-300 hover:bg-[#d4b87a] hover:shadow-[0_0_40px_rgba(200,169,110,0.25)]"
              onClick={() => document.getElementById("advisory-contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Free Discovery Call
            </button>
            <button
              className="px-8 py-4 text-[#8b919e] font-medium text-[15px] rounded-full border border-white/[0.08] transition-all duration-300 hover:border-white/20 hover:text-[#c0c5cf]"
              onClick={() => document.getElementById("advisory-about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </button>
          </div>

          {/* Micro-copy */}
          <p className="mt-5 text-[13px] text-[#4b5157]">
            30 min. No pitch. Just your real challenges.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("advisory-problem")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4b5157] hover:text-[#8b919e] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

export default AdvisoryHero;
