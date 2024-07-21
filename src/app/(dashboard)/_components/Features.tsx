"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Badge } from "lucide-react";
import Link from "next/link";
import appScreen from "@/assets/images/app-screen.png";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export const Features = () => {
  return (
    <div>
      <div className="container block sm:hidden bg-black text-white text-center border border-black pt-28">
        <h1 className="text-3xl font-bold tracking-tighter">
          Explore Organizations
        </h1>
        <p className="text-lg mt-2 text-white/80">
          Browse through a wide variety of innovative ideas and inspiring
          projects.
        </p>
        <div className="border border-slate-600 bg-[#272729] rounded-lg p-2 mt-16">
          <Image
            src={appScreen}
            alt="app screen"
            className="h-64 w-auto object-cover object-left-top rounded-lg inset-0"
          />
        </div>
      </div>
      <div className="hidden sm:block overflow-hidden relative w-full">
        <BackgroundBeams />
        <div className="">
          <MacbookScroll
            title={
              <span>
                Explore Organizations. <br />
                <span className="font-light text-[20px]">
                  Browse through a wide variety of innovative ideas and
                  inspiring projects.
                </span>
              </span>
            }
            badge={
              <Link href="https://peerlist.io/manuarora">
                <Badge className="h-10 w-10 transform -rotate-12" />
              </Link>
            }
            src={appScreen}
            showGradient={false}
          />
        </div>
      </div>
    </div>
  );
};
