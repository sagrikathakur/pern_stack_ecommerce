import React from 'react'
import { orderDummyData } from '../assets/assets'
import { CheckCircle2, Clock, Truck, PackageCheck, MapPin } from 'lucide-react'

const OrderTracking = () => {
  const order = orderDummyData[0]

  const steps = [
    { title: 'Order Placed', time: 'Aug 22, 09:15 AM', done: true, icon: Clock },
    { title: 'Processing & Hallmarking', time: 'Aug 22, 11:30 AM', done: true, icon: PackageCheck },
    { title: 'Shipped via Express', time: 'Aug 23, 08:00 AM', done: true, icon: Truck },
    { title: 'Delivered', time: 'Aug 24, 02:45 PM', done: true, icon: CheckCircle2 }
  ]

  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-2'>Track Your Order</h1>
      <p className='text-sm text-zinc-500 mb-8'>Order ID #{order.id}</p>

      {/* Timeline Card */}
      <div className='bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 space-y-8'>
        <div className='flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-100'>
          <div>
            <p className='text-xs text-zinc-400'>Estimated Delivery</p>
            <p className='text-lg font-bold text-zinc-900'>Delivered on Aug 24</p>
          </div>
          <span className='px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full'>
            Status: {order.status}
          </span>
        </div>

        {/* Steps */}
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 relative'>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className='flex sm:flex-col items-center sm:text-center gap-4 sm:gap-2 relative z-10'>
                <div className={`p-3 rounded-full text-white ${step.done ? 'bg-[#142419]' : 'bg-zinc-200 text-zinc-400'}`}>
                  <Icon className='size-5' />
                </div>
                <div>
                  <p className='text-sm font-semibold text-zinc-900'>{step.title}</p>
                  <p className='text-xs text-zinc-400 mt-0.5'>{step.time}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Delivery Address Details */}
        <div className='pt-6 border-t border-zinc-100 flex items-start gap-3 text-sm text-zinc-600'>
          <MapPin className='size-5 text-[#142419] shrink-0 mt-0.5' />
          <div>
            <p className='font-semibold text-zinc-900'>Delivery Location</p>
            <p className='text-xs text-zinc-500 mt-0.5'>{order.address.name} • {order.address.street}, {order.address.city}, {order.address.state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTracking