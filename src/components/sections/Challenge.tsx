const statCards = [
  { src: "/challenge/stat_card_1.png", alt: "1.1M+ — US job cuts Jan to Oct 2025" },
  { src: "/challenge/stat_card_2.png", alt: "1 in 3 — tech companies did 2 or more layoff rounds between 2023 and 2025" },
  { src: "/challenge/stat_card_3.png", alt: "61% — of job seekers ghosted after an interview" },
  { src: "/challenge/stat_card_4.png", alt: "72% — of job seekers say the search damages their mental health" },
  { src: "/challenge/stat_card_5.png", alt: "70% — of repeat layoffs happen within 12 months of the first" },
  { src: "/challenge/stat_card_6.png", alt: "32-200+ applications submitted before a single offer" },
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
        {statCards.map(({ src, alt }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className="w-full h-auto"
          />
        ))}
      </div>
    </section>
  );
}
