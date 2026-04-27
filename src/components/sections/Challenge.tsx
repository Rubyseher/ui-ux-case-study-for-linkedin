import Image from "next/image";

const statCards = [
  { src: "/stat1.png", alt: "1.1M+ US job cuts Jan–Oct 2025" },
  { src: "/stat3.png", alt: "1 in 3 tech companies did 2+ layoff rounds" },
  { src: "/stat6.png", alt: "83% of applicants never receive a rejection letter" },
  { src: "/stat2.png", alt: "69% of applicants hear nothing for 3+ weeks" },
  { src: "/stat4.png", alt: "+45.5% more applications Q3 2024" },
  { src: "/stat5.png", alt: "27x applications per interview in 2026" },
];

export default function ChallengeSection() {
  return (
    <section id="challenge" className="mb-32 scroll-mt-20">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.12em] mb-3">
        Challenge
      </p>
      <h2 className="text-[44px] font-black text-gray-900 leading-[1.05] mb-6">
        The Challenge
      </h2>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-3xl mb-10">
        LinkedIn is used by over 1 billion people to find jobs. But the moment
        you hit Apply, you go blind. No tracking. No updates. No way to know if
        anything is working, even when LinkedIn already holds all the data.
      </p>

      {/* 6 stat images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {statCards.map((card) => (
          <div
            key={card.src}
            className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={600}
              height={750}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Transition text */}
      <p className="text-[18px] text-gray-800 leading-relaxed max-w-3xl mb-8">
        With the scale of the problem mapped, the next step was to understand
        what we were actually being asked to solve.
      </p>

      {/* Brief block — rounded with blue left border */}
      <div className="rounded-2xl bg-white shadow-sm border-l-4 border-[#007EBB] p-8 mb-8 max-w-3xl">
        <div className="space-y-4 text-[16px] text-gray-800 leading-relaxed">
          <p>
            LinkedIn wants to improve the job application experience for{" "}
            <strong>active job seekers</strong> using its platform.
          </p>
          <p>
            The goal is to help people who are applying to multiple roles but{" "}
            <strong>feel lost once they hit submit.</strong> These users may
            have tens of applications in progress, no visibility into where
            they stand, and no reliable way to track their own job search,
            even when LinkedIn already holds that data.
          </p>
          <p>
            The platform should make the post-application experience feel{" "}
            <strong>organised, transparent, and motivating</strong> while
            reducing the anxiety of the &quot;application black hole.&quot;
          </p>
        </div>
        <div className="mt-5 bg-[#FCEEEA] rounded-lg p-4">
          <p className="text-[14px] text-gray-800 leading-relaxed">
            →{" "}
            <span>
              Success means guiding users from{" "}
              <strong>
                &quot;I have no idea what happened to any of my applications&quot;
              </strong>{" "}
              to <strong>&quot;I feel in control of my job search.&quot;</strong>
            </span>
          </p>
        </div>
      </div>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-3xl mb-10">
        But briefs use vague language. Before jumping to solutions, I broke
        down every ambiguous term, who exactly is an &quot;active job
        seeker,&quot; what does &quot;feel lost&quot; actually mean, and what
        would success look like in measurable terms.
      </p>

      {/* Brief breakdown diagram */}
      <div className="mb-10 -mx-4 md:mx-0">
        <img
          src="/brief-breakdown.svg"
          alt="Brief breakdown — mapping each ambiguous term to a specific user, behaviour, or outcome"
          className="w-full h-auto"
        />
      </div>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-3xl">
        Each term mapped to a specific user, behaviour, or outcome. That
        clarity became the foundation for every research question that
        followed.
      </p>
    </section>
  );
}
