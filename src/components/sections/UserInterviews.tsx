export default function UserInterviewsSection() {
  return (
    <section id="user-interviews" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-black leading-tight mb-10 bg-linear-to-r from-[#0E2640] from-10% via-[#33516E] via-30% to-[#6084A6] bg-clip-text text-transparent">
        User Interviews
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 mb-14">
        <p className="text-[18px] text-gray-800 leading-relaxed">
          I didn&apos;t run formal interviews. Instead, I spent time reading
          through hundreds of threads across Reddit&apos;s r/jobs and
          r/recruitinghell communities between 2024 and 2026, looking for
          patterns in how laid-off professionals describe their experience of
          job searching. The signal was consistent and loud.
        </p>
        <p className="text-[18px] text-gray-800 leading-relaxed">
          To frame the research, I identified the target user group first.
          Laid-off professionals were the clearest fit, not students, not
          passive job seekers, not career switchers. People who had a job, lost
          it without warning, and were now searching at volume under real
          financial and emotional pressure. This group is also the
          fastest-growing segment of active job seekers in 2025, driven by a
          65% year-over-year rise in US job cuts.
        </p>
        <p className="text-[18px] text-gray-800 leading-relaxed">
          What followed was mapping the recurring pain patterns from their own
          words into three clusters.
        </p>
      </div>

      {/* 3 user-interview images stacked vertically — alternating left / right */}
      <div className="flex flex-col">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`flex ${n % 2 === 0 ? "justify-end" : "justify-start"}`}
          >
            <img
              src={`/userInterviews/imessage_v3_${n}.png`}
              alt={`User interview ${n}`}
              className="w-full max-w-md h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
