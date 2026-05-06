"use client";

import { useEffect, useState } from "react";
import ChallengeSection from "./sections/Challenge";
import ContextSection from "./sections/Context";
import BusinessSection from "./sections/Business";
import UserInterviewsSection from "./sections/UserInterviews";
import RedefinedChallengeSection from "./sections/RedefinedChallenge";
import CompetitorsSection from "./sections/Competitors";
import SolutionSection from "./sections/Solution";
import LearningSection from "./sections/Learning";

const navItems = [
  { label: "Getting started", id: "getting-started" },
  { label: "The Challenge", id: "challenge" },
  { label: "Business", id: "business" },
  { label: "User Interviews", id: "user-interviews" },
  { label: "Competitors", id: "competitors" },
  { label: "The solution", id: "solution" },
  { label: "Learnings", id: "learnings" },
]

const liveSections = [
  "challenge",
  "context",
  "business",
  "user-interviews",
  "redefined-challenge",
  "competitors",
  "solution",
  "learnings",
];

export default function CaseStudyLayout() {
  const [activeSection, setActiveSection] = useState("challenge");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = liveSections[0];
      for (const id of liveSections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === "top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative border-t border-gray-200">
      {/* Sticky left sidebar — overlays so main content centers on the full viewport */}
      <aside className="hidden md:flex flex-col w-64 fixed top-0 left-0 h-screen bg-white border-r border-gray-100 overflow-y-auto px-6 py-10 z-10">
        <ul className="space-y-1">
          {navItems.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`flex items-center gap-3 py-2 text-[14px] leading-snug transition-colors ${
                    isActive
                      ? "text-gray-900 font-semibold"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  <span
                    className={`w-1 h-1 rounded-full shrink-0 ${
                      isActive ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main content — centered on the full viewport */}
      <div className="mx-auto px-8 md:px-16 py-20 max-w-5xl">
        <ChallengeSection />
        <ContextSection />
        <BusinessSection />
        <UserInterviewsSection />
        <RedefinedChallengeSection />
        <CompetitorsSection />
        <SolutionSection />
        <LearningSection />
      </div>
    </div>
  );
}
