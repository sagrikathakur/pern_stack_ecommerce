import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { Diamond, Loader2Icon, Lock, Mail, UserIcon } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(ShopContext);
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      loginUser({
        name: name || (email ? email.split('@')[0] : 'Sagrika'),
        email: email || 'sagrikathakur68@gmail.com',
        isAdmin: true,
      });
      navigate('/');
    }, 800);
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
      <div className='flex-1 flex items-center justify-center px-4 py-12 bg-app-cream'>
        <div className='w-full max-w-md'>
          <div className='text-center mb-8'>
            <Link to='/' className='inline-flex items-center gap-2 mb-6'>
              <Diamond className='size-8 text-app-green' />
              <span className='text-2xl font-semibold text-app-green'>Sagar Ratna </span>
            </Link>

            <h2 className='text-2xl font-semibold text-app-green mb-2'>
              {isLoginState ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className='text-sm text-gray-500'>
              {isLoginState
                ? "Don't have an account?"
                : "Fill in your details to create a new account"}
              <button
                onClick={() => setIsLoginState(!isLoginState)} className='text-orange-500 ml-1 font-semibold hover:text-orange-500 transition-colors'>
                {
                  isLoginState ? "create one " : "sign in "
                }
              </button>
            </p>
          </div>


          {/* form */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            {
              !isLoginState && (
                <label className='text-sm flex flex-col gap-1'>
                  Name
                  <div className='relative'>
                    <UserIcon className=' absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-green' />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder='Enter your name'
                      className='w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all' />
                  </div>
                </label>
              )
            }

            {/* email */}

            <label className='text-sm flex flex-col gap-1'>
              Email Address
              <div className='relative'>
                <Mail className=' absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-green' />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='yourmail@gmail.com'
                  className='w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all' />
              </div>
            </label>


            {/* password */}

            <label className='text-sm flex flex-col gap-1'>
              Password
              <div className='relative'>
                <Lock className=' absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-green' />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='*******'
                  className='w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all' />
              </div>
            </label>

            {/* button */}

            {
              <button type='submit'
                disabled={loading}

                className=' flex-center w-full font-semibold py-3 bg-green-950 text-white rounded-xl text-sm hover:bg-green-900 transition-colors disabled:opacity-50'>
                {
                  loading ? <Loader2Icon className='animate-spin' /> : isLoginState ? "sign in " : "sign up"

                }
              </button>
            }




          </form>



        </div>
      </div>
    </div>
  );
};

export default Login;


