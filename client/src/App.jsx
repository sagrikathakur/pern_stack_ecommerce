import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Applayout from './Pages/Applayout'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Search from './Pages/Search'
import Flashdeals from './Pages/Flashdeals'
import Categories from './Pages/Categories'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Address from './Pages/Address'
import Myorders from './Pages/Myorders'
import OrderTracking from './Pages/OrderTracking'
import Wishlist from './Pages/Wishlist'
import AdminProducts from './Pages/AdminProducts'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Protectedroute from './Components/Protectedroute'

const App = () => {
  return (
    <>
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 3000,
          style: { background: "#1B3022", color: "#fff", borderRadius: "12px", fontSize: "14px" }
        }}
      />

      {/* routes */}
      <Routes>
        {/* auth pages no navbar and footer */}
        <Route path='/login' element={<Login />} />

        {/* MAIN PAGES WITH NAVBAR AND FOOTER */}
        <Route path='/' element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path='categories' element={<Categories />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<ProductDetails />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='search' element={<Search />} />
          <Route path='deals' element={<Flashdeals />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='admin/products' element={<AdminProducts />} />

          {/* protected routes that access only after login */}
          <Route element={<Protectedroute />}>
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='address' element={<Address />} />
            <Route path='addresses' element={<Address />} />
            <Route path='my-orders' element={<Myorders />} />
            <Route path='order-tracking' element={<OrderTracking />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App;