import React, { useState } from 'react'
import { productDummyData, categories } from '../assets/assets'
import { Link, useSearchParams } from 'react-router-dom'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'All'
  const [sortOption, setSortOption] = useState('default')

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? productDummyData
    : productDummyData.filter(item => item.category === selectedCategory)

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'low-to-high') return a.price - b.price
    if (sortOption === 'high-to-low') return b.price - a.price
    return 0
  })

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-2'>Jewellery Collection</h1>
      <p className='text-sm text-zinc-500 mb-8'>Explore handcrafted gold, kundan, polki and diamond creations</p>

      {/* Category Pills & Sort Bar */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200'>
        {/* Category Filters */}
        <div className='flex flex-wrap gap-2'>
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1B3022] text-white'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className='text-xs sm:text-sm border border-zinc-300 rounded-lg px-3 py-2 bg-white text-zinc-700 outline-none cursor-pointer'
        >
          <option value='default'>Sort By: Featured</option>
          <option value='low-to-high'>Price: Low to High</option>
          <option value='high-to-low'>Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
        {sortedProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`} className='group flex flex-col'>
            <div className='w-full aspect-square bg-[#F9F8F6] rounded-xl overflow-hidden mb-3 border border-zinc-200/60 p-2'>
              <img
                src={product.images[0]}
                alt={product.name}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <h3 className='text-sm font-medium text-zinc-800 truncate group-hover:text-[#1B3022]'>{product.name}</h3>
            <p className='text-xs text-zinc-400 capitalize mt-0.5'>{product.category}</p>
            <p className='text-sm font-semibold text-zinc-900 mt-1'>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products