type FeatureCard = {
  title: string;
  description?: string;
};

type FeatureCardGridProps = {
  items: readonly FeatureCard[];
  numbered?: boolean;
  variant?: "dark" | "light";
};

export default function FeatureCardGrid({
  items,
  numbered = false,
  variant = "dark",
}: FeatureCardGridProps) {
  const isDark = variant === "dark";
  const columns = items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <div
      className={`grid border-l border-t sm:grid-cols-2 ${columns} ${
        isDark ? "border-white/12" : "border-black/12"
      }`}
    >
      {items.map((item, index) => (
        <article
          className={`flex min-h-72 flex-col border-b border-r p-7 sm:p-8 ${
            isDark ? "border-white/12" : "border-black/12 bg-white"
          }`}
          key={item.title}
        >
          {numbered ? (
            <span className="text-xs font-semibold tracking-[0.2em] text-kimi-green">
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : (
            <span className="h-px w-10 bg-kimi-green" aria-hidden="true" />
          )}
          <div className="mt-auto pt-14">
            <h3
              className={`text-2xl font-semibold tracking-[-0.035em] ${
                isDark ? "text-white" : "text-kimi-black"
              }`}
            >
              {item.title}
            </h3>
            {item.description ? (
              <p
                className={`mt-4 text-sm leading-6 ${
                  isDark ? "text-white/48" : "text-kimi-gray"
                }`}
              >
                {item.description}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
