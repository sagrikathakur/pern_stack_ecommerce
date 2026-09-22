import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';

const Applayout = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
    </>
  );
};

export default Applayout;