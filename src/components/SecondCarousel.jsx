import React, { useState } from 'react';

const brandData = [
  {
    name: 'Charlotte Tilbury',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600.jpg',
    title: 'NEW! Magic Gifting Universe',
    offer: 'On ₹5000: 3 Mini Gifts',
    cta: 'Shop Now'
  },
  {
    name: "L'OREAL PARIS",
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600.jpg',
    title: 'NO BAD HAIR DAYS',
    subtitle: 'WITH OUR EXPERT TREATMENTS',
    offer: 'Upto 30% Off',
    description: 'Best of Haircare!',
    cta: 'Shop Now'
  },
  {
    name: 'LAKMÉ',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600.jpg',
    title: 'HEAD TURNER BRIDES',
    offer: 'Upto 30% Off',
    description: 'On Bestsellers*',
    cta: 'Shop Now'
  },
  // Add two more brand objects here to have a total of 5
];

const BrandCard = ({ brand }) => (
  <div className="relative overflow-hidden rounded-lg shadow-md">
    <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
    <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-2 py-1 rounded">
      <span className="text-sm font-semibold">{brand.name}</span>
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-lg font-bold">{brand.title}</h3>
      {brand.subtitle && <p className="text-sm">{brand.subtitle}</p>}
      <p className="text-pink-600 font-semibold mt-2">{brand.offer}</p>
      <p className="text-sm text-gray-600">{brand.description}</p>
      <button className="mt-2 text-pink-600 font-semibold flex items-center">
        {brand.cta}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const SecondCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brandData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + brandData.length) % brandData.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-1">Explore Our Top Brands</h2>
      <p className="text-gray-600 mb-4">A-listers to obsess over</p>
      <div className="flex overflow-hidden">
        {brandData.map((brand, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default SecondCarousel;