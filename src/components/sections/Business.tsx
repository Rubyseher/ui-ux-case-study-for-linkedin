export default function BusinessSection() {
  return (
    <section id="business" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-bold leading-tight mb-10 bg-linear-to-r from-[#0E2640] from-20% via-[#33516E] via-40% to-[#6084A6] bg-clip-text text-transparent">
        Business Perspective
      </h2>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-6">
        Job searching is one of the most emotionally charged interactions a
        user has with LinkedIn. When someone hits Apply, they are trusting the
        platform to connect them with opportunity. Most of the time, the
        platform goes silent.
      </p>
      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-16">
        That silence has a business cost. LinkedIn&apos;s revenue depends on
        job seekers believing the search works. When they disengage, Premium
        Career subscribers churn and recruiter seat renewals weaken. The
        friction does not just hurt users. It erodes the platform&apos;s core
        value proposition.
      </p>

      {/* LinkedIn logo + 3 headline stats */}
      <div className="mb-16 max-w-4xl mx-auto">
        <img
          src="/buisness/buisness_stats.png"
          alt="LinkedIn — 65% more US job cuts YoY 2025 · 45% more applications submitted Q3 2024 · 10% fewer job roles posted, same period"
          className="w-full h-auto"
        />
      </div>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-10">
        To understand where the biggest friction was clustering, every major
        pain pattern was mapped against the business context, what is happening
        in the market, what breaks for users as a result, what they actually
        need, and where the real design opportunity sits.
      </p>

      {/* 4-column mapping table */}
      <div className="mb-16 max-w-5xl mx-auto">
        <img
          src="/buisness/opportunity_breakdown.png"
          alt="4-column mapping table: Metrics/Information · Business Industry Problem · User Needs · Opportunity"
          className="w-full h-auto"
        />
      </div>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-10">
        Four patterns emerged. Each one points toward the same gap: a job
        seeker who needs to manage their search, not just start it.
      </p>

      {/* 4 pattern cards in 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {[1, 2, 3, 4].map((n) => (
          <img
            key={n}
            src={`/buisness/insight_${n}.png`}
            alt={`Insight ${n}`}
            className="w-full h-auto"
          />
        ))}
      </div>
    </section>
  );
}
