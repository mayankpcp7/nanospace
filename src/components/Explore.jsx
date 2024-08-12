import React from "react";
import girl from "../assets/images/png/explore-girl.png";
import logo from "../assets/images/webp/nav-logo.webp";
import { Dot } from "./common/Icons";
import robotFace from "../assets/images/png/explore-face-vector.png"
import { EXPLORE_ITEMS } from "../utils/helper";
const Explore = () => {
  return (
    <div className="bg-black">
      <div className="container sm:py-16 py-12 md:py-20 lg:py-24 xl:py-44 max-w-[1172px] px-4 mx-auto relative">
        <img
          className="absolute w-full bottom-[-15%] xl:top-[-111px] z-0 start-[-83px] xl:start-[-211px] lg:block hidden max-w-[600px] lg:max-w-[650px] xl:max-w-[980px]"
          src={girl}
          alt="girl"
        />
        <div className="flex flex-col">
                  <div className="flex max-w-full lg:max-w-[572px] xl:max-w-[672px] ms-auto z-2 p-6 md:p-8 xl:p-12 mb-8 rounded-10 lg:mb-1 bg-white backdrop-blur-[3px] bg-opacity-10 flex-col relative justify-end">
                      <img className="absolute end-[-74px] top-[-118px] max-w-[200px] sm:block hidden xl:max-w-[256px]" src={robotFace} alt="robotface" />
            <div className="relative">
              <span className="w-40 h-13 bg-gray flex absolute start-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] backdrop:blur-[160px]"></span>
              <img
                className="max-w-[200px] xl:max-w-[234px]"
                src={logo}
                alt="logo"
              />
            </div>
            <h2 className="text-white text-custom-sm sm:text-custom-md custom-xl md:text-custom-lg xl:text-2xl font-orbitron font-bold mt-4">
              Explore NANOSPACE
            </h2>
            <p className="pt-4 text-start text-xl text-white font-saira leading-150">
              Find best in class heart-pounding idle RPG experience
            </p>
            <p className="mt-2.5 font-semibold text-gray font-saira text-xl leading-150 text-start">
              Adorable, Collectible Anime-Inspired Character
            </p>
            <div className="flex max-w-[479px] justify-start flex-col">
              {EXPLORE_ITEMS.map((item, index) => (
                <div key={index} className="flex mt-4 items-center">
                  <Dot />
                  <p className="ps-2.5 text-white opa">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            className="max-w-[500px] lg:hidden -my-[15%]"
            src={girl}
            alt="girl"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
