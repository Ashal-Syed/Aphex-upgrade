import Image from "next/image";
import React from "react";
import Glass_Card from "../Glass_Card/Glass_Card";
import ArrowIcon from "../UI/Arrow_Icon/Arrow_Icon";
import PDC_Card_Header from "./PDC_Card_Header";
import PDC_Topics_Card from "./PDC_Topics_Card";
import Arrow_Button from "../UI/Arrow_Button/Arrow_Button";

const PDC_Card = () => {
  return (
    <section
      data-label="Full Component"
      className="pdc_card w-full h-full px-4 lg:px-9 py-5 flex flex-col lg:flex-row justify-between items-center gap-5 overflow-hidden"
    >
      <div
        data-label="Left"
        className="w-full lg:w-7/10 flex flex-col justify-between gap-5"
      >
        <PDC_Card_Header />

        <div
          data-label="Cards"
          className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 lg:gap-20"
        >
          <Glass_Card title="20+" description="Scientific Presentations" />
          <Glass_Card title="20+" description="Well-Known Industry Leaders" />
          <Glass_Card title="4" description="Scientific Topics" />
        </div>
      </div>

      <PDC_Topics_Card />

      <Arrow_Button link="/pdc" />
    </section>
  );
};

export default PDC_Card;
