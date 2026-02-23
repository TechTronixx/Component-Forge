import ForgeIcon from "../ui/ForgeIcon";
import { useEffect, useState } from "react";
import { useThemeStore } from "../../store/themeStore";
import { getTheme } from "../../lib/themeRegistry";
import { AnimatePresence, motion } from "framer-motion";


export default function ArchetypeToast() {
  const archetype = useThemeStore((s) => s.archetype);
  const [visible, setVisible] = useState(false);
  const theme = getTheme(archetype);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [archetype]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="bg-[var(--color-forge-panel)] border border-[var(--color-forge-border)] shadow-2xl rounded-full px-5 py-3 flex items-center gap-4 backdrop-blur-md">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <ForgeIcon icon="solar:stars-minimalistic-bold-duotone" className="w-4 h-4 text-[var(--color-brand)]" />
              <span className="text-sm font-medium text-white">
                {theme.label} Active
              </span>
            </div>

            <span className="text-xs text-[var(--color-forge-muted)] max-w-[200px] truncate hidden sm:block">
              {theme.description}
            </span>

            <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
              <ForgeIcon icon="solar:stars-bold" className="w-3.5 h-3.5 text-[var(--color-forge-muted)]" />
              <span className="text-xs font-mono text-[var(--color-forge-muted)] opacity-75">
                {theme.font.replace("var(--font-", "").replace(")", "")}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
