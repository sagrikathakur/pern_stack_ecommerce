import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }
    toast.success('Thank you! Your message has been sent successfully.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12'>
      
      {/* Header */}
      <div className='text-center max-w-2xl mx-auto space-y-3'>
        <span className='px-4 py-1.5 bg-emerald-100 text-[#1B3022] text-xs font-semibold rounded-full uppercase tracking-wider'>
          Get In Touch
        </span>
        <h1 className='text-3xl sm:text-5xl font-serif font-bold text-zinc-900'>
          Contact Sagar Ratna
        </h1>
        <p className='text-base text-zinc-600'>
          Have questions about our custom jewellery, order status, or boutique visits? We'd love to hear from you.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
        
        {/* Contact Info Cards */}
        <div className='space-y-6'>
          <h2 className='text-2xl font-serif font-bold text-zinc-900'>Contact Information</h2>
          <p className='text-sm text-zinc-600 leading-relaxed'>
            Reach out to our customer care team or visit our flagship boutique in Jaipur for bespoke jewellery consultations.
          </p>

          <div className='space-y-4 pt-2'>
            <div className='flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-200 rounded-2xl'>
              <div className='p-3 bg-amber-100 text-amber-900 rounded-xl'>
                <MapPin className='size-5' />
              </div>
              <div>
                <h3 className='font-bold text-zinc-900 text-base'>Store Address</h3>
                <p className='text-sm text-zinc-600 mt-1'>
                  Sagar Ratna Jewellery House<br />
                  104 Johari Bazaar, Near Hawa Mahal<br />
                  Jaipur, Rajasthan 302003, India
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-200 rounded-2xl'>
              <div className='p-3 bg-emerald-100 text-[#1B3022] rounded-xl'>
                <Mail className='size-5' />
              </div>
              <div>
                <h3 className='font-bold text-zinc-900 text-base'>Email Us</h3>
                <p className='text-sm text-zinc-600 mt-1'>sagrikathakur68@gmail.com</p>
                <p className='text-xs text-zinc-400 mt-0.5'>We reply within 24 hours</p>
              </div>
            </div>

            <div className='flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-200 rounded-2xl'>
              <div className='p-3 bg-blue-100 text-blue-900 rounded-xl'>
                <Phone className='size-5' />
              </div>
              <div>
                <h3 className='font-bold text-zinc-900 text-base'>Call / WhatsApp</h3>
                <p className='text-sm text-zinc-600 mt-1'>+91 9876543210</p>
                <p className='text-xs text-zinc-400 mt-0.5'>Mon - Sat (10:00 AM to 7:00 PM IST)</p>
              </div>
            </div>

            <div className='flex items-start gap-4 p-5 bg-zinc-50 border border-zinc-200 rounded-2xl'>
              <div className='p-3 bg-purple-100 text-purple-900 rounded-xl'>
                <Clock className='size-5' />
              </div>
              <div>
                <h3 className='font-bold text-zinc-900 text-base'>Working Hours</h3>
                <p className='text-sm text-zinc-600 mt-1'>Monday to Saturday: 10:00 AM – 7:30 PM</p>
                <p className='text-xs text-zinc-500 mt-0.5'>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className='bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm space-y-6'>
          <div>
            <h2 className='text-2xl font-serif font-bold text-zinc-900'>Send Us a Message</h2>
            <p className='text-sm text-zinc-500 mt-1'>Fill out the form below and our customer support will connect with you.</p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5'>
                Your Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='e.g. Ananya Sharma'
                className='w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3022]/20 focus:border-[#1B3022]'
                required
              />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5'>
                  Email Address <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='your@email.com'
                  className='w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3022]/20 focus:border-[#1B3022]'
                  required
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='+91 9876543210'
                  className='w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3022]/20 focus:border-[#1B3022]'
                />
              </div>
            </div>

            <div>
              <label className='block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5'>
                Your Message <span className='text-red-500'>*</span>
              </label>
              <textarea
                name='message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                placeholder='How can we help you today?'
                className='w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3022]/20 focus:border-[#1B3022] resize-none'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full py-3.5 px-6 bg-[#1B3022] hover:bg-[#15261b] text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-md'
            >
              <Send className='size-4' />
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Contact
