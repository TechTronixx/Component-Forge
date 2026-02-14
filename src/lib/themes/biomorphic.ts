import type { ThemeDefinition } from "../../types/theme";
import { Sprout } from "lucide-react";

export const biomorphic: ThemeDefinition = {
  id: "biomorphic",
  label: "Biomorphic",
  description: "Organic shapes and fluid forms",
  icon: Sprout,
  font: "var(--font-round)",
  generate: () => ({
    wrapper: `bg-[#1a2c20] text-[#e0eecd] rounded-[30px_50px_30px_50px] border-2 border-[#8ba888]/20 p-6 shadow-xl`,
    button: `bg-[#8ba888] text-[#1a2c20] font-bold px-6 py-3 rounded-[50%_40%_60%_40%] hover:rounded-[40%_60%_40%_50%] transition-all hover:bg-[#a3c9a0] hover:scale-105 active:scale-95`,
    buttonSecondary: `bg-transparent border-2 border-[#8ba888] text-[#8ba888] rounded-[2rem] hover:bg-[#8ba888]/10 transition-colors`,
    input: `bg-[#0f1a12] border-none text-[#e0eecd] placeholder:text-[#e0eecd]/30 rounded-[20px] px-6 py-3 focus:ring-2 focus:ring-[#8ba888] outline-none`,
    card: `bg-[#243a2b] rounded-[40px] p-8 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] border border-[#ffffff]/5`,
    badge: `bg-[#8ba888]/20 text-[#e0eecd] rounded-[1rem] px-3 py-1 text-xs font-medium`,
    text: "text-[#e0eecd]/80 leading-relaxed",
    heading: "text-[#e0eecd] font-bold tracking-tight italic",
  }),
};
