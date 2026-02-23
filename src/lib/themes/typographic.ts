import type { ThemeDefinition } from "../../types/theme";


export const typographic: ThemeDefinition = {
  id: "typographic",
  label: "Typographic",
  description: "Structure defined by massive text",
  icon: "solar:stars-bold-duotone",
  font: "var(--font-display)",
  generate: () => ({
    wrapper: `bg-white text-black p-8 relative overflow-hidden`,
    button: `bg-black text-white text-2xl font-black uppercase italic px-8 py-2 hover:bg-transparent hover:text-black hover:underline decoration-4 transition-all border-4 border-black`,
    buttonSecondary: `bg-transparent text-black text-xl font-bold uppercase underline decoration-2 underline-offset-4 hover:decoration-4 transition-all`,
    input: `bg-transparent border-b-4 border-black text-black text-3xl font-black placeholder:text-black/20 focus:scale-105 origin-left transition-transform outline-none py-2`,
    card: `bg-transparent border-t-4 border-black p-0 pt-6 group hover:bg-black hover:text-white transition-colors duration-300`,
    badge: `bg-black text-white text-lg font-bold px-2 py-0 inline-block -rotate-2`,
    text: "text-black font-medium text-lg leading-tight group-hover:text-white",
    heading:
      "text-black text-7xl font-black uppercase leading-[0.8] tracking-tighter mix-blend-multiply group-hover:text-white group-hover:mix-blend-normal",
  }),
};
