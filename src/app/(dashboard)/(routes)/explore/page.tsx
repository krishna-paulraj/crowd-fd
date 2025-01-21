"use client";

import { useEffect, useState } from "react";
import { CampaignCard } from "../../_components/Campaign-card";
import { Hero } from "./_components/Hero";
import { Input } from "@/components/ui/input";
import { ScrollTextIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaginationCompnent } from "./_components/Pagination";
import { cn } from "@/lib/utils";
import axios from "axios";

const ExporePage = () => {
  const [campaignData, setCampaignData] = useState<CampaignData>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  useEffect(() => {
    const fetchCampaignData = async () => {
      const res = await axios.post("/api/getProposals");
      setCampaignData(res.data);
    };
    fetchCampaignData();
  }, []);

  const filteredCampaigns =
    selectedCategory === "All"
      ? campaignData
      : campaignData.filter((camp) => camp.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-800 to-black text-white">
      <Hero />
      <div className="container flex h-full w-full flex-col">
        <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center justify-center gap-2 sm:w-96">
              <Input
                placeholder="Projects on Arbitrum ecosystem"
                className="w-96"
              />
              <Button size={"sm"}>
                <Search className="mr-1 h-4 w-auto" />
                Find
              </Button>
            </div>
          </div>

          <Button>
            <ScrollTextIcon className="mr-2" />
            Create Proposal
          </Button>
        </div>

        <div className="p-3 text-center sm:text-left">
          <h1 className="text-xl font-bold">
            {filteredCampaigns.length <= 0
              ? "Nothing Found"
              : `Total Results (${filteredCampaigns.length})`}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-10 py-5 sm:justify-evenly">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.title} campaign={campaign} />
          ))}
        </div>

        <div className={cn(filteredCampaigns.length > 9 ? "block" : "hidden")}>
          <PaginationCompnent />
        </div>
      </div>
    </div>
  );
};

export default ExporePage;
