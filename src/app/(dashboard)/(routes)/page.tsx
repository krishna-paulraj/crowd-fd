import { UserButton } from "@clerk/nextjs";
import Banner from "../_components/banner";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      CrowdFunding <UserButton />
    </div>
  );
}
