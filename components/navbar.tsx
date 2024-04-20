"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { useState } from "react";
import DropDownToggle from "./DropDownToggle";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar shouldHideOnScroll={false} position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">C. MUSICO</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <ul className="hidden sm:flex gap-4 ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full gap-1"
        justify="end"
      >
        <Button
          as={Link}
          href=""
          variant="light"
          isIconOnly
          color="default"
          radius="md"
          size="lg"
        >
          <FaLinkedin size={22} />
        </Button>
        <Button
          as={Link}
          href=""
          variant="light"
          isIconOnly
          color="default"
          radius="md"
          size="lg"
        >
          <BsDiscord size={22} />
        </Button>
        <Button
          as={Link}
          href=""
          variant="light"
          isIconOnly
          color="default"
          radius="md"
          size="lg"
        >
          <BsGithub size={22} />
        </Button>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 gap-2" justify="end">
        <Button
          as={Link}
          href=""
          variant="light"
          isIconOnly
          color="default"
          radius="md"
          size="sm"
        >
          <FaLinkedin size={22} />
        </Button>
        <Button
          as={Link}
          href=""
          variant="light"
          isIconOnly
          color="default"
          radius="md"
          size="sm"
        >
          <BsDiscord size={22} />
        </Button>
        <Button
          as={Link}
          href=""
          variant="light"
          isIconOnly
          color="default"
          radius="md"
          size="sm"
        >
          <BsGithub size={22} />
        </Button>
        <ThemeSwitch />
        <DropDownToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
