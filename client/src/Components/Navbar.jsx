import React, { useCallback, useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, UserIcon, Menu, X, SearchIcon, ShoppingCartIcon, ChevronDownIcon, XIcon, MenuIcon } from 'lucide-react';
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
                className='w-full pl-8 rounded-full text-sm bg-transparent outline-none ring-app-orange/15'
              />
            </div>
          </form>

          {/* right actions */}
          <div className='flex items-center gap-3 text-zinc-700'>
            {/* button cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className='relative p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer'
            >
              <ShoppingCartIcon className='size-5 text-zinc-900' />
              {cartCount > 0 &&
                <span className='absolute -top-1 -right-1 size-4 bg-app-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center'>
                  {cartCount}
                </span>
              }
            </button>

            {/* User Account */}
            <div className='relative'>
              {
                user ? (
                  <button onClick={() => setUserMenuOpen(!userMenuOpen)} className='flex items-center gap-2 p-2 cursor-pointer'>
                    <div className='size-7 rounded-full bg-green-950 text-white flex items-center justify-center font-semibold text-sm'>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <ChevronDownIcon className='size-3 text-zinc-500' />
                  </button>
                ) : (
                  <div className='flex items-center gap-2'>
                    <Link to='/login' className='hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-950 rounded-full hover:bg-green-900 transition-colors'>
                      <UserIcon size={16} />Sign In
                    </Link>
                    {
                      userMenuOpen ? <XIcon className='md:hidden cursor-pointer' onClick={() => setUserMenuOpen(!userMenuOpen)} />
                        : <MenuIcon className='md:hidden cursor-pointer' onClick={() => setUserMenuOpen(!userMenuOpen)} />
                    }
                  </div>
                )
              }

              {/* drop down */}
              {
                userMenuOpen && (
                  <div className='absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg py-2 z-50 text-sm'>
                    <div className='px-4 py-2 border-b border-zinc-100'>
                      <p className='font-semibold text-zinc-800'>{user ? user.name : 'Guest'}</p>
                      <p className='text-xs text-zinc-500 truncate'>{user ? user.email : ''}</p>
                    </div>

                    {user ? (
                      <>
                        <Link
                          to='/my-orders'
                          onClick={() => setUserMenuOpen(false)}
                          className='block px-4 py-2 text-zinc-700 hover:bg-zinc-50 transition-colors'
                        >
                          My Orders
                        </Link>
                        <Link
                          to='/wishlist'
                          onClick={() => setUserMenuOpen(false)}
                          className='block px-4 py-2 text-zinc-700 hover:bg-zinc-50 transition-colors'
                        >
                          Wishlist
                        </Link>
                        {user.isAdmin && (
                          <Link
                            to='/admin'
                            onClick={() => setUserMenuOpen(false)}
                            className='block px-4 py-2 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors'
                          >
                            Admin Dashboard
                          </Link>
                        )}
                        <button
                          onClick={() => setUserMenuOpen(false)}
                          className='w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors border-t border-zinc-100 mt-1 cursor-pointer'
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link
                        to='/login'
                        onClick={() => setUserMenuOpen(false)}
                        className='block px-4 py-2 text-zinc-700 hover:bg-zinc-50 transition-colors'
                      >
                        Sign In / Register
                      </Link>
                    )}
                  </div>
                )
              }
            </div>

            {/* Wishlist */}
            <Link to='/wishlist' className='p-2 hover:bg-zinc-100 rounded-full transition-colors' title='Wishlist'>
              <Heart className='size-5' />
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;