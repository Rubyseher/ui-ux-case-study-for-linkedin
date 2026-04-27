"use client";

import { useEffect, useState } from "react";
import ChallengeSection from "./sections/Challenge";
import BusinessSection from "./sections/Business";
import UserInterviewsSection from "./sections/UserInterviews";

const navItems = [
  { label: "Getting started", id: "getting-started" },
  { label: "Context", id: "context" },
  { label: "The Challenge", id: "challenge" },
  { label: "My Role", id: "my-role" },
  { label: "Business", id: "business" },
  { label: "User Interviews", id: "user-interviews" },
  { label: "Competitors", id: "competitors" },
  { label: "The solution", id: "solution" },
  { label: "Learnings", id: "learnings" },
  { label: "Shout-outs", id: "shout-outs" },
  { label: "Mentorship", id: "mentorship" },
  { label: "Top", id: "top" },
];

const liveSections = ["challenge", "business", "user-interviews"];

export default function CaseStudyLayout() {
  const [activeSection, setActiveSection] = useState("challenge");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -55% 0px" }
    );

    liveSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
    <div className="flex border-t border-gray-200">
      {/* Sticky left sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 sticky top-0 h-screen bg-white border-r border-gray-100 overflow-y-auto px-6 py-10">
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

      {/* Main content */}
      <div className="flex-1 px-10 md:px-20 py-20 max-w-5xl">
        <ChallengeSection />
        <BusinessSection />
        <UserInterviewsSection />
      </div>
    </div>
  );
}
