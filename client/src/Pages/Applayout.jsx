import React from 'react'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <>

      <p>Navbar</p>
      <main className=' min-h-screen'>
        <Outlet />


      </main>

    </>









  )
}

export default Applayout