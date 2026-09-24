import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, UserIcon, SearchIcon, ShoppingCartIcon, ChevronDownIcon, XIcon, MenuIcon, MapPinIcon, PackageIcon, ArrowRightIcon, TagIcon, ShieldIcon, LogOutIcon } from 'lucide-react';
import { assets } from '../assets/assets';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useProducts } from '../context/ProductContext';

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const { getCartCount } = useCart();
  const { wishlist } = useWishlist();
  const { searchQuery, setSearchQuery } = useProducts();

  const cartCount = getCartCount();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    setUserMenuOpen(false);
    logoutUser();
    navigate('/');
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
            <Link
              to='/cart'
              className='relative p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer'
            >
              <ShoppingCartIcon className='size-5 text-zinc-900' />
              {cartCount > 0 && (
                <span className='absolute -top-1 -right-1 size-4 bg-[#142419] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs'>
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <div className='relative'>
              {
                user ? (
                  <button onClick={() => setUserMenuOpen(!userMenuOpen)} className='flex items-center gap-2 p-2 cursor-pointer'>
                    <div className='size-7 rounded-full bg-[#142419] text-white flex items-center justify-center font-semibold text-sm shadow-xs'>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <ChevronDownIcon className='size-3 text-zinc-500' />
                  </button>
                ) : (
                  <div className='flex items-center gap-2'>
                    <Link to='/login' className='hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#142419] hover:bg-[#0E1A12] rounded-full transition-all shadow-xs'>
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
                  <>
                    <div onClick={() => setUserMenuOpen(false)}
                      className='fixed inset-0 z-40'></div>
                    <div className='absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-xl shadow-lg py-2 z-50 text-sm'>
                      {
                        user && (
                          <div className='px-4 py-2 border-b border-app-border'>
                            <p className='font-semibold text-zinc-800'>{user?.name}</p>
                            <p className='text-xs text-zinc-500 truncate'>{user?.email}</p>
                          </div>
                        )
                      }
                      <div onClick={() => setUserMenuOpen(false)}>
                        {!user &&
                          <Link to='/login'
                            className='dropdown-link'>
                            <UserIcon size={16} />
                            Sign In
                          </Link>}

                        {user &&
                          <Link to='/my-orders'
                            className='dropdown-link'>
                            <PackageIcon size={16} />
                            My Orders
                          </Link>}

                        {user &&
                          <Link to='/addresses'
                            className='dropdown-link'>
                            <MapPinIcon size={16} />
                            Addresses
                          </Link>}

                        {user &&
                          <Link to='/products'
                            className='dropdown-link'>
                            <ArrowRightIcon size={16} />
                            Products
                          </Link>}


                        {user &&
                          <Link to='/deals'
                            className='dropdown-link'>
                            <TagIcon size={16} />
                            Deals
                          </Link>}

                        {user?.isAdmin && (
                          <Link to='/admin/products'
                            className='dropdown-link'>
                            <ShieldIcon className='text-[#1B3022]'
                              size={16} />
                            <span className='text-zinc-800 hover:text-[#1B3022] font-semibold'>
                              Admin Panel
                            </span>
                          </Link>
                        )}

                        {user && (
                          <div className='border-t border-app-border pt-1'>
                            <button onClick={handleLogout}
                              className='flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 w-full transition-colors cursor-pointer'>
                              <LogOutIcon size={16} />
                              <span>Logout</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )
              }
            </div>

            {/* Wishlist */}
            <Link to='/wishlist' className='relative p-2 hover:bg-zinc-100 rounded-full transition-colors' title='Wishlist'>
              <Heart className='size-5' />
              {wishlist.length > 0 && (
                <span className='absolute -top-1 -right-1 size-4 bg-amber-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center'>
                  {wishlist.length}
                </span>
              )}
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
