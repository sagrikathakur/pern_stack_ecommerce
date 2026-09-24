import React, { createContext, useContext, useState } from 'react';
import { orderDummyData, addressDummyData } from '../assets/assets';
import { toast } from 'react-hot-toast';

export const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const useOrderContext = useOrders;

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(orderDummyData);

  const placeOrder = ({ cartItems, products, paymentMethod, deliveryFee = 15, clearCart }) => {
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

    const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newOrder = {
      id: `ORD_${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toString(),
      status: 'Order Placed',
      total: subtotal + deliveryFee,
      paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment',
      orderItems,
      shippingAddress: addressDummyData,
    };

    setOrders((prev) => [newOrder, ...prev]);
    if (clearCart) clearCart();
    toast.success('Order placed successfully!');
    return true;
  };

  const value = {
    orders,
    setOrders,
    placeOrder,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export default OrderProvider;
