'use client'
import { Textarea } from "@nextui-org/input";

interface ProjectDescProps {
  description: string;
}

const ProjectDesc = ({ description }: ProjectDescProps) => {
  return (
    <Textarea
      isReadOnly
      label="Description"
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue={description}
      className="max-w-sm"
    />
  );
};

export default ProjectDesc;
