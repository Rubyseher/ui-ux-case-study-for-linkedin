import ImagePlaceholder from "../ImagePlaceholder";

export default function UserInterviewsSection() {
  return (
    <section id="user-interviews" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-black leading-tight mb-10 bg-linear-to-r from-[#0E2640] via-[#33516E] to-[#6084A6] bg-clip-text text-transparent">
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

      {/* 3 pillar cards — placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
        <ImagePlaceholder
          alt="A. VISIBILITY — Users have no signal after applying. No confirmation a recruiter opened their profile, no status update."
          aspectRatio="3/4"
          className="shadow-sm bg-white"
        />
        <ImagePlaceholder
          alt="C. MENTAL LOAD — Sustained silence compounds. 66% of job seekers point to lack of feedback as the cause of burnout."
          aspectRatio="3/4"
          className="shadow-sm bg-white"
        />
        <ImagePlaceholder
          alt="B. TRACKING — There is no native way to manage multiple applications. Users build their own spreadsheets, some logging 500+ roles."
          aspectRatio="3/4"
          className="shadow-sm bg-white"
        />
      </div>

      {/* 4 numbered user stories — placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <ImagePlaceholder
          alt="1. As a user, I want to know what happened to my application after I submitted it. 96% of LinkedIn applications receive no response. Source: HiringThing, 2026"
          aspectRatio="4/3"
          className="shadow-sm bg-white"
        />
        <ImagePlaceholder
          alt="2. As a user, I want to stop hearing nothing for weeks without knowing why. 69% of applicants endured 3+ weeks of silence. Source: Greenhouse 2024 · eWeek 2025"
          aspectRatio="4/3"
          className="shadow-sm bg-white"
        />
        <ImagePlaceholder
          alt="3. As a user, I want one place to track everything, not a spreadsheet I built myself. Real job seekers log 500+ applications manually. Source: Reddit r/jobs 2025 to 2026"
          aspectRatio="4/3"
          className="shadow-sm bg-white"
        />
        <ImagePlaceholder
          alt="4. As a user, I want to feel like my search is going somewhere, not just piling up. 72% of job seekers say job hunting impacts mental health. Source: The Interview Guys, 2025"
          aspectRatio="4/3"
          className="shadow-sm bg-white"
        />
      </div>
    </section>
  );
}
