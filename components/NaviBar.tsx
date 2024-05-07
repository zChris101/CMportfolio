"use client";
import { CgProfile } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { FaBloggerB } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const NaviBar = () => {
  return (
    <div
      className="
    mt-8 
    mb-6 
    flex
    flex-row
    gap-2
    "
    >
      <Link href='/about'>
        <div className="flex flex-row items-center">
          <CgProfile size={22} />
          <span className="text-sm font-light">About</span>
        </div>
      </Link>

      <Link href='/skills'>
        <div className="flex flex-row items-center">
          <GiSkills size={22} />
          <span className="text-sm font-light">Skills</span>
        </div>
      </Link>

      <Link href='projects'>
        <div className="flex flex-row items-center">
          <GoProjectSymlink size={22} />
          <span className="text-sm font-light">Projects</span>
        </div>
      </Link>

      <Link href='/blog'>
        <div className="flex flex-row items-center">
          <FaBloggerB size={22} />
          <span className="text-sm font-light">Blog</span>
        </div>
      </Link>
    </div>
  );
};

export default NaviBar;
