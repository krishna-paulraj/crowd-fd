"use client";

import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useState } from "react";

const Banner = () => {
  const [hidden, isHidden] = useState(false);
  return (
    <div className="bg-white">
      <div
        className={cn(
          "relative bg-[linear-gradient(to_right,rgb(252,_241,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))] py-3 text-center text-black",
          hidden && "hidden",
        )}
      >
        <div className="container">
          <p className="font-medium">
            <span className="hidden sm:inline">
              Help us improve our product -{" "}
            </span>
            <a
              href="https://github.com/krishna-paulraj/crowd-funding"
              className="underline underline-offset-2"
            >
              Contribute to us!
            </a>
          </p>
        </div>
        <div className="cursor-pointer" onClick={() => isHidden(true)}>
          <XIcon className="absolute right-2 top-3 rounded-sm border border-black/40" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
