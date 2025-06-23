import React from "react";

import ComingSoon from "@/components/ComingSoon/ComingSoon";

interface CardProps {
  title: string;
  description: React.ReactNode;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Glass_Card2 = ({
  title,
  description,
  headingLevel = "h2",
}: CardProps) => {
  const HeadingTag = headingLevel;

  return (
    <div
      data-label="Full Card"
      className="glass_card w-full h-full flex flex-col items-center justify-center overflow-hidden"
    >
      <ComingSoon />
      {React.createElement(
        HeadingTag,
        { className: "text-3xl font-extrabold leading-9" },
        title
      )}
      <div
        data-label="description"
        className="text-[8px] font-medium leading-3"
      >
        {description}
      </div>
    </div>
  );
};

export default Glass_Card2;
