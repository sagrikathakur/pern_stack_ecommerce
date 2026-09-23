import React from 'react'
import { categoriesData } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeCategories = () => {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-2xl sm:text-3xl font-bold font-serif text-zinc-900'>
              Shop By Category
            </h2>
            <p className='text-sm text-zinc-500 mt-1'>
              Explore our wide range of handcrafted precious jewellery collections
            </p>
          </div>

          <Link
            to='/products'
            className='hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#1B3022] hover:text-[#F57C00] transition-colors group'
          >
            <span>View All</span>
            <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Categories Grid - Minimal layout (no container box, image + title only) */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8'>
          {categoriesData.map((item) => (
            <Link
              key={item.id}
              to={`/products?category=${encodeURIComponent(item.category)}`}
              className='group flex flex-col items-center text-center transition-all duration-300'
            >
              <div className='size-24 sm:size-28 lg:size-32 rounded-full overflow-hidden mb-3 border-2 border-amber-500/20 group-hover:border-amber-500 shadow-sm transition-all duration-300 group-hover:scale-105'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              <h3 className='text-sm sm:text-base font-semibold text-zinc-800 group-hover:text-[#1B3022] transition-colors'>
                {item.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Mobile View All button */}
        <div className='mt-8 text-center sm:hidden'>
          <Link
            to='/products'
            className='inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1B3022] text-white text-sm font-medium'
          >
            <span>View All Categories</span>
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCategories