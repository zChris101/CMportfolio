"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { StringLiteral } from "typescript";
import ProjectDesc from "./ProjectDesc";

interface ProjectCardProps {
  pheading: string;
  projectname: string;
  imgsrc: string;
  imgicon: string;
  appname: string;
  appbrf: string;
  hlink: string;
  desc: string;
  textcolor?: boolean;
}

const ProjectCard = ({
  pheading,
  projectname,
  imgsrc,
  imgicon,
  appname,
  appbrf,
  hlink,
  desc,
  textcolor,
}: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col items-center md:flex-row md:justify-center md:gap-4 md:my-8 md:mb-20">
      <Card
        isFooterBlurred
        className="col-span-12 sm:col-span-4 h-[300px] w-5/6 md:w-1/2"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p
            className={`text-tiny ${
              textcolor ? "text-black" : "text-white/60"
            } uppercase font-bold"`}
          >
            {pheading}
          </p>
          <h4
            className={`${
              textcolor ? "text-black" : "text-white/60"
            } font-medium text-large`}
          >
            {projectname}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={imgsrc}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src={imgicon}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{appname}</p>
              <p className="text-tiny text-white/60">{appbrf}</p>
            </div>
          </div>
          <Button radius="full" size="sm" as={Link} href={hlink}>
            Visit
          </Button>
        </CardFooter>
      </Card>
      <ProjectDesc description={desc} />
      <br />
      <br />
    </div>
  );
};

export default ProjectCard;
