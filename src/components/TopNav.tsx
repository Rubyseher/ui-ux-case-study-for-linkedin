"use client";

const links = [
  { label: "Highlights", href: "#highlights" },
  { label: "Work", href: "#solution" },
  { label: "LinkedIn", href: "#context" },
  { label: "Get in touch", href: "#contact" },
];

export default function TopNav() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-5 inset-x-0 mx-auto w-fit z-50 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-sm px-6 py-3 flex items-center gap-7 text-sm whitespace-nowrap">
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
