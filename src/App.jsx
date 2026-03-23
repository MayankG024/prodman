import React, { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
const LandingFirst = lazy(() => import("./pages/LandingFirst"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Studio = lazy(() => import("./pages/Studio"));
const Design = lazy(() => import("./pages/Design"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Ethi = lazy(() => import("./pages/Ethi"));
const NBL = lazy(() => import("./pages/NBL"));
const WLD = lazy(() => import("./pages/WLD"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ServicesContact = lazy(() => import("./pages/ServicesContact"));

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<LandingFirst />} />

          <Route
            path="/studio"
            element={
              <Studio
                openPopup={openPopup}
                isPopupOpen={isPopupOpen}
                closePopup={closePopup}
              />
            }
          />

          <Route path="/studio/contact" element={<ContactUs />} />

          <Route path="/design" element={<Design />} />
          <Route path="/design/portfolio" element={<Portfolio />} />

          <Route path="/design/ethi-services" element={<Ethi />} />

          <Route path="/design/nbl-services" element={<NBL />} />

          <Route path="/design/wld-services" element={<WLD />} />

          <Route path="/design/contact" element={<ServicesContact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
