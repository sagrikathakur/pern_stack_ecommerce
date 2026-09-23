import React from 'react'
import { orderDummyData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Package, Truck, ArrowRight } from 'lucide-react'

const Myorders = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-2'>My Orders</h1>
      <p className='text-sm text-zinc-500 mb-8'>View and track your jewellery order history</p>

      <div className='space-y-6'>
        {orderDummyData.map((order) => (
          <div key={order.id} className='bg-white border border-zinc-200 rounded-2xl p-6 space-y-4'>
            {/* Header Bar */}
            <div className='flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-100 text-sm'>
              <div className='space-y-1'>
                <p className='font-semibold text-zinc-900'>Order #{order.id}</p>
                <p className='text-xs text-zinc-400'>Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <div className='flex items-center gap-4'>
                <span className='px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full'>
                  {order.status}
                </span>
                <span className='font-bold text-zinc-900'>Total: ${order.total}</span>
              </div>
            </div>

            {/* Items */}
            <div className='space-y-3'>
              {order.orderItems.map((item, idx) => (
                <div key={idx} className='flex items-center gap-4 text-sm'>
                  <img src={item.product.images[0]} alt='' className='size-14 object-cover rounded-lg bg-zinc-100 shrink-0' />
                  <div className='flex-1 min-w-0'>
                    <p className='font-semibold text-zinc-800 truncate'>{item.product.name}</p>
                    <p className='text-xs text-zinc-400'>Qty: {item.quantity} • ${item.price} each</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Tracking Link */}
            <div className='pt-4 border-t border-zinc-100 flex items-center justify-between'>
              <div className='flex items-center gap-2 text-xs text-zinc-500'>
                <Package className='size-4 text-[#1B3022]' />
                <span>Payment: {order.paymentMethod}</span>
              </div>

              <Link
                to='/order-tracking'
                className='inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B3022] hover:text-[#F57C00] transition-colors'
              >
                <Truck className='size-4' />
                <span>Track Order</span>
                <ArrowRight className='size-3' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myorders