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

  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";


    switch (label) {
      case "Home":
        return <AiFillHome size={22} className={iconClasses} />;

      case "About":
        return <CgProfile size={22} className={iconClasses}/>;

      case "Skills":
        return <GiSkills size={22} className={iconClasses}/>;

      case "Projects":
        return <GoProjectSymlink size={22} className={iconClasses}/>;

      case "Blog":
        return <SiBloglovin size={22} className={iconClasses}/>;
    }
  };

  return (
    <Dropdown 
    className="shadow-xl"
    backdrop="blur"
    >
      <DropdownTrigger>
        <Button variant="light" isIconOnly color="default" radius="md">
          <RxDropdownMenu size={30} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
      aria-label="Link Actions"
      variant="flat"
      >
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
