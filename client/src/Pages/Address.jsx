import React, { useState } from 'react'
import { addressDummyData } from '../assets/assets'
import { MapPin, Plus } from 'lucide-react'

const Address = () => {
  const [addresses, setAddresses] = useState([addressDummyData])
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  })

  const handleAddAddress = (e) => {
    e.preventDefault()
    setAddresses([...addresses, { ...formData, id: `addr_${Date.now()}` }])
    setShowModal(false)
    setFormData({ name: '', street: '', city: '', state: '', zip: '', phone: '' })
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-serif font-bold text-zinc-900'>Saved Addresses</h1>
          <p className='text-sm text-zinc-500 mt-1'>Manage your delivery locations</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className='inline-flex items-center gap-2 px-5 py-2.5 bg-[#142419] hover:bg-[#0E1A12] text-white text-sm font-semibold rounded-xl cursor-pointer transition-all shadow-xs'
        >
          <Plus className='size-4' />
          <span>Add New Address</span>
        </button>
      </div>

      {/* Address List */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {addresses.map((addr) => (
          <div key={addr.id} className='p-6 bg-white border border-zinc-200 rounded-2xl space-y-2 relative'>
            <div className='flex items-center gap-2 text-[#1B3022] font-semibold mb-3'>
              <MapPin className='size-5' />
              <span>{addr.name}</span>
            </div>
            <p className='text-sm text-zinc-700'>{addr.street}</p>
            <p className='text-sm text-zinc-700'>{addr.city}, {addr.state} {addr.zip}</p>
            <p className='text-sm text-zinc-500 pt-2 border-t border-zinc-100'>Phone: {addr.phone}</p>
          </div>
        ))}
      </div>

      {/* Add Address Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl max-w-md w-full p-6 space-y-4'>
            <h2 className='text-xl font-serif font-bold text-zinc-900'>Add Delivery Address</h2>
            <form onSubmit={handleAddAddress} className='space-y-3'>
              <input
                type='text'
                placeholder='Full Name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                required
              />
              <input
                type='text'
                placeholder='Street Address'
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                required
              />
              <div className='grid grid-cols-2 gap-2'>
                <input
                  type='text'
                  placeholder='City'
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                  required
                />
                <input
                  type='text'
                  placeholder='State'
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                  required
                />
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <input
                  type='text'
                  placeholder='Zip Code'
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                  required
                />
                <input
                  type='text'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className='w-full p-3 border border-zinc-300 rounded-xl text-sm outline-none'
                  required
                />
              </div>

              <div className='flex gap-3 pt-4'>
                <button
                  type='button'
                  onClick={() => setShowModal(false)}
                  className='flex-1 py-3 border border-zinc-300 text-zinc-700 text-sm font-semibold rounded-xl'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='flex-1 py-3 bg-[#142419] hover:bg-[#0E1A12] text-white text-sm font-semibold rounded-xl cursor-pointer transition-colors'
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Address