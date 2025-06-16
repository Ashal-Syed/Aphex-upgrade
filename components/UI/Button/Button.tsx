// components/CustomButton.tsx
import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "dark" | "light";
}

const Button: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "dark",
}) => {
  const variantClass = variant === "light" ? "btn-light" : "btn";

  return (
    <button type={type} onClick={onClick} className={variantClass}>
      {text}
    </button>
  );
};

export default Button;
