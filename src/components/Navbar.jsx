import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../utils/helper";
// import navlogo from "../../public/assets/images/webp/nav-logo.webp"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link href="#">
            {/* <img src={navlogo} alt="Logo" className="" /> */}
            NANOSPACE
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-8 items-center transition-transform duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {NAV_ITEMS.map((item, index) => (
            <li
              key={index}
              className="text-gray-400 hover:text-white py-2 md:py-0"
            >
              <a className="font-" href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Button at the End */}
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Find More &rarr;
          </button>
        </div>
      </div>

      {/* Button in Mobile View */}
      {isOpen && (
        <div className="flex justify-center mt-4 md:hidden">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Find More &rarr;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
