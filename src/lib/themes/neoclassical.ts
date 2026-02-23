import type { ThemeDefinition } from "../../types/theme";


export const neoclassical: ThemeDefinition = {
  id: "neoclassical",
  label: "Neoclassical",
  description: "Ancient ledger aesthetic",
  icon: "solar:stars-bold-duotone",
  font: "var(--font-academic)",
  generate: () => ({
    wrapper: `bg-[#f0e6d2] text-[#2c1810] border-double border-4 border-[#4a3b2a] shadow-inner p-8`,
    button: `bg-[#2c1810] text-[#f0e6d2] font-serif border border-[#4a3b2a] px-6 py-2 hover:bg-[#4a3b2a] transition-colors rounded-[2px] shadow-[2px_2px_0px_0px_#4a3b2a]`,
    buttonSecondary: `bg-transparent text-[#2c1810] font-serif border border-[#2c1810] hover:bg-[#2c1810]/10 transition-colors rounded-[2px]`,
    input: `bg-[#fffbf0] border border-[#d4c5a9] text-[#2c1810] placeholder:text-[#2c1810]/40 font-serif p-2 focus:border-[#2c1810] outline-none shadow-inner`,
    card: `bg-[#f5ebd6] border border-[#d4c5a9] p-6 shadow-[4px_4px_0px_0px_rgba(44,24,16,0.1)] relative before:content-[''] before:absolute before:inset-1 before:border before:border-[#d4c5a9] before:border-dashed`,
    badge: `bg-[#2c1810]/10 text-[#2c1810] border border-[#2c1810]/20 px-2 py-0.5 text-xs font-serif uppercase tracking-widest`,
    text: "text-[#2c1810] font-serif",
    heading:
      "text-[#2c1810] font-serif font-bold uppercase tracking-widest border-b border-[#2c1810]/20 pb-2 mb-4",
  }),
};
