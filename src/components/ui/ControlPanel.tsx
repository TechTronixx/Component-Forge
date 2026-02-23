import { useThemeStore } from "../../store/themeStore";
import type { FontStyle } from "../../store/themeStore";
import SliderControl from "./SliderControl";
import ColorPicker from "./ColorPicker";
import { motion } from "framer-motion";
import ForgeIcon from "./ForgeIcon";

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
    <aside className="w-[320px] shrink-0 border-l border-forge-border bg-forge-dark overflow-y-auto">
      <div className="p-4 space-y-6">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-forge-muted font-bold mb-3">
            Design Direction
          </p>
          <div className="grid grid-cols-2 gap-2">
            {ARCHETYPES.map((a) => (
              <motion.button
                key={a.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setArchetype(a.id)}
                className={`relative flex items-center gap-2 px-3 min-h-[44px] rounded-lg text-xs font-medium transition-colors ${
                  archetype === a.id
                    ? "text-(--color-primary)"
                    : "bg-white/3 text-forge-muted border border-transparent hover:bg-white/6 hover:text-white/70"
                }`}
              >
                {archetype === a.id && (
                  <motion.div
                    layoutId="archetype-indicator"
                    className="absolute inset-0 rounded-lg bg-(--color-primary)/15 border border-(--color-primary)/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 leading-tight">
                  <ForgeIcon icon={a.icon} className="w-4 h-4 shrink-0" />
                  {a.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-widest text-forge-muted font-semibold mb-3">
            Primary Color
          </p>
          <ColorPicker value={primaryColor} onChange={setPrimaryColor} />
        </div>

        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-widest text-forge-muted font-bold">
            Craftsmanship
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

        <div>
          <p className="text-[10px] uppercase tracking-widest text-forge-muted font-semibold mb-3">
            Font Style
          </p>
          <div className="grid grid-cols-2 gap-2">
            {FONTS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFontStyle(f.id)}
                className={`flex-none px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  fontStyle === f.id
                    ? "bg-(--color-primary)/15 text-(--color-primary) border border-(--color-primary)/30"
                    : "bg-white/3 text-forge-muted border border-transparent hover:bg-white/6 hover:text-white"
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
