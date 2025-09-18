import React from "react";
// import Navbar from './navbar/navbar'
import Navbarlist from "./compononets/Navbarlist";
import Body from "./body/body";
import Middle from "./middle/middle";
import Text from "./middle/text";
import Phone from "./middle/divide";
import Dividepink from "./middle/dividepink";
import Vrman from "./middle/dividelast";
import Bell from "./middle/CardsSection";
// import Company_names from './middle-text/CompanyLogos'
import Company_names from "./compononets/Companyimages";
import Newsletter from "./middle/newsletter";
// import Footer from './Footer/footer'
import Footer from "./compononets/Footerloop";
import Section from './compononets/Section'
import Abc from './compononets/ABC'
import ScreenSizeIndicator from './compononets/ScreenSizeIndicator'
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbarlist />
      <section id="home">
      <Body />
      </section>
      
      <section id="services">
        <Middle />
      </section>

      <hr className="border-[0] h-[1px] bg-gray-300 my-4" />

      <Text />
      <section id="blog">
        {/* <Abc /> */}
        <Phone />
      {/* <Section /> */}

      

       <Dividepink />

       <Vrman />  
      </section>

      <Bell />

      {/* <Company_names /> */}

      <Company_names />
<section id="aboutus">
      <Newsletter />


  <Footer />
</section>

      {/* <Footer /> */}
      <ScreenSizeIndicator />
    </div>
  );
}

export default App;
