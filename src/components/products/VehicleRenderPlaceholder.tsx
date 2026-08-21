export default function VehicleRenderPlaceholder() {
  return (
    <div
      aria-label="KIMI Delivery X1 vehicle render placeholder"
      className="relative flex min-h-[24rem] overflow-hidden border border-white/12 bg-[#171b1d] sm:min-h-[32rem] lg:min-h-[42rem]"
      role="img"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:4rem_4rem]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[55%] w-[72%] -translate-x-1/2 -translate-y-1/2 border border-white/8"
      />
      <div className="relative mt-auto flex w-full items-end justify-between gap-6 p-6 sm:p-9">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-kimi-green">
          vehicle-render-placeholder
        </p>
        <p className="text-right text-xs uppercase tracking-[0.18em] text-white/25">
          Delivery X1
          <br />
          vehicle study
        </p>
      </div>
    </div>
  );
}
