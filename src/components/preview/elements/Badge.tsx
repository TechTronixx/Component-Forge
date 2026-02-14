import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Badge() {
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

  const badges = [
    { label: "New", color: "bg-emerald-500/15 text-emerald-400" },
    { label: "Beta", color: "bg-amber-500/15 text-amber-400" },
    {
      label: "Pro",
      color: "bg-[var(--color-primary)]/15 text-[var(--color-primary)]",
    },
    { label: "Deprecated", color: "bg-red-500/15 text-red-400" },
    { label: "v2.0", color: "bg-sky-500/15 text-sky-400" },
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {badges.map((b) => (
        <span
          key={b.label}
          className={twMerge(
            clsx(
              classes.badge,
              "px-2.5 py-1",
              font,
              archetype === "brutal" ? "" : b.color,
            ),
          )}
        >
          {b.label}
        </span>
      ))}
    </div>
  );
}
