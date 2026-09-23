import React from 'react'
import Hero from '../Components/Home/Hero'
import Feature from '../Components/Home/Feature'
import HomeCategories from '../Components/Home/HomeCategories'
import PopularProduct from '../Components/Home/PopularProduct'

const Home = () => {
  return (
    <div className='min-h-screen w-full'>
      <Hero />
      <Feature />
      <HomeCategories />
      <PopularProduct />
    </div>
  )
}

export default Home