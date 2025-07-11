import React from "react";

interface ArrowIconProps {
  variant?: "default" | "small";
}

const Arrow_Icon = ({variant = "default"}) => {
  const size = variant === "small" ? 20 : 35;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2071 0.792893C11.8166 0.402369 11.1834 0.402369 10.7929 0.792893C10.4024 1.18342 10.4024 1.81658 10.7929 2.20711L15.0858 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5C0.5 8.05228 0.947715 8.5 1.5 8.5H15.0858L10.7929 12.7929C10.4024 13.1834 10.4024 13.8166 10.7929 14.2071C11.1834 14.5976 11.8166 14.5976 12.2071 14.2071L18.2071 8.20711C18.5976 7.81658 18.5976 7.18342 18.2071 6.79289L12.2071 0.792893Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow_Icon;
