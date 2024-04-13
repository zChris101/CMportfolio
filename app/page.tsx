import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section
      className="
      flex-col-reverse
      flex
      items-center
      justify-items-center
      sm:flex-row
      sm:justify-between
      sm:ml-5
      sm:mr-10
      sm:items-center
      "
    >
      <div className="sm:gap-20 sm:justify-between">
        
          <h1
            className="
            my-3
            mx-4
            text-3xl
            font-extrabold
            "
          >
            Hi there!
          </h1>
        
       
          <p className="text-justify mx-4 sm:text-x sm:mr-60 sm:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
            eius illo et? Rem, harum. Consectetur, quae vitae minus, porro
            soluta aliquam repudiandae, dolores sit rem repellendus consequuntur
            sapiente dolor?
          </p>
        
      </div>
      <div className="-mt-10">
        <Image alt="dummy bg" width={320} height={300} src="/bgpicdvo.jpg" />
      </div>
    </section>
  );
}
