import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import seanImg from "@/assets/testimonials/sean-simon.jpg";
import danielImg from "@/assets/testimonials/daniel-ziv.jpg";
import bryanImg from "@/assets/testimonials/bryan-kujawski.png";
import guyImg from "@/assets/testimonials/guy-kohn.jpg";
import julienImg from "@/assets/testimonials/julien-jukema.jpg";

const testimonials = [
  {
    quote: "Etgar understands how technology changes what's possible in marketing — and makes it practical for startups at any stage. Founders who work with him stop guessing and start executing.",
    name: "Sean Simon",
    title: "ex VP Sales, Criteo & PebblePost",
    linkedin: "https://www.linkedin.com/in/seansimon/",
    image: seanImg,
  },
  {
    quote: "A great product needs a great go-to-market. Etgar is one of the few professionals I recommend founders work with. He's been in the room as a builder, not just an advisor.",
    name: "Daniel Ziv",
    title: "Investment Manager, Glilot Capital",
    linkedin: "https://www.linkedin.com/in/danielziv/",
    image: danielImg,
  },
  {
    quote: "The rare advisor who does the homework before the meeting, comes with specifics, and leaves you with a clear action plan every single time.",
    name: "Bryan Kujawski",
    title: "Co-Founder & Board Member",
    linkedin: "https://www.linkedin.com/in/bryan-kujawski-69b649/",
    image: bryanImg,
  },
  {
    quote: "His weekly sessions are the most productive hour of my week. Direct, focused, and always resulting in a prioritized roadmap we can execute immediately.",
    name: "Guy Kohn",
    title: "Founder & CEO, InsurTax",
    linkedin: "https://www.linkedin.com/in/gkohn/",
    image: guyImg,
  },
  {
    quote: "Etgar strips away distractions and hands you a clear point of view. He was instrumental in our journey from Techstars to acquisition.",
    name: "Julien Jukema",
    title: "Founder & CEO, Anywyse",
    linkedin: "https://www.linkedin.com/in/julien-jukema-8b1aa7114/",
    image: julienImg,
  },
];

const AdvisoryTestimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
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
    el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e5e2dc] to-transparent" />

      <div className={`container mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-4xl mx-auto mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#c8a96e]" />
            <p className="tracking-[0.3em] font-medium text-[11px] uppercase text-[#c8a96e]">Testimonials</p>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#1a1a1a] tracking-[-0.01em]" style={{ fontFamily: "'Playfair Display', serif" }}>
            People I've worked with.
          </h2>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {[{ dir: "left" as const, can: canScrollLeft, pos: "left-2 md:left-4" }, { dir: "right" as const, can: canScrollRight, pos: "right-2 md:right-4" }].map(({ dir, can, pos }) => (
          <button
            key={dir}
            onClick={() => scroll(dir)}
            className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#e5e2dc] shadow-sm text-[#c8a96e] transition-all duration-300 ${can ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label={`Scroll ${dir}`}
          >
            {dir === "left" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        ))}

        <style>{`.testimonials-scroll::-webkit-scrollbar { display: none; }`}</style>

        <div
          ref={scrollRef}
          className="testimonials-scroll flex gap-5 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`shrink-0 w-[85vw] sm:w-[380px] md:w-[400px] rounded-2xl p-8 flex flex-col snap-start bg-[#fafaf9] border border-[#f0ede8] transition-all duration-700 hover:border-[#c8a96e]/20 hover:shadow-sm ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms`, minHeight: "300px" }}
            >
              {/* Quote mark */}
              <div className="text-[48px] leading-none mb-2 text-[#c8a96e]/30 font-serif">"</div>

              <p className="text-[16px] leading-[1.75] flex-1 mb-6 text-[#52525b]">
                {t.quote}
              </p>

              <div className="pt-5 border-t border-[#f0ede8]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-black/5"
                    />
                    <div>
                      <p className="font-semibold text-[14px] text-[#1a1a1a]">{t.name}</p>
                      <p className="text-[13px] text-[#9ca3af]">{t.title}</p>
                    </div>
                  </div>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 ml-3 text-[#0a66c2] hover:text-[#004182] transition-colors"
                    aria-label={`${t.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryTestimonials;
