import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="flex justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">Divesh Zope</Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
