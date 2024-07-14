import React, { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className=" text-3xl font-bold text-pink-500 ">NYKAA</div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex space-x-6 pr-60">
            <a href="#" className="text-gray-800 hover:text-pink-500 font-semibold ">Categories</a>
            <a href="#" className="text-gray-800 hover:text-pink-500 font-semibold">Brands</a>
            <a href="#" className="text-gray-800 hover:text-pink-500 font-semibold">Luxe</a>
            <a href="#" className="text-gray-800 hover:text-pink-500 font-semibold">Nykaa Fashion</a>
            <a href="#" className="text-gray-800 hover:text-pink-500 font-semibold">Beauty Advice</a>
          </nav>

          {/* Search, Sign In, and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              
              
              <input
                type="text"
                placeholder="Search on Nykaa"
                className="bg-gray-100 rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300">
              Sign In
            </button>
            <button className="text-gray-600 hover:text-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-pink-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <a href="#" className="block py-2 text-gray-600 hover:text-pink-500 ">Categories</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-pink-500 ">Brands</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-pink-500">Luxe</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-pink-500">Nykaa Fashion</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-pink-500">Beauty Advice</a>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search on Nykaa"
                className="bg-gray-100 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;