import React, { useCallback, useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, UserIcon, Menu, X, SearchIcon } from 'lucide-react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const user = { name: "sagrika", email: "sagrikathakur68@gmail.com", isAdmin: true }
  const { cartCount, setIsCartOpen } = {
    cartCount: 5,
    setIsCartOpen: (_data) => { }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className='bg-white sticky top-0 z-50 border-b border-app-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 gap-4'>

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={assets.gs_logo}
            alt="Sagar Ratna Logo"
            className="h-20 sm:h-42 w-auto object-contain"
          />
        </Link>

        <div className='flex items-center justify-end gap-4 lg:gap-10'>
          {/* nav links */}
          <div className='hidden md:flex items-center gap-6 text-sm text-zinc-600 font-medium'>
            <Link to='/' className='hover:text-black transition-colors'>Home</Link>
            <Link to='/products' className='hover:text-black transition-colors'>Products</Link>
            <Link to='/deals' className='hover:text-black transition-colors'>Deals</Link>
            <Link to='/about' className='hover:text-black transition-colors'>About</Link>
            <Link to='/contact' className='hover:text-black transition-colors'>Contact</Link>
          </div>

          {/* search */}


          <form onSubmit={handleSearch} className='flex items-center border border-zinc-300 bg-white shadow-sm px-3 py-1.5 rounded-full focus-within:border-app-black outline-1 outline-app-black/10 transition-all w-64 hidden sm:flex text-sm'>


            <div className='relative w-full flex items-center'>

              <SearchIcon className='absolute left-1 top-1/2 -translate-y-1/2 size-4 text-zinc-500' />
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search...'
                className='w-full pl-7 text-sm bg-transparent outline-none text-zinc-800 placeholder:text-zinc-400'
              />
            </div>





            <button type='submit' className='hidden'></button>
          </form>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;