import React, { useState } from 'react'
import { productDummyData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, Heart } from 'lucide-react'

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    productDummyData[1],
    productDummyData[3],
    productDummyData[5]
  ])

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
  }

  if (wishlist.length === 0) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-20 text-center space-y-4'>
        <Heart className='size-16 mx-auto text-zinc-300' />
        <h2 className='text-2xl font-serif font-bold text-zinc-800'>Your Wishlist is Empty</h2>
        <p className='text-sm text-zinc-500 max-w-sm mx-auto'>Save your favorite jewellery pieces here to view them later.</p>
        <Link to='/products' className='inline-flex items-center gap-2 px-6 py-3 bg-[#1B3022] text-white text-sm font-semibold rounded-xl'>
          <span>Browse Products</span>
        </Link>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-2'>My Wishlist</h1>
      <p className='text-sm text-zinc-500 mb-8'>Your saved precious items ({wishlist.length})</p>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
        {wishlist.map((product) => (
          <div key={product.id} className='group bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between p-3 relative'>
            <button
              onClick={() => removeFromWishlist(product.id)}
              className='absolute top-5 right-5 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-zinc-400 hover:text-red-600 transition-colors'
              title='Remove'
            >
              <Trash2 className='size-4' />
            </button>

            <Link to={`/products/${product.id}`} className='block space-y-2'>
              <div className='w-full aspect-square bg-[#F9F8F6] rounded-xl overflow-hidden p-2'>
                <img src={product.images[0]} alt={product.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform' />
              </div>
              <h3 className='text-sm font-medium text-zinc-800 truncate'>{product.name}</h3>
              <p className='text-sm font-bold text-zinc-900'>${product.price}</p>
            </Link>

            <Link
              to='/cart'
              className='mt-4 w-full py-2.5 bg-[#1B3022] hover:bg-[#14251A] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors'
            >
              <ShoppingBag className='size-3.5' />
              <span>Move to Cart</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist