import type { ThemeDefinition } from "../../types/theme";


export const datamosh: ThemeDefinition = {
  id: "datamosh",
  label: "Datamosh",
  description: "Digital decay and glitch aesthetics",
  icon: "solar:bolt-bold-duotone",
  font: "var(--font-cyber)",
  generate: () => ({
    wrapper: `bg-black text-white border-2 border-red-500 border-dashed p-4 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,0,0.1)_25%,rgba(255,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,255,0.1)_75%,rgba(0,0,255,0.1)_100%)] before:bg-[length:10px_10px]`,
    button: `bg-white text-black font-bold uppercase tracking-widest px-6 py-2 border-2 border-transparent hover:border-red-500 hover:text-red-500 hover:bg-black transition-none skew-x-[-12deg] hover:skew-x-0`,
    buttonSecondary: `bg-transparent text-white border-2 border-white hover:border-blue-500 hover:text-blue-500 transition-none uppercase tracking-widest`,
    input: `bg-black border-b-2 border-white text-white font-mono placeholder:text-white/50 focus:border-red-500 focus:bg-red-900/10 outline-none`,
    card: `bg-gray-900 border border-white/20 p-6 relative after:content-["ERR_0X92"] after:absolute after:top-2 after:right-2 after:text-[10px] after:text-red-500 after:font-mono opacity-90 hover:opacity-100 hover:translate-x-[2px] transition-all`,
    badge: `bg-red-600 text-white px-1 text-xs font-mono uppercase`,
    text: "text-gray-300 font-mono",
    heading:
      "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-green-500 font-black uppercase tracking-tighter blur-[0.5px] hover:blur-none transition-all",
  }),
};
