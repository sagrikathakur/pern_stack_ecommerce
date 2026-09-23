import React, { useState } from 'react'
import { addressDummyData, productDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, CreditCard, Truck, ShieldCheck } from 'lucide-react'

const Checkout = () => {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [loading, setLoading] = useState(false)

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      navigate('/my-orders')
    }, 1200)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-8'>Checkout</h1>

      <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* Left Form: Delivery Address & Payment */}
        <div className='lg:col-span-2 space-y-8'>
          
          {/* Shipping Address */}
          <div className='bg-white border border-zinc-200 rounded-2xl p-6 space-y-4'>
            <h2 className='text-lg font-serif font-bold text-zinc-900 flex items-center gap-2'>
              <Truck className='size-5 text-[#1B3022]' />
              <span>Shipping Address</span>
            </h2>

            <div className='p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1 text-sm text-zinc-700'>
              <p className='font-semibold text-zinc-900'>{addressDummyData.name}</p>
              <p>{addressDummyData.street}, {addressDummyData.city}, {addressDummyData.state} {addressDummyData.zip}</p>
              <p>{addressDummyData.country} • {addressDummyData.phone}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className='bg-white border border-zinc-200 rounded-2xl p-6 space-y-4'>
            <h2 className='text-lg font-serif font-bold text-zinc-900 flex items-center gap-2'>
              <CreditCard className='size-5 text-[#1B3022]' />
              <span>Payment Method</span>
            </h2>

            <div className='space-y-3'>
              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-[#1B3022] bg-emerald-50/50' : 'border-zinc-200'}`}>
                <input type='radio' name='payment' value='cod' checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                <div className='text-sm'>
                  <p className='font-semibold text-zinc-900'>Cash on Delivery (COD)</p>
                  <p className='text-xs text-zinc-500'>Pay when your jewellery is delivered safely</p>
                </div>
              </label>

              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-[#1B3022] bg-emerald-50/50' : 'border-zinc-200'}`}>
                <input type='radio' name='payment' value='card' checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                <div className='text-sm'>
                  <p className='font-semibold text-zinc-900'>Credit / Debit Card / UPI</p>
                  <p className='text-xs text-zinc-500'>Secure online payment gateway</p>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Right Summary */}
        <div className='bg-zinc-50 border border-zinc-200 rounded-2xl p-6 h-fit space-y-6'>
          <h2 className='text-lg font-serif font-bold text-zinc-900 pb-3 border-b border-zinc-200'>Order Details</h2>

          <div className='space-y-3'>
            <div className='flex items-center gap-3 text-sm'>
              <img src={productDummyData[0].images[0]} alt='' className='size-12 object-cover rounded-lg bg-white border' />
              <div className='flex-1 min-w-0'>
                <p className='font-medium text-zinc-800 truncate'>{productDummyData[0].name}</p>
                <p className='text-xs text-zinc-400'>Qty: 1</p>
              </div>
              <span className='font-semibold text-zinc-900'>${productDummyData[0].price}</span>
            </div>
          </div>

          <div className='pt-4 border-t border-zinc-200 space-y-2 text-sm text-zinc-600'>
            <div className='flex justify-between'><span>Subtotal</span><span>${productDummyData[0].price}</span></div>
            <div className='flex justify-between'><span>Insured Delivery</span><span>$15</span></div>
            <div className='flex justify-between font-bold text-base text-zinc-900 pt-2 border-t'><span>Total</span><span>${productDummyData[0].price + 15}</span></div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full py-3.5 bg-[#1B3022] hover:bg-[#14251A] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50'
          >
            {loading ? <span>Processing Order...</span> : <span>Place Order</span>}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout