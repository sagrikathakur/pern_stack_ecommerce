import React, { useState, useContext } from 'react'
import { categories, dummyAdminDashboardData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Plus, Trash2, Shield, Package, DollarSign, ShoppingCart, CheckCircle, XCircle } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

const AdminProducts = () => {
  const { products, addProduct, deleteProduct, toggleStock, currency } = useContext(ShopContext)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Necklaces',
    price: '',
    mrp: '',
    description: '',
    inStock: true
  })

  const handleDelete = (id) => {
    deleteProduct(id)
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    if (!newProduct.name || !newProduct.price) return

    addProduct(newProduct)
    setShowAddModal(false)
    setNewProduct({ name: '', category: 'Necklaces', price: '', mrp: '', description: '', inStock: true })
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8'>
      
      {/* Admin Title & Bar */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200'>
        <div>
          <div className='inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-semibold rounded-full mb-2'>
            <Shield className='size-3.5' />
            <span>Admin Portal</span>
          </div>
          <h1 className='text-3xl font-serif font-bold text-zinc-900'>Products Management</h1>
          <p className='text-sm text-zinc-500 mt-1'>Manage inventory, add new products, and track stock status</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className='inline-flex items-center gap-2 px-6 py-3 bg-[#1B3022] hover:bg-[#14251A] text-white text-sm font-semibold rounded-xl cursor-pointer transition-colors shadow-md'
        >
          <Plus className='size-4' />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Admin Dashboard Stats Bar */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='p-5 bg-white border border-zinc-200 rounded-2xl flex items-center gap-4'>
          <div className='p-3 bg-emerald-100 text-[#1B3022] rounded-xl'><Package className='size-6' /></div>
          <div>
            <p className='text-xs text-zinc-400 font-medium uppercase'>Total Products</p>
            <p className='text-2xl font-bold text-zinc-900'>{products.length}</p>
          </div>
        </div>

        <div className='p-5 bg-white border border-zinc-200 rounded-2xl flex items-center gap-4'>
          <div className='p-3 bg-amber-100 text-amber-900 rounded-xl'><ShoppingCart className='size-6' /></div>
          <div>
            <p className='text-xs text-zinc-400 font-medium uppercase'>Total Orders</p>
            <p className='text-2xl font-bold text-zinc-900'>{dummyAdminDashboardData.orders}</p>
          </div>
        </div>

        <div className='p-5 bg-white border border-zinc-200 rounded-2xl flex items-center gap-4'>
          <div className='p-3 bg-blue-100 text-blue-900 rounded-xl'><DollarSign className='size-6' /></div>
          <div>
            <p className='text-xs text-zinc-400 font-medium uppercase'>Total Revenue</p>
            <p className='text-2xl font-bold text-zinc-900'>${dummyAdminDashboardData.revenue}</p>
          </div>
        </div>

        <div className='p-5 bg-white border border-zinc-200 rounded-2xl flex items-center gap-4'>
          <div className='p-3 bg-purple-100 text-purple-900 rounded-xl'><Shield className='size-6' /></div>
          <div>
            <p className='text-xs text-zinc-400 font-medium uppercase'>Active Stores</p>
            <p className='text-2xl font-bold text-zinc-900'>{dummyAdminDashboardData.stores}</p>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className='bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm'>
        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm text-zinc-700'>
            <thead className='bg-zinc-50 border-b border-zinc-200 text-xs font-semibold text-zinc-500 uppercase tracking-wider'>
              <tr>
                <th className='p-4'>Product</th>
                <th className='p-4'>Category</th>
                <th className='p-4'>Price</th>
                <th className='p-4'>Stock Status</th>
                <th className='p-4 text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-zinc-100'>
              {products.map((product) => (
                <tr key={product.id} className='hover:bg-zinc-50/80 transition-colors'>
                  <td className='p-4 flex items-center gap-3'>
                    <img src={product.images[0]} alt='' className='size-12 object-cover rounded-lg bg-zinc-100 border' />
                    <div>
                      <p className='font-semibold text-zinc-900 truncate max-w-xs'>{product.name}</p>
                      <p className='text-xs text-zinc-400'>ID: {product.id}</p>
                    </div>
                  </td>
                  <td className='p-4'>
                    <span className='px-2.5 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full'>
                      {product.category}
                    </span>
                  </td>
                  <td className='p-4 font-semibold text-zinc-900'>
                    {currency}{product.price}
                    {product.mrp && <span className='text-xs text-zinc-400 line-through ml-2'>{currency}{product.mrp}</span>}
                  </td>
                  <td className='p-4'>
                    <button
                      onClick={() => toggleStock(product.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full cursor-pointer ${
                        product.inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.inStock ? <CheckCircle className='size-3.5' /> : <XCircle className='size-3.5' />}
                      <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </button>
                  </td>
                  <td className='p-4 text-right'>
                    <div className='flex items-center justify-end gap-2'>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className='p-2 text-zinc-400 hover:text-red-600 transition-colors cursor-pointer rounded-lg hover:bg-zinc-100'
                        title='Delete Product'
                      >
                        <Trash2 className='size-4' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl'>
            <h2 className='text-xl font-serif font-bold text-zinc-900'>Add New Jewellery Product</h2>
            
            <form onSubmit={handleAddProduct} className='space-y-4'>
              <div>
                <label className='text-xs font-semibold text-zinc-600 mb-1 block'>Product Name</label>
                <input
                  type='text'
                  placeholder='e.g. Kundan Gold Choker Set'
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                  required
                />
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label className='text-xs font-semibold text-zinc-600 mb-1 block'>Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none bg-white'
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='text-xs font-semibold text-zinc-600 mb-1 block'>Price ($)</label>
                  <input
                    type='number'
                    placeholder='299'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                    required
                  />
                </div>
              </div>

              <div>
                <label className='text-xs font-semibold text-zinc-600 mb-1 block'>Description</label>
                <textarea
                  rows='3'
                  placeholder='Enter detailed product description...'
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                />
              </div>

              <div className='flex items-center gap-2 pt-2'>
                <input
                  type='checkbox'
                  id='stockToggle'
                  checked={newProduct.inStock}
                  onChange={(e) => setNewProduct({ ...newProduct, inStock: e.target.checked })}
                  className='size-4 text-[#1B3022] rounded'
                />
                <label htmlFor='stockToggle' className='text-sm text-zinc-700 font-medium'>In Stock</label>
              </div>

              <div className='flex gap-3 pt-4 border-t border-zinc-100'>
                <button
                  type='button'
                  onClick={() => setShowAddModal(false)}
                  className='flex-1 py-3 border border-zinc-300 text-zinc-700 text-sm font-semibold rounded-xl'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='flex-1 py-3 bg-[#1B3022] text-white text-sm font-semibold rounded-xl'
                >
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default AdminProducts
