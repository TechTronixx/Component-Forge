import type { ThemeDefinition } from "../../types/theme";


export const scenographer: ThemeDefinition = {
  id: "scenographer",
  label: "Scenographer",
  description: "Simulated WebGL environments",
  icon: "solar:stars-bold-duotone",
  font: "var(--font-spatial)",
  generate: () => ({
    wrapper: `bg-[#050510] text-white overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.2),transparent_70%)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:bg-[linear-gradient(to_top,rgba(5,5,16,1),transparent)]`,
    button: `bg-white/10 text-cyan-200 border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:bg-cyan-500/20 transition-all duration-500 ease-out backdrop-blur-md rounded-full px-8`,
    buttonSecondary: `bg-transparent text-cyan-200/70 hover:text-cyan-200 transition-colors uppercase tracking-widest text-xs`,
    input: `bg-white/5 border border-white/10 text-white placeholder:text-white/20 rounded-full px-6 focus:bg-white/10 focus:shadow-[0_0_30px_rgba(34,211,238,0.1)] outline-none transition-all`,
    card: `bg-white/5 border-t border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative overflow-hidden before:content-[''] before:absolute before:-top-20 before:-right-20 before:w-40 before:h-40 before:bg-cyan-500/20 before:blur-3xl before:rounded-full`,
    badge: `bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full px-3 py-1 text-xs backdrop-blur-md`,
    text: "text-slate-400 font-light",
    heading:
      "text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 font-bold tracking-tight drop-shadow-sm",
  }),
};
