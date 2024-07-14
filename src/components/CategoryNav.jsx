import React, { useState } from 'react';

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    'Makeup', 'Skin', 'Hair', 'Appliances', 'Bath & Body', 'Natural', 
    'Mom & Baby', 'Health & Wellness', 'Men', 'Fragrance', 'Lingerie & Accessories'
  ];

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="container mx-auto px-4">
        {/* Mobile view */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full py-3 flex justify-between items-center"
          >
            <span className="text-gray-700">Categories</span>
            <svg className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {isOpen && (
            <ul className="py-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                    {category}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="block py-2 px-4 text-white bg-pink-500 hover:bg-pink-600">
                  OFFERS
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Desktop view */}
        <ul className="hidden md:flex items-center space-x-6 overflow-x-auto py-3 whitespace-nowrap">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="text-sm text-gray-700 hover:text-red-600 font-medium">
                {category}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="text-sm text-white bg-pink-500 px-3 py-1 rounded-full hover:bg-pink-600">
              OFFERS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;