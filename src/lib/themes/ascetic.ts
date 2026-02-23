import type { ThemeDefinition } from "../../types/theme";


export const ascetic: ThemeDefinition = {
  id: "ascetic",
  label: "Ascetic",
  description: "Structure through whitespace",
  icon: "solar:minus-square-bold-duotone",
  font: "var(--font-body)",
  generate: () => ({
    wrapper: `bg-white text-[#333] shadow-none border-none p-12`,
    button: `bg-transparent text-black hover:bg-gray-50 px-0 py-2 underline underline-offset-8 decoration-1 hover:decoration-2 transition-all rounded-none`,
    buttonSecondary: `bg-transparent text-gray-500 hover:text-black px-0 py-2 transition-colors rounded-none`,
    input: `bg-transparent border-none text-black placeholder:text-gray-300 p-0 focus:ring-0 outline-none transition-none shadow-none text-xl placeholder:font-light`,
    card: `bg-transparent shadow-none border-none p-0 mb-12`,
    badge: `bg-gray-100 text-gray-600 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] rounded-none`,
    text: "text-gray-600 font-light leading-loose",
    heading: "text-black font-light text-3xl tracking-wide lowercase",
  }),
};
