import React from 'react'
import { categoriesData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-2'>Jewellery Categories</h1>
      <p className='text-sm text-zinc-500 mb-10'>Browse our authentic handcrafted collections</p>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8'>
        {categoriesData.map((item) => (
          <Link
            key={item.id}
            to={`/products?category=${encodeURIComponent(item.category)}`}
            className='group flex flex-col items-center text-center'
          >
            <div className='w-full aspect-square bg-[#F9F8F6] rounded-2xl overflow-hidden mb-4 border border-zinc-200 p-3 shadow-sm group-hover:border-amber-500 transition-colors'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <h3 className='text-base font-semibold text-zinc-900 group-hover:text-[#1B3022]'>{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories