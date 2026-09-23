import React from 'react'
import { ourSpecsData } from '../../assets/assets'

const Feature = () => {
  return (
    <section className='py-8 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
          {ourSpecsData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className='flex items-start gap-4 p-6 bg-zinc-50 border border-zinc-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5'
              >
                <div className='p-3.5 rounded-xl shrink-0 flex items-center justify-center bg-[#1B3022] text-white shadow-sm'>
                  {IconComponent && <IconComponent className='size-6' />}
                </div>

                <div>
                  <h3 className='text-base font-semibold text-zinc-900 mb-1'>
                    {item.title}
                  </h3>
                  <p className='text-xs sm:text-sm text-zinc-500 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Feature