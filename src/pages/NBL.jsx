import DesignHeader from "../servicewebpage/DesignHeader";
import DesignFooter from "../servicewebpage/DesignFooter";
import NblServicesHero from "../servicewebpage/nblServices/nblServicesHero/NblServicesHero";
import NblServicesScope from "../servicewebpage/nblServices/nblServicesScope/NblServicesScope";
import NblExperience from "../servicewebpage/nblServices/nblExperience/NblExperience";

const NBL = () => {
  return (
    <>
      <DesignHeader />
      <NblServicesHero />
      <NblServicesScope />
      <NblExperience />
      <DesignFooter />
    </>
  );
};

export default NBL;
