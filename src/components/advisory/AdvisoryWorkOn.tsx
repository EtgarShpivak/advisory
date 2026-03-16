import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    category: "Hidden Opportunities",
    situation: "We're running. Nothing's compounding.",
    what: "I find what's already working — the segment nobody's scaling, the channel quietly profitable.",
    output: "FOUND: Profitable segment — never targeted\nFOUND: Top-converting message — never scaled\nRESULT: Same budget. Better numbers.",
  },
  {
    category: "Campaign Analysis",
    situation: "Campaigns are running. Nothing converts.",
    what: "Line by line — creative, audience, offer, landing page. You leave with a kill/fix/scale list.",
    output: "MEASURED: CRM pipeline to Meta & Google via Offline Conversions\nSHIFTED: Optimization leads → qualified opportunities\nRESULT: CPL flat. SQL rate up 40%",
  },
  {
    category: "Homepage Messaging",
    situation: "The homepage explains us. Nobody cares.",
    what: "We find the real value prop and rewrite headline, subhead, and CTA. Live, together.",
    output: 'BEFORE: "The all-in-one platform for service teams"\nAFTER: "Your team closes tickets faster."\nCTA: "Get started" → "See a 3-min demo"',
  },
  {
    category: "GTM Planning",
    situation: "Launching next month. Plan is vague.",
    what: "Positioning, sequencing, channels. 30-day milestones. Who does what.",
    output: "Wk 1: ICP list — 50 named accounts\nWk 2: Cold outbound live\nWk 3: First 5 discovery calls\nWk 4: Retro + iterate on data",
  },
  {
    category: "Budget Allocation",
    situation: "€8K/mo and three channels want more.",
    what: "Based on your stage and data — you leave knowing exactly where the money goes and why.",
    output: "SEPARATED: Brand vs. performance\nMEASURED: Incremental ROAS, not platform-reported\nFOUND: ~35% conversions were brand searches\nREALLOCATED: To real incremental channels",
  },
  {
    category: "ICP Definition",
    situation: "Selling to everyone. Converting no one.",
    what: "We get specific. Until your ICP is a person, not a category.",
    output: "MAPPED: ~50K addressable accounts globally\nSWITCHED: Lead-gen → thought leadership at scale\nRESULT: Inbound leads arrived organically",
  },
  {
    category: "Landing Page CRO",
    situation: "Getting traffic. Page isn't working.",
    what: "We go through the page like a skeptical visitor. I tell you what to fix first.",
    output: 'Fix 1: Social proof above the fold\nFix 2: Remove 3 form fields\nFix 3: CTA → "See a 3-min demo"\nResult: Conversion rate up 2.1x',
  },
];

const AdvisoryWorkOn = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -el.clientWidth * 0.8 : el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e5e2dc] to-transparent" />

      <div className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#c8a96e]" />
            <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">What We Work On</p>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-4 text-[#1a1a1a] tracking-[-0.01em]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Real sessions. Real output.
          </h2>
          <p className="text-[17px] text-[#71717a] leading-relaxed">
            Every session ends with something you can use. Not a framework.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        {[{ dir: "left" as const, can: canScrollLeft, pos: "left-4 md:left-8" }, { dir: "right" as const, can: canScrollRight, pos: "right-4 md:right-8" }].map(({ dir, can, pos }) => (
          <button
            key={dir}
            onClick={() => scroll(dir)}
            className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#e5e2dc] shadow-sm text-[#c8a96e] transition-all duration-300 ${can ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label={`Scroll ${dir}`}
          >
            {dir === "left" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        ))}

        <style>{`.workon-scroll::-webkit-scrollbar { display: none; }`}</style>

        <div
          ref={scrollRef}
          className="workon-scroll flex gap-5 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="shrink-0 w-[82vw] sm:w-[360px] md:w-[380px] rounded-2xl flex flex-col snap-start group transition-all duration-300 overflow-hidden border border-[#f0ede8] hover:border-[#c8a96e]/20 hover:shadow-md"
              style={{ minHeight: "460px" }}
            >
              {/* Top section - light */}
              <div className="p-7 flex-1 flex flex-col bg-[#fafaf9]">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase mb-3 text-[#c8a96e]">
                  {card.category}
                </p>
                <p className="text-lg font-bold leading-snug mb-3 text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{card.situation}"
                </p>
                <p className="text-[14px] leading-relaxed text-[#71717a] flex-1">
                  {card.what}
                </p>
              </div>

              {/* Bottom section - dark */}
              <div className="p-6 bg-[#0a0d13]">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2 text-[#c8a96e]/80">
                  Session Output
                </p>
                <div className="flex flex-col gap-0.5">
                  {card.output.split("\n").map((line, j) => (
                    <p key={j} className="text-[13px] leading-[1.6] text-[#8b919e] font-mono">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryWorkOn;
