import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const useWishlistContext = useWishlist;

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('sr_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : ['prod_2', 'prod_4', 'prod_6'];
  });

  useEffect(() => {
    localStorage.setItem('sr_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (productId, productName = '') => {
    if (!wishlist.includes(productId)) {
      setWishlist((prev) => [...prev, productId]);
      toast.success(`${productName || 'Item'} added to wishlist!`);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    toast.success('Removed from wishlist');
  };

  const toggleWishlist = (productId, productName = '') => {
    if (wishlist.includes(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId, productName);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  const value = {
    wishlist,
    setWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    getWishlistCount,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export default WishlistProvider;
