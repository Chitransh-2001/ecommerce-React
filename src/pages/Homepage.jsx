import React from 'react'
import Slider from '../component/Slider/Slider'
import HomeSectionCard from '../component/HomeSectionCard/HomeSectionCard'
import { kurtaPage } from '../component/DATA/Kurta'
import Footer from '../component/Footer/Footer'
import Header from '../component/header/Header'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Slider/>
    
    <div className='space-y-10 py-20 flex flex-col justify-center'>
    <HomeSectionCard data={kurtaPage}   sectionName={"Men's Kurta"}/>
    <HomeSectionCard data={kurtaPage} sectionName={"Men's Shoes"}/>
    <HomeSectionCard  data={kurtaPage} sectionName={"Men's Shirt"} />
    </div>
    <Footer/>
    </div>
  )
}

export default Homepage
