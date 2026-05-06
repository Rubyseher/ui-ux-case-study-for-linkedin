const items = [
  {
    head: "Scope is a design decision.",
    body: "This project started as a broad LinkedIn redesign and became something specific: a tracker for laid-off professionals. Narrowing the user group made every design decision cleaner. A tool for everyone is a tool for no one.",
  },
  {
    head: "Research without access is still research.",
    body: "I didn't run formal interviews or usability tests. What I had was hundreds of real voices across Reddit, verified data from Greenhouse and The Interview Guys, and a clear pattern that repeated across all of it. Community research is not a shortcut. It is a different method, and an honest one.",
  },
  {
    head: "The emotional layer is a feature, not a nice-to-have.",
    body: "Every competitor I looked at solved the functional problem and ignored the emotional one. The summary bar showing 8 applied, 3 active, 2 awaiting response is not just information. It is the difference between a search that feels like a void and one that feels like progress.",
  },
  {
    head: "Validating against the persona.",
    body: "Before finalising the screens, I ran an AI-assisted persona test using Floto, asking Arjun — a laid-off software engineer — what he noticed first, what confused him, and whether his goal was met.",
  },
];

export default function LearningSection() {
  return (
    <section id="learnings" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-black leading-tight mb-12 bg-linear-to-r from-[#0E2640] via-[#33516E] to-[#6084A6] bg-clip-text text-transparent">
        Learning
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {items.map(({ head, body }) => (
          <p key={head} className="text-[17px] text-gray-800 leading-relaxed">
            <strong>{head}</strong> {body}
          </p>
        ))}

        <p className="text-[17px] text-gray-800 leading-relaxed pt-2">
          The tracker concept landed. Three friction points came out of it: the
          Company Site and Job Post icons were identical and needed
          differentiation, the progress bar dots needed labels, and a search
          bar would become essential past 50 applications.
        </p>

        <div className="pt-4">
          <p className="text-[17px] font-bold text-gray-900 mb-2">
            What I would do next?
          </p>
          <p className="text-[17px] text-gray-800 leading-relaxed">
            This project covers four feature sets taken to high-fidelity
            screens. Next steps would be a usability study with 5 to 8 laid-off
            professionals currently in active search, focused on two questions:
            does the status panel reduce anxiety, and does the year filter make
            past searches feel useful rather than painful.
          </p>
        </div>
      </div>
    </section>
  );
}
