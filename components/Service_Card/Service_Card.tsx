import Image from "next/image";
import React from "react";
import Button from "../UI/Button/Button";
import ArrowIcon from "../UI/Arrow_Icon/Arrow_Icon";

interface ServicePrompts {
  photo?: string;
  title?: string;
  description?: React.ReactNode;
  empty?: boolean;
  link?: string;
}

const Service_Card = ({ photo, title, description, empty, link }: ServicePrompts) => {
  if (empty) {
    return <div className="w-full h-full"></div>;
  }

  if (!photo) {
    throw new Error("Service_Card requires 'photo' when 'empty' is false.");
  }

  return (
    <div data-label="Card" className="w-full h-full glass_card overflow-hidden">
      <div data-label="Image" className="w-full h-1/2 relative">
        <Image src={photo} alt="Quality" fill className="object-cover" />
      </div>
      <div data-label="Content" className="w-full h-3/8 px-5 pt-5 flex flex-col justify-center gap-5">
        <h1 className="font-bold text-xl">{title}</h1>
        {description}
      </div>
      <div data-label="Button" className="h-1/8 w-full flex items-center justify-center">
        <Button
          text="More Information"
          prompt={<ArrowIcon variant="small" />}
          className="!shadow-none"
          link={link}
        />
      </div>
    </div>
  );
};

export default Service_Card;
