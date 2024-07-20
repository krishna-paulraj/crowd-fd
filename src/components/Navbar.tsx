"use client";
import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import { Drawer as DrawerPrimitive } from "vaul";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black sticky top-0 z-[999999999] backdrop-blur-sm">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <div className="flex justify-center items-center gap-4">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 blur-md bg-[linear-gradient(to_right,rgb(252,_241,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]"></div>
              <Image
                src={logoImage}
                alt="logo"
                className="h-12 w-12 scale-150 relative"
              />
            </div>
            <h1 className="leading-none text-white text-2xl font-extrabold tracking-tighter ">
              Crowd Funding
            </h1>
          </div>
          <div className="sm:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <div className=" border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg">
                  <MenuIcon className="text-white" />
                </div>
              </DrawerTrigger>
              <DrawerContent className="bg-black text-white border-white/30">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>
                      <Image
                        src={logoImage}
                        alt="logo"
                        className="h-12 w-12 scale-150 mx-auto"
                      />
                    </DrawerTitle>
                    <DrawerDescription>
                      Explore through Crowd Funding
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0 text-white/70">
                    <div
                      onClick={() => {
                        DrawerPrimitive.Close;
                      }}
                      className="flex flex-col items-center justify-center space-y-2"
                    >
                      <Link href={"/"}>
                        <DrawerClose>
                          <h1 className="font-bold">Home</h1>
                        </DrawerClose>
                      </Link>
                      <div className="container h-0.5 bg-white/80"></div>
                      <Link href={"/docs"}>
                        <DrawerClose>
                          <h1 className="font-bold">Docs</h1>
                        </DrawerClose>
                      </Link>
                      <div className="container h-0.5 bg-white/80"></div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <XIcon className="border p-1 rounded-full h-8 w-8 mx-auto" />
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-90 transition"
            >
              Learn
            </a>

            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-90 transition"
            >
              About
            </a>

            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-90 transition"
            >
              Explore
            </a>
            <Button variant={"secondary"}>Get Started</Button>
          </nav>
        </div>
      </div>
    </div>
  );
};
