'use client'

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import HomeNav from "@/components/HomeNav";
import NaviBar from "@/components/NaviBar";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      
    <div
      className="
      flex
      flex-col
      items-center
    "
    >
      <div className="mb-3">
        <span className="text-right">Hello, My name is</span>
      </div>
      <h1
        className="
        text-4xl 
        font-extrabold 
        bg-gradient-to-r 
        from-orange-700 
        via-blue-500 
        to-green-400 
        text-transparent 
        bg-clip-text 
        bg-300% 
        animate-gradient
        md:text-7xl
      "
      >
        Christian Musico
      </h1>
      
      <h2>NextJs | React Web Developer</h2>

      <NaviBar />
      <footer className="w-full flex items-center justify-center py-12">
				<HomeNav />
			</footer>
    </div>
    </div>
  );
}
