import React, { useEffect, useState } from 'react'
import { productDummyData } from '../../assets/assets'
import { Link } from 'react-router-dom'

const PopularProduct = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productDummyData)
  }, [])

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14'>
      <div className='flex items-baseline justify-between mb-8'>
        <h2 className='text-2xl font-serif font-bold text-zinc-900 tracking-tight'>
          Popular Products
        </h2>
        <Link to='/products' className='text-xs font-semibold text-[#1B3022] hover:underline uppercase tracking-wider'>
          View All
        </Link>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6'>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className='group flex flex-col'
          >
            {/* Image Container - Perfectly Equal Aspect Ratio & Size */}
            <div className='w-full aspect-square bg-[#F9F8F6] rounded-xl overflow-hidden mb-3 border border-zinc-200/60 transition-all duration-300 group-hover:border-amber-500/40 group-hover:shadow-sm'>
              <img
                src={product.images[0]}
                alt={product.name}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>

            {/* Product Details */}
            <h3 className='text-xs sm:text-sm font-medium text-zinc-800 group-hover:text-[#1B3022] transition-colors truncate'>
              {product.name}
            </h3>
            <p className='text-xs text-zinc-400 capitalize mt-0.5'>{product.category}</p>
            <p className='text-sm font-semibold text-zinc-900 mt-1.5'>
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularProduct