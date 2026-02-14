import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../../store/themeStore";
import type { Archetype } from "../../store/themeStore";
import {
  Gem,
  Layers3,
  Grid3X3,
  Type,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

/* ── Archetype metadata ── */
const ARCHETYPES: {
  id: Archetype;
  label: string;
  tagline: string;
  icon: React.ElementType;
  gradient: string;
}[] = [
  {
    id: "glass",
    label: "Glass",
    tagline: "Translucent layers & soft blur",
    icon: Gem,
    gradient: "from-sky-400/20 to-violet-500/20",
  },
  {
    id: "brutal",
    label: "Brutal",
    tagline: "Bold outlines & raw edges",
    icon: Layers3,
    gradient: "from-amber-400/20 to-red-500/20",
  },
  {
    id: "bento",
    label: "Bento",
    tagline: "Clean cards & balanced grids",
    icon: Grid3X3,
    gradient: "from-emerald-400/20 to-teal-500/20",
  },
  {
    id: "swiss",
    label: "Swiss",
    tagline: "Precision type & strict grid",
    icon: Type,
    gradient: "from-neutral-300/20 to-slate-500/20",
  },
];

/* ── Color palette ── */
const COLOR_PRESETS = [
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#ec4899",
  "#f43f5e",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
];

/* ── Radius labels ── */
const RADIUS_OPTIONS = [
  { value: 0, label: "Sharp" },
  { value: 1, label: "Subtle" },
  { value: 2, label: "Rounded" },
  { value: 3, label: "Pill" },
  { value: 4, label: "Full" },
];

/* ── Animation variants ── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -12,
    transition: { duration: 0.25 },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 160 : -160,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 160 : -160,
    opacity: 0,
    transition: { duration: 0.25 },
  }),
};

const TOTAL_STEPS = 3;

export default function VibeWizard(): React.ReactElement | null {
  const wizardOpen = useThemeStore((s) => s.wizardOpen);
  const setWizardOpen = useThemeStore((s) => s.setWizardOpen);

  const archetype = useThemeStore((s) => s.archetype);
  const primaryColor = useThemeStore((s) => s.primaryColor);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const setArchetype = useThemeStore((s) => s.setArchetype);
  const setPrimaryColor = useThemeStore((s) => s.setPrimaryColor);
  const setBorderRadius = useThemeStore((s) => s.setBorderRadius);

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  function next(): void {
    if (step < TOTAL_STEPS - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      setWizardOpen(false);
    }
  }

  function back(): void {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }

  if (!wizardOpen) return null;

  return (
    <AnimatePresence>
      {wizardOpen && (
        <motion.div
          key="wizard-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-lg mx-4 rounded-2xl border border-white/10 bg-[var(--color-forge-dark)] shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* ── Progress bar ── */}
            <div className="h-1 bg-white/5">
              <motion.div
                className="h-full bg-[var(--color-primary)]"
                animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>

            {/* ── Header ── */}
            <div className="px-6 pt-6 pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-primary)] font-semibold">
                  Step {step + 1} of {TOTAL_STEPS}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white font-[family-name:var(--font-display)]">
                {step === 0 && "Choose your vibe"}
                {step === 1 && "Pick your color"}
                {step === 2 && "Tune your style"}
              </h2>
              <p className="text-sm text-[var(--color-forge-muted)] mt-1">
                {step === 0 && "Select a design archetype to start with."}
                {step === 1 && "Set the primary accent for your components."}
                {step === 2 && "Adjust corner roundness to match your brand."}
              </p>
            </div>

            {/* ── Step content ── */}
            <div className="px-6 py-4 min-h-[240px] relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                {step === 0 && (
                  <motion.div
                    key="step-archetype"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid grid-cols-2 gap-3"
                  >
                    {ARCHETYPES.map((a) => (
                      <motion.button
                        key={a.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setArchetype(a.id)}
                        className={`relative p-4 rounded-xl text-left transition-colors ${
                          archetype === a.id
                            ? "ring-2 ring-[var(--color-primary)] bg-[var(--color-primary)]/10"
                            : "bg-white/[0.03] hover:bg-white/[0.06] border border-white/5"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${a.gradient} opacity-50`}
                        />
                        <div className="relative">
                          <a.icon className="w-5 h-5 text-white mb-2" />
                          <p className="text-sm font-semibold text-white">
                            {a.label}
                          </p>
                          <p className="text-[11px] text-[var(--color-forge-muted)] mt-0.5">
                            {a.tagline}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step-color"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-6 gap-2">
                      {COLOR_PRESETS.map((color) => (
                        <motion.button
                          key={color}
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setPrimaryColor(color)}
                          className="relative aspect-square rounded-xl transition-shadow"
                          style={{ backgroundColor: color }}
                        >
                          {primaryColor === color && (
                            <motion.div
                              layoutId="color-ring"
                              className="absolute inset-0 rounded-xl ring-2 ring-white ring-offset-2 ring-offset-[var(--color-forge-dark)]"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                              }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {/* Hex input */}
                    <div className="flex items-center gap-3 mt-4">
                      <div
                        className="w-10 h-10 rounded-lg shrink-0 border border-white/10"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <div className="flex-1">
                        <label className="text-[10px] uppercase tracking-widest text-[var(--color-forge-muted)] font-semibold block mb-1">
                          Hex Value
                        </label>
                        <input
                          type="text"
                          value={primaryColor}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (/^#[0-9a-fA-F]{0,6}$/.test(val)) {
                              setPrimaryColor(val);
                            }
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-radius"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-6"
                  >
                    {/* Visual preview */}
                    <div className="flex items-center justify-center gap-4 py-4">
                      <motion.div
                        animate={{
                          borderRadius:
                            borderRadius === 0
                              ? 2
                              : borderRadius === 1
                                ? 6
                                : borderRadius === 2
                                  ? 12
                                  : borderRadius === 3
                                    ? 20
                                    : 9999,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="w-20 h-20 bg-[var(--color-primary)]/20 border-2 border-[var(--color-primary)]/40"
                      />
                      <motion.div
                        animate={{
                          borderRadius:
                            borderRadius === 0
                              ? 2
                              : borderRadius === 1
                                ? 6
                                : borderRadius === 2
                                  ? 12
                                  : borderRadius === 3
                                    ? 20
                                    : 9999,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="w-32 h-10 bg-[var(--color-primary)] flex items-center justify-center"
                      >
                        <span className="text-white text-xs font-medium">
                          Button
                        </span>
                      </motion.div>
                    </div>

                    {/* Radius selector */}
                    <div className="flex justify-between gap-2">
                      {RADIUS_OPTIONS.map((opt) => (
                        <motion.button
                          key={opt.value}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setBorderRadius(opt.value)}
                          className={`flex-1 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                            borderRadius === opt.value
                              ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/30"
                              : "bg-white/[0.03] text-[var(--color-forge-muted)] hover:bg-white/[0.06]"
                          }`}
                        >
                          {opt.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Footer navigation ── */}
            <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
              {step > 0 ? (
                <button
                  onClick={back}
                  className="flex items-center gap-1.5 text-sm text-[var(--color-forge-muted)] hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back
                </button>
              ) : (
                <button
                  onClick={() => setWizardOpen(false)}
                  className="text-sm text-[var(--color-forge-muted)] hover:text-white transition-colors"
                >
                  Skip
                </button>
              )}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={next}
                className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium shadow-lg shadow-[var(--color-primary)]/25 hover:brightness-110 transition-all"
              >
                {step === TOTAL_STEPS - 1 ? "Start Building" : "Continue"}
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
