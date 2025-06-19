import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? 'text-indigo-600 border-indigo-600'
      : 'text-gray-700 border-transparent';

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">Track-Ruit</h1>
        <ul className="flex space-x-6 text-sm font-medium border-b-2 border-transparent">
          <li>
            <Link
              to="/"
              className={`pb-1 border-b-2 hover:text-indigo-500 transition-all duration-200 ${isActive('/')}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/tracker"
              className={`pb-1 border-b-2 hover:text-indigo-500 transition-all duration-200 ${isActive('/tracker')}`}
            >
              Tracker
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
