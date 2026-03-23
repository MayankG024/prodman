import DesignHeader from "../servicewebpage/DesignHeader";
import DesignHero from "../servicewebpage/DesignHero";
import OurServices from "../servicewebpage/OurServices";
import DesignFooter from "../servicewebpage/DesignFooter";
import Testimonials from "../servicewebpage/Testimonials";
import PortfolioSection from "../servicewebpage/PortfolioSection";
import GetInTouchDesign from "../servicewebpage/GetInTouchDesign";
import Seo from "../components/Seo/Seo";

const Design = () => {
  return (
    <>
      <Seo
        title="Tech Concierge - Prodman | Branding, Web Design & More"
        description="Professional tech concierge services including product packaging, branding, web development, UX/UI design, and social media creatives. Expert creative solutions for your business."
      />

      <DesignHeader />
      <DesignHero />
      <OurServices />
      <Testimonials />
      <PortfolioSection />
      <GetInTouchDesign />
      <DesignFooter />
    </>
  );
};

export default Design;
