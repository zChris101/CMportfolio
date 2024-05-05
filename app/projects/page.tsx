import HomeNav from "@/components/HomeNav";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";
import Link from "next/link";

export default function DocsPage() {
  return (
    <>
      <div className="">
        <div className="w-full flex flex-col items-center">
          <Card
            isFooterBlurred
            className="col-span-12 sm:col-span-4 h-[300px] w-5/6"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                NextJs 14
              </p>
              <h4 className="text-white font-medium text-large">
                Messenger Clone
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good nights sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm" as={Link} href="">
                Get App
              </Button>
            </CardFooter>
          </Card>
          <Textarea
            isReadOnly
            label="Description"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
            className="max-w-xs"
          />
        </div>
        <br />
        <br />
        <div className="w-full flex flex-col items-center">
          <Card
            isFooterBlurred
            className="col-span-12 sm:col-span-4 h-[300px] w-5/6"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                NextJs 14
              </p>
              <h4 className="text-white font-medium text-large">
                Messenger Clone
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good nights sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm" as={Link} href="">
                Get App
              </Button>
            </CardFooter>
          </Card>
          <Textarea
            isReadOnly
            label="Description"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
            className="max-w-xs"
          />
        </div>
      </div>

      <footer className="w-full flex items-center justify-center py-12">
        <HomeNav />
      </footer>
    </>
  );
}
