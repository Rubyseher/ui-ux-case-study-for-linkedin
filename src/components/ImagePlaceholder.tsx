type Props = {
  alt: string;
  aspectRatio?: string;
  className?: string;
};

export default function ImagePlaceholder({
  alt,
  aspectRatio = "16/10",
  className = "",
}: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`rounded-2xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-center px-6 py-8 ${className}`}
      style={{ aspectRatio }}
    >
      <p className="text-[12px] text-gray-400 leading-relaxed max-w-xs">{alt}</p>
    </div>
  );
}
