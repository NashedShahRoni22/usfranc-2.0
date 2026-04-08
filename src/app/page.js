import HeroBanner from "@/components/Home/HeroBanner";
import Highlights from "@/components/Home/Highlights";
import HighlightsTwo from "@/components/Home/HighlightsTwo";
import HowItWorks from "@/components/Home/HowItWorks";
import Usage from "@/components/Home/Usage";

const Page = () => {
  return (
    <div>
      <HeroBanner />
      <Highlights />
      <Usage />
      <HighlightsTwo />
      <HowItWorks />
    </div>
  );
};

export default Page;
