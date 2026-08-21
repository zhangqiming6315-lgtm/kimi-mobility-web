type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.24em] ${
          inverse ? "text-kimi-green" : "text-kimi-green"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-[length:var(--text-heading)] font-semibold leading-[1.02] tracking-[-0.045em] ${
          inverse ? "text-white" : "text-kimi-black"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-[length:var(--text-lead)] leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${inverse ? "text-white/58" : "text-kimi-gray"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
