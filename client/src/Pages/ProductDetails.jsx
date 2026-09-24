import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, ShoppingBag, ArrowLeft, Check, Heart } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, addToCart, toggleWishlist, isInWishlist, currency } = useContext(ShopContext)
  
  const product = products.find((p) => p.id === id) || products[0]
  
  const [selectedImg, setSelectedImg] = useState(product?.images?.[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product && product.images) {
      setSelectedImg(product.images[0])
    }
  }, [id, product])

  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product.id, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(product.id, quantity)
    navigate('/cart')
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12'>
      
      {/* Navigation link */}
      <Link to='/products' className='inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors'>
        <ArrowLeft className='size-4' />
        <span>Back to Collection</span>
      </Link>

      {/* Main Product Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start'>
        
        {/* Gallery */}
        <div className='space-y-4'>
          <div className='w-full aspect-square bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden'>
            <img
              src={selectedImg}
              alt={product.name}
              className='w-full h-full object-cover'
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className='flex gap-3 overflow-x-auto pb-1'>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`size-16 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    selectedImg === img ? 'border-[#1B3022] ring-1 ring-[#1B3022]' : 'border-zinc-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt='' className='w-full h-full object-cover' />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className='space-y-6'>
          <div>
            <span className='text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200'>
              {product.category}
            </span>
            <h1 className='text-2xl sm:text-4xl font-serif font-bold text-zinc-900 mt-3 leading-tight'>
              {product.name}
            </h1>

            <div className='flex items-center gap-2 mt-3 text-sm'>
              <div className='flex items-center text-amber-500'>
                <Star className='size-4 fill-amber-400 text-amber-400' />
                <span className='font-semibold text-zinc-900 ml-1'>4.9</span>
              </div>
              <span className='text-zinc-300'>•</span>
              <span className='text-zinc-500 text-xs'>12 verified reviews</span>
            </div>
          </div>

          {/* Price */}
          <div className='flex items-baseline gap-3 pt-2 border-t border-zinc-100'>
            <span className='text-3xl font-bold text-zinc-900'>{currency}{product.price}</span>
            {product.mrp && (
              <span className='text-base text-zinc-400 line-through'>{currency}{product.mrp}</span>
            )}
            <span className='text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded'>In Stock</span>
          </div>

          <p className='text-sm text-zinc-600 leading-relaxed'>
            {product.description}
          </p>

          {/* Controls */}
          <div className='space-y-4 pt-4 border-t border-zinc-100'>
            <div className='flex items-center gap-3'>
              <span className='text-xs font-semibold uppercase tracking-wider text-zinc-500'>Quantity:</span>
              <div className='flex items-center border border-zinc-300 rounded-lg bg-zinc-50'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-3 py-1 text-zinc-600 hover:text-zinc-900 font-bold text-sm cursor-pointer'
                >
                  -
                </button>
                <span className='px-3 text-sm font-semibold text-zinc-900'>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-3 py-1 text-zinc-600 hover:text-zinc-900 font-bold text-sm cursor-pointer'
                >
                  +
                </button>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 pt-2'>
              <button
                onClick={handleAddToCart}
                className='flex-1 py-3.5 px-6 bg-[#1B3022] hover:bg-[#14251a] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs'
              >
                {added ? <Check className='size-4' /> : <ShoppingBag className='size-4' />}
                <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className='flex-1 py-3.5 px-6 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl flex items-center justify-center cursor-pointer transition-colors text-center shadow-xs'
              >
                Buy Now
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3.5 border rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
                  isInWishlist(product.id)
                    ? 'border-red-300 bg-red-50 text-red-600'
                    : 'border-zinc-300 hover:bg-zinc-100 text-zinc-600'
                }`}
                title='Wishlist'
              >
                <Heart className={`size-5 ${isInWishlist(product.id) ? 'fill-red-600' : ''}`} />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className='pt-10 border-t border-zinc-200 space-y-6'>
          <h2 className='text-xl font-serif font-bold text-zinc-900'>Related Products</h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`} className='group bg-white border border-zinc-200 rounded-xl overflow-hidden p-3 hover:shadow-xs transition-shadow'>
                <div className='w-full aspect-square bg-zinc-50 rounded-lg overflow-hidden mb-3'>
                  <img src={item.images[0]} alt={item.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform' />
                </div>
                <h3 className='text-xs sm:text-sm font-semibold text-zinc-800 truncate'>{item.name}</h3>
                <p className='text-sm font-bold text-zinc-900 mt-1'>${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default ProductDetails