import Link from "next/link";
import Arrow_Icon from "../Arrow_Icon/Arrow_Icon";

interface ButtonProps {
    link?: string;
}

const Arrow_Button = ({link = "./"}: ButtonProps) => (
  <Link href={link} passHref>
    <div
      data-label="Button"
      className="glass_card h-[60px] w-[60px] flex justify-center items-center cursor-pointer transition hover:scale-105"
    >
      <Arrow_Icon />
    </div>
  </Link>
);

export default Arrow_Button;
