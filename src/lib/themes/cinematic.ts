import type { ThemeDefinition } from "../../types/theme";
import { Clapperboard } from "lucide-react";

export const cinematic: ThemeDefinition = {
  id: "cinematic",
  label: "Cinematic",
  description: "Immersive media focus",
  icon: Clapperboard,
  font: "var(--font-serif)",
  generate: () => ({
    wrapper: `bg-black text-white p-0 overflow-hidden`,
    button: `bg-white text-black px-8 py-3 font-medium uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors duration-500 rounded-sm`,
    buttonSecondary: `bg-transparent text-white/70 hover:text-white transition-colors uppercase tracking-widest text-sm border-b border-transparent hover:border-white pb-1`,
    input: `bg-white/10 border-none text-white placeholder:text-white/30 px-6 py-4 text-lg focus:bg-white/20 outline-none transition-all rounded-sm`,
    card: `bg-gradient-to-t from-black via-black/80 to-transparent border-none p-10 mt-10 relative isolate`,
    badge: `bg-white/10 text-white backdrop-blur-md px-3 py-1 text-xs uppercase tracking-widest border border-white/10`,
    text: "text-gray-400 font-light text-lg leading-relaxed max-w-2xl",
    heading:
      "text-white font-medium text-5xl tracking-tight leading-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000",
  }),
};
