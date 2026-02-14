import { useThemeStore } from "../../store/themeStore";
import {
  CATEGORIES,
  getComponentsByCategory,
} from "../../lib/componentRegistry";
import {
  Layout,
  MousePointerClick,
  FormInput,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ComponentCategory } from "../../store/themeStore";

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  MousePointerClick,
  FormInput,
  MessageCircle,
  BarChart3,
};

const expandVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Sidebar(): React.ReactElement {
  const activeCategory = useThemeStore((s) => s.activeCategory);
  const activeComponent = useThemeStore((s) => s.activeComponent);
  const setActiveCategory = useThemeStore((s) => s.setActiveCategory);
  const setActiveComponent = useThemeStore((s) => s.setActiveComponent);

  return (
    <aside className="w-[240px] shrink-0 border-r border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] overflow-y-auto">
      <div className="p-3">
        <p className="text-[10px] uppercase tracking-widest text-[var(--color-forge-muted)] font-semibold mb-3 px-2">
          Components
        </p>

        {CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.icon];
          const isActive = activeCategory === cat.id;
          const components = getComponentsByCategory(cat.id);

          return (
            <div key={cat.id} className="mb-1">
              <button
                onClick={() => setActiveCategory(cat.id as ComponentCategory)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-white/[0.07] text-white"
                    : "text-[var(--color-forge-muted)] hover:text-white/70 hover:bg-white/[0.03]"
                }`}
              >
                {Icon && <Icon className="w-4 h-4 shrink-0" />}
                <span className="font-medium">{cat.label}</span>
                <motion.span
                  className="ml-auto text-[10px] text-[var(--color-forge-muted)]"
                  animate={{ rotate: isActive ? 0 : 0 }}
                >
                  {components.length}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key={`${cat.id}-items`}
                    variants={expandVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="ml-4 mt-1 mb-2 pl-3 border-l border-[var(--color-forge-border)]">
                      {components.map((comp, i) => (
                        <motion.button
                          key={comp.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: i * 0.03, duration: 0.2 },
                          }}
                          onClick={() => setActiveComponent(comp.id)}
                          className={`w-full text-left px-2 py-1.5 rounded text-xs transition-colors ${
                            activeComponent === comp.id
                              ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                              : "text-[var(--color-forge-muted)] hover:text-white/70"
                          }`}
                        >
                          {comp.name}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
