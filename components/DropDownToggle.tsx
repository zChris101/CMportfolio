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

const DropDownToggle = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
        variant="light" 
        isIconOnly 
        color="default"
        radius="md"
        >
          <RxDropdownMenu size={30}  />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        {siteConfig.navItems.map((item) => (
          <DropdownItem href={item.href} key={item.label}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownToggle;
