import React from "react";
import HeroEcomm from "../components/HeroEcomm";
import EcommerceProcess from "../components/EcommerceProcess";
import EcommerceStatsSection from "../components/EcommerceStatsSection";
import EcommerceFaqs from "../components/EcommerceFaqs";
import EcommerceForms from "../components/EcommerceForms";
import FooterIntro from "../components/FooterIntro";
function Ecommerce() {
  return (
    <>
      <HeroEcomm />
      <EcommerceStatsSection/>
            <EcommerceProcess />
        <EcommerceFaqs/>
        <EcommerceForms/>
        <FooterIntro/>
    </>

  );
}

export default Ecommerce;