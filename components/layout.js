import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/> {}
      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
};


export default Layout;