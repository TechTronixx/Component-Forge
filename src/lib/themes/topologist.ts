import type { ThemeDefinition } from "../../types/theme";
import { Activity } from "lucide-react";

export const topologist: ThemeDefinition = {
  id: "topologist",
  label: "Topologist",
  description: "Mathematical patterns and topography",
  icon: Activity,
  font: "var(--font-mono)",
  generate: () => ({
    wrapper: `bg-[#fafafa] text-[#333] [background-image:linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0),linear-gradient(150deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0),linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0),linear-gradient(150deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0),linear-gradient(60deg,#e0e0e0_25%,transparent_25.5%,transparent_75%,#e0e0e0_75%,#e0e0e0),linear-gradient(60deg,#e0e0e0_25%,transparent_25.5%,transparent_75%,#e0e0e0_75%,#e0e0e0)] [background-size:20px_35px] [background-position:0_0,0_0,10px_18px,10px_18px,0_0,10px_18px] opacity-100`,
    button: `bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors relative after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:border-2 after:border-black after:-z-10 hover:after:translate-x-0 hover:after:translate-y-0 after:transition-transform active:after:translate-x-0 active:after:translate-y-0 px-6 py-2 font-bold`,
    buttonSecondary: `bg-white text-black border border-black hover:bg-gray-100 transition-colors px-4`,
    input: `bg-white border-2 border-black text-black placeholder:text-gray-400 p-2 focus:ring-4 focus:ring-black/10 outline-none`,
    card: `bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]`,
    badge: `bg-black text-white px-2 py-0.5 text-xs font-mono`,
    text: "text-gray-800 font-mono text-sm bg-white/80 inline-block px-1",
    heading:
      "text-black font-black uppercase tracking-tighter bg-white inline-block px-2 border-2 border-black mix-blend-hard-light",
  }),
};
