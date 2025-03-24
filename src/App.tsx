import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import ServicesPage from "./components/Services/Services";
import Navbar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import ContactPage from "./components/Services/ContactPage";
import ExpertiseSection from "./components/Services/ExpertiseSection";
import Testimonials from "./Screens/Testimonial";
import UnderConstruction from "./components/ui/UnderContruction";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/solutions" element={<ExpertiseSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/our-work" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
