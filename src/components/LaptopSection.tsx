export default function LaptopSection() {
  return (
    <section className="w-full flex items-center justify-center py-16 px-8 bg-white">
      <div className="w-full max-w-4xl">
        {/* Screen bezel */}
        <div className="bg-[#1D1D1F] rounded-[20px] p-[14px] shadow-2xl">
          {/* Camera notch row */}
          <div className="flex justify-center mb-2">
            <div className="w-16 h-1 bg-[#3A3A3C] rounded-full" />
          </div>
          {/* Screen */}
          <div className="bg-[#F5F5F7] rounded-[10px] aspect-[16/10] flex flex-col items-center justify-center gap-3">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="w-12 h-12 rounded-xl" />
            <p className="text-gray-400 text-sm font-medium tracking-wide">Dashboard placeholder</p>
            <p className="text-gray-300 text-xs">Add your mockup image here</p>
          </div>
        </div>
        {/* Hinge */}
        <div className="bg-[#CBCBCB] h-[6px] mx-8 rounded-b-sm" />
        {/* Base */}
        <div className="bg-[#DEDEDE] h-4 rounded-b-2xl shadow-md" />
        {/* Foot notch */}
        <div className="flex justify-center">
          <div className="bg-[#CCCCCC] h-[3px] w-1/3 rounded-b-lg" />
        </div>
      </div>
    </section>
  );
}
