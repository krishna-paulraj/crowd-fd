// Category type
type Category =
  | "All"
  | "Environment"
  | "Education"
  | "Art"
  | "Health"
  | "Technology"
  | "Humanitarian"
  | "Youth"
  | "Agriculture"
  | "Animal Welfare"
  | "Veterans"
  | "Sports"
  | "Community"
  | "Sustainability"
  | "Social Impact"
  | "Research"
  | "Local Projects"
  | "Cultural Heritage"
  | "Public Services"
  | "Innovation"
  | "Media";

// Proposal type
interface Proposal {
  title: string;
  description: string;
  category: Category;
  ownedBy: string;
  endDate: Date;
  fundingGoal: number;
  currentFunding: number;
}

// Campaign data type
type CampaignData = Proposal[];
