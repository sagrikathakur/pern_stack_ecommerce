import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, ArrowLeft, Check, Heart } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, currency } = useProducts();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = products.find((p) => p.id === id) || products[0];

  const [selectedImg, setSelectedImg] = useState(product?.images?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product && product.images) {
      setSelectedImg(product.images[0]);
    }
  }, [id, product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product.id, quantity, product.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product.id, quantity, product.name);
    navigate('/cart');
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10'>
      {/* Navigation link */}
      <Link
        to='/products'
        className='inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors'
      >
        <ArrowLeft className='size-4' />
        <span>Back to Collection</span>
      </Link>

      {/* Main Product Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start'>
        {/* Gallery */}
        <div className='space-y-4'>
          <div className='w-full aspect-square bg-[#F9F8F6] border border-zinc-200/80 rounded-2xl overflow-hidden'>
            <img
              src={selectedImg}
              alt={product.name}
              className='w-full h-full object-cover transition-all duration-300'
            />
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className='flex gap-3 overflow-x-auto pb-1'>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`size-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                    selectedImg === img
                      ? 'border-[#1B3022] ring-2 ring-[#1B3022]/20'
                      : 'border-zinc-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt='' className='w-full h-full object-cover' />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className='space-y-6'>
          <div>
            <span className='inline-block text-xs font-medium tracking-wider uppercase text-zinc-600 bg-zinc-100 px-3 py-1 rounded-md mb-3'>
              {product.category}
            </span>
            <h1 className='text-2xl sm:text-4xl font-serif font-bold text-zinc-900 leading-tight'>
              {product.name}
            </h1>

            <div className='flex items-center gap-2 mt-3 text-sm'>
              <div className='flex items-center text-amber-500'>
                <Star className='size-4 fill-amber-400 text-amber-400' />
                <span className='font-semibold text-zinc-900 ml-1'>4.9</span>
              </div>
              <span className='text-zinc-300'>•</span>
              <span className='text-zinc-500 text-xs'>12 verified reviews</span>
            </div>
          </div>

          {/* Price */}
          <div className='flex items-baseline gap-3 pt-2 border-t border-zinc-100'>
            <span className='text-3xl font-bold text-zinc-900'>
              {currency}{product.price}
            </span>
            {product.mrp && (
              <span className='text-base text-zinc-400 line-through'>
                {currency}{product.mrp}
              </span>
            )}
            <span className='text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60'>
              In Stock
            </span>
          </div>

          <p className='text-sm text-zinc-600 leading-relaxed font-normal'>
            {product.description}
          </p>

          {/* Controls & Actions */}
          <div className='space-y-4 pt-4 border-t border-zinc-100'>
            {/* Quantity */}
            <div className='flex items-center gap-3'>
              <span className='text-xs font-semibold uppercase tracking-wider text-zinc-500'>
                Quantity:
              </span>
              <div className='flex items-center border border-zinc-200 rounded-lg bg-zinc-50/80'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-3 py-1 text-zinc-600 hover:text-zinc-900 font-bold text-sm cursor-pointer'
                >
                  -
                </button>
                <span className='px-3 text-sm font-semibold text-zinc-900'>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-3 py-1 text-zinc-600 hover:text-zinc-900 font-bold text-sm cursor-pointer'
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 pt-2'>
              {/* Primary: Add to Cart (Solid Deep Emerald) */}
              <button
                onClick={handleAddToCart}
                className='flex-1 py-3.5 px-6 bg-[#1B3022] hover:bg-[#122217] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs'
              >
                {added ? <Check className='size-4 text-emerald-400' /> : <ShoppingBag className='size-4' />}
                <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
              </button>

              {/* Secondary: Buy Now (Clean Dark Outline Button) */}
              <button
                onClick={handleBuyNow}
                className='flex-1 py-3.5 px-6 border border-[#1B3022] text-[#1B3022] hover:bg-[#1B3022] hover:text-white text-sm font-semibold rounded-xl flex items-center justify-center cursor-pointer transition-all'
              >
                Buy Now
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id, product.name)}
                className={`p-3.5 border rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  isInWishlist(product.id)
                    ? 'border-red-300 bg-red-50 text-red-600'
                    : 'border-zinc-200 hover:border-zinc-400 text-zinc-600'
                }`}
                title={isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`size-5 ${isInWishlist(product.id) ? 'fill-red-600' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className='pt-10 border-t border-zinc-200 space-y-6'>
          <h2 className='text-xl font-serif font-bold text-zinc-900'>Related Products</h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className='group bg-white border border-zinc-200 rounded-xl overflow-hidden p-3 hover:shadow-xs transition-shadow'
              >
                <div className='w-full aspect-square bg-zinc-50 rounded-lg overflow-hidden mb-3'>
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform'
                  />
                </div>
                <h3 className='text-xs sm:text-sm font-semibold text-zinc-800 truncate group-hover:text-[#1B3022]'>
                  {item.name}
                </h3>
                <p className='text-xs text-zinc-400 capitalize mt-0.5'>{item.category}</p>
                <p className='text-sm font-bold text-zinc-900 mt-1'>
                  {currency}{item.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;