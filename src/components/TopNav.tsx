"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Highlights", href: "#highlights" },
  { label: "Work", href: "#solution" },
  { label: "LinkedIn", href: "#context" },
  { label: "Get in touch", href: "#contact" },
];

export default function TopNav() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const challenge = document.getElementById("challenge");
      if (!challenge) return;
      const top = challenge.getBoundingClientRect().top + window.scrollY;
      setVisible(window.scrollY < top - 200);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-5 inset-x-0 mx-auto w-fit z-50 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-sm px-6 py-3 flex items-center gap-7 text-sm whitespace-nowrap transition-opacity duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="font-semibold text-gray-900 text-[15px]">Ruby Seher</span>
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={(e) => scrollTo(e, href.replace("#", ""))}
          className="text-gray-500 hover:text-gray-900 transition-colors duration-150"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
