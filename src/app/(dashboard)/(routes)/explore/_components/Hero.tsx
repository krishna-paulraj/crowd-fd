import { FlipWords } from "@/components/ui/flip-words";
import appLogo from "@/assets/images/logosaas.png";
import Image from "next/image";

export const Hero = () => {
  const words = ["Inspire", "Innovate", "Empower", "Spark"];

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative">
          <div className="absolute bottom-0 top-3 w-full scale-75 rounded-[100%] bg-[linear-gradient(to_right,rgb(252,_241,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))] blur-2xl"></div>
          <Image
            src={appLogo}
            alt="App Logo"
            className="relative h-40 w-auto"
          />
        </div>
        <div className="text-3xl font-bold">
          Explore Ideas that
          <br className="block sm:hidden" />
          <FlipWords words={words} className="text-white" />
        </div>
        <p className="text-sm text-purple-300 sm:text-lg">
          Join a vibrant community of supporters and creators.
        </p>
      </div>
      <div className="mt-10 border border-white/60"></div>
    </div>
  );
};
