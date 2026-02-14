import type { ThemeDefinition, ThemeParams } from "../../types/theme";
import { GraduationCap } from "lucide-react";

export const scholar: ThemeDefinition = {
  id: "scholar",
  label: "Scholar",
  description: "Academic rigor, high readability",
  icon: GraduationCap,
  font: "var(--font-academic)",
  generate: ({ border }: ThemeParams) => ({
    wrapper: `bg-[#fefdf5] text-[#111] ${border} border-transparent p-8 max-w-prose mx-auto shadow-none`,
    button: `bg-transparent border border-black text-black font-serif italic px-6 py-2 hover:bg-black hover:text-[#fefdf5] transition-colors duration-300`,
    buttonSecondary: `bg-transparent text-black font-serif underline underline-offset-4 hover:no-underline transition-all`,
    input: `bg-transparent border-b border-black text-black placeholder:text-black/40 font-serif italic focus:border-b-2 focus:border-[var(--color-primary)] outline-none transition-all px-0 rounded-none`,
    card: `bg-[#fefdf5] border-l-4 border-[var(--color-primary)] pl-6 py-2 shadow-none italic`,
    badge: `bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)] px-2 py-0.5 text-xs font-serif italic rounded-full`,
    text: "text-[#111] font-serif leading-relaxed",
    heading: "text-[#111] font-serif font-normal italic",
  }),
};
