"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HomeNav = () => {
  return (
    <div className="mt-8 flex flex-row gap-3">
      <Button
        as={Link}
        href=""
        variant="light"
        isIconOnly
        color="default"
        radius="md"
        size="sm"
      >
        <div className="flex flex-row items-center gap-1 ">
          <BsLinkedin size={22} />
          <span className="hidden sm:flex">LinkedIn</span>
        </div>
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
        <div className="flex flex-row items-center gap-1 ">
          <BsDiscord size={22} />
          <span className="hidden sm:flex">Discord</span>
        </div>
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
        <div className="flex flex-row items-center gap-1 ">
          <BsGithub size={22} />
          <span className="hidden sm:flex">Github</span>
        </div>
      </Button>
    </div>
  );
};

export default HomeNav;
