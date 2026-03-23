import DesignHeader from "../servicewebpage/DesignHeader";
import DesignFooter from "../servicewebpage/DesignFooter";
import WldHero from "../servicewebpage/wldServices/wldHero/WldHero";
import WldServicesScope from "../servicewebpage/wldServices/wldScope/WldServicesScope";
import WldServicesExperience from "../servicewebpage/wldServices/wldServicesExperience/WldServicesExperience";

const WLD = () => {
  return (
    <>
      <DesignHeader />
      <WldHero />
      <WldServicesScope />
      <WldServicesExperience />
      <DesignFooter />
    </>
  );
};

export default WLD;
