import type { ThemeDefinition, ThemeParams } from "../../types/theme";

export const aurora: ThemeDefinition = {
  id: "aurora",
  label: "Aurora Contrast",
  description:
    "High-impact Teal, Emerald, and Ember gradients with deep contrast",
  icon: "solar:stars-minimalistic-bold-duotone",
  font: "var(--font-body)",
  generate: ({ radius, shadow }: ThemeParams) => ({
    wrapper: `bg-forge-black ${radius} ${shadow} border border-forge-border`,
    button: `bg-(--color-primary) ${radius} text-white font-bold hover:shadow-lg hover:shadow-(--color-primary)/20 transition-all active:scale-[0.98]`,
    buttonSecondary: `bg-white/5 ${radius} border border-forge-border text-white hover:bg-white/10 transition-all font-medium`,
    input: `bg-forge-dark ${radius} border border-forge-border text-white placeholder:text-forge-muted focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary)/30 outline-none transition-all`,
    card: `bg-forge-panel ${radius} ${shadow} border border-forge-border backdrop-blur-sm`,
    badge: `bg-(--color-primary)/15 text-(--color-primary) rounded-full text-xs font-bold px-2.5 py-0.5 border border-(--color-primary)/20`,
    text: "text-forge-text leading-relaxed",
    heading: "text-white font-black tracking-tight",
  }),
};
