import HomeNav from "@/components/HomeNav";

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
      <div>
        <div>
          <h1 className="ml-6">Programming language</h1>
          <ul className="grid grid-cols-4 gap-2 mx-6">
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>C</li>
            <li>C#</li>
          </ul>
        </div>
		<br />
        <div className="">
          <h1 className="ml-6">FrontEnd Tools</h1>
          <ul className="grid grid-cols-4 gap-2 mx-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Tailwind</li>
            <li>ShadCN UI</li>
            <li>Next UI</li>
            <li>ReactJS</li>
            <li>NPM</li>
            <li>TypeScript</li>
          </ul>
        </div>
		<br />
        <div>
          <h1 className="ml-6">Backend Tools</h1>
          <ul className="grid grid-cols-4 gap-2 mx-6">
            <li>NodeJS</li>
            <li>PostMan</li>
            <li>TypeScript</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Pusher</li>
            <li>Prisma</li>
            <li>NextAuth</li>
            <li>Clerk</li>
			<li>RESTful API&apos;s</li>
          </ul>
        </div>
		<br />
		<div>
          <h1 className="ml-6">Fullstack Framework</h1>
          <ul className="flex flex-row gap-2 justify-center">
            <li>NextJS</li>
          </ul>
        </div>
		<br />
        <div>
          <h1 className="ml-6">Other Tools</h1>
          <ul className="grid grid-cols-4 gap-2 mx-6">
            <li>Git</li>
            <li>Github</li>
            <li>Linux</li>
            <li>bash</li>
          </ul>
        </div>
      </div>
	  <footer className="w-full flex items-center justify-center py-12">
				<HomeNav />
			</footer>
    </div>
  );
}
