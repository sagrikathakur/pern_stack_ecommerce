import React, { useState } from 'react'
import { productDummyData, couponDummyData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Flashdeals = () => {
  const dealProducts = productDummyData.filter((p) => p.mrp && p.mrp > p.price)

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code)
    toast.success(`Coupon code ${code} copied!`)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12'>
      
      {/* Header */}
      <div className='border-b border-zinc-200 pb-6'>
        <h1 className='text-3xl font-serif font-bold text-zinc-900'>Deals & Offers</h1>
        <p className='text-sm text-zinc-500 mt-1'>Exclusive promotional discounts and active coupon codes</p>
      </div>

      {/* Available Coupons */}
      <div className='space-y-4'>
        <h2 className='text-xl font-serif font-bold text-zinc-900'>Active Coupons</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {couponDummyData.map((c, idx) => (
            <div key={idx} className='p-5 bg-zinc-50 border border-dashed border-zinc-300 rounded-xl flex items-center justify-between'>
              <div>
                <p className='text-xs font-semibold text-amber-700 uppercase tracking-wider'>{c.discount}% Discount</p>
                <p className='text-base font-bold text-zinc-900 mt-0.5'>{c.code}</p>
                <p className='text-xs text-zinc-500 mt-1'>{c.description}</p>
              </div>
              <button
                onClick={() => copyCouponCode(c.code)}
                className='px-3 py-1.5 bg-white border border-zinc-300 hover:border-zinc-400 text-xs font-medium text-zinc-700 rounded-lg shadow-xs cursor-pointer'
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offer Products */}
      <div className='space-y-6 pt-4'>
        <h2 className='text-xl font-serif font-bold text-zinc-900'>Special Offer Jewellery</h2>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {dealProducts.map((product) => {
            const savings = product.mrp - product.price
            return (
              <Link key={product.id} to={`/products/${product.id}`} className='group bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow'>
                <div className='relative aspect-square bg-zinc-50 p-4'>
                  <span className='absolute top-3 left-3 bg-red-700 text-white text-[11px] font-semibold px-2 py-0.5 rounded'>
                    Save ${savings}
                  </span>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='p-4 space-y-1.5'>
                  <p className='text-xs text-zinc-400 uppercase tracking-wider'>{product.category}</p>
                  <h3 className='text-sm font-semibold text-zinc-800 line-clamp-1 group-hover:text-[#1B3022]'>{product.name}</h3>
                  <div className='flex items-center gap-2 pt-1'>
                    <span className='text-base font-bold text-zinc-900'>${product.price}</span>
                    <span className='text-xs text-zinc-400 line-through'>${product.mrp}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Flashdeals