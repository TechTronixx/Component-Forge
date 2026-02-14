import type { ThemeDefinition } from "../../types/theme";
import { Clock } from "lucide-react";

export const chrono: ThemeDefinition = {
  id: "chrono",
  label: "Chrono",
  description: "Temporal interfaces and history",
  icon: Clock,
  font: "var(--font-cyber)",
  generate: () => ({
    wrapper: `bg-[#1a1a1a] text-[#d4af37] border-4 border-double border-[#d4af37]/40 p-6`,
    button: `bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37] px-6 py-2 hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all uppercase tracking-[0.2em] text-xs font-bold relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[#d4af37] before:top-0 before:left-[-100%] hover:before:left-[100%] before:transition-all before:duration-1000`,
    buttonSecondary: `bg-transparent text-[#d4af37]/60 hover:text-[#d4af37] transition-colors uppercase tracking-[0.2em] text-xs`,
    input: `bg-transparent border-b border-[#d4af37]/50 text-[#d4af37] placeholder:text-[#d4af37]/20 focus:border-[#d4af37] outline-none font-mono py-2`,
    card: `bg-[#1a1a1a] border border-[#d4af37]/20 p-6 relative after:content-[''] after:absolute after:top-2 after:right-2 after:w-2 after:h-2 after:bg-[#d4af37] after:rounded-full after:animate-pulse`,
    badge: `bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 px-2 py-0.5 text-[0.6rem] uppercase tracking-widest rounded-sm`,
    text: "text-[#d4af37]/80 font-mono text-sm leading-relaxed",
    heading:
      "text-[#d4af37] font-bold uppercase tracking-[0.3em] border-l-2 border-[#d4af37] pl-4 mb-4 opacity-90",
  }),
};
