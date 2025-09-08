import React from 'react'
// import Navbar from './navbar/navbar'
import Navbarlist from './compononets/Navbarlist'
import Body from './body/body'
import Middle from './middle/middle'
import Text from './middle/text'
import Phone from './middle/divide'
import Dividepink from './middle/dividepink'
import Vrman from './middle/dividelast'
import Bell from './middle/CardsSection'
// import Company_names from './middle-text/CompanyLogos'
import Company_names from './compononets/Companyimages'
import Newsletter from './middle/newsletter'
// import Footer from './Footer/footer'
import Footer from './compononets/Footerloop'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbarlist />
      <Body />
      <Middle />
      <hr class="border-[0] h-[1px] bg-gray-300 my-4" />

      <Text />

      <Phone />

      <Dividepink/>

      <Vrman />

      <Bell />

      {/* <Company_names /> */}

      <Company_names />

      <Newsletter />

      <Footer />
      {/* <Footer /> */}
     


    </div>
  )
}

export default App
