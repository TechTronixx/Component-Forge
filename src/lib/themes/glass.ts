import type { ThemeDefinition, ThemeParams } from "../../types/theme";
import { Gem } from "lucide-react";

export const glass: ThemeDefinition = {
  id: "glass",
  label: "Glass",
  description: "Frosted glass aesthetic with blur effects",
  icon: Gem,
  font: "var(--font-body)",
  generate: ({ radius, shadow }: ThemeParams) => ({
    wrapper: `bg-white/5 backdrop-blur-xl ${radius} ${shadow} border border-white/10`,
    button: `bg-white/10 backdrop-blur-md ${radius} border border-white/20 text-white hover:bg-white/20 transition-all`,
    buttonSecondary: `bg-transparent backdrop-blur-sm ${radius} border border-white/20 text-white/80 hover:bg-white/10 transition-all`,
    input: `bg-white/5 backdrop-blur-sm ${radius} border border-white/15 text-white placeholder:text-white/40 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/30 outline-none transition-all`,
    card: `bg-white/5 backdrop-blur-xl ${radius} border border-white/10 ${shadow}`,
    badge: `bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs`,
    text: "text-white/90",
    heading: "text-white font-semibold",
  }),
};
