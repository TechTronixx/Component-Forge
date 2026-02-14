import type { ThemeDefinition, ThemeParams } from "../../types/theme";
import { Map } from "lucide-react";

export const cartographer: ThemeDefinition = {
  id: "cartographer",
  label: "Cartographer",
  description: "Spatial interfaces with dot grids",
  icon: Map,
  font: "var(--font-spatial)",
  generate: ({ radius }: ThemeParams) => ({
    wrapper: `bg-[var(--color-forge-dark)] ${radius} border border-[var(--color-forge-border)] [background-image:radial-gradient(var(--color-forge-border)_1px,transparent_1px)] [background-size:20px_20px]`,
    button: `bg-[var(--color-forge-panel)] text-[var(--color-primary)] ${radius} border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors uppercase tracking-widest text-xs font-bold`,
    buttonSecondary: `bg-transparent text-[var(--color-forge-text)] ${radius} border border-[var(--color-forge-border)] hover:border-[var(--color-primary)] transition-colors uppercase tracking-widest text-xs`,
    input: `bg-[var(--color-forge-panel)]/80 backdrop-blur-sm ${radius} border border-[var(--color-forge-border)] text-[var(--color-primary)] placeholder:text-[var(--color-forge-muted)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all font-mono text-sm`,
    card: `bg-[var(--color-forge-panel)]/90 backdrop-blur-sm ${radius} border border-[var(--color-forge-border)] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border after:border-[var(--color-primary)]/10 after:pointer-events-none`,
    badge: `bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30 ${radius} px-2 py-0.5 text-[0.6rem] uppercase tracking-widest`,
    text: "text-[var(--color-forge-text)] font-mono text-sm",
    heading:
      "text-[var(--color-white)] font-bold uppercase tracking-widest text-sm flex items-center gap-2 before:content-[''] before:block before:w-3 before:h-3 before:bg-[var(--color-primary)]",
  }),
};
