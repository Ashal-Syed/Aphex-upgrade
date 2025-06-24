import Image from "next/image";
import React from "react";

const PDC_Card_Header = () => {
  return (
    <div data-label="Heading" className="h-full w-full flex flex-col lg:flex-row items-center gap-4">
      <div data-label="Logo" className="w-[90px] h-[90px]">
        <Image
          src="/assets/pdc-logo.svg"
          alt="PDC Logo"
          width="90"
          height="90"
        />
      </div>
      <div
        data-label="Heading"
        className=" w-full h-full flex flex-col justify-start"
      >
        <h1 className=" w-full h-full justify-start text-sm md:text-xl lg:text-3xl font-bold leading-normal text-center">
          PHARMACEUTICAL DEVELOPMENT CONFERENCE
        </h1>
        <h2 className="w-full h-full justify-start text-xs md:text-sm leading-normal text-center">
          Sydney - 9 September 2025
        </h2>
      </div>
    </div>
  );
};

export default PDC_Card_Header;
