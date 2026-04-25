import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-8 pt-20">
      {/* LinkedIn badge */}
      <div className="flex items-center gap-3 mb-12">
        <Image
          src="/linkedin-logo.png"
          alt="LinkedIn"
          width={56}
          height={56}
          className="rounded-xl"
        />
        <div className="text-left">
          <p className="font-semibold text-[18px] text-gray-900 leading-tight">LinkedIn</p>
          <p className="text-gray-400 text-sm">UX Case Study · 2026</p>
        </div>
      </div>

      {/* Heading — line 1 black, line 2 blue, exact PDF layout */}
      <h1 className="font-black leading-[1.04] tracking-tight mb-8" style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
        <span className="block text-gray-900">A job search that finally</span>
        <span className="block text-[#0A66C2]">talks back</span>
      </h1>

      {/* Subtitle — two lines matching PDF */}
      <p className="text-gray-400 leading-relaxed" style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}>
        A product design case study of surfacing LinkedIn&apos;s existing signals
        <br />
        for 1.1M+ active job seekers
      </p>
    </section>
  );
}
