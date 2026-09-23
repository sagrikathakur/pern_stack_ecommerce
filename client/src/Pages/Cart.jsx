import React, { useState } from 'react'
import { productDummyData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { product: productDummyData[0], quantity: 1 },
    { product: productDummyData[2], quantity: 1 }
  ])

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map((item) => {
      if (item.product.id === id) {
        const newQty = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQty }
      }
      return item
    }))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.product.id !== id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 15 : 0
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-20 text-center space-y-4'>
        <ShoppingBag className='size-16 mx-auto text-zinc-300' />
        <h2 className='text-2xl font-serif font-bold text-zinc-800'>Your Cart is Empty</h2>
        <p className='text-sm text-zinc-500 max-w-sm mx-auto'>Looks like you haven't added any jewellery items to your cart yet.</p>
        <Link to='/products' className='inline-flex items-center gap-2 px-6 py-3 bg-[#1B3022] text-white text-sm font-semibold rounded-xl'>
          <span>Explore Collection</span>
          <ArrowRight className='size-4' />
        </Link>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-8'>Shopping Cart</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* Left: Cart Items List */}
        <div className='lg:col-span-2 space-y-4'>
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} className='flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-xl'>
              <img src={product.images[0]} alt={product.name} className='size-20 object-cover rounded-lg bg-zinc-100 shrink-0' />
              
              <div className='flex-1 min-w-0'>
                <h3 className='text-sm font-semibold text-zinc-900 truncate'>{product.name}</h3>
                <p className='text-xs text-zinc-400 capitalize'>{product.category}</p>
                <p className='text-sm font-bold text-zinc-900 mt-1'>${product.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className='flex items-center border border-zinc-200 rounded-lg overflow-hidden shrink-0'>
                <button onClick={() => updateQuantity(product.id, -1)} className='px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-sm font-bold'>-</button>
                <span className='px-3 py-1 text-xs font-semibold'>{quantity}</span>
                <button onClick={() => updateQuantity(product.id, 1)} className='px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-sm font-bold'>+</button>
              </div>

              {/* Remove Button */}
              <button onClick={() => removeItem(product.id)} className='p-2 text-zinc-400 hover:text-red-600 transition-colors cursor-pointer shrink-0'>
                <Trash2 className='size-4' />
              </button>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className='bg-zinc-50 border border-zinc-200 rounded-2xl p-6 h-fit space-y-4'>
          <h2 className='text-lg font-serif font-bold text-zinc-900 pb-3 border-b border-zinc-200'>Order Summary</h2>

          <div className='space-y-2 text-sm text-zinc-600'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span className='font-medium text-zinc-900'>${subtotal}</span>
            </div>
            <div className='flex justify-between'>
              <span>Insured Shipping</span>
              <span className='font-medium text-zinc-900'>${shipping}</span>
            </div>
          </div>

          <div className='pt-3 border-t border-zinc-200 flex justify-between text-base font-bold text-zinc-900'>
            <span>Total</span>
            <span>${total}</span>
          </div>

          <Link
            to='/checkout'
            className='w-full py-3.5 bg-[#1B3022] hover:bg-[#14251A] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors text-center block mt-4'
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className='size-4' />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Cart