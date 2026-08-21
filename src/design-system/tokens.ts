export const brandColors = {
  black: "#111111",
  green: "#00B894",
  gray: "#8A8A8A",
  light: "#E6E6E6",
  white: "#FFFFFF",
} as const;

export const spacing = {
  section: "clamp(5rem, 10vw, 9rem)",
  gutter: "clamp(1.25rem, 4vw, 3rem)",
  content: "80rem",
} as const;

export const typography = {
  display: "clamp(3.125rem, 5.8vw, 6rem)",
  heading: "clamp(2.25rem, 5vw, 4.5rem)",
  lead: "clamp(1.125rem, 2vw, 1.375rem)",
} as const;

export type BrandColor = keyof typeof brandColors;
