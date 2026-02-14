import type { ThemeDefinition, ThemeParams } from "../../types/theme";
import { Grid3X3 } from "lucide-react";

export const bento: ThemeDefinition = {
  id: "bento",
  label: "Bento",
  description: "Apple-style grid, clean, modern",
  icon: Grid3X3,
  font: "var(--font-body)",
  generate: ({ radius, shadow }: ThemeParams) => ({
    wrapper: `bg-[var(--color-forge-panel)] ${radius} ${shadow} border border-[var(--color-forge-border)]`,
    button: `bg-[var(--color-primary)] ${radius} text-white font-medium hover:opacity-90 transition-all`,
    buttonSecondary: `bg-transparent ${radius} border border-[var(--color-forge-border)] text-[var(--color-forge-text)] hover:bg-white/5 transition-all`,
    input: `bg-[var(--color-forge-dark)] ${radius} border border-[var(--color-forge-border)] text-white placeholder:text-[var(--color-forge-muted)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/30 outline-none transition-all`,
    card: `bg-[var(--color-forge-panel)] ${radius} ${shadow} border border-[var(--color-forge-border)]`,
    badge: `bg-[var(--color-primary)]/15 text-[var(--color-primary)] rounded-full text-xs font-medium`,
    text: "text-[var(--color-forge-text)]",
    heading: "text-[var(--color-forge-white)] font-semibold",
  }),
};
