import React, { createContext, useContext, useState } from 'react';
import { productDummyData } from '../assets/assets';
import { toast } from 'react-hot-toast';

export const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const useProductContext = useProducts;

export const ProductProvider = ({ children }) => {
  const currency = '$';
  const [products, setProducts] = useState(productDummyData);
  const [searchQuery, setSearchQuery] = useState('');

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

  const value = {
    products,
    setProducts,
    searchQuery,
    setSearchQuery,
    currency,
    addProduct,
    deleteProduct,
    toggleStock,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
