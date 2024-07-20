"use client";

import { Hero } from "../_components/Hero";
import { LogoTicker } from "../_components/Logoticker";
import { Features } from "../_components/Features";
import { Steps } from "../_components/Steps";
import { FAQs } from "../_components/FAQs";
import { EmailAction } from "../_components/Emailaction";
import { Team } from "../_components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <Features />
      <Steps />
      <Team />
      <FAQs />
      <EmailAction />
    </div>
  );
}
