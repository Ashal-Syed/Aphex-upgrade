"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../UI/Button/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about_us" },
    { name: "Services", path: "/services" },
    { name: "Seminars", path: "/seminars" },
    { name: "PDC", path: "/pdc" },
    { name: "eQMS (CloudTheApp)", path: "/eqms" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-30 py-10 px-10 lg:px-45 flex justify-between items-center sticky top-0 z-50 transition ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
    >
      <Link
        href="/"
        className="h-full inline-flex justify-left items-center font-medium text-xl"
      >
        <Image
          src="/assets/logo-white.svg"
          alt="Logo"
          width={100}
          height={100}
          className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
        />
        <h1 className="font-regular text-sm md:text-lg ml-2">
          Aphex Pharma Solutions
        </h1>
      </Link>

      <div className="hidden lg:flex gap-8 items-center text-center">
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

      <div className="hidden lg:block">
        <Button link="/contact" text="Contact Us" className="hidden" />
      </div>

      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full w-full bg-blue-950/50 backdrop-blur-md text-white flex flex-col gap-4 p-5 rounded-lg z-50 justify-between">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm ${
                pathname === path
                  ? "text-2xl font-bold border-b-2 border-white"
                  : "text-2xl font-normal"
              } transition`}
            >
              {name}
            </Link>
          ))}
          <Button link="/contact" text="Contact Us" variant="light" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
