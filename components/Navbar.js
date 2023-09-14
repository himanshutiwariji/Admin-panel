import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <div className="hover:text-gray-300">Dashboard</div>
        </Link>
        <Link href="/Users">
          <div className="hover:text-gray-300">Users</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;