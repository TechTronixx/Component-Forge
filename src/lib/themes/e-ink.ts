import type { ThemeDefinition } from "../../types/theme";


export const eInk: ThemeDefinition = {
  id: "e-ink",
  label: "E-Ink",
  description: "1-bit sustainable aesthetic",
  icon: "solar:stars-bold-duotone",
  font: "var(--font-cyber)", // Using Share Tech Mono or generic Mono if preferred
  generate: () => ({
    wrapper: `bg-[#f0f0f0] border-[3px] border-black text-black`,
    button: `bg-white text-black border-[3px] border-black font-bold hover:bg-black hover:text-white hover:underline decoration-2 underline-offset-4 transition-none`,
    buttonSecondary: `bg-transparent text-black border-[3px] border-black font-bold hover:bg-black/10 transition-none`,
    input: `bg-white text-black border-[3px] border-black placeholder:text-black/50 focus:ring-4 focus:ring-black/20 outline-none transition-none`,
    card: `bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`,
    badge: `bg-black text-white border border-black px-2 py-0.5 text-xs font-bold`,
    text: "text-black antialiased",
    heading: "text-black font-bold uppercase tracking-tighter",
  }),
};
