export default function RedefinedChallengeSection() {
  return (
    <section id="redefined-challenge" className="mb-40 scroll-mt-20">
      <h2 className="text-center text-[56px] md:text-[64px] font-black leading-tight mb-10 bg-linear-to-r from-[#0E2640] via-[#33516E] to-[#6084A6] bg-clip-text text-transparent">
        Redefined Challenge
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <p className="text-[18px] text-gray-800 leading-relaxed">
          The research pointed somewhere specific. The problem is not that
          LinkedIn is bad at finding jobs. It is bad at helping people manage a
          search once it starts. The existing tools — job alerts, saved jobs,
          the apply button — are built for the moment of discovery. Nothing is
          built for the weeks that follow.
        </p>
        <p className="text-[18px] text-gray-800 leading-relaxed">
          This is where the opportunity sits.
        </p>
      </div>

      {/* How might we... block */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[16px] md:text-[17px] text-gray-700 leading-[1.7] italic">
          How might we help laid-off professionals, including those
          experiencing repeat displacement, transition from chaos to control by
          eliminating post-application silence and uncertainty through
          real-time application visibility, surfacing signals LinkedIn already
          has, and longitudinal progress tracking that persists across job
          searches — built for active job seekers managing their search, not
          for finding jobs or building resumes.
        </p>
      </div>
    </section>
  );
}
