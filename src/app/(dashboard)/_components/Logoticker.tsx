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
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-lg text-center text-white/70">
          Tech which made possible to make this app.
        </h2>
        <div className="overflow-hidden mt-9 before:z-10 after:z-10 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
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
