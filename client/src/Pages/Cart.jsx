import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartAmount,
    getDeliveryFee,
    free_shipping_threshold,
  } = useCart();
  const { products, currency } = useProducts();

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

  const isFreeDelivery = subtotal > free_shipping_threshold;
  const amountNeededForFreeDelivery = free_shipping_threshold - subtotal;

  if (cartData.length === 0) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-20 text-center space-y-4'>
        <ShoppingBag className='size-16 mx-auto text-zinc-300' />
        <h2 className='text-2xl font-serif font-bold text-zinc-800'>Your Cart is Empty</h2>
        <p className='text-sm text-zinc-500 max-w-sm mx-auto'>
          Looks like you haven't added any jewellery items to your cart yet.
        </p>
        <Link
          to='/products'
          className='inline-flex items-center gap-2 px-6 py-3 bg-[#142419] hover:bg-[#0E1A12] text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md transition-all'
        >
          <span>Explore Collection</span>
          <ArrowRight className='size-4' />
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <h1 className='text-3xl font-serif font-bold text-zinc-900 mb-8'>Shopping Cart</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* Left: Cart Items List */}
        <div className='lg:col-span-2 space-y-4'>
          {/* Free Shipping Alert Banner */}
          <div
            className={`p-4 rounded-xl border flex items-center gap-3 text-sm ${
              isFreeDelivery
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-amber-50/80 border-amber-200 text-amber-900'
            }`}
          >
            {isFreeDelivery ? (
              <>
                <Sparkles className='size-5 text-emerald-600 shrink-0' />
                <div>
                  <p className='font-semibold'>Congratulations! You've unlocked FREE Insured Delivery!</p>
                  <p className='text-xs text-emerald-700'>Your bag total exceeds {currency}{free_shipping_threshold}.</p>
                </div>
              </>
            ) : (
              <>
                <Truck className='size-5 text-amber-700 shrink-0' />
                <div>
                  <p className='font-semibold'>
                    Add {currency}{amountNeededForFreeDelivery} more to get FREE Insured Delivery!
                  </p>
                  <p className='text-xs text-amber-700'>Free delivery applies on bag total over {currency}{free_shipping_threshold}.</p>
                </div>
              </>
            )}
          </div>

          {cartData.map(({ product, quantity }) => (
            <div
              key={product.id}
              className='flex items-center gap-4 p-4 bg-white border border-zinc-200 rounded-xl'
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className='size-20 object-cover rounded-lg bg-zinc-100 shrink-0'
              />

              <div className='flex-1 min-w-0'>
                <h3 className='text-sm font-semibold text-zinc-900 truncate'>{product.name}</h3>
                <p className='text-xs text-zinc-400 capitalize'>{product.category}</p>
                <p className='text-sm font-bold text-zinc-900 mt-1'>
                  {currency}{product.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className='flex items-center border border-zinc-200 rounded-lg overflow-hidden shrink-0'>
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className='px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-sm font-bold cursor-pointer'
                >
                  -
                </button>
                <span className='px-3 py-1 text-xs font-semibold'>{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className='px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-sm font-bold cursor-pointer'
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(product.id)}
                className='p-2 text-zinc-400 hover:text-red-600 transition-colors cursor-pointer shrink-0'
              >
                <Trash2 className='size-4' />
              </button>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className='bg-zinc-50 border border-zinc-200 rounded-2xl p-6 h-fit space-y-4'>
          <h2 className='text-lg font-serif font-bold text-zinc-900 pb-3 border-b border-zinc-200'>
            Order Summary
          </h2>

          <div className='space-y-2 text-sm text-zinc-600'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span className='font-medium text-zinc-900'>
                {currency}{subtotal}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span>Insured Shipping</span>
              <span className='font-medium text-zinc-900'>
                {shipping === 0 ? (
                  <span className='text-emerald-700 font-bold uppercase text-xs bg-emerald-100 px-2 py-0.5 rounded'>
                    FREE
                  </span>
                ) : (
                  `${currency}${shipping}`
                )}
              </span>
            </div>
          </div>

          <div className='pt-3 border-t border-zinc-200 flex justify-between text-base font-bold text-zinc-900'>
            <span>Total</span>
            <span>
              {currency}{total}
            </span>
          </div>

          <Link
            to='/checkout'
            className='w-full py-3.5 bg-[#142419] hover:bg-[#0E1A12] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm hover:shadow-md text-center block mt-4'
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;