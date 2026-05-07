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
      <div className="mb-16 max-w-2xl mx-auto">
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
          className="w-full h-auto rounded-2xl shadow-md"
        />
      </div>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-24">
        Four insights emerged. Each one points toward the same gap: a job
        seeker who needs to manage their search, not just start it.
      </p>

      {/* Insights — sticky left label, full-viewport scroll storytelling per item */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-24 max-w-6xl mx-auto">
        <div className="hidden md:block">
          <div className="sticky top-1/2 -translate-y-1/2">
            <h3 className="text-[72px] font-bold leading-none bg-linear-to-r from-[#0E2640] via-[#33516E] to-[#6084A6] bg-clip-text text-transparent">
              Insights
            </h3>
          </div>
        </div>

        <div>
          {insights.map(({ title, body, source }) => (
            <article
              key={title}
              className="min-h-screen flex flex-col justify-center"
            >
              <h4 className="text-[36px] md:text-[44px] font-bold text-gray-900 leading-[1.15] tracking-tight mb-8">
                {title}
              </h4>
              <p className="text-[18px] text-gray-900 leading-[1.6] mb-10">
                {body}
              </p>
              <p className="text-[15px] text-gray-400">{source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const insights = [
  {
    title: "The feedback gap is structural, not accidental.",
    body:
      "Applicants do not hear back because the system was never built to tell them anything. Only 4% of companies using Greenhouse notified all rejected applicants in Q2 2024. The other 96% said nothing. This is not a communication failure. It is the intended output of a hiring infrastructure that optimises for recruiter efficiency, not candidate experience.",
    source: "Source: Axios / Greenhouse, September 2024",
  },
  {
    title:
      "Silence does not stop at application. It follows candidates into interviews.",
    body:
      "61% of job seekers were ghosted after a job interview, up nine points since April 2024. These are not people who got lost in a pile. They prepared, they showed up, they met humans, and then heard nothing. The silence is not a bug at the top of the funnel. It compounds at every stage.",
    source: "Source: Greenhouse State of Job Hunting, 2024",
  },
  {
    title: "The workaround already exists. The native solution does not.",
    body:
      "Job seekers are logging 500 or more applications in personal spreadsheets because LinkedIn gives them no way to do it natively. The behaviour proves the need. People are solving this problem with whatever tools they have. The opportunity is not to invent a new habit. It is to build what users are already doing.",
    source: "Source: Community observations, Reddit r/jobs, 2025 to 2026",
  },
  {
    title: "The damage is not from volume. It is from silence.",
    body:
      "72% of job seekers say the search damages their mental health. The leading cause is not the number of applications. 66% point directly to lack of feedback. The emotional cost of job searching is a product of uncertainty, and uncertainty is a design problem LinkedIn has the data to solve.",
    source: "Source: The Interview Guys, State of Job Search 2025",
  },
];
