import { useThemeStore } from "../../../store/themeStore";
import { generateThemeClasses, getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function ProgressBar() {
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

  const bars = [
    { label: "Upload Progress", value: 72 },
    { label: "Storage Used", value: 45 },
    { label: "Task Completion", value: 91 },
  ];

  return (
    <div className={twMerge(clsx("w-full max-w-md space-y-5", font))}>
      {bars.map(({ label, value }) => (
        <div key={label}>
          <div className="flex justify-between mb-1.5">
            <span className={twMerge(clsx(classes.text, "text-sm"))}>
              {label}
            </span>
            <span className="text-sm text-[var(--color-primary)] font-mono">
              {value}%
            </span>
          </div>
          <div
            className={twMerge(
              clsx(
                "w-full h-2 bg-white/10 overflow-hidden",
                archetype === "swiss" ? "rounded-none" : "rounded-full",
              ),
            )}
          >
            <div
              className={twMerge(
                clsx(
                  "h-full bg-[var(--color-primary)] transition-all duration-500",
                  archetype === "swiss" ? "rounded-none" : "rounded-full",
                ),
              )}
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
