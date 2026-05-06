import ImagePlaceholder from "../ImagePlaceholder";

const featureSets = [
  {
    title: "Feature set 1. Real-time application status tracking",
    body: [
      "Existing tools like Huntr and Jobscan give users a kanban board to move applications through stages manually. The update is always one step behind because the user has to do it themselves.",
      "The design brings the tracker inside LinkedIn, where the data already lives. Status updates automatically. No manual dragging.",
    ],
    imageAlt: "Feature 1 — LinkedIn-native job tracker laptop mockup with auto-updating status table",
  },
  {
    title: "Feature set 2. Surface LinkedIn's existing application signals",
    body: [
      "Applicants today can see that they submitted. They cannot see whether a recruiter opened their profile, whether the role is still being filled, or what their response likelihood is.",
      "The panel on the right surfaces exactly those signals, pulled from data LinkedIn already holds. The job seeker gets context. The recruiter workflow stays unchanged.",
    ],
    imageAlt: "Feature 2 — Tracker laptop mockup with side panel showing role active status, response likelihood, connections",
  },
  {
    title: "Feature set 3. Persistent profile and search history across job searches",
    body: [
      "Every existing tracker is built for one search at a time. When a laid-off professional goes through a second or third round of displacement, they start from zero. Their history, their patterns, their past applications, all of it is gone.",
      "The year filter at the top of the tracker separates search cycles. Past searches become reference. Current search stays focused.",
    ],
    imageAlt: "Feature 3 — Tracker laptop mockup with year filter separating search cycles",
  },
  {
    title: "Feature set 4. From chaos to control",
    body: [
      "The emotional reality of a sustained job search is not solved by a better spreadsheet. It is solved by a single place that makes the search feel like it is going somewhere.",
      "The overview bar at the top, 8 applied, 3 active, 2 awaiting response, 2 closed, does something none of the existing tools do. It turns a pile of applications into a picture of a search in progress.",
    ],
    imageAlt: "Feature 4 — Tracker laptop mockup with summary bar showing 8 applied, 3 active, 2 awaiting response, 2 closed",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-black leading-tight mb-10 bg-linear-to-r from-[#0E2640] via-[#33516E] to-[#6084A6] bg-clip-text text-transparent">
        Solution
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <p className="text-[18px] text-gray-800 leading-relaxed">
          The research pointed to a single gap. LinkedIn already has the data.
          It just does not surface it.
        </p>
        <p className="text-[18px] text-gray-800 leading-relaxed">
          Every signal a job seeker needs, whether a recruiter viewed the
          application, whether the role is still active, whether a connection
          works at that company, exists inside LinkedIn&apos;s infrastructure
          today. The design opportunity was not to build something new. It was
          to make visible what was already there.
        </p>
        <p className="text-[18px] font-bold text-gray-900">
          Two opportunities shaped the work.
        </p>
      </div>

      {/* 2 opportunities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-24">
        {[
          "Give job seekers visibility into what happens after they apply.",
          "Give job seekers a persistent record of their search, not just a list of applications.",
        ].map((text, i) => (
          <div key={i}>
            <p className="text-[64px] font-black text-gray-900 leading-none mb-4">
              {i + 1}.
            </p>
            <p className="text-[18px] font-bold text-gray-900 leading-snug">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Feature sets */}
      <div className="space-y-24 max-w-6xl mx-auto">
        {featureSets.map(({ title, body, imageAlt }) => (
          <div
            key={title}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-5">
              <h3 className="text-[20px] font-bold text-gray-900 leading-snug">
                {title}
              </h3>
              {body.map((p, i) => (
                <p key={i} className="text-[16px] text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div>
              <ImagePlaceholder
                alt={imageAlt}
                aspectRatio="16/10"
                className="shadow-md bg-white"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
