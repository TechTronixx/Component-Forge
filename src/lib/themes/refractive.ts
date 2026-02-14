import type { ThemeDefinition, ThemeParams } from "../../types/theme";
import { Triangle } from "lucide-react";

export const refractive: ThemeDefinition = {
  id: "refractive",
  label: "Refractive",
  description: "Advanced glassmorphism with dispersion",
  icon: Triangle,
  font: "var(--font-display)",
  generate: ({ radius }: ThemeParams) => ({
    wrapper: `bg-white/10 backdrop-blur-3xl saturate-200 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] ${radius}`,
    button: `bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold tracking-wide hover:bg-white/30 hover:scale-105 transition-all ${radius} shadow-[0_4px_16px_rgba(0,0,0,0.1)]`,
    buttonSecondary: `bg-transparent border border-white/20 text-white/80 hover:bg-white/10 transition-all ${radius}`,
    input: `bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/30 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.1)] outline-none transition-all ${radius}`,
    card: `bg-gradient-to-br from-white/10 to-transparent border border-white/20 ${radius} backdrop-blur-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]`,
    badge: `bg-white/20 backdrop-blur-md text-white border border-white/30 px-2 py-0.5 text-xs font-medium ${radius}`,
    text: "text-white/90 font-medium",
    heading: "text-white font-bold tracking-tight drop-shadow-lg",
  }),
};
