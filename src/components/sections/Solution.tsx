export default function SolutionSection() {
  return (
    <section id="solution" className="mb-24 scroll-mt-20">
      <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.12em] mb-8">
        The Solution
      </h2>

      {/* MacBook frame */}
      <div className="w-full max-w-2xl mx-auto">
        {/* Screen bezel */}
        <div className="bg-[#1D1D1F] rounded-[18px] p-3 shadow-2xl">
          {/* Notch bar */}
          <div className="flex items-center justify-center mb-2">
            <div className="w-20 h-1.5 bg-[#3A3A3C] rounded-full" />
          </div>
          {/* Screen */}
          <div className="bg-[#F5F5F7] rounded-[10px] aspect-[16/10] flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center shadow">
              <span className="text-white font-bold text-lg italic">in</span>
            </div>
            <p className="text-gray-400 text-sm font-medium">Dashboard mockup</p>
            <p className="text-gray-300 text-xs">Prototype coming soon</p>
          </div>
        </div>
        {/* Hinge */}
        <div className="bg-[#C8C8C8] h-2 rounded-b-sm mx-6 shadow-sm" />
        {/* Base */}
        <div className="bg-[#E0E0E0] h-3 rounded-b-xl mx-0 shadow" />
        <div className="flex justify-center">
          <div className="bg-[#D5D5D5] h-1 w-1/3 rounded-b-xl" />
        </div>
      </div>
    </section>
  );
}
