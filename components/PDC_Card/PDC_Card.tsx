import Image from "next/image";
import React from "react";
import Glass_Card from "../Glass_Card";
import ArrowIcon from "../UI/ArrowIcon";

const PDC_Card = () => {
  return (
    <div className="pdc_card h-[240px] w-full px-9 py-5 flex justify-center items-center gap-20 overflow-hidden">
      <div className="h-full w-[1000px] flex flex-col justify-between gap-2">
        <div className="h-full w-full flex items-center">
          <div className=" w-[90px] h-[90px]">
            <Image
              src="/assets/pdc-logo.svg"
              alt="PDC Logo"
              width="90"
              height="90"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-start">
            <h1 className=" w-full h-full justify-start text-white text-3xl font-bold leading-normal text-center">
              PHARMACEUTICAL DEVELOPMENT CONFERENCE
            </h1>
            <h2 className="w-full h-full justify-start text-white text-sm leading-normal text-center">
              Sydney - 9 September 2025
            </h2>
          </div>
        </div>
        <div className="h-full w-full flex justify-between items-center gap-20">
          <Glass_Card title="20+" description="Scientific Presentations" />
          <Glass_Card title="20+" description="Well-Known Industry Leaders" />
          <Glass_Card title="4" description="Scientific Topics" />
        </div>
      </div>

      <div className="h-full w-[200px]">
        <Glass_Card
          title="Topics"
          description={
            <ul className="text-left space-y-3">
              <li>- Pre-Clinical Development</li>
              <li>- Clinical Development</li>
              <li>- Formulation Development</li>
              <li>- Manufacturing Development</li>
            </ul>
          }
        />
      </div>

      <div className="h-full flex justify-center items-center">
        <div className="glass_card h-[60px] w-[60px] flex justify-center items-center">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default PDC_Card;
