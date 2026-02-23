import type { ThemeDefinition } from "../../types/theme";


export const fauxOS: ThemeDefinition = {
  id: "faux-os",
  label: "Faux-OS",
  description: "Retro operating system emulator",
  icon: "solar:monitor-bold-duotone",
  font: "var(--font-retro)",
  generate: () => ({
    wrapper: `bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-1 shadow-xl`,
    button: `bg-[#c0c0c0] text-black font-bold px-4 py-1 border-2 border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white active:bg-[#a0a0a0] outline-[2px] outline-dashed outline-transparent focus:outline-black transition-none`,
    buttonSecondary: `bg-[#c0c0c0] text-black px-4 py-1 border-2 border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white transition-none`,
    input: `bg-white text-black border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white outline-none focus:bg-[#000080] focus:text-white placeholder:text-[#808080] transition-none`,
    card: `bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black p-1`,
    badge: `bg-[#000080] text-white px-2 py-0.5 text-xs`,
    text: "text-black",
    heading:
      "text-black font-bold uppercase bg-[#000080] text-white px-2 py-1 mb-2",
  }),
};
