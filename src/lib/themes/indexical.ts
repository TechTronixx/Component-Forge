import type { ThemeDefinition } from "../../types/theme";


export const indexical: ThemeDefinition = {
  id: "indexical",
  label: "Indexical",
  description: "Radar maps and data points",
  icon: "solar:stars-bold-duotone",
  font: "var(--font-spatial)",
  generate: () => ({
    wrapper: `bg-[#0b0b14] text-[var(--color-primary)] border border-[var(--color-primary)]/20 p-6 relative [background-image:radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] [background-size:40px_40px] opacity-100`,
    button: `bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black transition-all rounded-full px-6 py-2 uppercase text-xs font-bold`,
    buttonSecondary: `bg-transparent text-[var(--color-primary)]/70 border border-dashed border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] hover:border-solid transition-all rounded-full uppercase text-xs`,
    input: `bg-[#0b0b14] border border-[var(--color-primary)]/50 text-[var(--color-primary)] placeholder:text-[var(--color-primary)]/30 rounded-full px-4 text-sm focus:ring-1 focus:ring-[var(--color-primary)] outline-none`,
    card: `bg-[#0b0b14]/90 border border-[var(--color-primary)]/20 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]`,
    badge: `bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] rounded-full px-3 py-0.5 text-[0.6rem] uppercase tracking-widest`,
    text: "text-[var(--color-primary)]/80 font-mono text-sm",
    heading:
      "text-[var(--color-white)] font-mono font-normal uppercase tracking-widest",
  }),
};
