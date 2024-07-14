import React, { useState, useEffect } from 'react';

const PopUpMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-pink-400 text-white px-4 py-1 rounded-full inline-flex items-center transition-colors duration-300 hover:bg-pink-300 hover:text-black">
      {/* <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg> */}
      <span className="font-bold text-sm">{message}</span>
    </div>
  );
};
export default PopUpMessage;


