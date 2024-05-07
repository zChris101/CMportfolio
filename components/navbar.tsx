"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { useState } from "react";
import DropDownToggle from "./DropDownToggle";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <NextUINavbar shouldHideOnScroll={false} position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">C. MUSICO</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 gap-2" justify="end">
        <ThemeSwitch />
        {pathname !== "/" && <DropDownToggle />}
      </NavbarContent>
    </NextUINavbar>
  );
};
