import React from "react";

const Hero_Image = () => {
  return (
    <div
      data-label="Group"
      className="relative w-full max-w-sm aspect-[4/3] mr-24"
    >
      <div
        data-label="Blur Background"
        className="w-96 h-64 absolute bg-[#1B15C5] rounded-full blur-[100px]"
      />
          <div
            data-label="Border"
            className="w-96 h-64 absolute bg-zinc-300/0 rotate-[-10deg] rounded-[10px] border-2 border-indigo-400"
          />
        <img
          className="absolute rounded-[10px]"
          src="/assets/Images/hero-image.jpg"
        />
    </div>
  );
};

export default Hero_Image;
