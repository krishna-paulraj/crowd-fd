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
      <div className="container block border border-black bg-black pt-10 text-center text-white sm:hidden">
        <h1 className="text-3xl font-bold tracking-tighter">
          Explore Organizations
        </h1>
        <p className="mt-2 text-lg text-white/80">
          Browse through a wide variety of innovative ideas and inspiring
          projects.
        </p>
        <div className="mt-16 rounded-lg border border-slate-600 bg-[#272729] p-2">
          <Image
            src={appScreen}
            alt="app screen"
            className="inset-0 h-72 w-auto rounded-lg object-cover object-left-top"
          />
        </div>
      </div>
      <div className="relative hidden w-full overflow-hidden sm:block">
        <BackgroundBeams />
        <div className="">
          <MacbookScroll
            title={
              <span>
                Explore Organizations. <br />
                <span className="text-[20px] font-light">
                  Browse through a wide variety of innovative ideas and
                  inspiring projects.
                </span>
              </span>
            }
            badge={
              <Link href="https://peerlist.io/manuarora">
                <Badge className="h-10 w-10 -rotate-12 transform" />
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
