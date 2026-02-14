import { useThemeStore } from "../../store/themeStore";
import type { FontStyle } from "../../store/themeStore";
import SliderControl from "./SliderControl";
import ColorPicker from "./ColorPicker";
import { motion } from "framer-motion";

import { getAllThemes } from "../../lib/themeRegistry";

const ARCHETYPES = getAllThemes();

const FONTS: { id: FontStyle; label: string }[] = [
  { id: "sans", label: "Sans" },
  { id: "mono", label: "Mono" },
  { id: "serif", label: "Serif" },
  { id: "retro", label: "Retro" },
  { id: "cyber", label: "Cyber" },
  { id: "spatial", label: "Spatial" },
  { id: "academic", label: "Academic" },
  { id: "round", label: "Round" },
];

export default function ControlPanel() {
  const archetype = useThemeStore((s) => s.archetype);
  const primaryColor = useThemeStore((s) => s.primaryColor);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);
  const density = useThemeStore((s) => s.density);
  const fontStyle = useThemeStore((s) => s.fontStyle);

  const setArchetype = useThemeStore((s) => s.setArchetype);
  const setPrimaryColor = useThemeStore((s) => s.setPrimaryColor);
  const setBorderRadius = useThemeStore((s) => s.setBorderRadius);
  const setBorderWidth = useThemeStore((s) => s.setBorderWidth);
  const setShadowDepth = useThemeStore((s) => s.setShadowDepth);
  const setDensity = useThemeStore((s) => s.setDensity);
  const setFontStyle = useThemeStore((s) => s.setFontStyle);

  return (
    <aside className="w-[320px] shrink-0 border-l border-[var(--color-forge-border)] bg-[var(--color-forge-dark)] overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* ── Archetype ── */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-forge-muted)] font-semibold mb-3">
            Archetype
          </p>
          <div className="grid grid-cols-2 gap-2">
            {ARCHETYPES.map((a) => (
              <motion.button
                key={a.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setArchetype(a.id)}
                className={`relative flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  archetype === a.id
                    ? "text-[var(--color-brand)]"
                    : "bg-white/[0.03] text-[var(--color-forge-muted)] border border-transparent hover:bg-white/[0.06] hover:text-white/70"
                }`}
              >
                {archetype === a.id && (
                  <motion.div
                    layoutId="archetype-indicator"
                    className="absolute inset-0 rounded-lg bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <a.icon className="w-3.5 h-3.5" />
                  {a.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Color ── */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-forge-muted)] font-semibold mb-3">
            Primary Color
          </p>
          <ColorPicker value={primaryColor} onChange={setPrimaryColor} />
        </div>

        {/* ── Sliders ── */}
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-forge-muted)] font-semibold">
            Fine Tuning
          </p>
          <SliderControl
            label="Border Radius"
            value={borderRadius}
            min={0}
            max={4}
            labels={["Sharp", "SM", "LG", "2XL", "Full"]}
            onChange={setBorderRadius}
          />
          <SliderControl
            label="Border Width"
            value={borderWidth}
            min={0}
            max={3}
            labels={["None", "1px", "2px", "4px"]}
            onChange={setBorderWidth}
          />
          <SliderControl
            label="Shadow Depth"
            value={shadowDepth}
            min={0}
            max={4}
            labels={["None", "SM", "MD", "XL", "Brutal"]}
            onChange={setShadowDepth}
          />
          <SliderControl
            label="Density"
            value={density}
            min={0}
            max={2}
            labels={["Compact", "Normal", "Spacious"]}
            onChange={setDensity}
          />
        </div>

        {/* ── Font Style ── */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-forge-muted)] font-semibold mb-3">
            Font Style
          </p>
          <div className="grid grid-cols-2 gap-2">
            {FONTS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFontStyle(f.id)}
                className={`flex-none px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  fontStyle === f.id
                    ? "bg-[var(--color-brand)]/15 text-[var(--color-brand)] border border-[var(--color-brand)]/30"
                    : "bg-white/[0.03] text-[var(--color-forge-muted)] border border-transparent hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
