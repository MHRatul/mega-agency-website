import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from './Blogs'
import TeamSection from './TeamSection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <ToolsSection/>
      <CompanyLogos/>
      <Services/>
      <Testimonials/>
      <Blogs/>
      <TeamSection/>
    </>
  )
}

export default Home