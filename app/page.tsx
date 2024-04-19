import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import HomeNav from "@/components/HomeNav";

export default function Home() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
    "
    >
      <div className="">
        <span className="text-right">Hello, My name is</span>
      </div>
      <h1 className="font-bold text-4xl mt-5">Christian Musico</h1>
      <h2>NextJs | React Web Developer</h2>

      <HomeNav />
    </div>
  );
}
