"use client";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const items = [
  {
    question: "What is CrowdFunding?",
    answer:
      "CrowdFunding is a crowdfunding platform that allows individuals to discover, support, and contribute to innovative projects and causes. Our mission is to empower creators and bring their ideas to life with the support of a passionate community.",
  },
  {
    question: "What payments methods do we accept?",
    answer:
      "We accept any type of tokens based on organization needs. All transactions are secure and encrypted.",
  },
  {
    question: " Is my contribution refundable?",
    answer:
      "Contributions are generally non-refundable. However, if a project does not reach its funding goal, your contribution will be automatically refunded. Please check the project’s refund policy for specific details.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All the proposal are registered via smart contract on blockchain and all tractions are viewable in its ledger. Funds are safu!",
  },
];

const AccordianItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      key={question}
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px]">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently asked question
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) =>
            AccordianItem({ question, answer }),
          )}
        </div>
      </div>
    </div>
  );
};
