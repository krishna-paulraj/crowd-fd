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
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-[999999999] bg-black backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div
            className="flex cursor-pointer items-center justify-center gap-4"
            onClick={() => router.push("/")}
          >
            <div className="relative">
              <div className="absolute bottom-0 top-2 w-full bg-[linear-gradient(to_right,rgb(252,_241,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))] blur-md"></div>
              <Image
                src={logoImage}
                alt="logo"
                className="relative h-12 w-12 scale-150"
              />
            </div>
            <h1 className="text-2xl font-extrabold leading-none tracking-tighter text-white">
              Crowd Funding
            </h1>
          </div>
          <div className="sm:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white border-opacity-30">
                  <MenuIcon className="text-white" />
                </div>
              </DrawerTrigger>
              <DrawerContent className="border-white/30 bg-black text-white">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>
                      <Image
                        src={logoImage}
                        alt="logo"
                        className="mx-auto h-12 w-12 scale-150"
                      />
                    </DrawerTitle>
                    <DrawerDescription>
                      Explore through Crowd Funding
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0 text-white/70">
                    <div className="flex w-full flex-col items-center justify-center space-y-2">
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
                      <XIcon className="mx-auto h-8 w-8 rounded-full border p-1" />
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <nav className="hidden items-center gap-6 sm:flex">
            <h1
              onClick={() => router.push("/docs")}
              className="cursor-pointer text-white text-opacity-60 transition hover:text-opacity-90"
            >
              Docs
            </h1>

            <h1
              onClick={() => router.push("/explore")}
              className="cursor-pointer text-white text-opacity-60 transition hover:text-opacity-90"
            >
              About
            </h1>

            <h1
              onClick={() => router.push("/explore")}
              className="cursor-pointer text-white text-opacity-60 transition hover:text-opacity-90"
            >
              Explore
            </h1>
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </div>
  );
};
