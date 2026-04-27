const points = [
  {
    letter: "A",
    text: "Application numbers surged while job postings fell 10.6%, meaning every recruiter inbox filled faster.",
  },
  {
    letter: "B",
    text: "Response rates collapsed. 96% of applications now receive no reply at all.",
  },
  {
    letter: "C",
    text: "Users were left in silence for weeks with no way to track where anything stood.",
  },
];

const stats = [
  {
    label: "Tracking Gap",
    value: "96%",
    valueColor: "#1E6FA8",
    desc: "of LinkedIn applications receive no response",
  },
  {
    label: "Volume Shock",
    value: "1.1M+",
    valueColor: "#E85500",
    desc: "US job cuts Jan to Oct 2025, up 65% year-over-year",
  },
  {
    label: "Platform Scale",
    value: "11,000",
    valueColor: "#0B7048",
    desc: "applications submitted on LinkedIn every minute",
  },
  {
    label: "Silence Window",
    value: "69%",
    valueColor: "#6842CC",
    desc: "of applicants hear nothing for 3 or more weeks",
  },
  {
    label: "No Closure",
    value: "83%",
    valueColor: "#E85500",
    desc: "of applicants never receive a rejection letter",
  },
  {
    label: "Competition",
    value: "27x",
    valueColor: "#0B7048",
    desc: "applications per interview in 2026, up from 11x in 2021",
  },
];

const painPoints = [
  { label: "No application tracking", pct: 96, color: "#0A66C2", group: "core" },
  { label: "Ghosted after applying", pct: 83, color: "#0A66C2", group: "core" },
  { label: "3+ weeks of silence", pct: 69, color: "#3B8ED9", group: "feedback" },
  { label: "Mental health /\nburnout", pct: 72, color: "#3B8ED9", group: "feedback" },
  { label: "No rejection email", pct: 83, color: "#A8C8EC", group: "downstream" },
  { label: "Using external trackers", pct: 55, color: "#A8C8EC", group: "downstream", prefix: "~" },
];

export default function BusinessSection() {
  return (
    <section id="business" className="mb-32 scroll-mt-20">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.12em] mb-3">
        Business
      </p>
      <h2 className="text-[44px] font-black text-gray-900 leading-[1.05] mb-6">
        A business perspective
      </h2>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-3xl mb-10">
        Job searching is one of the most high-stakes interactions a user has
        with LinkedIn. When 1.1M+ US job cuts hit in the first ten months of
        2025 alone, a 65% increase year-over-year, LinkedIn absorbed that
        volume spike with no structural change to how job seekers manage their
        search.
      </p>

      {/* A / B / C points */}
      <div className="max-w-3xl divide-y divide-gray-100 border-t border-b border-gray-100 mb-16">
        {points.map(({ letter, text }) => (
          <div key={letter} className="flex gap-4 py-4 items-start">
            <span className="w-7 h-7 shrink-0 rounded-md bg-gray-900 text-white text-[12px] font-bold flex items-center justify-center mt-0.5">
              {letter}
            </span>
            <p className="text-[16px] text-gray-800 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* 6 stat cards (2 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-3xl">
        {stats.map(({ label, value, valueColor, desc }) => (
          <div
            key={label}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
              {label}
            </p>
            <p
              className="font-black mb-3 leading-none"
              style={{ color: valueColor, fontSize: "clamp(44px, 5.5vw, 60px)" }}
            >
              {value}
            </p>
            <p className="text-[13px] text-gray-700 leading-snug">{desc}</p>
          </div>
        ))}
      </div>

      {/* Bar chart — pain points */}
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 max-w-3xl">
        <p className="text-[14px] text-gray-700 mb-6 leading-relaxed">
          Job seeker pain points, grouped by reported frequency. Research
          synthesis, 2025 to 2026.
        </p>
        <div className="space-y-4">
          {painPoints.map((p) => (
            <div key={p.label} className="grid grid-cols-[140px_1fr_50px] items-center gap-3">
              <span className="text-[13px] text-gray-800 leading-tight whitespace-pre-line">
                {p.label}
              </span>
              <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${p.pct}%`, backgroundColor: p.color }}
                />
              </div>
              <span className="text-[13px] font-semibold text-gray-800 text-right">
                {p.prefix ?? ""}{p.pct}%
              </span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-[12px] text-gray-700">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0A66C2]" />
            Core tracking gaps
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B8ED9]" />
            Feedback loop failures
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8C8EC]" />
            Downstream workarounds
          </span>
        </div>
      </div>
    </section>
  );
}
