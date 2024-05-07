import React from "react"; // Import React to use JSX syntax

interface IconProps {
  icon: React.ElementType; // Use React.ElementType for JSX elements
  iconspan: string;
  iconsize: number;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  iconspan,
  iconsize,
}) => {
  return (
    <li className="flex flex-col items-center">
      <IconComponent size={iconsize} /> {/* Render the icon component */}
      <span className="text-xs">{iconspan}</span>
    </li>
  );
};

export default Icon;
