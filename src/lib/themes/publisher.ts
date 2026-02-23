import type { ThemeDefinition } from "../../types/theme";


export const publisher: ThemeDefinition = {
  id: "publisher",
  label: "Publisher",
  description: "Editorial, grid-based, bold type",
  icon: "solar:stars-bold-duotone",
  font: "var(--font-serif)",
  generate: () => ({
    wrapper: `bg-white text-black border-2 border-black p-0`,
    button: `bg-black text-white font-bold uppercase tracking-widest px-8 py-4 hover:bg-[var(--color-primary)] transition-colors rounded-none outline outline-1 outline-white/20`,
    buttonSecondary: `bg-transparent text-black font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors rounded-none`,
    input: `bg-transparent border-2 border-black text-black placeholder:text-black/40 font-bold p-4 focus:bg-black focus:text-white focus:placeholder:text-white/50 outline-none transition-colors rounded-none`,
    card: `bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`,
    badge: `bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-widest rounded-none`,
    text: "text-black font-serif leading-loose",
    heading:
      "text-black font-black uppercase tracking-tighter text-6xl leading-none border-b-4 border-black pb-4 mb-6",
  }),
};
