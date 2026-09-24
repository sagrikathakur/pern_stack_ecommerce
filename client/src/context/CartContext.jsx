import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const useCartContext = useCart;

export const CartProvider = ({ children }) => {
  const base_delivery_fee = 15;
  const free_shipping_threshold = 800;
  const currency = '$';

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('sr_cart');
    return savedCart
      ? JSON.parse(savedCart)
      : {
          prod_1: 1,
          prod_3: 1,
        };
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('sr_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId, quantity = 1, productName = '') => {
    setCartItems((prev) => {
      const currentQty = prev[productId] || 0;
      return { ...prev, [productId]: currentQty + quantity };
    });
    toast.success(`${productName || 'Item'} added to cart!`);
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (quantity <= 0) {
        delete updated[productId];
      } else {
        updated[productId] = quantity;
      }
      return updated;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
    toast.success('Item removed from cart');
  };

  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem('sr_cart');
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        totalCount += cartItems[id];
      }
    }
    return totalCount;
  };

  const getCartAmount = (products = []) => {
    let totalAmount = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const itemInfo = products.find((product) => product.id === id);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[id];
        }
      }
    }
    return totalAmount;
  };

  const getDeliveryFee = (subtotal = 0) => {
    if (subtotal <= 0) return 0;
    if (subtotal > free_shipping_threshold) return 0;
    return base_delivery_fee;
  };

  const value = {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    delivery_fee: base_delivery_fee,
    base_delivery_fee,
    free_shipping_threshold,
    getDeliveryFee,
    currency,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartCount,
    getCartAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
