import AdvisoryHero from "@/components/advisory/AdvisoryHero";
import AdvisoryAbout from "@/components/advisory/AdvisoryAbout";
import AdvisoryProblem from "@/components/advisory/AdvisoryProblem";
import AdvisoryWorkOn from "@/components/advisory/AdvisoryWorkOn";
import AdvisoryProof from "@/components/advisory/AdvisoryProof";
import AdvisoryTestimonials from "@/components/advisory/AdvisoryTestimonials";
import AdvisoryContact from "@/components/advisory/AdvisoryContact";
import MobileStickyBar from "@/components/advisory/MobileStickyBar";

const Advisory = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <AdvisoryHero />
      <AdvisoryProblem />
      <AdvisoryAbout />
      <AdvisoryWorkOn />
      <AdvisoryProof />
      <AdvisoryTestimonials />
      <AdvisoryContact />
      <MobileStickyBar />
    </div>
  );
};

export default Advisory;
