"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, MoveUpRight } from "lucide-react";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

export const Hero = () => {
  const { isSignedIn, isLoaded } = useUser();
  return (
    <div className="relative overflow-clip bg-black bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] blur-sm sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/krishna-paulraj/crowd-funding"
            className="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1"
          >
            <span className="bg-gradient-to-r from-red-500 via-white/80 to-blue-500 bg-clip-text text-transparent [-webkit-background-clip:text]">
              Star on Github
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Go</span>
              <MoveUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="relative mt-8 inline-flex">
            <h1 className="text-center text-7xl font-bold tracking-tighter selection:bg-purple-500/70 sm:text-9xl">
              Unlock Potential, <br />
              One Project <br /> at a Time
            </h1>
            <motion.div
              animate={{
                y: [0, -10, 0], // Defines the floating movement
              }}
              transition={{
                duration: 2, // Duration of one complete cycle (up and down)
                ease: "easeInOut", // Easing function
                repeat: Infinity, // Repeat the animation infinitely
                repeatType: "mirror", // Alternates the animation back and forth
              }}
              drag
              dragSnapToOrigin
              className="absolute left-[0px] top-[190px] hidden sm:flex"
            >
              <Image
                src={cursorImage}
                alt="cursorImage"
                height={200}
                width={200}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              drag
              dragSnapToOrigin
              animate={{
                y: [0, -10, 0], // Defines the floating movement
              }}
              transition={{
                duration: 4, // Duration of one complete cycle (up and down)
                ease: "easeInOut", // Easing function
                repeat: Infinity, // Repeat the animation infinitely
                repeatType: "mirror", // Alternates the animation back and forth
              }}
              className="absolute right-[-80px] top-[100px] hidden sm:flex"
            >
              <Image
                src={messageImage}
                alt="cursorImage"
                height={"200"}
                width={"200"}
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-md text-center text-xl">
          Join our community of dreamers and doers. Fund ideas that inspire you
          and bring dreams to life!
        </p>
        <div className="mt-8 flex justify-center">
          {isLoaded && isSignedIn ? (
            <Button>
              Dashboard <ChevronRightIcon />
            </Button>
          ) : (
            <a href="#steps">
              <Button>Get Started</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
