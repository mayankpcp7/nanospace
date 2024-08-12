import React from "react";
import discord from "../assets/images/png/discord.png";
import appstore from "../assets/images/png/app-store.png";
import playstore from "../assets/images/png/play-store.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-hero center bg-cover flex flex-col 2xl:min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow h-full">
        <h1 className="font-orbitron font-bold mt-40 2xl:mt-0 2xl:pt-0  pt-5 text-white text-3xl max-w-[801px] text-center leading-120 mx-auto">
          Save NANOSPACE World from Enemies
        </h1>
        <p className="text-center pt-4 font-saira font-normal text-xl text-white leading-150">
          Unleash ever - existing excitement with adorable girls armed with
          destructive gunfire.
        </p>
        <div className="flex gap-4 items-center mt-11 mb-64 2xl:mb-0">
          <Link href="https://discord.com">
            <img className="max-w-[119px]" src={discord} alt="discord" />
          </Link>
          <Link href="https://appstore.com">
            <img className="max-w-[119px]" src={appstore} alt="appstore" />
          </Link>
          <Link href="https://play.google.com">
            <img className="max-w-[119px]" src={playstore} alt="playstore" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
