"use client";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const tech = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Clerk",
    "FramerMotion",
    "ShadcnUI",
    "AceternityUI",
  ];
  return (
    <div className="bg-black py-[72px] text-white">
      <div className="container">
        <h2 className="text-center text-lg text-white/70">
          Tech which made possible to make this app.
        </h2>
        <div className="relative mt-9 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:content-['']">
          <motion.div
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16"
          >
            {tech.map((name) => (
              <h1
                key={name}
                className="flex-none text-xl font-bold text-white/40"
              >
                {name}
              </h1>
            ))}
            {tech.map((name) => (
              <h1
                key={name}
                className="flex-none text-xl font-bold text-white/40"
              >
                {name}
              </h1>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
