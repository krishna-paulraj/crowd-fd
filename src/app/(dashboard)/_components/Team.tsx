"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import KaranAvatar from "@/assets/avatar/karan.jpeg";
import KrishnaAvatar from "@/assets/avatar/krishna.jpeg";
import PayalAvatar from "@/assets/avatar/payal.jpeg";
import AiswaryaAvatar from "@/assets/avatar/aishwarya.jpeg";

const team = [
  {
    name: "Suresh Krishna",
    role: "Developer",
    description: "Skilled in both frontend and backend development.",
    image: KrishnaAvatar,
    link: "https://x.com/thedevkrish",
    pin: "x.com/thedevkrish",
  },
  {
    name: "Karan Thakur",
    role: "DevOps",
    description: "Manages deployment and server configuration",
    image: KaranAvatar,
    link: "https://x.com/thedevkrish",
    pin: "x.com/karan_1890",
  },
  {
    name: "Payal Waghela",
    role: "Writer & Spokesperson",
    description:
      "Defines project requirements, and prioritizing features and tasks.",
    image: PayalAvatar,
    link: "https://x.com/thedevkrish",
    pin: "x.com/payal",
  },
  {
    name: "Aishwarya Barmade",
    role: "Strategist/Advisor",
    description:
      "Optimizes the website for search engines to improve visibility and ranking.",
    image: AiswaryaAvatar,
    link: "https://x.com/thedevkrish",
    pin: "x.com/aishwarya",
  },
];

export const Team = () => {
  return (
    <div className="relative text-center text-white bg-gradient-to-b from-black from-80% to-[#5D2CA8] py-[72px]">
      <div className="container">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <h1 className="text-5xl mt-2 tracking-wide">the “OGs”</h1>
        <div className="mt-10 flex flex-wrap justify-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="h-[30rem] bg-dot-white w-full sm:w-[45%] mb-2 flex items-center justify-center"
            >
              <PinContainer title={member.pin} href={member.link}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem] ">
                  <Image
                    src={member.image}
                    height={300}
                    width={300}
                    alt="Avatar of Karan"
                    className="pb-3"
                  />
                  <h3 className="max-w-xs !pb-2 !m-0 mt-2 font-bold  text-base text-slate-100">
                    {member.name}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal flex flex-col">
                    <span className="text-slate-500 ">{member.role}</span>
                    <span>{member.description}</span>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
