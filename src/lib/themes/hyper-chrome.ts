import type { ThemeDefinition, ThemeParams } from "../../types/theme";


export const hyperChrome: ThemeDefinition = {
  id: "hyper-chrome",
  label: "Hyper-Chrome",
  description: "Y2K liquid metal aesthetic",
  icon: "solar:play-circle-bold-duotone",
  font: "var(--font-display)",
  generate: ({ radius }: ThemeParams) => ({
    wrapper: `bg-black text-white p-6 [background-image:linear-gradient(to_bottom,rgb(20,20,30),rgb(0,0,0))]`,
    button: `bg-gradient-to-b from-gray-100 to-gray-400 text-black font-bold uppercase italic tracking-wider ${radius} border border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:brightness-110 active:scale-95 transition-all bg-[length:200%_200%] animate-gradient-xy`,
    buttonSecondary: `bg-transparent text-white border border-white/30 ${radius} hover:bg-white/10 uppercase italic tracking-wider`,
    input: `bg-white/10 border border-white/20 text-white placeholder:text-white/30 ${radius} backdrop-blur-md focus:border-white/60 focus:shadow-[0_0_20px_rgba(255,255,255,0.2)] outline-none`,
    card: `bg-gradient-to-br from-gray-800/50 to-black/80 border border-white/10 ${radius} backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]`,
    badge: `bg-white text-black font-bold italic px-3 py-1 ${radius} shadow-[0_0_10px_white]`,
    text: "text-gray-300 font-sans",
    heading:
      "text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-black italic uppercase text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
  }),
};
