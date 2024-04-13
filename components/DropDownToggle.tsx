"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { siteConfig } from "@/config/site";
import { RxDropdownMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { SiBloglovin } from "react-icons/si";

const DropDownToggle = () => {
  const iconSelector = (label: string) => {
    switch (label) {
      case "Home":
        return <AiFillHome size={22} />;

      case "About":
        return <CgProfile size={22} />;

      case "Skills":
        return <GiSkills size={22} />;

      case "Projects":
        return <GoProjectSymlink size={22} />;

      case "Blog":
        return <SiBloglovin size={22} />;
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" isIconOnly color="default" radius="md">
          <RxDropdownMenu size={30} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        {siteConfig.navItems.map((item) => (
          <DropdownItem
            href={item.href}
            key={item.label}
            startContent={iconSelector(item.label)}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownToggle;
