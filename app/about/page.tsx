'use client'

import React from "react";
import Image from "next/image";
import HomeNav from "@/components/HomeNav";

const Page = () => {
  return (
    <div className="w-full h-screen">
      <div className="box-content mx-8">
        <h1
          className="
        text-sm
        dark:text-stone-100
        uppercase
        block"
        >
          About
        </h1>
        <p
          className="
        uppercase text-lg
        font-bold
        "
        >
          Learn more about me
        </p>
      </div>

      <div className="md:flex md:flex-row md:justify-center">
        <div className="flex flex-col items-center">
          <Image
            alt="Image Profile"
            src="/profileforweb.jpg"
            width={350}
            height={350}
            className="drop-shadow-2xl rounded-lg"
          />
          <h3
            className="font-extrabold
           bg-gradient-to-r 
           from-orange-700 
           via-blue-500 
           to-green-400 
           text-transparent 
           bg-clip-text 
           bg-300% 
           animate-gradient
           text-md
          "
          >
            Licensed Electronics Engineer &amp; Web Developer
          </h3>
        </div>
        <div className="ml-6 mr-6 md:pt-16">
          <ul>
            <li>
              <strong>Birthday:</strong> <span>27 December 1995</span>
            </li>
            <li>
              <strong>School:</strong> <span>Caraga State University</span>
            </li>
            <li>
              <strong>Course:</strong> <span>BS Electronics Engineering</span>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <span>Electronics Engineer PRC License</span>
            </li>
            <li>
              <strong>Address:</strong> <span>Butuan City, 8600, PH</span>
            </li>
            <li>
              <strong>Email:</strong> <span>chrstnmusico@gmail.com</span>
            </li>
            <li>
              <strong>Mobile #:</strong> <span>+639667519168</span>
            </li>
            <li>
              <strong>Age:</strong> <span>28</span>
            </li>
            <li>
              <strong>Freelance:</strong> <span>Available</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-6 mr-6 dark:text-stone-300">
        <br />
        <p className="dark:text-gray-200 text-justify">
          &quot;Hello, I&apos;m a licensed electronics engineer with a passion
          for web development. Following the successful completion of my
          licensure exam, I ventured into web development as a hobby. Beginning
          with HTML, CSS, and JavaScript, I steadily advanced to proficiency in
          the ReactJS library and the NextJS framework. I&apos;ve already
          completed several projects utilizing the NextJS framework, including a
          messaging web app and a forum web app. Currently, I&apos;m actively
          working on additional projects and will learn other languages and
          frameworks.&quot;
        </p>
      </div>
      <footer className="w-full flex items-center justify-center py-12">
        <HomeNav />
      </footer>
    </div>
  );
};

export default Page;
