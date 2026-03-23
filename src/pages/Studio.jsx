import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import StudioSpaces from "../components/StudioSpaces/StudioSpaces";
import HowItWorks from "../components/HowItWork/HowItWork";
import AboutUs from "../components/AboutUs/AboutUs";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import Seo from "../components/Seo/Seo";
import "./Studio.css";

const Studio = ({ openPopup, isPopupOpen, closePopup }) => {
  return (
    <div className="studio-page-wrapper">
      <Seo
        title="Prodman Studio - Professional Photography & Podcast Studio"
        description="State-of-the-art photography and podcast studio spaces. Professional equipment, versatile sets, and expert support for all your creative projects."
      />

      <Navbar onBookNow={openPopup} />
      <Hero />
      <StudioSpaces />
      <WhyChoose />
      <HowItWorks />
      <AboutUs />
      <GetInTouch isOpen={isPopupOpen} onClose={closePopup} />
      <Footer />
    </div>
  );
};

export default Studio;
