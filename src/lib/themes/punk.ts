import type { ThemeDefinition } from "../../types/theme";

export const punk: ThemeDefinition = {
  id: "punk",
  label: "Punk",
  description: "Anti-design, raw HTML",
  icon: "solar:skull-bold-duotone",
  font: "serif", // Times New Roman default
  generate: () => ({
    wrapper: `bg-white text-black border-[5px] border-blue-700 p-2`,
    button: `bg-white text-blue-700 underline font-serif text-lg hover:bg-yellow-300 hover:text-red-600 transition-none cursor-help active:bg-red-600 active:text-white border border-blue-700`,
    buttonSecondary: `bg-transparent text-blue-800 underline font-serif text-lg hover:bg-green-300 transition-none cursor-wait`,
    input: `bg-yellow-100 border-[3px] border-inset border-gray-400 text-black font-serif p-1`,
    card: `bg-white border-[3px] border-black p-4 shadow-[10px_10px_0px_cyan] mb-8 rotate-1 hover:rotate-0 transition-transform`,
    badge: `bg-red-600 text-white font-serif px-1 text-sm -rotate-3 inline-block`,
    text: "text-black font-serif text-lg leading-tight",
    heading:
      "text-black font-serif font-bold italic text-4xl bg-yellow-300 inline-block px-2 skew-x-12",
  }),
};
