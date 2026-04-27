const interviews = [
  {
    n: 1,
    title: "As a user, I want to know what happened to my application after I submitted it.",
    body: "96% of LinkedIn applications receive no response. With no visibility after hitting Apply, users re-apply to the same roles, give up entirely, or silently disengage.",
    source: "HiringThing, 2026",
  },
  {
    n: 2,
    title: "As a user, I want to stop hearing nothing for weeks without knowing why.",
    body: "69% of applicants endured 3+ weeks of silence. On LinkedIn, 11,000 applications are submitted every minute, yet the platform offers no signal on whether a recruiter even opened the profile.",
    source: "Greenhouse, 2024 · eWeek, 2025",
  },
  {
    n: 3,
    title: "As a user, I want one place to track everything, not a spreadsheet I built myself.",
    body: "Real job seekers are building DIY trackers, some logging 500+ applications manually, because nothing inside LinkedIn does it for them. The workaround exists. The native solution does not.",
    source: "Reddit r/jobs, 2025 to 2026",
  },
  {
    n: 4,
    title: "As a user, I want to feel like my search is going somewhere, not just piling up.",
    body: "72% of job seekers say job hunting negatively impacts their mental health, with 66% citing lack of feedback as the direct cause of burnout.",
    source: "The Interview Guys, 2025",
  },
];

export default function UserInterviewsSection() {
  return (
    <section id="user-interviews" className="mb-32 scroll-mt-20">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.12em] mb-8">
        User Interviews
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
        {interviews.map(({ n, title, body, source }) => (
          <div
            key={n}
            className="rounded-2xl bg-white border border-gray-100 shadow-sm p-7 flex flex-col"
          >
            <p className="text-[28px] font-black text-[#007EBB] mb-2">{n}.</p>
            <hr className="border-gray-100 mb-4" />
            <p className="text-[16px] font-bold text-gray-900 leading-snug mb-3">
              {title}
            </p>
            <p className="text-[14px] text-gray-700 leading-relaxed mb-5 flex-1">
              {body}
            </p>
            <p className="text-[12px] text-gray-400">
              Source:{" "}
              <span className="text-[#007EBB] hover:underline cursor-pointer">
                {source}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
