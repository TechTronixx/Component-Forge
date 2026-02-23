import type { ThemeDefinition } from "../../types/theme";


export const tinker: ThemeDefinition = {
  id: "tinker",
  label: "Tinker",
  description: "Claymorphic, tactile, friendly",
  icon: "solar:stars-bold-duotone",
  font: "var(--font-round)",
  generate: () => {
    // Claymorphism relies on high rounding (squarcles) and inner shadows
    const r = "rounded-[2rem]"; // Override radius for clay feel, or use highly rounded

    return {
      wrapper: `bg-[var(--color-surface)]/50 backdrop-blur-sm ${r} border-4 border-white/20 shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.1),inset_10px_10px_20px_rgba(0,0,0,0.1)]`,
      button: `bg-[var(--color-primary)] ${r} text-white font-bold shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.4),8px_8px_16px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 transition-all duration-300`,
      buttonSecondary: `bg-white/10 ${r} text-white font-bold shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.1)] hover:bg-white/20 active:scale-95 transition-all`,
      input: `bg-white/5 ${r} border-2 border-white/20 text-white placeholder:text-white/40 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] focus:border-[var(--color-primary)] focus:shadow-[0_0_0_4px_var(--color-primary)]/20 outline-none transition-all`,
      card: `bg-[var(--color-surface)] ${r} border-white/10 shadow-[8px_8px_24px_rgba(0,0,0,0.2)]`,
      badge: `bg-[var(--color-primary)]/20 text-[var(--color-primary)] ${r} px-3 py-1 text-xs font-bold`,
      text: "text-white/90 font-medium",
      heading: "text-white font-black tracking-tight",
    };
  },
};
