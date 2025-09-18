import React from "react";
// import Navbar from './navbar/navbar'
import Navbarlist from "./compononets/Navbarlist";
import Body from "./Sections/body";
import Middle from "./Sections/middle";
import Text from "./Sections/text";
import Phone from "./Sections/divide";
import Dividepink from "./Sections/dividepink";
import Vrman from "./Sections/dividelast";
import Bell from "./Sections/CardsSection";
// import Company_names from './middle-text/CompanyLogos'
import Company_names from "./compononets/Companyimages";
import Newsletter from "./Sections/newsletter";
// import Footer from './Footer/footer'
import Footer from "./compononets/Footerloop";
import Section from "./compononets/Section";
import Abc from "./compononets/ABC";
import ScreenSizeIndicator from "./compononets/ScreenSizeIndicator";
function App() {
  return (
    <div>
      <Navbarlist />

      <Body />

      <Middle />

      <hr className="border-[0] h-[1px] bg-gray-300 my-4" />

      <Text />

      <Phone />

      <Dividepink />

      <Vrman />

      <Bell />

      <Company_names />

      <Newsletter />

      <Footer />

      {/* <Footer /> */}
      <ScreenSizeIndicator />
    </div>
  );
}

export default App;
