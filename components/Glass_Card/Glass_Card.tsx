import React from "react";

interface CardProps {
  title: string;
  description: React.ReactNode;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Glass_Card = ({ title, description, headingLevel='h2' }: CardProps) => {
  const HeadingTag = headingLevel;
  
  return (
    <div
      data-label="Full Card"
      className="glass_card w-full h-full py-3 md:py-5 px-1.5 flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        data-label="Text Box"
        className="text-center flex flex-col md:gap-3"
      >
        {React.createElement(HeadingTag, {className:"text-xl md:text-3xl font-extrabold leading-9"}, title)}
        <div data-label="description" className="text-[8px] font-medium leading-3">{description}</div>
      </div>
    </div>
  );
};

export default Glass_Card;
