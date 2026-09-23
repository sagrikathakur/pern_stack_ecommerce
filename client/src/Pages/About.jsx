import React from 'react'
import { assets } from '../assets/assets'
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react'

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16'>
      
      {/* Hero Header */}
      <div className='text-center max-w-3xl mx-auto space-y-4'>
        <span className='px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full uppercase tracking-wider'>
          Our Heritage & Craft
        </span>
        <h1 className='text-3xl sm:text-5xl font-serif font-bold text-zinc-900 leading-tight'>
          About Sagar Ratna
        </h1>
        <p className='text-base text-zinc-600 leading-relaxed'>
          Crafting timeless elegance through authentic handcrafted Gold, Kundan, Polki, and 100% certified solitaire diamond jewellery.
        </p>
      </div>

      {/* Founder & Admin Spotlight Section */}
      <div className='bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        
        {/* Admin / Founder Image */}
        <div className='relative max-w-sm mx-auto md:max-w-none w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white'>
          <img
            src={assets.adminImage || assets.nameofADMIN || assets.profile_pic1}
            alt="Sagrika - Admin & Founder"
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/40'>
            <h3 className='font-serif font-bold text-lg text-zinc-900'>Sagrika Prabhu</h3>
            <p className='text-xs text-[#1B3022] font-semibold uppercase tracking-wider'>Founder & Admin</p>
          </div>
        </div>

        {/* Founder Bio Content */}
        <div className='space-y-5'>
          <div className='inline-flex items-center gap-2 text-amber-600 font-semibold text-sm'>
            <Sparkles className='size-4' />
            <span>Meet Our Admin & Visionary</span>
          </div>

          <h2 className='text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-snug'>
            A Passion for Timeless Jewellery & Royal Elegance
          </h2>

          <p className='text-sm text-zinc-600 leading-relaxed'>
            Founded by <span className='font-semibold text-zinc-900'>Sagrika Prabhu</span>, Sagar Ratna was established with a singular vision: to preserve the glorious heritage of traditional Indian jewellery while tailoring every piece to modern perfection.
          </p>

          <p className='text-sm text-zinc-600 leading-relaxed'>
            Under Sagrika's leadership, every single creation undergoes rigorous quality inspection, hallmarking, and gemological certification, ensuring that our customers receive authentic treasures meant to last generations.
          </p>

          <div className='pt-2 flex items-center gap-8 text-zinc-800'>
            <div>
              <p className='text-2xl font-bold font-serif text-[#1B3022]'>100%</p>
              <p className='text-xs text-zinc-500'>Hallmarked Gold</p>
            </div>
            <div className='h-8 w-px bg-zinc-300' />
            <div>
              <p className='text-2xl font-bold font-serif text-[#1B3022]'>5,000+</p>
              <p className='text-xs text-zinc-500'>Happy Clients</p>
            </div>
          </div>
        </div>

      </div>

      {/* Core Values */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='p-6 bg-white border border-zinc-200 rounded-2xl space-y-3'>
          <div className='p-3 bg-amber-100 text-amber-900 rounded-xl w-fit'>
            <Award className='size-6' />
          </div>
          <h3 className='text-lg font-bold text-zinc-900'>Handcrafted Perfection</h3>
          <p className='text-sm text-zinc-500 leading-relaxed'>
            Each piece is meticulously crafted by master artisans in Johari Bazaar using traditional techniques.
          </p>
        </div>

        <div className='p-6 bg-white border border-zinc-200 rounded-2xl space-y-3'>
          <div className='p-3 bg-emerald-100 text-[#1B3022] rounded-xl w-fit'>
            <ShieldCheck className='size-6' />
          </div>
          <h3 className='text-lg font-bold text-zinc-900'>BIS Hallmarked Purity</h3>
          <p className='text-sm text-zinc-500 leading-relaxed'>
            Guaranteed purity with 100% BIS Hallmarked gold and certified conflict-free diamonds.
          </p>
        </div>

        <div className='p-6 bg-white border border-zinc-200 rounded-2xl space-y-3'>
          <div className='p-3 bg-rose-100 text-rose-900 rounded-xl w-fit'>
            <Heart className='size-6' />
          </div>
          <h3 className='text-lg font-bold text-zinc-900'>Customer First Trust</h3>
          <p className='text-sm text-zinc-500 leading-relaxed'>
            Personalized customer assistance and insured doorstep delivery for all your precious orders.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About
