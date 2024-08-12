import React from "react";
import girl from "../assets/images/png/explore-girl.png";
import logo from "../assets/images/webp/nav-logo.webp";
import { Dot } from "./common/Icons";
import robotFace from "../assets/images/png/explore-face-vector.png";
import bottomlayer from "../assets/images/png/explore-top-layer.png";
import { EXPLORE_ITEMS } from "../utils/helper";
const Explore = () => {
    return (
      <div className="bg-custom-black -mt-[1px] relative z-20">
        <img
          className="absolute z-20 top-[-2%] start-0 w-full"
          src={bottomlayer}
          alt="bottomlayer"
        />
        <div className="container z-20 sm:py-16 py-12 md:py-20 lg:py-24 xl:py-44 max-w-[1172px] px-4 mx-auto relative">
          <img
            className="absolute w-full bottom-[-15%] xl:top-[-111px] z-10 start-[-83px] xl:start-[-211px] lg:block hidden max-w-[600px] lg:max-w-[650px] xl:max-w-[980px]"
            src={girl}
            alt="girl"
          />
          <div className="flex flex-col">
            <div className="flex max-w-full z-20 lg:max-w-[572px] xl:max-w-[672px] ms-auto z-2 p-6 md:p-8 xl:p-12 mb-8 rounded-10 lg:mb-1 bg-white backdrop-blur-[3px] bg-opacity-10 flex-col relative justify-end">
              <img
                className="absolute end-[-74px] xl:block top-[-118px] max-w-[200px]  hidden xl:max-w-[256px]"
                src={robotFace}
                alt="robotface"
              />
              <div className="relative">
                <span className="w-40 h-13 bg-gray flex absolute start-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] backdrop:blur-[6px]"></span>
                <img
                  className="max-w-[150px] sm:max-w-[200px] xl:max-w-[234px]"
                  src={logo}
                  alt="logo"
                />
              </div>
              <h2 className="text-white text-custom-sm sm:text-custom-md custom-xl md:text-custom-lg xl:text-2xl font-orbitron font-bold mt-4">
                Explore NANOSPACE
              </h2>
              <p className="pt-4 text-start text-md sm:text-xl text-white font-saira leading-150">
                Find best in class heart-pounding idle RPG experience
              </p>
              <p className="mt-2.5 font-semibold text-gray font-saira text-md sm:text-xl leading-150 text-start">
                Adorable, Collectible Anime-Inspired Character
              </p>
              <div className="flex max-w-[479px] justify-start flex-col">
                {EXPLORE_ITEMS.map((item, index) => (
                  <div key={index} className="flex mt-4 items-center">
                    <Dot />
                    <p className="ps-2.5 text-white font-saira sm:text-base text-sm">{item.text}</p>
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
