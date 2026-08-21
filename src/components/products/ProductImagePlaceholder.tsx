type ProductImagePlaceholderProps = {
  category: string;
  className?: string;
};

export default function ProductImagePlaceholder({
  category,
  className = "",
}: ProductImagePlaceholderProps) {
  return (
    <div
      aria-label={`${category} vehicle image placeholder`}
      className={`relative flex min-h-80 overflow-hidden border border-white/12 bg-[#171b1d] ${className}`}
      role="img"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:4rem_4rem]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border border-kimi-green/25"
      />
      <div className="relative mt-auto flex w-full items-end justify-between gap-8 p-7 sm:p-9">
        <div>
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-kimi-green">
            Vehicle imagery
          </p>
          <p className="mt-2 text-sm text-white/45">Image forthcoming</p>
        </div>
        <p className="text-right text-xs font-medium uppercase tracking-[0.18em] text-white/25">
          {category}
          <br />
          platform
        </p>
      </div>
    </div>
  );
}
