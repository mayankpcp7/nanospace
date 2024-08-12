import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../utils/helper";
import navlogo from "../assets/images/webp/nav-logo.webp";
import { ButtonArrow } from "./common/Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white relative z-[100] bg-opacity-[6%] backdrop-blur-[16px]">
      <div className="max-w-[1396px] px-4 mx-auto flex items-center justify-between">
        <Link to="#">
          <img
            className="max-w-[120px] sm:max-w-[154px] my-4 z-[60] w-full"
            src={navlogo}
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul
          className={`flex-col hidden lg:flex lg:flex-row lg:space-x-8 items-center transition-transform duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          {NAV_ITEMS.map((item, index) => (
            <li
              key={index}
              className="bg-transparent py-7 px-4 !ms-0 hover:bg-off-gray hover:bg-opacity-50 bg-opacity-50 duration-300"
            >
              <Link
                className="font-saira text-white font-normal text-base"
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <button
            className="text-white relative z-[60]"
            onClick={() => setIsOpen(!isOpen)}
          >
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
        <div className="hidden lg:block">
          <button className="bg-sky-blue flex items-center text-shadow max-w-[130px] gap-2 rounded-full text-lg btn-text-shadow duration-300 text-white ps-4 pe-3 whitespace-nowrap py-1.5 font-saira font-medium shadow-button-text hover:bg-blue-600">
            Find More
            <ButtonArrow className="mt-2 " />
          </button>
        </div>
      </div>
      {/* MOBILE NAV */}
      <div
        className={`fixed top-0 left-0 w-full bg-custom-black transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden min-h-screen flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col items-center w-full h-full py-4">
          <ul className="flex flex-col items-center">
            {NAV_ITEMS.map((item, index) => (
              <li
                onClick={() => setIsOpen(!isOpen)}
                key={index}
                className="py-4 px-2 hover:bg-off-gray hover:bg-opacity-50 bg-opacity-50 duration-300"
              >
                <Link
                  className="font-saira text-white font-normal text-base"
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-sky-blue text-shadow text-base duration-300 mt-8 flex items-center gap-2 rounded-full text-white px-4 py-2 hover:bg-blue-600">
            Find More
            <ButtonArrow className="mt-2 max-w-[10px]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
