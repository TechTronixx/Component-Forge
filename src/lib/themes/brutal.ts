import type { ThemeDefinition, ThemeParams } from "../../types/theme";


export const brutal: ThemeDefinition = {
  id: "brutal",
  label: "Brutal",
  description: "High contrast, hard shadows, raw aesthetic",
  icon: "solar:layers-minimalistic-bold-duotone",
  font: "var(--font-mono)",
  generate: ({ radius, border }: ThemeParams) => ({
    wrapper: `bg-[var(--color-surface)] ${radius} ${border} border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]`,
    button: `bg-[var(--color-primary)] ${radius} ${border} border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] text-white font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all`,
    buttonSecondary: `bg-transparent ${radius} ${border} border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] text-white font-bold hover:bg-[var(--color-primary)]/10 transition-all`,
    input: `bg-white/5 ${radius} ${border} border-black text-white placeholder:text-white/40 focus:border-[var(--color-primary)] outline-none transition-all`,
    card: `bg-[var(--color-surface)] ${radius} ${border} border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]`,
    badge: `bg-[var(--color-accent)] ${radius} ${border} border-black text-black text-xs font-bold`,
    text: "text-white/90",
    heading: "text-white font-extrabold uppercase tracking-wide",
  }),
};
