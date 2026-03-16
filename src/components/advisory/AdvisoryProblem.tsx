import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const steps = [
  { num: "01", label: "PREP", who: "Me", text: "I review everything before we meet. No cold starts." },
  { num: "02", label: "SESSION", who: "Us", text: "60 min. We make decisions, not conversation." },
  { num: "03", label: "EXECUTE", who: "You", text: "A prioritized task list. Reviewed next session." },
];

const AdvisoryProblem = () => {
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

  return (
    <section
      ref={ref}
      id="advisory-problem"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e5e2dc] to-transparent" />

      <div className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-4xl mx-auto">
          {/* Problem */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#c8a96e]" />
              <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">The Problem</p>
            </div>

            <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.15] mb-8 text-[#1a1a1a] tracking-[-0.01em]" style={{ fontFamily: "'Playfair Display', serif" }}>
              You don't have a strategy problem.
              <span className="text-[#9ca3af]"> You have too many answers and not enough clarity.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-3">
              {["Executing but the needle isn't moving", "GTM plan exists. Nobody follows it", "Every week is a new fire drill"].map((p, i) => (
                <div
                  key={i}
                  className={`flex-1 px-5 py-4 rounded-xl bg-[#fafaf9] border border-[#f0ede8] text-[15px] text-[#52525b] font-medium leading-snug transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#c8a96e]" />
              <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">The Solution</p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#1a1a1a]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Real decisions. Not another meeting.
            </h3>
            <p className="text-[17px] text-[#52525b] mb-10 max-w-xl leading-relaxed">
              Stop optimizing everything. Double down on what works.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {steps.map((step, i) => (
                <div key={step.label} className="relative">
                  <div
                    className={`rounded-2xl p-6 h-full bg-[#fafaf9] border border-[#f0ede8] transition-all duration-700 hover:border-[#c8a96e]/30 hover:shadow-sm ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${(i + 3) * 120}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[32px] font-light text-[#c8a96e]/30">{step.num}</span>
                      <span className="text-[11px] tracking-[0.15em] font-semibold text-[#9ca3af] uppercase">{step.who}</span>
                    </div>
                    <p className="text-[13px] tracking-[0.15em] font-bold text-[#c8a96e] uppercase mb-2">{step.label}</p>
                    <p className="text-[15px] leading-relaxed text-[#52525b]">{step.text}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#c8a96e]/40 absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom callout */}
            <div className="mt-8 px-6 py-4 rounded-xl bg-[#0a0d13] text-center">
              <p className="text-[15px] font-semibold text-[#f0ede8]">
                Your one hour is the output of my preparation — not the other way around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryProblem;
