import React, { useState } from 'react';
import { addressDummyData } from '../assets/assets';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import { useOrders } from '../context/OrderContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartAmount, getDeliveryFee, clearCart } = useCart();
  const { products, currency } = useProducts();
  const { placeOrder } = useOrders();

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);

  const cartData = [];
  for (const id in cartItems) {
    if (cartItems[id] > 0) {
      const product = products.find((p) => p.id === id);
      if (product) {
        cartData.push({ product, quantity: cartItems[id] });
      }
    }
  }

  const subtotal = getCartAmount(products);
  const shipping = getDeliveryFee(subtotal);
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartData.length === 0) return;
    setLoading(true);

    setTimeout(() => {
      const success = placeOrder({
        cartItems,
        products,
        paymentMethod,
        deliveryFee: shipping,
        clearCart,
      });
      if (success) {
        navigate('/my-orders');
      } else {
        setLoading(false);
      }
    }, 1000);
  };

  if (cartData.length === 0) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-20 text-center space-y-4'>
        <h2 className='text-2xl font-serif font-bold text-zinc-800'>No items to checkout</h2>
        <p className='text-sm text-zinc-500'>Please add items to your cart before proceeding to checkout.</p>
        <Link to='/products' className='inline-block px-6 py-3 bg-[#1B3022] text-white text-sm font-semibold rounded-xl'>
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-8'>Checkout</h1>

      <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* Left Form: Delivery Address & Payment */}
        <div className='lg:col-span-2 space-y-8'>
          
          {/* Shipping Address */}
          <div className='bg-white border border-zinc-200 rounded-2xl p-6 space-y-4'>
            <h2 className='text-lg font-serif font-bold text-zinc-900 flex items-center gap-2'>
              <Truck className='size-5 text-[#1B3022]' />
              <span>Shipping Address</span>
            </h2>

            <div className='p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1 text-sm text-zinc-700'>
              <p className='font-semibold text-zinc-900'>{addressDummyData.name}</p>
              <p>{addressDummyData.street}, {addressDummyData.city}, {addressDummyData.state} {addressDummyData.zip}</p>
              <p>{addressDummyData.country} • {addressDummyData.phone}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className='bg-white border border-zinc-200 rounded-2xl p-6 space-y-4'>
            <h2 className='text-lg font-serif font-bold text-zinc-900 flex items-center gap-2'>
              <CreditCard className='size-5 text-[#1B3022]' />
              <span>Payment Method</span>
            </h2>

            <div className='space-y-3'>
              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-[#1B3022] bg-emerald-50/50' : 'border-zinc-200'}`}>
                <input type='radio' name='payment' value='cod' checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                <div className='text-sm'>
                  <p className='font-semibold text-zinc-900'>Cash on Delivery (COD)</p>
                  <p className='text-xs text-zinc-500'>Pay when your jewellery is delivered safely</p>
                </div>
              </label>

              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-[#1B3022] bg-emerald-50/50' : 'border-zinc-200'}`}>
                <input type='radio' name='payment' value='card' checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                <div className='text-sm'>
                  <p className='font-semibold text-zinc-900'>Credit / Debit Card / UPI</p>
                  <p className='text-xs text-zinc-500'>Secure online payment gateway</p>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Right Summary */}
        <div className='bg-zinc-50 border border-zinc-200 rounded-2xl p-6 h-fit space-y-6'>
          <h2 className='text-lg font-serif font-bold text-zinc-900 pb-3 border-b border-zinc-200'>Order Details</h2>

          <div className='space-y-3 max-h-60 overflow-y-auto pr-1'>
            {cartData.map(({ product, quantity }) => (
              <div key={product.id} className='flex items-center gap-3 text-sm'>
                <img src={product.images[0]} alt={product.name} className='size-12 object-cover rounded-lg bg-white border' />
                <div className='flex-1 min-w-0'>
                  <p className='font-medium text-zinc-800 truncate'>{product.name}</p>
                  <p className='text-xs text-zinc-400'>Qty: {quantity}</p>
                </div>
                <span className='font-semibold text-zinc-900'>{currency}{product.price * quantity}</span>
              </div>
            ))}
          </div>

          <div className='pt-4 border-t border-zinc-200 space-y-2 text-sm text-zinc-600'>
            <div className='flex justify-between'><span>Subtotal</span><span>{currency}{subtotal}</span></div>
            <div className='flex justify-between items-center'>
              <span>Insured Delivery</span>
              <span>
                {shipping === 0 ? (
                  <span className='text-emerald-700 font-bold uppercase text-xs bg-emerald-100 px-2 py-0.5 rounded'>
                    FREE
                  </span>
                ) : (
                  `${currency}${shipping}`
                )}
              </span>
            </div>
            <div className='flex justify-between font-bold text-base text-zinc-900 pt-2 border-t'><span>Total</span><span>{currency}{total}</span></div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full py-3.5 bg-[#142419] hover:bg-[#0E1A12] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm hover:shadow-md disabled:opacity-50'
          >
            {loading ? <span>Processing Order...</span> : <span>Place Order</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;