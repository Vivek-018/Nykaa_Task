import React, { useState } from "react";
import ExclamationIcon from "./ExclamationIcon";
import PopUpMessage from "./PopUpMessage";

const TopBanner = () => {
  const [showPopUp, setShowPopUp] = useState(true);

  const handleClose = () => {
    setShowPopUp(false);
  };

  return (
    <div className="bg-pink-400 text-white py-1 pr-32 hidden  md:flex justify-end items-center space-x-4 text-sm h-[45px] ">
      <div className="pr-80">
        <PopUpMessage message="BEAUTY BONANZA Get Your Amazing Deals!" />
      </div>
      <div className="flex items-center space-x-2 hover:text-black cursor-pointer font-semibold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <span>Get App</span>
      </div>
      <ExclamationIcon />
      <div className="flex items-center space-x-2  hover:text-black cursor-pointer font-semibold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>Store & Events</span>
      </div>
      <ExclamationIcon />
      <div className="flex items-center space-x-2  hover:text-black cursor-pointer font-semibold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
        <span>Gift Card</span>
      </div>
      <ExclamationIcon />
      <div className="flex items-center space-x-2  hover:text-black cursor-pointer font-semibold m-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Help</span>
      </div>
    </div>
  );
};

export default TopBanner;
