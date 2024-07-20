"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Badge } from "lucide-react";
import Link from "next/link";
import appScreen from "@/assets/images/app-screen.png";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const Features = () => {
  return (
    <div>
      <div className="overflow-hidden relative bg-black text-white w-full">
        <BackgroundBeams />
        <div className="block sm:hidden">
          <h1 className="text-white">Explore Organizations.</h1>
          <p>
            Browse through a wide variety of innovative ideas and inspiring
            projects.
          </p>
        </div>

        <div className="hidden sm:block">
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
