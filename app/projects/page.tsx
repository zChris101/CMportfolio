'use client'

import HomeNav from "@/components/HomeNav";
import ProjectCard from "@/components/ProjectCard";
import { ProjectData } from "@/libs/data";

export default function DocsPage() {
  return (
    <>
      <div className="">
       
          {ProjectData.map((item, index) => (
            <ProjectCard
              key={index}
              pheading={item.heading}
              projectname={item.projectname}
              imgsrc={item.imgcover}
              imgicon={item.imageicon}
              appname={item.appname}
              appbrf={item.appbrf}
              hlink={item.hlink}
              desc={item.description}
              textcolor={item.dark}
            />
          ))}
        
      </div>

      <footer className="w-full flex items-center justify-center py-4">
        <HomeNav />
      </footer>
    </>
  );
}
