function DonutChart({ pct, color }: { pct: number; color: string }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width="66" height="66" viewBox="0 0 66 66">
      <circle cx="33" cy="33" r={r} fill="none" stroke="#E5E7EB" strokeWidth="5" />
      <circle
        cx="33" cy="33" r={r} fill="none" stroke={color} strokeWidth="5"
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        transform="rotate(-90 33 33)"
      />
      <text x="33" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>
        {pct}%
      </text>
    </svg>
  );
}

function BarChart({
  bars,
  color,
}: {
  bars: { label: string; value: number; highlight?: boolean }[];
  color: string;
}) {
  const max = Math.max(...bars.map((b) => Math.abs(b.value)));
  return (
    <div className="flex items-end gap-3 h-14">
      {bars.map((bar, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className="w-7 rounded-sm"
            style={{
              height: `${(Math.abs(bar.value) / max) * 48}px`,
              backgroundColor: bar.highlight !== false ? color : `${color}55`,
            }}
          />
          <span className="text-[9px] text-gray-400 text-center leading-tight max-w-[36px]">
            {bar.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const cards = [
  {
    stat: "1.1M+",
    color: "#E85D04",
    bg: "#FFF4EE",
    rule: "#E85D04",
    title: "US job cuts Jan–Oct 2025",
    subtitle: "highest since 2020",
    source: "Challenger, Gray and Christmas / NBC News, Apr 2025",
    chart: (
      <BarChart
        color="#E85D04"
        bars={[
          { label: "2020", value: 100, highlight: false },
          { label: "2023", value: 30 },
          { label: "2024", value: 33 },
          { label: "2025", value: 48 },
        ]}
      />
    ),
  },
  {
    stat: "1 in 3",
    color: "#DC2626",
    bg: "#FEF2F2",
    rule: "#DC2626",
    title: "Tech companies did 2+ layoff",
    subtitle: "rounds between 2023–2025",
    source: "Willy survey of 1,000+ tech companies / Marketplace, Nov 2025",
    chart: <DonutChart pct={33} color="#DC2626" />,
  },
  {
    stat: "83%",
    color: "#334155",
    bg: "#F1F5F9",
    rule: "#94A3B8",
    title: "Of applicants never receive",
    subtitle: "a rejection letter",
    source: "CITRUS Job Applicant Response Time Report, 2025",
    chart: <DonutChart pct={83} color="#334155" />,
  },
  {
    stat: "69%",
    color: "#7C3AED",
    bg: "#F5F3FF",
    rule: "#7C3AED",
    title: "Job seekers waited 3+ weeks",
    subtitle: "with zero status update",
    source: "Greenhouse Software and Harris Poll, 2,000 job seekers, Oct 2025",
    chart: (
      <BarChart
        color="#7C3AED"
        bars={[
          { label: "3+ wks silence", value: 69 },
          { label: "Search burnout", value: 34, highlight: false },
        ]}
      />
    ),
  },
  {
    stat: "+45.5%",
    color: "#2563EB",
    bg: "#EFF6FF",
    rule: "#2563EB",
    title: "More applications in Q3 2024",
    subtitle: "despite 10.6% fewer jobs posted",
    source: "LinkedIn Recruitment Trends Report, Q3 2025",
    chart: (
      <BarChart
        color="#2563EB"
        bars={[
          { label: "Applications", value: 100 },
          { label: "Jobs posted", value: 40, highlight: false },
        ]}
      />
    ),
  },
  {
    stat: "27x",
    color: "#16A34A",
    bg: "#F0FDF4",
    rule: "#16A34A",
    title: "Applications needed per",
    subtitle: "interview in 2026 (was 11 in 2021)",
    source: "Greenhouse Software and Harris Poll, Oct 2025",
    chart: (
      <BarChart
        color="#16A34A"
        bars={[
          { label: "2021", value: 11, highlight: false },
          { label: "2026", value: 27 },
        ]}
      />
    ),
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="mb-24 scroll-mt-20">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.12em] mb-8">
        Research
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.stat}
            className="rounded-2xl p-5 flex flex-col justify-between min-h-[240px]"
            style={{ backgroundColor: card.bg }}
          >
            {/* Top rule */}
            <div
              className="w-6 h-[3px] rounded-full mb-4"
              style={{ backgroundColor: card.rule }}
            />

            {/* Stat */}
            <p
              className="text-[32px] font-black leading-none mb-1"
              style={{ color: card.color }}
            >
              {card.stat}
            </p>
            <p className="text-[13px] font-semibold text-gray-700 leading-tight">
              {card.title}
            </p>
            <p className="text-[12px] text-gray-400 leading-tight mb-4">
              {card.subtitle}
            </p>

            {/* Chart */}
            <div className="flex-1 flex items-end mb-3">{card.chart}</div>

            {/* Source */}
            <p className="text-[9px] text-gray-300 leading-tight">{card.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
