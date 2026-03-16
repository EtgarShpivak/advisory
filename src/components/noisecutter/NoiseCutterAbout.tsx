import { useRef, useState, useEffect } from "react";
import { Rocket, DollarSign, Award } from "lucide-react";
import etgarPhoto from "@/assets/etgar-portrait.jpg";

const credentials = [
  {
    icon: Rocket,
    title: "Built & sold a startup",
    copy: "Co-founded Fixel. Clients saw up to 300% revenue growth. Acquired by Logiq in 2020. Participated in Techstars Atlanta '18 and Plug and Play '20.",
  },
  {
    icon: DollarSign,
    title: "$M+ in hands-on media, every year",
    copy: "15+ years running campaigns personally across Meta, Google, TikTok, native, and programmatic. Millions of dollars in annual spend. Proven results across industries and funnel stages.",
  },
  {
    icon: Award,
    title: "Top 25 globally in paid advertising",
    copy: "Recognized by PPC Hero as one of the 25 most influential PPC leaders worldwide. Co-authored a bestselling marketing book — 20,000+ copies sold.",
  },
];

const rotatingLines = [
  "Grew a digital department 10x in a single year at one of Israel's leading agencies",
  "Built social media presence for leading Israeli brands in telecom, food, automotive, and finance",
  "Strategic marketing advisor to Ono Academic College — today Israel's largest and most recommended college",
  "Mentored 100+ startups as a Techstars mentor, helping founders build go-to-market strategy from the ground up",
];

const NoiseCutterAbout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % rotatingLines.length);
        setFadeIn(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="advisory-about"
      className={`py-6 md:py-8 bg-white transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="container mx-auto px-5 md:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header with photo */}
          <div className="mb-14 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 shadow-lg">
              <img
                src={etgarPhoto}
                alt="Etgar Shpivak"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="tracking-[0.25em] font-semibold text-sm mb-4" style={{ color: "#b8954e" }}>WHY ME</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#111827" }}>
                I've been the founder in that room.
              </h2>
              <p className="text-lg md:text-xl leading-[1.7] max-w-3xl" style={{ color: "#374151" }}>
                Not a consultant who read about it. I built it — grew from zero to hundreds of paying clients, including AutoTrader, Purple, and Globo — hired wrong, ran low on runway, pivoted, and exited successfully. That context changes every conversation we have. Most founders already have the answer in their data. I find it.
              </p>
            </div>
          </div>

          {/* Credential Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className={`rounded-xl p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(184,149,78,0.1)" }}
                  >
                    <cred.icon className="w-5 h-5" style={{ color: "#b8954e" }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg mb-1.5" style={{ color: "#111827" }}>
                      {cred.title}
                    </h3>
                    <p className="text-base leading-[1.65]" style={{ color: "#374151" }}>
                      {cred.copy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Results Box */}
          <div
            className={`rounded-xl p-7 md:p-9 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              background: "#f9fafb",
              borderLeft: "3px solid #b8954e",
              transitionDelay: "400ms",
            }}
          >
            <h3 className="font-bold text-lg mb-5" style={{ color: "#111827" }}>
              Advisory results that show up in the numbers
            </h3>
            <ul className="space-y-4">
              {["Mentored a founder from early product through to a successful acquisition", "Built the initial sales infrastructure for a startup entering the US accounting market", "Helped a FinTech company refocus its ICP. LTV up 50%, CAC down 30%"].map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ background: "#b8954e" }} />
                  <span className="text-base leading-[1.65] font-medium" style={{ color: "#374151" }}>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rotating Achievements Strip */}
          <div
            className="rounded-xl text-center"
            style={{ background: "#f0f1f3", padding: "32px 24px" }}
          >
            <p className="tracking-[0.25em] font-semibold text-sm mb-4 uppercase" style={{ color: "#9ca3af" }}>
              MORE FROM THE TRACK RECORD
            </p>
            <div className="flex items-center justify-center" style={{ minHeight: "56px" }}>
              <p
                className="text-base md:text-lg font-medium max-w-2xl transition-opacity duration-[600ms]"
                style={{ color: "#4b5563", opacity: fadeIn ? 1 : 0 }}
              >
                {rotatingLines[currentLine]}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoiseCutterAbout;
