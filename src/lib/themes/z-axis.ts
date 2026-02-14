import type { ThemeDefinition, ThemeParams } from "../../types/theme";
import { Box } from "lucide-react";

export const zAxis: ThemeDefinition = {
  id: "z-axis",
  label: "Z-Axis",
  description: "Spatial depth and 3D transforms",
  icon: Box,
  font: "var(--font-body)",
  generate: ({ radius }: ThemeParams) => ({
    wrapper: `bg-[#0f0f12] text-white perspective-[1000px] border border-white/10 ${radius} [transform-style:preserve-3d]`,
    button: `bg-[var(--color-primary)] text-white hover:translate-z-4 hover:-translate-y-1 transition-transform shadow-xl ${radius} font-bold tracking-wide`,
    buttonSecondary: `bg-white/5 border border-white/10 text-white hover:bg-white/10 ${radius}`,
    input: `bg-[#1a1a20] border border-white/10 text-white focus:translate-z-2 focus:border-[var(--color-primary)] transition-all ${radius} outline-none`,
    card: `bg-[#1a1a20] border border-white/5 shadow-2xl hover:scale-[1.02] hover:rotate-x-2 transition-transform duration-500 ease-out ${radius}`,
    badge: `bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 ${radius} px-2 py-0.5 text-xs`,
    text: "text-gray-400",
    heading: "text-white font-bold tracking-tight",
  }),
};
