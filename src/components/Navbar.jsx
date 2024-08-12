import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../utils/helper";
import navlogo from "../assets/images/webp/nav-logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-5 backdrop-blur-[20px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link to="#">
            <img className="max-w-[154px] w-full" src={navlogo} alt="Logo" />
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
              className=" bg-transparent py-7 px-4 !ms-0 hover:bg-off-gray bg-opacity-50 duration-300"
            >
              <Link className="font-saira text-white font-normal text-base" to={item.link}>{item.name}</Link>
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
