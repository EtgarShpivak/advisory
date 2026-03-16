import NoiseCutterHero from "@/components/noisecutter/NoiseCutterHero";
import AdvisoryProblem from "@/components/advisory/AdvisoryProblem";
import NoiseCutterAbout from "@/components/noisecutter/NoiseCutterAbout";
import AdvisoryProof from "@/components/advisory/AdvisoryProof";
import NoiseCutterWorkOn from "@/components/noisecutter/NoiseCutterWorkOn";
import AdvisoryTestimonials from "@/components/advisory/AdvisoryTestimonials";
import NoiseCutterContact from "@/components/noisecutter/NoiseCutterContact";
import MobileStickyBar from "@/components/advisory/MobileStickyBar";

const TheNoiseCutter = () => {
  return (
    <div className="min-h-screen bg-white">
      <NoiseCutterHero />
      <AdvisoryProblem />
      <NoiseCutterAbout />
      <AdvisoryProof />
      <NoiseCutterWorkOn />
      <AdvisoryTestimonials />
      <NoiseCutterContact />
      <MobileStickyBar />
    </div>
  );
};

export default TheNoiseCutter;
