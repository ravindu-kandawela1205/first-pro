import React from 'react'
import Navbar from './navbar/navbar'
import Body from './body/body'
import Middle from './middle/middle'
import Text from './middle/text'
import Phone from './middle/divide'
import Dividepink from './middle/dividepink'
import Vrman from './middle/dividelast'
import Bell from './middle/CardsSection'
import Company_names from './middle-text/CompanyLogos'
import Newsletter from './middle/newsletter'
import Footer from './Footer/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Middle />
      <hr class="border-[0] h-[1px] bg-gray-300 my-4" />

      <Text />

      <Phone />

      <Dividepink/>

      <Vrman />

      <Bell />

      <Company_names />

      <Newsletter />

      <Footer />
     


    </div>
  )
}

export default App
