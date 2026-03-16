import { useState, useEffect } from "react";

const MobileStickyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("section");
      const contact = document.getElementById("advisory-contact");
      if (!hero || !contact) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setShow(heroBottom < 0 && contactTop > windowHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 bg-white/95 backdrop-blur-md border-t border-[#f0ede8] flex items-center justify-between">
      <span className="text-[13px] font-semibold text-[#52525b]">
        GTM Advisory — $2,500/mo
      </span>
      <button
        className="px-5 py-2 text-[13px] font-bold rounded-full bg-[#c8a96e] text-[#0a0d13] transition-all hover:bg-[#d4b87a]"
        onClick={() => document.getElementById("advisory-contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Get Started
      </button>
    </div>
  );
};

export default MobileStickyBar;
