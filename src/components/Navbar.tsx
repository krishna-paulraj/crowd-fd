"use client";
import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import { LogOut, MenuIcon, Wallet, XIcon } from "lucide-react";
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
import { auth, User } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";
import {
  SignInWithMetamaskButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

interface Routes {
  label: string;
  route: string;
}

export const Navbar = ({ routes }: { routes: Routes[] }) => {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  const Profile = () => {
    return (
      <div className="z-[9999]">
        {isLoaded && isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <SignInWithMetamaskButton mode="modal">
            <Button>
              <Wallet className="mr-2" />
              Connect Wallet
            </Button>
          </SignInWithMetamaskButton>
        )}
      </div>
    );
  };

  return (
    <div className="sticky top-0 z-[99] bg-black backdrop-blur-sm">
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
              <DrawerContent className="border-white/30 bg-black text-white outline-none">
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
                  <div className="p-4 pb-0">
                    <div className="flex w-full flex-col space-y-2">
                      {routes.map((element) => (
                        <div
                          key={element.route}
                          className="container flex flex-col items-center justify-center gap-2"
                        >
                          <Link href={element.route}>
                            <DrawerClose>
                              <h1 className="text-2xl font-bold">
                                {element.label}
                              </h1>
                            </DrawerClose>
                          </Link>
                          <div className="container h-0.5 bg-white/80"></div>
                        </div>
                      ))}
                      {isLoaded && isSignedIn ? (
                        <div className="container text-center">
                          <Link href={"/dashboard"}>
                            <DrawerClose>
                              <h1 className="text-2xl font-bold">Dashboard</h1>
                            </DrawerClose>
                          </Link>

                          <div className="container h-0.5 bg-white/80"></div>

                          <SignOutButton>
                            <Button variant={"destructive"} className="mt-3">
                              <LogOut className="mr-2" />
                              Sign Out
                            </Button>
                          </SignOutButton>
                        </div>
                      ) : (
                        <SignInWithMetamaskButton mode="modal">
                          <Button size={"sm"}>
                            <Wallet className="mr-2" />
                            Connect Wallet
                          </Button>
                        </SignInWithMetamaskButton>
                      )}
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
            {routes.map((element) => (
              <h1
                key={element.route}
                onClick={() => router.push(element.route)}
                className="cursor-pointer text-white text-opacity-60 transition hover:text-opacity-90"
              >
                {element.label}
              </h1>
            ))}
            <Profile />
          </nav>
        </div>
      </div>
    </div>
  );
};
