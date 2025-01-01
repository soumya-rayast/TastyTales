import React from 'react'
import HeroSection from '../components/HeroSection'
import CategoryWraper from '../components/CategoryWraper'
import FeaturedSection from '../components/FeaturedSection'
import LatestRecipe from '../components/LatestRecipe'
import NewsLetter from '../components/NewsLetter'
import AboutSection from '../components/AboutSection'
import CompanyLogo from '../components/CompanyLogo'
import Subscription from '../components/Subscription'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center w-full py-20'>
        <HeroSection />
        <CategoryWraper />
      </div>
      <FeaturedSection />
      <LatestRecipe />
      <NewsLetter />
      <AboutSection />
      <CompanyLogo/>
      <Subscription/>
    </div>
  )
}

export default Home
