import React, { createContext, useContext, useState } from 'react';
import { productDummyData, orderDummyData, addressDummyData } from '../assets/assets';
import { toast } from 'react-hot-toast';

export const ShopContext = createContext();

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShopContext must be used within a ShopContextProvider');
  }
  return context;
};

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 15;

  // Products State
  const [products, setProducts] = useState(productDummyData);

  // User & Auth State
  const [user, setUser] = useState({
    name: 'Sagrika',
    email: 'sagrikathakur68@gmail.com',
    isAdmin: true,
  });

  // Cart State: { [productId]: quantity }
  const [cartItems, setCartItems] = useState({
    prod_1: 1,
    prod_3: 1,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist State: array of productIds
  const [wishlist, setWishlist] = useState(['prod_2', 'prod_4', 'prod_6']);

  // Orders State
  const [orders, setOrders] = useState(orderDummyData);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Cart Helper Functions
  const addToCart = (productId, quantity = 1) => {
    setCartItems((prev) => {
      const currentQty = prev[productId] || 0;
      return { ...prev, [productId]: currentQty + quantity };
    });
    const item = products.find((p) => p.id === productId);
    toast.success(`${item ? item.name : 'Item'} added to cart!`);
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

  const getCartAmount = () => {
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

  // Wishlist Functions
  const addToWishlist = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist((prev) => [...prev, productId]);
      const item = products.find((p) => p.id === productId);
      toast.success(`${item ? item.name : 'Item'} added to wishlist!`);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    toast.success('Removed from wishlist');
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  // Product Admin Functions
  const addProduct = (newProduct) => {
    const created = {
      id: `prod_${Date.now()}`,
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      mrp: Number(newProduct.mrp) || Number(newProduct.price) + 50,
      description: newProduct.description || 'Exclusive handcrafted jewellery item.',
      images: newProduct.images || [products[0]?.images[0]],
      inStock: newProduct.inStock ?? true,
    };
    setProducts((prev) => [created, ...prev]);
    toast.success('Product added successfully!');
  };

  const deleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    toast.success('Product deleted successfully');
  };

  const toggleStock = (productId) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, inStock: !p.inStock } : p))
    );
    toast.success('Product stock status updated');
  };

  // Auth Functions
  const loginUser = (userData) => {
    setUser(userData);
    toast.success(`Welcome back, ${userData.name || 'User'}!`);
  };

  const logoutUser = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  // Order Function
  const placeOrder = (paymentMethod) => {
    const orderItems = [];
    for (const id in cartItems) {
      const product = products.find((p) => p.id === id);
      if (product && cartItems[id] > 0) {
        orderItems.push({
          product,
          quantity: cartItems[id],
          price: product.price,
        });
      }
    }

    if (orderItems.length === 0) {
      toast.error('Your cart is empty');
      return false;
    }

    const subtotal = getCartAmount();
    const newOrder = {
      id: `ORD_${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toString(),
      status: 'Order Placed',
      total: subtotal + delivery_fee,
      paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment',
      orderItems,
      shippingAddress: addressDummyData,
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    toast.success('Order placed successfully!');
    return true;
  };

  const value = {
    currency,
    delivery_fee,
    products,
    setProducts,
    addProduct,
    deleteProduct,
    toggleStock,
    user,
    setUser,
    isLoggedIn: Boolean(user),
    loginUser,
    logoutUser,
    cartItems,
    setCartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartCount,
    getCartAmount,
    isCartOpen,
    setIsCartOpen,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    orders,
    placeOrder,
    searchQuery,
    setSearchQuery,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
