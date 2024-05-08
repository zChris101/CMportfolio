"use client";

import HomeNav from "@/components/HomeNav";
import Icon from "@/components/Icon";
import { FrontendIcons } from "@/libs/data";
import { BackendIcons } from "@/libs/data";
import { otherIcons } from "@/libs/data";
import { frameworkicons } from "@/libs/data";
import { Planguage } from "@/libs/data";

export default function BlogPage() {
  return (
    <div className="w-full h-screen">
      <div className="box-content mx-6">
        <h1
          className="
        text-sm
        text-stone-100
        uppercase
        block"
        >
          Skills
        </h1>
        <p
          className="
        uppercase text-lg
        font-bold
        "
        >
          Programing languages and tools
        </p>
      </div>
      <br />
      
      <div className="gap-12 md:grid md:grid-cols-2 md:gap-12">
        {/* Programming Language */}
        <div>
          <h1 className="ml-6 my-6">Programming language</h1>
          <ul className="grid grid-cols-4 gap-4 mx-6">
            {Planguage.map((item, index) => (
              <Icon
                key={index}
                icon={item.iconname}
                iconspan={item.iconspan}
                iconsize={item.iconsize}
              />
            ))}
          </ul>
        </div>

        {/* Fullstack Framework */}
        <div>
          <h1 className="ml-6 my-6">Fullstack Framework</h1>
          <ul className="flex flex-row gap-2 justify-center">
            {frameworkicons.map((item, index) => (
              <Icon
                key={index}
                icon={item.iconname}
                iconspan={item.iconspan}
                iconsize={item.iconsize}
              />
            ))}
          </ul>
        </div>

        {/* FrontEnd Tools */}
        <div>
          <h1 className="ml-6 my-6">FrontEnd Tools</h1>
          <ul className="grid grid-cols-4 gap-4 mx-6">
            {FrontendIcons.map((item, index) => (
              <Icon
                key={index}
                icon={item.iconname}
                iconspan={item.iconspan}
                iconsize={item.iconsize}
              />
            ))}
          </ul>
        </div>

        {/* BackEnd Tools */}
        <div>
          <h1 className="ml-6 my-6">Backend Tools</h1>
          <ul className="grid grid-cols-4 gap-4 mx-6">
            {BackendIcons.map((item, index) => (
              <Icon
                key={index}
                icon={item.iconname}
                iconspan={item.iconspan}
                iconsize={item.iconsize}
              />
            ))}
          </ul>
        </div>

        {/* Other Tools */}
        <div>
          <h1 className="ml-6 my-6">Other Tools</h1>
          <ul className="grid grid-cols-4 gap-4 mx-6">
            {otherIcons.map((item, index) => (
              <Icon
                key={index}
                icon={item.iconname}
                iconspan={item.iconspan}
                iconsize={item.iconsize}
              />
            ))}
          </ul>
        </div>
      </div>

      <footer className="w-full flex items-center justify-center py-12">
        <HomeNav />
      </footer>
    </div>
  );
}
