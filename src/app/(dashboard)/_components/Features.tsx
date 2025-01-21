"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Badge } from "lucide-react";
import Link from "next/link";
import appScreen from "@/assets/images/app-screen.png";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import appLogo from "@/assets/images/logosaas.png";

export const Features = () => {
  return (
    <div className="relative hidden w-full overflow-hidden sm:block">
      <BackgroundBeams />
      <div className="">
        <MacbookScroll
          title={
            <span>
              Explore Organizations. <br />
              <span className="text-[20px] font-light">
                Browse through a wide variety of innovative ideas and inspiring
                projects.
              </span>
            </span>
          }
          badge={
            <Link href="https://x.com/thedevkrish" className="relative">
              <Badge className="h-10 w-10 -rotate-12 transform" />
              <Image
                src={appLogo}
                className="absolute left-2 top-2 h-6 w-auto"
                alt="logo"
              />
            </Link>
          }
          src={appScreen}
          showGradient={false}
        />
      </div>
    </div>
  );
};
