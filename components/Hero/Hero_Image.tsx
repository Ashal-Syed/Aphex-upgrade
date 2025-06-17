import React from "react";

const Hero_Image = () => {
  return (
    <div data-label="Right" className="w-1/2 h-full flex items-center justify-end">
    <div data-label="Group" className="relative w-full scale-150 max-w-sm aspect-[4/3] mr-24">
      <div
        data-label="Blur Background"
        className="w-96 h-64 absolute bg-[#1B15C5] rounded-full blur-[100px]"
      />
      <div
        data-label="Border"
        className="w-72 h-52 left-[36.28px] top-[54.27px] absolute origin-top-left rotate-[-10deg] bg-zinc-300/0 rounded-[10px] border-2 border-indigo-400"
      />
      <img
        className="w-80 h-52 left-[50px] top-[26.50px] absolute rounded-[10px]"
        src="/assets/Images/hero-image.jpg"
      />
    </div>
    </div>
  );
};

export default Hero_Image;
