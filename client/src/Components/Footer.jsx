import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-[#1B3022] text-white pt-12 pb-6 mt-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Footer Content Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-emerald-900'>

          {/* Logo & Info */}
          <div>
            <img src={assets.gs_logo} alt="Sagar Ratna" className='h-30' />
            <p className='text-sm text-gray-300 leading-relaxed'>
              Sagar Ratna - Handcrafted gold, kundan & certified diamond jewellery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li><Link to='/' className='hover:text-white transition-colors'>Home</Link></li>
              <li><Link to='/products' className='hover:text-white transition-colors'>Products</Link></li>
              <li><Link to='/deals' className='hover:text-white transition-colors'>Deals</Link></li>
              <li><Link to='/about' className='hover:text-white transition-colors'>About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3'>Categories</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li><Link to='/products?category=Necklaces' className='hover:text-white transition-colors'>Necklaces</Link></li>
              <li><Link to='/products?category=Bridal%20Sets' className='hover:text-white transition-colors'>Bridal Sets</Link></li>
              <li><Link to='/products?category=Earrings' className='hover:text-white transition-colors'>Earrings</Link></li>
              <li><Link to='/products?category=Rings' className='hover:text-white transition-colors'>Rings</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3'>Contact Us</h3>
            <p className='text-sm text-gray-300'>12 Johari Bazaar, Jaipur, RJ</p>
            <p className='text-sm text-gray-300 mt-1'>Email: sagrikathakur68@gmail.com</p>
            <p className='text-sm text-gray-300 mt-1'>Phone: +91 9876543210</p>
          </div>

        </div>

        {/* Copyright */}
        <div className='pt-6 text-center text-xs text-gray-400'>
          <p>© {new Date().getFullYear()} Sagar Ratna. All rights reserved. Developed & Design by Sagrika Prabhu</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer