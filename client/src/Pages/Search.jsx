import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

const Search = () => {
  const { products, currency } = useProducts();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = query.trim()
    ? products.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <div className='mb-8'>
        <h1 className='text-3xl font-serif font-bold text-zinc-900'>Search Results</h1>
        {query && (
          <p className='text-sm text-zinc-500 mt-1'>
            Showing results for <span className='font-semibold text-zinc-900'>"{query}"</span> ({results.length} found)
          </p>
        )}
      </div>

      {results.length === 0 ? (
        <div className='py-16 text-center space-y-3'>
          <SearchIcon className='size-12 text-zinc-300 mx-auto' />
          <h2 className='text-xl font-serif font-bold text-zinc-800'>No Products Found</h2>
          <p className='text-sm text-zinc-500 max-w-sm mx-auto'>
            Try searching for "Necklace", "Bridal", "Ring", "Kangan" or "Diamond".
          </p>
          <Link to='/products' className='inline-block mt-4 text-sm font-semibold text-[#1B3022] hover:underline'>
            Browse All Products →
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {results.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className='group'>
              <div className='w-full aspect-square bg-[#F9F8F6] rounded-xl overflow-hidden mb-3 border border-zinc-200 p-2'>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform'
                />
              </div>
              <h3 className='text-sm font-medium text-zinc-800 truncate'>{product.name}</h3>
              <p className='text-xs text-zinc-400 capitalize'>{product.category}</p>
              <p className='text-sm font-semibold text-zinc-900 mt-1'>
                {currency}{product.price}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;