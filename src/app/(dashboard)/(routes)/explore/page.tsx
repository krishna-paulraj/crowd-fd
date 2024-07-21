import Image from "next/image";
import appLogo from "@/assets/images/logosaas.png";
import { FlipWords } from "@/components/ui/flip-words";
import { CampaignCard } from "../../_components/Campaign-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Campaign = [
  {
    title: "Solar-Powered Community Gardens",
    description:
      "Creating solar-powered community gardens in urban areas to provide fresh produce and promote sustainable practices.",
    category: "Environment",
    ownedBy: "GreenFuture Initiative",
    timeLeft: "30 days",
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "VR Classrooms for Rural Schools",
    description:
      "Providing rural schools with virtual reality classrooms to enhance the learning experience and provide access to quality education.",
    category: "Education",
    ownedBy: "TechEd Revolution",
    timeLeft: "45 days",
    fundingGoal: 75000,
    currentFunding: 45000,
  },
  {
    title: "Public Art Installations",
    description:
      "Installing interactive public art pieces in underserved neighborhoods to inspire creativity and community engagement.",
    category: "Art",
    ownedBy: "Art for All",
    timeLeft: "20 days",
    fundingGoal: 30000,
    currentFunding: 20000,
  },
  {
    title: "Community Health Screenings",
    description:
      "Providing free heart health screenings and educational workshops in low-income communities.",
    category: "Health",
    ownedBy: "Healthy Hearts Foundation",
    timeLeft: "35 days",
    fundingGoal: 40000,
    currentFunding: 15000,
  },
  {
    title: "Future Leaders Program",
    description:
      "Providing mentorship and leadership training to young people, helping them develop the skills they need to succeed.",
    category: "Youth",
    ownedBy: "Youth Empowerment Network",
    timeLeft: "50 days",
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "Clean Water for All",
    description:
      "Building wells and water purification systems in remote villages to provide access to clean drinking water.",
    category: "Humanitarian",
    ownedBy: "WaterWorks",
    timeLeft: "40 days",
    fundingGoal: 60000,
    currentFunding: 30000,
  },
  {
    title: "Renewable Energy Workshops",
    description:
      "Hosting workshops to educate communities on renewable energy solutions and sustainability practices.",
    category: "Education",
    ownedBy: "Sustainable Future",
    timeLeft: "25 days",
    fundingGoal: 35000,
    currentFunding: 18000,
  },
  {
    title: "Tech for Seniors",
    description:
      "Providing senior citizens with access to technology and training to improve their quality of life.",
    category: "Technology",
    ownedBy: "SilverTech",
    timeLeft: "28 days",
    fundingGoal: 45000,
    currentFunding: 22000,
  },
  {
    title: "Urban Green Spaces",
    description:
      "Transforming vacant lots into green spaces for community use and environmental benefits.",
    category: "Environment",
    ownedBy: "CityGreen",
    timeLeft: "60 days",
    fundingGoal: 55000,
    currentFunding: 27500,
  },
  {
    title: "Youth Sports Programs",
    description:
      "Developing sports programs for underprivileged youth to promote physical activity and teamwork.",
    category: "Youth",
    ownedBy: "ActiveKids",
    timeLeft: "37 days",
    fundingGoal: 40000,
    currentFunding: 20000,
  },
  {
    title: "Community Music Festival",
    description:
      "Organizing a music festival to bring together local artists and the community.",
    category: "Art",
    ownedBy: "SoundWave Collective",
    timeLeft: "45 days",
    fundingGoal: 30000,
    currentFunding: 15000,
  },
  {
    title: "Digital Literacy for All",
    description:
      "Offering digital literacy classes to help individuals navigate the digital world effectively.",
    category: "Education",
    ownedBy: "TechLearn",
    timeLeft: "42 days",
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "Organic Farming Initiative",
    description:
      "Promoting organic farming practices to ensure healthy food production and environmental sustainability.",
    category: "Agriculture",
    ownedBy: "GreenFarmers",
    timeLeft: "55 days",
    fundingGoal: 60000,
    currentFunding: 30000,
  },
  {
    title: "Mental Health Awareness",
    description:
      "Creating awareness and providing resources for mental health support in the community.",
    category: "Health",
    ownedBy: "MindCare",
    timeLeft: "30 days",
    fundingGoal: 40000,
    currentFunding: 20000,
  },
  {
    title: "Veterans Job Training",
    description:
      "Offering job training programs to help veterans transition to civilian careers.",
    category: "Veterans",
    ownedBy: "VetsWork",
    timeLeft: "35 days",
    fundingGoal: 45000,
    currentFunding: 22500,
  },
  {
    title: "Recycling Education Program",
    description:
      "Educating the community on the importance of recycling and how to do it effectively.",
    category: "Environment",
    ownedBy: "RecycleNow",
    timeLeft: "48 days",
    fundingGoal: 35000,
    currentFunding: 17500,
  },
  {
    title: "Community Library Project",
    description:
      "Building a community library to provide access to books and educational resources.",
    category: "Education",
    ownedBy: "BookHaven",
    timeLeft: "52 days",
    fundingGoal: 55000,
    currentFunding: 27500,
  },
  {
    title: "Animal Shelter Expansion",
    description:
      "Expanding the local animal shelter to accommodate more animals and improve their care.",
    category: "Animal Welfare",
    ownedBy: "SafePaws",
    timeLeft: "40 days",
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "Community Theater Renovation",
    description:
      "Renovating the community theater to provide a better space for local performances and events.",
    category: "Art",
    ownedBy: "StageLights",
    timeLeft: "50 days",
    fundingGoal: 45000,
    currentFunding: 22500,
  },
  {
    title: "Senior Fitness Program",
    description:
      "Creating fitness programs tailored for seniors to improve their health and well-being.",
    category: "Health",
    ownedBy: "FitSeniors",
    timeLeft: "33 days",
    fundingGoal: 40000,
    currentFunding: 20000,
  },
];
const ExporePage = () => {
  const words = ["Inspire", "Innovate", "Empower", "Spark"];
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <Image src={appLogo} alt="App Logo" className="h-40 w-auto" />
          <div className="text-3xl font-bold">
            Explore Ideas that
            <br className="block sm:hidden" />
            <FlipWords words={words} className="text-white" />
          </div>
          <p className="text-sm sm:text-lg text-purple-300">
            Join a vibrant community of supporters and creators.
          </p>
        </div>
        <div className="border border-white/60 mt-10"></div>
      </div>
      <div className="container w-full">
        <h1 className="text-2xl py-2">Categories....</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-5 gap-10">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
      </div>
      <Pagination className="py-3">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="bg-black hover:bg-[#27272A] hover:text-white"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-black hover:bg-[#27272A] hover:text-white"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              className="bg-black hover:bg-[#27272A] hover:text-white"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-black hover:bg-[#27272A] hover:text-white"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="bg-black hover:bg-[#27272A] hover:text-white"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ExporePage;
