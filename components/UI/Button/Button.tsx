"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "dark" | "light";
  className?: string;
  prompt?: React.ReactNode;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "dark",
  className = "",
  prompt,
  link,
}) => {

  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      router.push(link);
    }
  };

  const variantClass = variant === "light" ? "btn-light" : "btn";

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${variantClass} ${className} cursor-pointer`}
    >
      {text}
      {prompt && <span className="ml-2">{prompt}</span>}
    </button>
  );
};

export default Button;
