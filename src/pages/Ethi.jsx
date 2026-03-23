import DesignHeader from "../servicewebpage/DesignHeader";
import DesignFooter from "../servicewebpage/DesignFooter";
import EthiHero from "../servicewebpage/ethiPage/ethiHero/EthiHero";
import EthiScope from "../servicewebpage/ethiPage/ethiScope/EthiScope";
import EthiExperience from "../servicewebpage/ethiPage/ethiExperience/EthiExperience";
import DesignApproach from "../servicewebpage/ethiPage/ethiDesignApproach/DesignApproach";

const Ethi = () => {
  return (
    <>
      <DesignHeader />
      <EthiHero />
      <EthiScope />
      <EthiExperience />
      <DesignApproach />
      <DesignFooter />
    </>
  );
};

export default Ethi;
