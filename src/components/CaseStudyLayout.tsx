"use client";

import { useEffect, useState } from "react";
import ContextSection from "./sections/Context";
import ChallengeSection from "./sections/Challenge";
import ResearchSection from "./sections/Research";
import SolutionSection from "./sections/Solution";

const caseStudies = [
  { label: "N26 & Transactions", active: false },
  { label: "Introducing User Testing", active: false },
  { label: "Worldpackers App", active: false },
  { label: "Attention Heatmap", active: false },
  { label: "Redesigning Survey Insights", active: false },
  { label: "Bookify", active: false },
];

const articles = [
  { label: "The power of Visual in Product Design", active: false },
  { label: "Mastering Design Critique", active: false },
];

const contentSections = [
  { id: "context" },
  { id: "challenge" },
  { id: "research" },
  { id: "solution" },
];

export default function CaseStudyLayout() {
  const [activeSection, setActiveSection] = useState("context");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -55% 0px" }
    );

    contentSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex border-t border-gray-200">
      {/* Sticky left sidebar — matches PDF exactly */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 sticky top-0 h-screen bg-[#F3F2EF] border-r border-gray-200 overflow-y-auto px-6 py-8 gap-8">
        {/* Case Studies group */}
        <div>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <ul className="space-y-[2px]">
            {caseStudies.map(({ label }) => {
              const isCurrent = label === "N26 & Transactions";
              return (
                <li key={label} className="flex items-center gap-2 py-[5px]">
                  <span
                    className={`w-[6px] h-[6px] rounded-full shrink-0 ${
                      isCurrent ? "bg-gray-800" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`text-[13px] leading-snug ${
                      isCurrent
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500 hover:text-gray-800 cursor-pointer"
                    }`}
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Articles group */}
        <div>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Articles
          </p>
          <ul className="space-y-[2px]">
            {articles.map(({ label }) => (
              <li key={label} className="flex items-center gap-2 py-[5px]">
                <span className="w-[6px] h-[6px] rounded-full shrink-0 bg-transparent" />
                <span className="text-[13px] text-gray-500 hover:text-gray-800 cursor-pointer leading-snug">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 px-10 md:px-20 py-20 max-w-4xl">
        <ContextSection />
        <ChallengeSection />
        <ResearchSection />
        <SolutionSection />
      </div>
    </div>
  );
}
