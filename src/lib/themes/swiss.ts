import type { ThemeDefinition } from "../../types/theme";


export const swiss: ThemeDefinition = {
  id: "swiss",
  label: "Swiss",
  description: "Typography-driven, grid lines, minimalist",
  icon: "fluent:text-field-24-filled",
  font: "var(--font-display)",
  generate: () => ({
    wrapper: "bg-transparent border-b border-[var(--color-forge-border)]",
    button: `bg-[var(--color-primary)] rounded-none text-white font-medium uppercase tracking-widest text-sm hover:opacity-90 transition-all`,
    buttonSecondary: `bg-transparent rounded-none border-b-2 border-[var(--color-primary)] text-white uppercase tracking-widest text-sm hover:bg-[var(--color-primary)]/10 transition-all`,
    input: `bg-transparent rounded-none border-b-2 border-[var(--color-forge-border)] text-white placeholder:text-[var(--color-forge-muted)] focus:border-[var(--color-primary)] outline-none transition-all`,
    card: "bg-transparent rounded-none border border-[var(--color-forge-border)]",
    badge: `border border-[var(--color-primary)] rounded-none text-[var(--color-primary)] text-xs font-medium uppercase tracking-wider`,
    text: "text-[var(--color-forge-text)]",
    heading:
      "text-[var(--color-forge-white)] font-light uppercase tracking-[0.2em] text-lg",
  }),
};
