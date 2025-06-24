"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../UI/Button/Button";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about_us" },
    { name: "Services", path: "/services" },
    { name: "Seminars", path: "/seminars" },
    { name: "PDC", path: "/pdc" },
    { name: "eQMS (CloudTheApp)", path: "/eqms" },
  ];

  return (
    <nav className="w-full h-30 py-10 flex justify-between items-center">
      <Link
        href="/"
        className="h-full inline-flex justify-left items-center font-medium text-xl"
      >
        <Image
          src="/assets/logo-white.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        <h1 className="font-regular text-lg ml-2">
          Aphex Pharma Solutions
        </h1>
      </Link>

      <div className="flex gap-8 items-center text-center">
        {navItems.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            className={`text-sm ${
              pathname === path
                ? "font-bold border-b-2 border-white"
                : "font-normal"
            } transition`}
          >
            {name}
          </Link>
        ))}
      </div>

      <Button link="/contact" text="Contact Us" />
    </nav>
  );
};

export default Navbar;
