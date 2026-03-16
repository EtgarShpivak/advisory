import { useRef, useState, useEffect } from "react";
import { Check, X } from "lucide-react";

const forYou = [
  "Seed or Series A, bootstrapped or funded",
  "B2B SaaS, eCommerce, Fintech, or similar",
  "Already talking to customers",
  "You want direct feedback, no sugarcoating",
];

const notForYou = [
  "No real customers yet",
  "Looking for validation, not direction",
  "Want polished decks and soft feedback",
];

const AdvisoryProof = () => {
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
      className="py-24 md:py-32 bg-[#fafaf9] relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e5e2dc] to-transparent" />

      <div className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-[#c8a96e]" />
            <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">Is This For You</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* For you */}
            <div className="rounded-2xl p-7 bg-white border border-[#f0ede8]">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-emerald-50">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <h3 className="text-[13px] tracking-[0.15em] font-bold uppercase text-[#1a1a1a]">This is for you if</h3>
              </div>
              <ul className="space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2.5 shrink-0 bg-emerald-400" />
                    <span className="text-[15px] leading-relaxed text-[#52525b]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div className="rounded-2xl p-7 bg-white border border-[#f0ede8]">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-50">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <h3 className="text-[13px] tracking-[0.15em] font-bold uppercase text-[#9ca3af]">Not for you if</h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full mt-2.5 shrink-0 bg-[#d4d4d8]" />
                    <span className="text-[15px] leading-relaxed text-[#9ca3af]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryProof;
