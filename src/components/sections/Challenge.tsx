const statCards = [
  {
    src: "/challenge/stat_card1.png",
    alt: "70% — of repeat layoffs happen within 12 months of the first",
    href: "https://zety.com/blog/repeat-layoff-index",
  },
  {
    src: "/challenge/stat_card2.png",
    alt: "1 in 3 — tech companies did 2 or more layoff rounds between 2023 and 2025",
    href: "https://www.marketplace.org/story/2026/03/26/how-multiple-rounds-of-layoffs-impact-remaining-workers",
  },
  {
    src: "/challenge/stat_card3.png",
    alt: "61% — of job seekers ghosted after an interview",
    href: "https://www.greenhouse.com/blog/greenhouse-2024-state-of-job-hunting-report",
  },
  {
    src: "/challenge/stat_card4.png",
    alt: "72% — of job seekers say the search damages their mental health",
    href: "https://blog.theinterviewguys.com/state-of-job-search-2025-research-report/",
  },
  {
    src: "/challenge/stat_card5.png",
    alt: "1.1M+ — US job cuts Jan to Oct 2025, highest since 2020",
    href: "https://www.visualcapitalist.com/ranked-u-s-job-cuts-by-industry-in-2025/",
  },
  {
    src: "/challenge/stat_card6.png",
    alt: "32-200+ applications submitted before a single offer",
    href: "https://blog.hiringthing.com/job-application-statistics",
  },
];

export default function ChallengeSection() {
  return (
    <section id="challenge" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-bold leading-tight mb-10 bg-linear-to-r from-[#0E2640] from-20% via-[#33516E] via-40% to-[#6084A6] bg-clip-text text-transparent">
        The Challenge
      </h2>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-14">
        LinkedIn is used by over 1 billion people to find jobs. The moment you
        hit Apply, you go blind. No tracking. No updates. No way to know if
        anything is working, even when LinkedIn already holds all the data.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {statCards.map(({ src, alt, href }) => (
          <a
            key={src}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-md transition-all duration-500 ease-in-out hover:scale-[1.05] hover:shadow-xl"
          >
            <img src={src} alt={alt} className="w-full h-auto block" />
          </a>
        ))}
      </div>
    </section>
  );
}
