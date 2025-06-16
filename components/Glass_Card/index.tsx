import React from 'react'

interface CardProps {
  title: string;
  description: React.ReactNode;
}

const Glass_Card = ({ title, description }: CardProps) => {
  return (
    <div className="glass_card w-full h-full px-1.5 flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-3">
        <div className="self-stretch text-center justify-start text-white text-3xl font-extrabold leading-9">{title}</div>
        <div className="self-stretch text-center justify-start text-white text-[8px] font-medium leading-3">{description}</div>
      </div>
    </div>
  )
}

export default Glass_Card