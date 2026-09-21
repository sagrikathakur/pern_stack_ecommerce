import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return (
    <div className='min-h-screen flex w-full bg-gray-50'>
      {/* Left side for desktop */}
      <div className='hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden bg-[#1B3022]'>
        <img 
          src={assets.pexels_pic} 
          alt="Sagar Ratna Background" 
          className='absolute inset-0 object-cover w-full h-full' 
        />
        {/* Dark overlay for readability */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
        <div className='relative z-10 text-center px-12'>
          <h1 className='text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md'>
            Welcome to Sagar Ratna
          </h1>
          <p className='text-white/80 font-serif text-xl max-w-sm mx-auto tracking-wide'>
            Real precious stones
          </p>
        </div>
      </div>

      {/* Right side form */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12'>
        <div className='w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              {isLoginState ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className='text-sm text-gray-500'>
              {isLoginState 
                ? 'Please enter your credentials to sign in' 
                : 'Fill in your details to create a new account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5'>
            {!isLoginState && (
              <div>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2'>
                  Full Name
                </label>
                <input
                  type='text'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='John Doe'
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B3022] focus:border-transparent transition'
                />
              </div>
            )}

            <div>
              <label className='block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2'>
                Email Address
              </label>
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='name@example.com'
                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B3022] focus:border-transparent transition'
              />
            </div>

            <div>
              <div className='flex justify-between items-center mb-2'>
                <label className='block text-xs font-semibold uppercase tracking-wider text-gray-700'>
                  Password
                </label>
                {isLoginState && (
                  <a href='#' className='text-xs font-medium text-[#1B3022] hover:underline'>
                    Forgot password?
                  </a>
                )}
              </div>
              <input
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B3022] focus:border-transparent transition'
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full py-3 px-4 bg-[#1B3022] hover:bg-[#142419] text-white font-medium rounded-xl transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer'
            >
              {loading ? (
                <>
                  <span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                  <span>Processing...</span>
                </>
              ) : (
                <span>{isLoginState ? 'Sign In' : 'Create Account'}</span>
              )}
            </button>
          </form>

          <div className='mt-8 text-center text-sm text-gray-600'>
            {isLoginState ? (
              <p>
                Don't have an account?{' '}
                <button
                  type='button'
                  onClick={() => setIsLoginState(false)}
                  className='font-semibold text-[#1B3022] hover:underline cursor-pointer'
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type='button'
                  onClick={() => setIsLoginState(true)}
                  className='font-semibold text-[#1B3022] hover:underline cursor-pointer'
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
