import React from "react";
import "./global.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import OfferingsSection from "./components/OfferingsSection";
import ThemeSection from "./components/Themesection";
import LocationsSection from "./components/LocationSection";
import ContactForm from "./components/Contactform";
import ContactSection from "./components/ContactSection";


const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <ThemeSection />
      <LocationsSection />
      <ContactForm />
      <ContactSection /> 
      
    </>
  );
};

export default App;
