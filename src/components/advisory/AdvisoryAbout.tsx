import { useRef, useState, useEffect } from "react";
import { Rocket, DollarSign, Award } from "lucide-react";
import etgarPhoto from "@/assets/etgar-portrait.jpg";

const credentials = [
  {
    icon: Rocket,
    title: "Built & sold a startup",
    copy: "Co-founded Fixel. Up to 300% revenue growth for clients. Acquired by Logiq (2020). Techstars Atlanta '18, Plug and Play '20.",
  },
  {
    icon: DollarSign,
    title: "15+ years hands-on",
    copy: "Running campaigns across Meta, Google, TikTok, and programmatic. I've sat in the seat — I know what's broken and how to fix it.",
  },
  {
    icon: Award,
    title: "Top 25 in paid advertising",
    copy: "Recognized by PPC Hero globally. Co-authored a bestselling marketing book — 20,000+ copies sold.",
  },
];

const results = [
  "Mentored a founder from early product to acquisition",
  "Built initial sales infrastructure for US market entry",
  "Helped a FinTech refocus ICP — LTV up 50%, CAC down 30%",
];

const AdvisoryAbout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="advisory-about"
      className="py-24 md:py-32 bg-[#fafaf9] relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e5e2dc] to-transparent" />

      <div className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#c8a96e]" />
            <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">Why Me</p>
          </div>

          {/* Photo + Intro */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start mb-16">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 ring-1 ring-black/5">
              <img
                src={etgarPhoto}
                alt="Etgar Shpivak"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-[#1a1a1a] leading-[1.15] tracking-[-0.01em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                I've been the founder in that room.
              </h2>
              <p className="text-[17px] leading-[1.75] text-[#52525b] max-w-2xl">
                Not a consultant who read about it. I built Fixel from zero to hundreds of paying clients — AutoTrader, Purple, Globo — hired wrong, ran low on runway, pivoted, and exited. I've been both the founder and the marketer. I see what you can't, because I'm not inside it.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 bg-white border border-[#f0ede8] transition-all duration-700 hover:shadow-sm hover:border-[#c8a96e]/20 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-[#c8a96e]/[0.08]">
                  <cred.icon className="w-4 h-4 text-[#c8a96e]" />
                </div>
                <h3 className="font-bold text-[15px] mb-2 text-[#1a1a1a]">{cred.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#71717a]">{cred.copy}</p>
              </div>
            ))}
          </div>

          {/* Results */}
          <div
            className={`rounded-2xl p-6 md:p-8 bg-white border-l-[3px] border-l-[#c8a96e] border border-[#f0ede8] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-[13px] tracking-[0.15em] font-bold text-[#c8a96e] uppercase mb-4">Results</p>
            <ul className="space-y-3">
              {results.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#c8a96e]" />
                  <span className="text-[15px] leading-relaxed text-[#52525b]">{r}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvisoryAbout;
