import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export default function Tooltip() {
  const archetype = useThemeStore((s) => s.archetype);
  const borderRadius = useThemeStore((s) => s.borderRadius);
  const borderWidth = useThemeStore((s) => s.borderWidth);
  const shadowDepth = useThemeStore((s) => s.shadowDepth);
  const fontStyle = useThemeStore((s) => s.fontStyle);

  const classes = generateThemeClasses({
    archetype,
    borderRadius,
    borderWidth,
    shadowDepth,
  });
  const font = getFont(fontStyle);
  const [hovered, setHovered] = useState<string | null>("top");

  const positions = [
    {
      id: "top",
      label: "Top",
      tooltipClass: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    },
    {
      id: "bottom",
      label: "Bottom",
      tooltipClass: "top-full left-1/2 -translate-x-1/2 mt-2",
    },
    {
      id: "left",
      label: "Left",
      tooltipClass: "right-full top-1/2 -translate-y-1/2 mr-2",
    },
  ];

  return (
    <div
      className={twMerge(
        clsx("flex flex-wrap gap-8 items-center justify-center py-8", font),
      )}
    >
      {positions.map(({ id, label, tooltipClass }) => (
        <div key={id} className="relative">
          <button
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className={twMerge(
              clsx(classes.buttonSecondary, "px-4 py-2 text-sm cursor-pointer"),
            )}
          >
            Hover me ({label})
          </button>
          {hovered === id && (
            <div
              className={twMerge(
                clsx(
                  "absolute z-10 px-3 py-1.5 text-xs whitespace-nowrap",
                  classes.card,
                  "bg-[var(--color-forge-panel)] text-white shadow-lg",
                  tooltipClass,
                ),
              )}
            >
              Tooltip on {label.toLowerCase()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
