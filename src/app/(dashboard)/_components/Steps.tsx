import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import appScreen from "@/assets/images/app-screen.png";
import Link from "next/link";

export const Steps = () => {
  const userSteps = [
    {
      stepNo: 1,
      title: "Sign up for an account",
      description: "Make an account on Crowd Funding and get started.",
      link: "/sign-up",
    },
    {
      stepNo: 2,
      title: "Explore and choose",
      description:
        "Select and explore project details, updates, and funding goals to make an informed decision.",
    },
    {
      stepNo: 3,
      title: "Make a Contribution",
      description:
        "Choose from different funding tiers and rewards offered by project creators.",
    },
  ];

  const organitionSteps = [
    {
      stepNo: 1,
      title: "Sign up for an account",
      description: "Make an account on Crowd Funding and get started.",
      link: "/sign-up",
    },
    {
      stepNo: 2,
      title: "Outline Your Vision",
      description:
        "Describe what makes your project unique and how it will impact the community.",
    },
    {
      stepNo: 3,
      title: "Set Your Funding Goals",
      description:
        "Offer various funding tiers and rewards to attract backers.",
    },
  ];
  return (
    <div className="bg-black bg-gradient-to-b from-black via-[#5D2CA8] to-black pb-20 text-white">
      <div className="container flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl font-semibold text-white sm:text-4xl">
                Get Started with just few steps! <br />
                <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                  Ready to Make a Difference?
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={appScreen}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <h1 className="text-center text-5xl font-bold">Investors</h1>
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          {userSteps.map((user) => (
            <li
              key={user.title}
              className="cursor-pointer transition duration-100 ease-in-out hover:scale-105 md:flex-1"
            >
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-purple-400">
                  Step {user.stepNo}
                </span>
                <span className="text-xl font-semibold">{user.title}</span>
                <span className="mt-2 text-gray-300">
                  {user.description}
                  {user.link && (
                    <>
                      {" "}
                      <Link
                        href={user.link}
                        className="text-purple-400 underline underline-offset-2"
                      >
                        {user.link}
                      </Link>
                    </>
                  )}
                  .
                </span>
              </div>
            </li>
          ))}
        </ol>
        <h1 className="mt-10 text-center text-5xl font-bold">Organizations</h1>
        <ol className="space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          {organitionSteps.map((user) => (
            <li
              key={user.title}
              className="cursor-pointer transition duration-100 ease-in-out hover:scale-105 md:flex-1"
            >
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-purple-400">
                  Step {user.stepNo}
                </span>
                <span className="text-xl font-semibold">{user.title}</span>
                <span className="mt-2 text-gray-300">
                  {user.description}
                  {user.link && (
                    <>
                      {" "}
                      <Link
                        href={user.link}
                        className="text-purple-400 underline underline-offset-2"
                      >
                        {user.link}
                      </Link>
                    </>
                  )}
                  .
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
