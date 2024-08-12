import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-hero-backgeround center bg-cover flex flex-col 2xl:min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow h-full">
        <h1 className="font-orbitron font-bold text-white text-2xl">Save NANOSPACE World from Enemies</h1>
      </div>
    </div>
  );
};

export default Hero;
