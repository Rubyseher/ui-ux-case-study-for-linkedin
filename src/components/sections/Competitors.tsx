const competitors = [
  {
    title: "A. Real-time application status tracking",
    body: [
      "Tools like Huntr and Jobscan give job seekers a kanban-style board to log and move applications through stages. The visual organisation is genuinely useful — it brings structure to a chaotic process.",
      "The gap: every status update is manual. The user drags the card. There is no connection to LinkedIn or any recruiter-side signal. You can track that you applied. You cannot track what happened after.",
    ],
    tagline: "No recruiter-side signals. No LinkedIn integration.",
    image: "/competitors/comp1.png",
    imageAlt: "Competitor research — Real-time application status tracking (Huntr, Jobscan kanban boards)",
  },
  {
    title: "B. Surfacing LinkedIn's existing application signals",
    body: [
      "Several UX concept studies, including work published on UX Planet by Pranati Rao, have explored what it would look like if LinkedIn surfaced richer application data to candidates — viewed status, whether the role is still active, whether hiring has paused.",
      "The gap: none of this exists natively in LinkedIn today. Applicants can see the stage they submitted to. They cannot see whether a recruiter opened their profile, whether the role is still being actively considered, or whether the posting has gone dark. LinkedIn holds this data. It does not surface it.",
    ],
    tagline: "Applicants see submission status. Recruiter activity is invisible.",
    image: "/competitors/comp2.png",
    imageAlt: "Competitor research — UX Planet concept by Pranati Rao surfacing LinkedIn application signals",
  },
  {
    title: "C. Persistent profile and search history across job searches",
    body: [
      "Tools like Huntr, Built In's tracker, and autofill extensions retain application data — but they are designed for one active search at a time. There is no concept of job search cycles, no separation of past versus current searches, and no way to surface learnings from previous applications.",
      "The gap: for laid-off professionals who have been through multiple rounds of displacement, the search history is valuable data. None of the existing tools treat it that way.",
    ],
    tagline: "Data retained. Context lost. No learning across searches.",
    image: "/competitors/comp3.png",
    imageAlt: "Competitor research — Huntr, Built In tracker, autofill extensions across multiple searches",
  },
  {
    title: "D. From chaos to control",
    body: [
      "Reddit communities like r/jobs document a consistent pattern: job seekers building their own dashboards, spreadsheets, even automating their own tracking tools because nothing available gives them a single view of their entire search at a glance.",
      "The gap: every existing tool is functional. None of them are built around the emotional reality of a sustained search — the need to feel like the search is going somewhere, not just accumulating.",
    ],
    tagline: "No single place to see your entire job search at a glance.",
    image: "/competitors/comp4.png",
    imageAlt: "Competitor research — Reddit r/jobs DIY dashboards and automated tracking tools",
  },
];

export default function CompetitorsSection() {
  return (
    <section id="competitors" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-black leading-tight mb-10 bg-linear-to-r from-[#0E2640] via-[#33516E] to-[#6084A6] bg-clip-text text-transparent">
        Competitors
      </h2>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-16">
        Before designing anything, I mapped what already exists across the four
        opportunity areas identified in research. The goal was not to find what
        to copy, it was to find what none of them had solved.
      </p>

      <div className="space-y-20 max-w-5xl mx-auto">
        {competitors.map(({ title, body, tagline, image, imageAlt }) => (
          <div
            key={title}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            <div className="space-y-5">
              <h3 className="text-[20px] font-bold text-gray-900">{title}</h3>
              {body.map((p, i) => (
                <p key={i} className="text-[16px] text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="text-[16px] font-semibold text-gray-900 pt-2">
                {tagline}
              </p>
            </div>
            <div className="md:pt-2">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* What this means */}
      <div className="max-w-4xl mx-auto mt-24">
        <p className="text-[16px] font-bold text-gray-900 mb-4">What this means</p>
        <p className="text-[18px] text-gray-800 leading-relaxed mb-4">
          Each competitor solves one part of the problem. Huntr solves
          organisation. LinkedIn surfaces discovery. Extensions autofill the
          application. But not one of them connects the moment of applying to
          everything that follows — the status, the history, the emotional arc
          of the search.
        </p>
        <p className="text-[18px] text-gray-800 leading-relaxed">
          That is the space this solution is built for.
        </p>
      </div>
    </section>
  );
}
