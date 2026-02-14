import { useThemeStore } from "../../../store/themeStore";
import {
  generateThemeClasses,
  getDensity,
  getFont,
} from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const OPTIONS = ["React", "Vue", "Angular", "Svelte", "Solid"];

export default function SelectDropdown() {
  const archetype = useThemeStore((s) => s.archetype);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);
  const density = useThemeStore((s) => s.density);
  const fontStyle = useThemeStore((s) => s.fontStyle);

  const classes = generateThemeClasses({
    archetype,
    borderRadius,
    borderWidth,
    shadowDepth,
  });
  const padding = getDensity(density, "compact");
  const font = getFont(fontStyle);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("React");

  return (
    <div className={twMerge(clsx("w-full max-w-xs space-y-1.5", font))}>
      <label className={twMerge(clsx(classes.text, "text-sm font-medium"))}>
        Framework
      </label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={twMerge(
            clsx(
              classes.input,
              padding,
              "w-full flex items-center justify-between cursor-pointer",
            ),
          )}
        >
          <span>{selected}</span>
          <ChevronDown
            className={twMerge(
              clsx("w-4 h-4 transition-transform", open && "rotate-180"),
            )}
          />
        </button>

        {open && (
          <div
            className={twMerge(
              clsx(
                classes.card,
                "absolute top-full mt-1 w-full z-10 py-1 max-h-48 overflow-auto",
              ),
            )}
          >
            {OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className={twMerge(
                  clsx(
                    "w-full text-left px-3 py-2 text-sm transition-colors cursor-pointer",
                    selected === opt
                      ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                      : clsx(classes.text, "hover:bg-white/5"),
                  ),
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
