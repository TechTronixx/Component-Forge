import type { ThemeDefinition } from "../../types/theme";
import { Radar } from "lucide-react";

export const navigator: ThemeDefinition = {
  id: "navigator",
  label: "Navigator",
  description: "HUD telemetry interface",
  icon: Radar,
  font: "var(--font-cyber)",
  generate: () => ({
    wrapper: `bg-[#050505] text-[#00ff41] border border-[#00ff41]/30 p-4 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] before:bg-[size:20px_20px]`,
    button: `bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41] px-4 py-2 hover:bg-[#00ff41] hover:text-black transition-all uppercase tracking-widest text-xs font-bold shadow-[0_0_10px_rgba(0,255,65,0.3)]`,
    buttonSecondary: `bg-transparent text-[#00ff41]/70 border border-[#00ff41]/30 hover:text-[#00ff41] hover:border-[#00ff41] transition-all uppercase tracking-widest text-xs`,
    input: `bg-black/50 border border-[#00ff41]/50 text-[#00ff41] placeholder:text-[#00ff41]/30 p-2 focus:border-[#00ff41] focus:shadow-[0_0_15px_rgba(0,255,65,0.2)] outline-none uppercase text-xs tracking-wider`,
    card: `bg-black/40 border border-[#00ff41]/30 p-4 backdrop-blur-sm relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-4 after:h-4 after:border-t-2 after:border-r-2 after:border-[#00ff41]`,
    badge: `bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/50 px-2 py-0.5 text-[0.6rem] uppercase tracking-widest animate-pulse`,
    text: "text-[#00ff41]/90 font-mono text-sm",
    heading:
      "text-[#00ff41] font-mono uppercase tracking-[0.2em] border-l-4 border-[#00ff41] pl-3",
  }),
};
