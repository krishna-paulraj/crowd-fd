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
    description: "Manages deployment and server configuration.",
    image: KaranAvatar,
    link: "https://x.com/karan_1890",
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
    <div className="relative bg-gradient-to-b from-black from-80% to-[#5D2CA8] py-[72px] text-center text-white">
      <div className="container">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <h1 className="mt-2 text-5xl tracking-wide">the “OGs”</h1>
        <div className="mt-10 flex flex-wrap justify-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-dot-white mb-2 flex h-[30rem] w-full items-center justify-center sm:w-[45%]"
            >
              <PinContainer title={member.pin} href={member.link}>
                <div className="flex h-[26rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
                  <Image
                    src={member.image}
                    height={300}
                    width={300}
                    alt="Avatar of Karan"
                    className="pb-3"
                  />
                  <h3 className="!m-0 mt-2 max-w-xs !pb-2 text-base font-bold text-slate-100">
                    {member.name}
                  </h3>
                  <div className="!m-0 flex flex-col !p-0 text-base font-normal">
                    <span className="text-purple-400">{member.role}</span>
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
