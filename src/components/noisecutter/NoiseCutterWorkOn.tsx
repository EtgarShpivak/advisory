import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    category: "Hidden Opportunities",
    situation: "We're running. Nothing's compounding.",
    what: "Before adding anything new, I find what's already working — the segment converting at 3x nobody's scaling, the channel quietly profitable, the message buried in a forgotten test.",
    output: "FOUND: Profitable segment — never targeted\nFOUND: Top-converting message — never scaled\nRESULT: Same budget. Better numbers.",
  },
  {
    category: "Campaign Analysis",
    situation: "My campaigns are running. Nothing's converting.",
    what: "We go line by line. Creative, audience, offer, landing page. You leave with a kill/fix/scale list.",
    output: "MEASURED: Connected CRM pipeline to Meta & Google via Offline Conversions\nSHIFTED: Optimization from leads → qualified opportunities\nRESULT: CPL stayed flat. SQL rate up 40%",
  },
  {
    category: "Homepage Messaging",
    situation: "The homepage explains what we do. Nobody cares.",
    what: "We find the real value prop and rewrite the headline, subhead, and CTA. Live, together.",
    output: 'BEFORE: "The all-in-one platform for service teams"\nAFTER: "Your team closes tickets faster."\nCTA: "Get started" → "See a 3-min demo"',
  },
  {
    category: "Go-To-Market Planning",
    situation: "We're launching next month. The plan is vague.",
    what: "Positioning, sequencing, channels. 30-day milestones. Who does what.",
    output: "Week 1: ICP list built — 50 named accounts\nWeek 2: Cold outbound sequence live\nWeek 3: First 5 discovery calls booked\nWeek 4: Retro + iterate based on data",
  },
  {
    category: "Budget Allocation",
    situation: "I have €8K/month and three channels asking for more.",
    what: "Based on your stage and data, you leave knowing exactly where the money goes and why.",
    output: "SEPARATED: Brand vs. performance campaigns\nMEASURED: Incremental ROAS, not platform-reported\nFOUND: ~35% of conversions were brand searches\nREALLOCATED: Budget to real incremental channels",
  },
  {
    category: "ICP Definition",
    situation: "I'm selling to everyone. Converting no one.",
    what: "We get specific. Until your ICP is a person, not a category.",
    output: "MAPPED: ~50,000 addressable accounts globally\nSWITCHED: Lead-gen ads → thought leadership at scale\nRESULT: Inbound leads arrived organically. Prospects knew the brand before the first call",
  },
  {
    category: "Landing Page CRO",
    situation: "I'm getting traffic. The page just isn't working.",
    what: "We go through the page like a skeptical visitor. I tell you what to fix first.",
    output: 'Fix 1: Move social proof above the fold\nFix 2: Remove 3 unnecessary form fields\nFix 3: CTA → "See a 3-min demo"\nResult: Conversion rate up 2.1x in 30 days',
  },
];

const NoiseCutterWorkOn = () => {
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
      className={`py-6 md:py-8 bg-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="tracking-[0.25em] font-semibold text-xs mb-4" style={{ color: "#b8954e" }}>
            WHAT WE ACTUALLY WORK ON
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#111827" }}>
            Real sessions. Real output.
          </h2>
          <p className="text-base md:text-lg leading-[1.7]" style={{ color: "#374151" }}>
            Every session ends with something you can use. Not a framework. Not "food for thought."
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className={`absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          style={{ background: "#fff", color: "#b8954e", border: "1px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          style={{ background: "#fff", color: "#b8954e", border: "1px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          aria-label="Scroll right"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        <style>{`.workon-scroll::-webkit-scrollbar { display: none; }`}</style>

        <div
          ref={scrollRef}
          className="workon-scroll flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] sm:w-[370px] md:w-[390px] rounded-xl p-7 flex flex-col snap-start transition-all duration-300 hover:shadow-md"
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                minHeight: "480px",
              }}
            >
              <p className="text-[13px] font-bold tracking-[0.08em] uppercase mb-3" style={{ color: "#b8954e" }}>
                {card.category}
              </p>
              <p className="text-xl font-bold leading-snug mb-3" style={{ color: "#111827" }}>
                "{card.situation}"
              </p>
              <p className="text-base leading-[1.65] mb-5 flex-1" style={{ color: "#374151" }}>
                {card.what}
              </p>
              <div className="rounded-lg p-4 mt-auto" style={{ background: "#111827" }}>
                <p className="text-[13px] font-bold tracking-[0.08em] uppercase mb-2" style={{ color: "#c8a96e" }}>
                  SESSION OUTPUT:
                </p>
                <div className="flex flex-col gap-1">
                  {card.output.split("\n").map((line, j) => (
                    <p key={j} className="text-[14px] leading-[1.6]" style={{ color: "#d1d5db", fontFamily: "'Courier New', monospace" }}>
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

export default NoiseCutterWorkOn;
