"use client";

import { useState } from "react";
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
import { Hero } from "./_components/Hero";
import { Category } from "./_components/Categories";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const campaignData = [
  {
    title: "Solar-Powered Community Gardens",
    description:
      "Creating solar-powered community gardens in urban areas to provide fresh produce and promote sustainable practices.",
    category: "Environment",
    ownedBy: "GreenFuture Initiative",
    endDate: new Date("2024-09-15"),
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "VR Classrooms for Rural Schools",
    description:
      "Providing rural schools with virtual reality classrooms to enhance the learning experience and provide access to quality education.",
    category: "Education",
    ownedBy: "TechEd Revolution",
    endDate: new Date("2024-10-01"),
    fundingGoal: 75000,
    currentFunding: 45000,
  },
  {
    title: "Public Art Installations",
    description:
      "Installing interactive public art pieces in underserved neighborhoods to inspire creativity and community engagement.",
    category: "Art",
    ownedBy: "Art for All",
    endDate: new Date("2024-08-20"),
    fundingGoal: 30000,
    currentFunding: 20000,
  },
  {
    title: "Community Health Screenings",
    description:
      "Providing free heart health screenings and educational workshops in low-income communities.",
    category: "Health",
    ownedBy: "Healthy Hearts Foundation",
    endDate: new Date("2024-09-05"),
    fundingGoal: 40000,
    currentFunding: 15000,
  },
  {
    title: "Future Leaders Program",
    description:
      "Providing mentorship and leadership training to young people, helping them develop the skills they need to succeed.",
    category: "Youth",
    ownedBy: "Youth Empowerment Network",
    endDate: new Date("2024-10-20"),
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "Clean Water for All",
    description:
      "Building wells and water purification systems in remote villages to provide access to clean drinking water.",
    category: "Humanitarian",
    ownedBy: "WaterWorks",
    endDate: new Date("2024-09-30"),
    fundingGoal: 60000,
    currentFunding: 30000,
  },
  {
    title: "Renewable Energy Workshops",
    description:
      "Hosting workshops to educate communities on renewable energy solutions and sustainability practices.",
    category: "Education",
    ownedBy: "Sustainable Future",
    endDate: new Date("2024-08-25"),
    fundingGoal: 35000,
    currentFunding: 18000,
  },
  {
    title: "Tech for Seniors",
    description:
      "Providing senior citizens with access to technology and training to improve their quality of life.",
    category: "Technology",
    ownedBy: "SilverTech",
    endDate: new Date("2024-09-01"),
    fundingGoal: 45000,
    currentFunding: 22000,
  },
  {
    title: "Urban Green Spaces",
    description:
      "Transforming vacant lots into green spaces for community use and environmental benefits.",
    category: "Environment",
    ownedBy: "CityGreen",
    endDate: new Date("2024-11-01"),
    fundingGoal: 55000,
    currentFunding: 27500,
  },
  {
    title: "Youth Sports Programs",
    description:
      "Developing sports programs for underprivileged youth to promote physical activity and teamwork.",
    category: "Youth",
    ownedBy: "ActiveKids",
    endDate: new Date("2024-09-12"),
    fundingGoal: 40000,
    currentFunding: 20000,
  },
  {
    title: "Community Music Festival",
    description:
      "Organizing a music festival to bring together local artists and the community.",
    category: "Art",
    ownedBy: "SoundWave Collective",
    endDate: new Date("2024-10-01"),
    fundingGoal: 30000,
    currentFunding: 15000,
  },
  {
    title: "Digital Literacy for All",
    description:
      "Offering digital literacy classes to help individuals navigate the digital world effectively.",
    category: "Education",
    ownedBy: "TechLearn",
    endDate: new Date("2024-09-28"),
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "Organic Farming Initiative",
    description:
      "Promoting organic farming practices to ensure healthy food production and environmental sustainability.",
    category: "Agriculture",
    ownedBy: "GreenFarmers",
    endDate: new Date("2024-10-15"),
    fundingGoal: 60000,
    currentFunding: 30000,
  },
  {
    title: "Mental Health Awareness",
    description:
      "Creating awareness and providing resources for mental health support in the community.",
    category: "Health",
    ownedBy: "MindCare",
    endDate: new Date("2024-09-15"),
    fundingGoal: 40000,
    currentFunding: 20000,
  },
  {
    title: "Veterans Job Training",
    description:
      "Offering job training programs to help veterans transition to civilian careers.",
    category: "Veterans",
    ownedBy: "VetsWork",
    endDate: new Date("2024-09-20"),
    fundingGoal: 45000,
    currentFunding: 22500,
  },
  {
    title: "Recycling Education Program",
    description:
      "Educating the community on the importance of recycling and how to do it effectively.",
    category: "Environment",
    ownedBy: "RecycleNow",
    endDate: new Date("2024-10-03"),
    fundingGoal: 35000,
    currentFunding: 17500,
  },
  {
    title: "Community Library Project",
    description:
      "Building a community library to provide access to books and educational resources.",
    category: "Education",
    ownedBy: "BookHaven",
    endDate: new Date("2024-10-10"),
    fundingGoal: 55000,
    currentFunding: 27500,
  },
  {
    title: "Animal Shelter Expansion",
    description:
      "Expanding the local animal shelter to accommodate more animals and improve their care.",
    category: "Animal Welfare",
    ownedBy: "SafePaws",
    endDate: new Date("2024-09-30"),
    fundingGoal: 50000,
    currentFunding: 25000,
  },
  {
    title: "Community Theater Renovation",
    description:
      "Renovating the community theater to provide a better space for local performances and events.",
    category: "Art",
    ownedBy: "StageLights",
    endDate: new Date("2024-10-20"),
    fundingGoal: 45000,
    currentFunding: 22500,
  },
  {
    title: "Senior Fitness Program",
    description:
      "Creating fitness programs tailored for seniors to improve their health and well-being.",
    category: "Health",
    ownedBy: "FitSeniors",
    endDate: new Date("2024-07-22"),
    fundingGoal: 40000,
    currentFunding: 20000,
  },
];

const categories = [
  "All",
  "Environment",
  "Education",
  "Art",
  "Health",
  "Technology",
  "Humanitarian",
  "Youth",
  "Agriculture",
  "Animal Welfare",
  "Veterans",
  "Sports",
  "Community",
  "Sustainability",
  "Social Impact",
  "Research",
  "Local Projects",
  "Cultural Heritage",
  "Public Services",
  "Innovation",
  "Media",
];

const ExporePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredCampaigns =
    selectedCategory === "All" || selectedCategory === ""
      ? campaignData
      : campaignData.filter((camp) => camp.category == selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-800 to-black text-white">
      <Hero />
      <div className="container w-full">
        <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <div className="flex w-full items-center justify-center gap-2 sm:w-96">
            <Input placeholder="Search" className="w-full" />
            <Button size={"sm"}>
              <Search className="mr-1 h-4 w-auto" />
              Find
            </Button>
          </div>
          <Category category={categories} setCategory={setSelectedCategory} />
        </div>
        <div className="flex flex-wrap justify-center gap-10 py-5 sm:justify-between">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.title} campaign={campaign} />
          ))}
        </div>
      </div>
      <Pagination className="py-5">
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
