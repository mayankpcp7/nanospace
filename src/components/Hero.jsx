import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import gameVideo from "../assets/video/game-video.mp4";
import { SOCIAL_MEDIA_LINKS } from "../utils/helper";
import bottomLayer from "../assets/images/png/explore-top-layer.png";
const Hero = () => {
  return (
    <div className="bg-hero relative center bg-cover z-[1000] flex flex-col">
      <img
        className="absolute z-40 bottom-0 start-0 w-full"
        src={bottomLayer}
        alt="bottomlayer"
      />
      <div className="bg-overlay absolute top-0 z-20 h-full w-full"> </div>
      <video
        className="absolute h-full center w-full top-0 object-cover"
        muted
        loop
        autoPlay
        src={gameVideo}
      ></video>
      <Navbar />
      <div className="flex flex-col px-4 container mx-auto justify-center relative z-20 items-center flex-grow h-full">
        <h1 className="font-orbitron font-bold mt-40  pt-5 text-white text-custom-md md:text-custom-lg lg:text-2xl xl:text-3xl max-w-[400px] lg:max-w-[600px] xl:max-w-[801px] text-center !leading-120 mx-auto">
          Save NANOSPACE World from Enemies
        </h1>
        <p className="text-center xl:max-w-full max-w-[450px] lg:max-w-[600px] pt-3 lg:pt-4 font-saira font-normal text-base sm:text-lg md:text-xl text-white leading-150">
          Unleash ever - existing excitement with adorable girls armed with
          destructive gunfire.
        </p>
        <div className="flex gap-4 items-center mt-11 mb-64">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              <img
                className="max-w-[100px] duration-300 hover:scale-110 sm:max-w-[119px]"
                src={link.src}
                alt={link.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
