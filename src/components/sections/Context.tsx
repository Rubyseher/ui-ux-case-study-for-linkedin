export default function ContextSection() {
  return (
    <section id="context" className="mb-40 scroll-mt-20">
      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-8">
        With the scale of the problem mapped, the next step was to understand
        what was actually being asked to solve.
      </p>

      {/* Brief — plain text, no box */}
      <div className="space-y-5 text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-12">
        <p>
          LinkedIn wants to improve the job application experience for{" "}
          <strong>active job seekers</strong> using its platform.
        </p>
        <p>
          The goal is to help people applying to multiple roles who{" "}
          <strong>feel lost once they hit submit.</strong> These users may
          have tens of applications in progress, no visibility into where
          they stand, and no reliable way to track their search — even when
          LinkedIn already holds that data.
        </p>
        <p>
          The platform should make the post-application experience feel{" "}
          <strong>organised, transparent, and motivating</strong> while
          reducing the anxiety of the application black hole.
        </p>
        <p>
          Success means guiding users from{" "}
          <strong>
            &quot;I have no idea what happened to any of my applications&quot;
          </strong>{" "}
          to{" "}
          <strong>&quot;I feel in control of my job search.&quot;</strong>
        </p>
      </div>

      {/* Brief breakdown diagram */}
      <div className="mb-10 max-w-5xl mx-auto">
        <img
          src="/challenge/brief-breakdown.svg"
          alt="Brief breakdown — mapping each ambiguous term to a specific user, behaviour, or outcome"
          className="w-full h-auto rounded-2xl shadow-md"
        />
      </div>

      <p className="text-[18px] text-gray-800 leading-relaxed max-w-4xl mx-auto mb-6">
        But briefs use vague language. Before jumping to solutions, every
        ambiguous term was broken down, who exactly is an active job seeker,
        what does feel lost actually mean, and what does success look like in
        measurable terms. Each term mapped to a specific user, behaviour, or
        outcome. That clarity became the foundation for every decision that
        followed.
      </p>
    </section>
  );
}
