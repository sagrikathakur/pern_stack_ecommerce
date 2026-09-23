import React from 'react'
import { assets, heroSectionData } from '../../assets/assets'
import { ArrowRight, Diamond, LeafIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative overflow-hidden w-full min-h-[550px] lg:min-h-[620px] flex items-center justify-start'>
      {/* Background Image - Clean, no dark overlay or dark image shadow */}
      <img
        src={heroSectionData.hero_img || heroSectionData.hero_image || heroSectionData.hero_imgage || assets.hero_image}
        alt="Hero Banner"
        className='absolute inset-0 h-full w-full object-cover object-center'
      />

      {/* Hero Content Container */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='max-w-2xl space-y-6'>

          {/* Heading */}
          <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-tight text-zinc-100'>
            Exquisite Royal Jewellery
          </h1>

          {/* Subtitle / Sub text */}
          <p className='text-sm sm:text-base lg:text-lg text-zinc-300 font-medium leading-relaxed max-w-xl'>
            {heroSectionData.sub || heroSectionData.subtitle}
          </p>

          {/* Action Links with Rectangular Shape */}
          <div className='flex flex-wrap items-center gap-4 pt-4'>
            <Link
              to={heroSectionData.shopLink || '/products'}
              className='inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#1B3022] hover:bg-[#14251A] text-white font-semibold text-sm sm:text-base rounded-md shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer'
            >
              <span>Shop Now</span>
              <ArrowRight className='size-4 sm:size-5' />
            </Link>

            <Link
              to={heroSectionData.categoryLink || '/products'}
              className='inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#eef9ff] hover:bg-[#f1f6fe] text-zinc-950 font-semibold text-sm sm:text-base rounded-md shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer'
            >
              <span>Browse Categories</span>
              <ArrowRight className='size-4 sm:size-5' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero